/*Estos botones se sustituyen por el que está en la parte superior izq*/

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AppointmentCalendar from "./AppointmentCalendar";

function Boton() {
  return (
    <div className="col py-3">
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-success me-md-2" type="button">
          Reservar
        </button>
        <button className="btn btn-danger" type="button">
          Agendar
        </button>
      </div>
    </div>
  );
}
export default Boton;
