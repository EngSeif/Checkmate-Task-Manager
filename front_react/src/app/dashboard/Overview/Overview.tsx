/*
 *                            DashBoard Component
 *
 *  This file Renders All Tasks and Filter Them in
 *  addition to adding new tasks
 *
 *  Components included:
 *  - ProjectSection (Main Export Function)
 *  - ProjectHeadBar
 *  - ProjectSection
 *  - TaskDiv
 *  - NewTaskDetails
 *  - EditTaskDetails
 *  - PriorityColumn
 */

import styles from './Overview.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical, faCircleXmark, faPenToSquare, faTrash, faX, faSquareCheck, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';


/*
 * Function Name :
 *    ProjectHeadBar
 * Description:
 *    Header for overview page 
 */

function ProjectHeadBar({setToDoAddNewPanel}) {
    return (
    <div className='w-[92%] mx-auto flex justify-between items-center py-10'>
        <h2 className='text-3xl font-bold dark:text-white'>Projects</h2>
        <button className={`${styles.addTask} dark:hover:text-white flex w-fit px-2 items-center justify-center gap-2`} onClick={()=> {setToDoAddNewPanel(true)}}>
            <FontAwesomeIcon icon={faPlus} />
            <span>Add New Task</span>
        </button>
    </div>
    );
}

/*
 * Function Name :
 *    ProjectSection
 * Description:
 *    Render Priority Panels
 */

function ProjectSection({userToken}) {

  //! Add And Edit Task

  const [toDoAddNewPanel, setToDoAddNewPanel] = useState(false)
  const [tasks, setTasks] = useState({
    low: [],
    medium: [],
    high: [],
  });
  const addNewTask = (task) => {
    setTasks(prevTasks => ({
      ...prevTasks,
      [task.priority]: [...prevTasks[task.priority], task],
    }));
  };

  const deleteTask = (taskId, priority) => {
    console.log(taskId);
    fetch(`http://54.158.221.58/tasks/${taskId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken.token}`
      }
    }).then((response) => {
      console.log(response.status);
      return response.json();
    })
    const updatedPriorityTask = tasks[priority].filter((task) => task.id !== taskId);
    setTasks({
      ...tasks,
      [priority]: updatedPriorityTask,
    })
  }

  const updateTask = (updatedTask, oldPriority) => {
    const { id, priority: newPriority } = updatedTask;

    if (oldPriority) {
        setTasks(prevTasks => ({
            ...prevTasks,
            [oldPriority]: prevTasks[oldPriority].filter(task => task.id !== id),
            [newPriority]: [...prevTasks[newPriority], updatedTask]
        }));
    }
  };

  useEffect(() => {
    if (userToken) {

      fetch('http://54.158.221.58/tasks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userToken.token}`
        }
      }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data);
        data.forEach(task => {
          addNewTask(task);
        });
      })
    }
    }, [userToken]);
  return (
      <>
      <ProjectHeadBar setToDoAddNewPanel={setToDoAddNewPanel}/>
      <div className='w-[92%] mx-auto flex justify-between gap-4 lg:flex-row flex-col pb-20'>
          {toDoAddNewPanel == true && (<NewTaskDetails setToDoAddNewPanel={setToDoAddNewPanel} addNewTask={addNewTask} userToken={userToken}  />)}
          <PriorityColumn title="Low Priority" tasks={tasks.low} updateTask={updateTask} deleteTask={deleteTask} userToken={userToken}/>
          <PriorityColumn title="Medium Priority" tasks={tasks.medium} updateTask={updateTask} deleteTask={deleteTask} userToken={userToken}/>
          <PriorityColumn title="High Priority" tasks={tasks.high} updateTask={updateTask} deleteTask={deleteTask} userToken={userToken}/>
      </div>
      </>
  );
}

/*
 * Function Name :
 *    TaskDiv
 * Description:
 *    Render Task Div in the priority panle 
 */

