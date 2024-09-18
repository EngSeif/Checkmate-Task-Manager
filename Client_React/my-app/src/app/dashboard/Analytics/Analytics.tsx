import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, ArcElement, BarElement, Title } from 'chart.js';
import { useEffect, useState } from 'react';


ChartJS.register(Tooltip, Legend, ArcElement, Title, BarElement, CategoryScale, LinearScale) 

function getCurrentMonthName() {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    const now = new Date();
    const currentMonthIndex = now.getMonth();
    
    return monthNames[currentMonthIndex];
}

function IsCurrentMonth(date) {
    const now = new Date();

    return (now.getFullYear() === date.getFullYear() &&  now.getMonth() === date.getMonth())
}

function GetDaysInMonth() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const daysInMonth = new Date(year, month, 0).getDate();
    const daysArray = Array.from({length: daysInMonth}, (_, i) => i + 1);
    return daysArray;
}

function Analytics({userToken}) {
    const [pieChartStatusData, setPieChartStatusData] = useState({
        labels: ["Done", "Undone"],
        datasets: [
            {
                label: "Tasks Status",
                data: [0, 0], 
                backgroundColor: ["#ef4444", "#22c55e"]
            }
        ]
    })
    const [pieChartPriorityData, setPieChartPriorityData] = useState({
        labels: ["Low", "Medium", "High"],
        datasets: [
            {
                label: "Tasks Status",
                data: [0, 0], 
                backgroundColor: ["#ef4444", "#22c55e"]
            }
        ]
    })
    const [BarChartMonthData, setBarChartMonthData] = useState({
        labels: GetDaysInMonth(),
        datasets: [
            {
                label: "Month Data",
                data: Array(GetDaysInMonth().length).fill(0), 
                backgroundColor: ["#ef4444"]
            }
        ]
    })

    useEffect(() => {
        if (userToken) {

            fetch('http://54.158.221.58/tasks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken.token}`
                }
            }).then((response) => {
                console.log(response.status)
                return response.json();
            }).then((data) => {
                const taskData = Array(GetDaysInMonth().length).fill(0);
                data.forEach(task => {
                    const taskDate = new Date(task.time_added)
                    if (IsCurrentMonth(taskDate)) {
                        const taskDay = taskDate.getDate();
                        taskData[taskDay - 1] += 1;
                    }
                });
                console.log(taskData);
                setPieChartStatusData({
                    labels: ["Done", "Undone"],
                    datasets: [
                        {
                            label: "Tasks Status",
                            data: [data.filter((task)=> task.checked == true).length, 
                                data.filter((task)=> task.checked == false).length],
                            backgroundColor: ["#ef4444", "#22c55e"]
                        }
                    ]
                });

                setPieChartPriorityData({
                    labels: ["Low", "Medium", "High"],
                    datasets: [
                        {
                            label: "Tasks Priority",
                            data: [data.filter((task)=> task.priority == 'low').length
                                , data.filter((task)=> task.priority == 'medium').length
                                , data.filter((task)=> task.priority == 'high').length],
                            backgroundColor: ["#f59e0b", "#3b82f6", "#ef4444"]
                        }
                    ]
                });

                setBarChartMonthData({
                    labels: GetDaysInMonth(),
                    datasets: [
                        {
                            label: "Month Data",
                            data: taskData, 
                            backgroundColor: ["#ef4444", "#22c55e"]
                        }
                    ]
                })
            })
        }
    }, [userToken]);

    const optionsDoneAndUndone = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Done And Undone Tasks"
            }
        }
    }
    const optionsPriority = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Priority Tasks"
            }
        }
    }
    const optionsMonth = {
        responsive: true,
        maintainAspectRatio: false, // Allow the chart to fill the container
        plugins: {
            title: {
                display: true,
                text: `Tasks for ${getCurrentMonthName()}`
            }
        },
        scales: {
            y: {
                ticks: {
                    stepSize: 1,
                    callback: function(value) {
                        return Number.isInteger(value) ? value : ''; // Ensure that only integers are displayed
                    }
                }
            }
        }
    };

    return (
        <div className='w-[92%] mx-auto flex flex-col h-[100vh] gap-2'>
            <div className='flex flex-wrap justify-center gap-4'>
                <div>
                    <Pie options={optionsDoneAndUndone} data={pieChartStatusData}/>
                </div>
                <div>
                    <Pie options={optionsPriority} data={pieChartPriorityData}/>
                </div>
            </div>
            <div className='w-full h-[50vh] p-4'>
                <Bar options={optionsMonth} data={BarChartMonthData} />
            </div>
        </div>
    )
}

export default Analytics; 