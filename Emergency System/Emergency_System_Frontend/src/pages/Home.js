import React, { useState } from "react";
import EmergencyMap from "../components/EmergencyMap";
import "../styles/emergencybutton.css";

const HomePage = () => {
  const [showMap, setShowMap] = useState(false);

  const handleEmergencyClick = () => {
    setShowMap(true);
  };

  return (
    <div className="text-center mt-5">
      <button className="emergency-button" onClick={handleEmergencyClick}>
        🚨 Emergency
      </button>
      {showMap && <EmergencyMap />}
    </div>
  );
};

export default HomePage;
