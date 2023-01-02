import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map1() {
  return (
    <div className="container">
      <MapContainer
        center={[32.0723, 34.7818]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[32.0723, 34.7818]}>
          <Popup>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              Ibn Gvirol 10
            </a>
          </Popup>
        </Marker>
        <Marker position={[32.0736, 34.782]}>
          <Popup>Ibn Gvirol 20</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map1;
