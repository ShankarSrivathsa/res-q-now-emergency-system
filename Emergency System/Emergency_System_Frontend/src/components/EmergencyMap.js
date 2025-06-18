import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


const hospitals = [
  {
    id: 1,
    name: "City Hospital",
    position: [17.385044, 78.486671],
    contact: "123-456-7890",
    address: "City Center Road"
  },
  {
    id: 2,
    name: "LifeCare Hospital",
    position: [17.3924, 78.4852],
    contact: "987-654-3210",
    address: "Main Bazar Street"
  }
];

const userLocation = [17.3805, 78.4860];

function FlyToLocation({ position }) {
  const map = useMap();
  map.flyTo(position, 15);
  return null;
}

const EmergencyMap = () => {
  const [showHospitals, setShowHospitals] = useState(false);
  const [route, setRoute] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);

  const handleEmergencyClick = () => {
    setShowHospitals(true);
    const nearest = hospitals[0]; // Simplified nearest
    setSelectedHospital(nearest);
    setRoute([userLocation, nearest.position]);
  };

  return (
    <div>
      <MapContainer center={userLocation} zoom={13} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={userLocation}>
          <Popup>Your Location</Popup>
        </Marker>

        {showHospitals &&
          hospitals.map(hospital => (
            <Marker key={hospital.id} position={hospital.position}>
              <Popup>
                <strong>{hospital.name}</strong><br />
                📞 {hospital.contact}<br />
                📍 {hospital.address}
              </Popup>
            </Marker>
          ))}

        {route.length > 0 && <Polyline positions={route} color="red" />}

        {selectedHospital && <FlyToLocation position={selectedHospital.position} />}
      </MapContainer>

      <button className="emergency-btn" onClick={handleEmergencyClick}>
        🚨 Emergency
      </button>

      {selectedHospital && (
        <div className="emergency-modal">
          <h2>Nearest Hospital</h2>
          <p><strong>{selectedHospital.name}</strong></p>
          <p>📍 {selectedHospital.address}</p>
          <p>📞 {selectedHospital.contact}</p>
          <button onClick={() => setSelectedHospital(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default EmergencyMap;
