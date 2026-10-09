import React from "react";
import "../styles.css";

export default function UserDetails({ user, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>User Details</h3>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Check-In:</strong> {user.checkIn}</p>
        <p><strong>Check-Out:</strong> {user.checkOut}</p>
        <p><strong>Break Time:</strong> {user.breakTime}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}