import React, { useState } from "react";
import "../styles.css";

export default function EditUserModal({ user, onSave, onClose }) {
  const [form, setForm] = useState({ ...user });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit User</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input name="name" value={form.name} onChange={handleChange} />
          </label>
          <label>
            Check-In:
            <input name="checkIn" value={form.checkIn} onChange={handleChange} />
          </label>
          <label>
            Check-Out:
            <input name="checkOut" value={form.checkOut} onChange={handleChange} />
          </label>
          <label>
            Break Time:
            <input name="breakTime" value={form.breakTime} onChange={handleChange} />
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}