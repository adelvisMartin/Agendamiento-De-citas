import React, { useState } from "react";
import { Calendar } from "react-big-calendar"; // Solo Calendar
import "react-big-calendar/lib/css/react-big-calendar.css";

// --- Importar Moment y su Localizador ---
import moment from "moment";
import { momentLocalizer } from "react-big-calendar";

function AppointmentCalendar({ events }) {
  const localizer = momentLocalizer(moment);
  const [view, setView] = useState("month");
  const [date, setDate] = useState(moment().toDate());

  // ---FUNCIONES ---

  const handleViewChange = (newView) => {
    // Actualiza el estado 'view'
    setView(newView);
  };

  const handleNavigate = (newDate) => {
    // Actualiza el estado 'date' con la nueva fecha proporcionada por el calendario
    setDate(newDate);
  };
  // ------------------------------------

  // ... (resto de tu código, estado para citas, useEffect, funciones, Aqui va el crud)

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor={"start"}
        endAccessor={"end"}
        style={{ height: "100vh" }}
        view={view}
        date={date}
        onView={handleViewChange}
        onNavigate={handleNavigate}
        views={["month", "week", "day", "agenda"]}
        selectable={true}
      />
    </div>
  );
}

export default AppointmentCalendar;
