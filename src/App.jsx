import React, { useState } from "react";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import AppointmentCalendar from "./components/AppointmentCalendar";

function App() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleAddEvent = (NewEvent) => {
    setEvents([...events, NewEvent]);
    setShowOffcanvas(false);
  };

  const handleUpdateEvent = (updatedEvent) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
    setShowOffcanvas(false);
  };

  return (
    <>
      <Header />
      <div className="calender-container">
        <div className="btn-container">
          <button
            className="btn-event"
            onClick={() => {
              setSelectedEvent(null);
              toggleOffcanvas();
            }}
          >
            Reservar app
          </button>
          <Sidebar
            show={showOffcanvas}
            onHide={toggleOffcanvas}
            onAddEvent={handleAddEvent}
            selectedEvent={selectedEvent}
          />
        </div>
        <AppointmentCalendar events={events} />
      </div>
    </>
  );
}

export default App;
