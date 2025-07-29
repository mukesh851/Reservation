import React from "react";
import "../styles/ReservationCard.css";

export default function ReservationCard({ reservation, onCancel }) {
  return (
    <div className="reservation-card">
      <div className="reservation-details">
        <h3>{reservation.venueName}</h3>
        <p>Date: {reservation.date}</p>
        <p>Time: {reservation.time}</p>
        <p>Party Size: {reservation.partySize}</p>
        <p>Status: <span className={`status ${reservation.status.toLowerCase()}`}>{reservation.status}</span></p>
      </div>
      <button onClick={() => onCancel(reservation.id)} className="cancel-button">
        Cancel
      </button>
    </div>
  );
}
