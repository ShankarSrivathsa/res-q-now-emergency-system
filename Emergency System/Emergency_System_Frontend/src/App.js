import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import EmergencyMap from "./components/EmergencyMap";
import RegisterPage from "./pages/Register";
import ProfilePage from "./pages/ProfilePage";
import EmergencyButton from "./components/EmergencyButton";

function App() {
  const location = useLocation(); // 👈 this helps check the current path

  return (
    <>
      <AppNavbar />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<EmergencyMap />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      {/* ✅ Render EmergencyButton only on /home */}
      {location.pathname === "/home" && <EmergencyButton />}
    </>
  );
}

export default App;

