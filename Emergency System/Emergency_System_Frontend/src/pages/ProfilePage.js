// src/pages/ProfilePage.js
import React from "react";

function ProfilePage() {
  // Example user data — in real app, fetch from state or API
  const user = {
    name: "John Doe",
    mobile: "1234567890",
    guardian: "Jane Doe",
    guardianMobile: "9876543210",
  };

  return (
    <div className="container mt-4">
      <h2>My Profile</h2>
      <ul className="list-group">
        <li className="list-group-item"><strong>Name:</strong> {user.name}</li>
        <li className="list-group-item"><strong>Mobile:</strong> {user.mobile}</li>
        <li className="list-group-item"><strong>Guardian:</strong> {user.guardian}</li>
        <li className="list-group-item"><strong>Guardian Mobile:</strong> {user.guardianMobile}</li>
      </ul>
    </div>
  );
}

export default ProfilePage;
