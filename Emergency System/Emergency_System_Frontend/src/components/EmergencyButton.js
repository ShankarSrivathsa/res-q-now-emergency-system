import React from "react";

const EmergencyButton = () => {
  const handleClick = () => {
    alert("🚨 Emergency Alert Sent to Nearby Ambulance & Hospital!");
  };

  const buttonContainerStyle = {
    position: "fixed",
    bottom: "40px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1000,
  };

  const buttonStyle = {
    backgroundColor: "#ff4d4d", // Light red
    color: "white",
    fontSize: "36px", // Increased font size
    fontWeight: "bold",
    padding: "30px 100px", // Bigger padding
    border: "none",
    borderRadius: "60px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const hoverStyle = {
    backgroundColor: "#e60000",
  };

  return (
    <div style={buttonContainerStyle}>
      <button
        style={buttonStyle}
        onClick={handleClick}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
      >
        🚨 EMERGENCY
      </button>
    </div>
  );
};

export default EmergencyButton;
