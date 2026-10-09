import React, { useState } from "react";
import UserDetails from "./UserDetails";
import EditUserModal from "./EditUserModal";
import "../styles.css";

const initialUsers = [
  {
    id: 1,
    name: "Alice Johnson",
    checkIn: "09:00",
    checkOut: "17:00",
    breakTime: "01:00",
  },
  {
    id: 2,
    name: "Bob Smith",
    checkIn: "09:15",
    checkOut: "17:10",
    breakTime: "00:45",
  },
];

export default function AttendanceDashboard() {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editUser, setEditUser] = useState(null);

  const handleEdit = (user) => setEditUser(user);
  const handleSave = (updatedUser) => {
    setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
    setEditUser(null);
  };

  return (
    <div className="container">
      <h2>Attendance Dashboard</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Check-In</th>
            <th>Check-Out</th>
            <th>Break Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td onClick={() => setSelectedUser(user)} className="user-link">{user.name}</td>
              <td>{user.checkIn}</td>
              <td>{user.checkOut}</td>
              <td>{user.breakTime}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
      {editUser && (
        <EditUserModal
          user={editUser}
          onSave={handleSave}
          onClose={() => setEditUser(null)}
        />
      )}
    </div>
  );
}