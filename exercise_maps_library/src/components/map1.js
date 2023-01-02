import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map1() {
  return (
    <div className="container">
      <MapContainer center={[31.777, 35.235]} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}

export default Map1;
