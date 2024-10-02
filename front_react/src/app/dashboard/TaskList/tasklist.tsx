/*
 *                            Tasklist Component
 *
 *  This file Renders All Tasks and Filter Them
 *
 *  Components included:
 *  - TaskList (Main Export Function)
 *  - TaskDiv
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faSquareCheck, faCircleDown, faTriangleExclamation, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import styles from './tasklist.module.css';

/*
 * Function Name :
 *    TaskDiv
 * Description:
 *    Contains the Shape of the task container
 */

function TaskDiv({ task }) {
    return (
        <div className={styles.taskContainer}>
            <h4 className='text-3xl font-medium px-2 py-2'>{task.title}</h4>
            <div className='flex items-center gap-2'>

                {!task.checked && (
                    <div className='px-2 py-1 flex items-center gap-2 bg-red-500 w-fit rounded-lg text-xs'>
                        <FontAwesomeIcon icon={faX} />
                        <span>Not Done</span>
                    </div>)}
                {task.checked && (<div className='px-2 py-1 flex items-center gap-2 bg-green-500 w-fit rounded-lg text-xs'>
                    <FontAwesomeIcon icon={faSquareCheck} />
                    <span>Done</span>
                </div>)}
                {task.priority == "low" && (<div className='px-2 py-1 flex items-center gap-2 bg-blue-500 w-fit rounded-lg text-xs'>
                    <FontAwesomeIcon icon={faCircleDown} />
                    <span>Low</span>
                </div>)}
                {task.priority == "medium" && (<div className='px-2 py-1 flex items-center gap-2 bg-yellow-500 w-fit rounded-lg text-xs'>
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                    <span>Medium</span>
                </div>)}
                {task.priority == "high" && (<div className='px-2 py-1 flex items-center gap-2 bg-red-500 w-fit rounded-lg text-xs'>
                    <FontAwesomeIcon icon={faSkullCrossbones} />
                    <span>High</span>
                </div>)}
            </div>
            <p className='text-sm px-2 py-2'>
                {task.description}
            </p>
        </div>
    )
}

/*
 * Function Name :
 *    TaskList
 * Description:
 *    Contains the all of the tasks
 */

function TaskList({ userToken }) {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        if (userToken) {
            const options = ['undone', 'done', 'low', 'medium', 'high']
            let url = 'http://54.158.221.58/tasks';
            if (filter == 'undone') {
                url = 'http://54.158.221.58/tasks/status?checked=false'
            } else if (filter == 'done') {
                url = 'http://54.158.221.58/tasks/status?checked=true'
            } else if (filter == 'low') {
                url = 'http://54.158.221.58/tasks/filter?priority=low'
            } else if (filter == 'medium') {
                url = 'http://54.158.221.58/tasks/filter?priority=medium'
            } else if (filter == 'high') {
                url = 'http://54.158.221.58/tasks/filter?priority=high'
            } else if (filter == 'all') {
                url = 'http://54.158.221.58/tasks';
            }

            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken.token}`
                }
            }).then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data);
                if (!('msg' in data)) {
                    if (options.includes(filter)) {
                        setTasks(data.tasks);
                    } else {
                        setTasks(data);
                    }
                } else {
                    setTasks([]);
                }
            })
        }
    }, [userToken, filter]);

    const handleFilterChange = (e) => {
        setFilter(e.target.value)
    }
    return (
        <div className='h-screen'>
            <div className='w-[92%] mx-auto flex justify-between items-center py-10'>
                <h2 className='text-3xl font-bold dark:text-white'>All Tasks</h2>
                <select className='px-2 rounded-md py-1' onChange={(e) => { handleFilterChange(e) }}>
                    <option selected disabled>Select your Filter</option>
                    <option value="all">All Tasks</option>
                    <option value="done">Done</option>
                    <option value="undone">Undone</option>
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </div>
            <div className='w-[92%] mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 dark:text-white'>
                {
                    tasks.length > 0
                        ? tasks.map((task, index) => <TaskDiv key={index} task={task} />)
                        : <p>No Tasks available</p>
                }
            </div>
        </div>
    );
}

export default TaskList;