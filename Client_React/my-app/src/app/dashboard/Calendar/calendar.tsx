import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import './calendar.css';

function Calendar() {
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
        events={[]} // Example: Replace with your actual events data
      />
    </div>
  );
}

export default Calendar;