function TaskDiv({task, deleteTask, updateTask, userToken}) {
  const [menuBar, setMenuBar] = useState(false)
  const [toDoEditPanel, setToDoEditPanel] = useState(false);;
  const ToggleMenu = () => {
    setMenuBar(!menuBar);
  }
    return (
    <div className={styles.taskContainer}>
      {toDoEditPanel == true && (<EditTaskDetails setToDoEditPanel={setToDoEditPanel} updateTask={updateTask} task={task} setMenuBar={setMenuBar} userToken={userToken}/>)}
        <div className='flex justify-between px-2 py-2'>
            <h4 className='text-3xl font-medium on'>{task.title}</h4>
            <FontAwesomeIcon icon={faEllipsisVertical} className='cursor-pointer' onClick={() => {ToggleMenu()}}/>
        </div>
        { menuBar == true && (
        <div className='bg-white z-10 text-[#6c64ee] absolute px-2 py-2 top-9 w-28 right-2 rounded-md shadow-2xl space-y-2'>
          <div className='cursor-pointer space-x-2' onClick={()=> {setToDoEditPanel(true)}}>
            <FontAwesomeIcon icon={faPenToSquare} />
            <span>Edit</span>
          </div>
          <div className='cursor-pointer space-x-2' onClick={()=> {
            deleteTask(task.id, task.priority);
            setMenuBar(false);
          }}>
            <FontAwesomeIcon icon={faTrash} />
            <span>Delete</span>
          </div>
          {!task.checked &&(<div className='cursor-pointer space-x-2' onClick={()=> {
            task.checked = !task.checked; 
            const id = task.id;
            const editedTask = {title: task.Name, description: task.description, priority: task.priority, checked:task.checked} 
            fetch(`http://54.158.221.58/tasks/${id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken.token}`
              },
              body: JSON.stringify(editedTask)
            })
            updateTask(task, null);
            setMenuBar(false);
          }}>
            <FontAwesomeIcon icon={faCheck} />
            <span>Done</span>
          </div>)}
          {task.checked &&(<div className='cursor-pointer space-x-2' onClick={()=> {
            task.checked = !task.checked; 
            const id = task.id;
            const editedTask = {title: task.Name, description: task.description, priority: task.priority, checked:task.checked} 
            fetch(`http://54.158.221.58/tasks/${id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken.token}`
              },
              body: JSON.stringify(editedTask)
            })
            updateTask(task, null);
            setMenuBar(false);
          }}>
            <FontAwesomeIcon icon={faX}/>
            <span>Not Done</span>
          </div>)}
        </div>
        )
        }
        {!task.checked && (
        <div className='px-2 py-1 flex items-center gap-2 bg-red-500 w-fit rounded-lg text-xs'>
          <FontAwesomeIcon icon={faX}/>
          <span>Not Done</span>
        </div>)}
        {task.checked && (<div className='px-2 py-1 flex items-center gap-2 bg-green-500 w-fit rounded-lg text-xs'>
          <FontAwesomeIcon icon={faSquareCheck}/>
          <span>Done</span>
        </div>)}
        <p className='text-sm px-2 py-2'>
            {task.description}
        </p>
    </div>
    )
}

/*
 * Function Name :
 *    NewTaskDetails
 * Description:
 *    Render New Panel to Enter A new Task
 */


