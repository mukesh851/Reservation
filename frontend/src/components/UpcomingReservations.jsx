import React from "react";
import ReservationCard from "./ReservationCard";
import "../styles/UpcomingReservations.css";

const reservations = [
  {
    id: 1,
    venueName: "The Grand Cafe",
    date: "2024-08-15",
    time: "19:00",
    partySize: 2,
    status: "Confirmed",
  },
  {
    id: 2,
    venueName: "Ocean's Breeze",
    date: "2024-08-22",
    time: "20:30",
    partySize: 4,
    status: "Confirmed",
  },
  {
    id: 3,
    venueName: "The Rooftop Grill",
    date: "2024-09-01",
    time: "18:00",
    partySize: 5,
    status: "Pending",
  },
];

export default function UpcomingReservations() {
  const handleCancel = (id) => {
    console.log("Cancel reservation:", id);
  };

  return (
    <div className="upcoming-container">
      <h2>Upcoming Reservations</h2>
      <div className="reservations-list">
        {reservations.map((res) => (
          <ReservationCard
            key={res.id}
            reservation={res}
            onCancel={handleCancel}
          />
        ))}
      </div>
    </div>
  );
}
