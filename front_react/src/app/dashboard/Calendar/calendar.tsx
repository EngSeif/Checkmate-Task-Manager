/*
 *                            Calendar Component
 *
 *  This file Renders Calendar View
 *
 *  Components included:
 *  - Calendar (Main Export Function)
 */



import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import './calendar.css';
import { useEffect, useState } from "react";

interface Task {
  title: string;
  date: string;
}

/*
 * Function Name :
 *    Calendar
 * Description:
 *    Display A calendar View using fullcalendar library
 */

function Calendar({userToken}) {
  const [tasksArray, setTasksArray] = useState<Task[]>([]);
  
  useEffect(() => {
    if (userToken) {
    const url = 'http://54.158.221.58/tasks';

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken.token}`
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
          data.forEach(task => {
            const timeAdded = new Date(task.time_added);
            const date = timeAdded.toISOString().split('T')[0];
            const taskFormatted = {title: task.title, date: date};
            setTasksArray((prevItems) => [...prevItems, taskFormatted]);
          });
        })
    }
}, [userToken]);
  return (
    <div className="w-[92%] mx-auto px-2 py-2">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "title", 
          center: "dayGridMonth,timeGridWeek,timeGridDay",
          end: "today prev,next", 
        }}
        height={'88vh'}
        events={tasksArray}
      />
    </div>
  );
}

export default Calendar;