function NewTaskDetails({ setToDoAddNewPanel, addNewTask, userToken }) {
    const [taskName, setTaskName ] = useState('');
    const [priority, setPriority ] = useState('');
    const [description, setDescription ] = useState('');

    const handelSubmit = (e) => {
        e.preventDefault();
        if (!taskName || !priority) return;
        const SendTask = {title: taskName, description: description, priority: priority, checked:false};
        setToDoAddNewPanel(false);
        fetch('http://54.158.221.58/tasks', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken.token}`
              },
              body: JSON.stringify(SendTask)
            }).then((response) => {
              return response.json();
            }).then((data)=> {
              console.log(data)
              addNewTask(data.task);
            })
        };

    return (
      <div className="bg-gray-500 dark:bg-black dark:bg-opacity-50 bg-opacity-70 z-10 flex items-center justify-center fixed inset-0">
        <div className="bg-white dark:bg-[#2D2D4A] w-[40%] px-8 py-6 rounded-md shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold dark:text-white">Add New Task</h1>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className={styles.closeAddPanel}
              onClick={() => {
                setToDoAddNewPanel(false);
              }}
            />
          </div>
          <form onSubmit={handelSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label className="mb-2 font-semibold dark:text-white">Task Name</label>
              <input type="text" onChange={(e)=>{setTaskName(e.target.value)}} className={`w-full p-2 border border-gray-300 rounded ${styles.styleInput}`} />
            </div>
  
            <div className="flex flex-col">
              <label className="mb-2 font-semibold dark:text-white">Priority</label>
              <select onChange={(e)=>{setPriority(e.target.value)}} className={`w-full p-2 border border-gray-300 rounded ${styles.styleInput}`}>
                <option selected disabled>
                  Select your priority
                </option>
                <option>low</option>
                <option>medium</option>
                <option>high</option>
              </select>
            </div>
  
            <div className="flex flex-col">
              <label className="mb-2 font-semibold dark:text-white">Description</label>
              <textarea onChange={(e)=>{setDescription(e.target.value)}} className={styles.styleTextInput}/>
            </div>
  
            <input
              type="submit"
              value="Add New Task"
              className={`${styles.submitAdd}`}
            />
          </form>
        </div>
      </div>
    );
}

/*
 * Function Name :
 *    NewTaskDetails
 * Description:
 *    Render New Panel to Edit A Task
 */

function EditTaskDetails({ setToDoEditPanel, task, setMenuBar, updateTask, userToken}) {
    const [taskName, setTaskName ] = useState(task.title);
    const [priority, setPriority ] = useState(task.priority);
    const [description, setDescription ] = useState(task.description);
    const oldPriority = task.priority
    const id = task.id
    setMenuBar(false);

    const handelSubmit = (e) => {
        e.preventDefault();
        if (!taskName || !priority) return;
        const editedTask = {title: taskName, description: description, priority: priority, checked:task.checked} 
        fetch(`http://54.158.221.58/tasks/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken.token}`
          },
          body: JSON.stringify(editedTask)
        }).then((response) => {
          return response.json();
        }).then((data) => {
          updateTask(data.task, oldPriority)
        })
        setToDoEditPanel(false);
    }

    return (
      <div className="bg-gray-500 dark:bg-black dark:bg-opacity-50 bg-opacity-70 z-10 flex items-center justify-center fixed inset-0">
        <div className="bg-white dark:bg-[#2D2D4A] w-[40%] px-8 py-6 rounded-md shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold dark:text-white text-black">Edit Task</h1>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className={styles.closeAddPanel}
              onClick={() => {
                setToDoEditPanel(false);
              }}
            />
          </div>
          <form onSubmit={handelSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-black dark:text-white">Task Name</label>
              <input type="text" value={taskName} onChange={(e)=>{setTaskName(e.target.value)}} className={`w-full text-black p-2 border border-gray-300 rounded ${styles.styleInput}`} />
            </div>
  
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-black dark:text-white">Priority</label>
              <select value={priority} onChange={(e)=>{setPriority(e.target.value)}} className={`text-black w-full p-2 border border-gray-300 rounded ${styles.styleInput}`}>
                <option selected disabled>
                  Select your priority
                </option>
                <option>low</option>
                <option>medium</option>
                <option>high</option>
              </select>
            </div>
  
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-black dark:text-white">Description</label>
              <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} className={`${styles.styleTextInput} text-black`}/>
            </div>
  
            <input
              type="submit"
              value="Edit Task"
              className={`${styles.submitAdd}`}
            />
          </form>
        </div>
      </div>
    );
}

/*
 * Function Name :
 *    PriorityColumn
 * Description:
 *    Renders Shape of Priority Column
 */

function PriorityColumn({title, tasks, updateTask, deleteTask, userToken}) {
    return (
        <div className={`${styles.columnContainer} dark:bg-[#2d2d4a]`} >
            <div className={styles.columnHeader}>
                <h3 className='text-xl font-semibold dark:text-white'>{title}</h3>
                <span className={styles.taskCounter}>{tasks.length}</span>
            </div>
            {tasks.map((task, index) => (<TaskDiv key={index} task={task}  updateTask={updateTask} deleteTask={deleteTask} userToken={userToken}/>))}
        </div>
    );
}


export default ProjectSection;