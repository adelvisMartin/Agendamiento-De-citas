import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState, useEffect } from "react";
import "./Sidebar.css";
import moment from "moment";
function Sidebar({ show, onHide, onAddEvent, selectedEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    if (selectedEvent) {
      setTitle(selectedEvent.title);
      setDate(moment(selectedEvent.start).format("YYYY-MM-DD"));
      setStartTime(moment(selectedEvent.start).format("HH:mm"));
      setEndTime(moment(selectedEvent.end).format("HH:mm"));
    } else {
      // reinicia un nuevo evento
      setTitle("");
      setDate("");
      setStartTime("");
      setEndTime("");
    }
  }, [selectedEvent, show]);

  const handleSubmit = () => {
    const eventData = {
      title,
      start: moment(date)
        .set({ hour: startTime.split(":")[0], minute: startTime.split(":")[1] })
        .toDate(),
      end: moment(date)
        .set({ hour: endTime.split(":")[0], minute: endTime.split(":")[1] })
        .toDate(),
    };
    if (selectedEvent) {
      // actualizando un evento existente
    } else {
      // agrega
      onAddEvent({ ...eventData, id: Math.random() });
    }
    onHide();
  };
  return (
    <div className={`sidebar ${show ? "show" : ""}`}>
      <div className="sidebar-content">
        <div className="sidebar-header">
          <h3 className="texto">Reservar</h3>
          <button type="button" className="close-btn" onClick={onHide}>
            Close
          </button>
        </div>
        <div className="sidebar-body">
          <label className="texto">Title</label>
          <input
            type="text"
            placeholder="Even Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="texto">Date</label>
          <input
            type="date"
            placeholder="Even Title"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label className="texto">Star Time</label>
          <input
            type="time"
            placeholder="Even Title"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />

          <label className="texto">End Time</label>
          <input
            type="time"
            placeholder="Even Title"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />

          <button className="btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
