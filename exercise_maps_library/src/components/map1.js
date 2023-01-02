import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { Icon } from "leaflet";

const myIcon = new Icon({
  iconUrl: "/images/icon_pizza.png",
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [0, -40],
  tooltipAnchor: [0, -20],
});

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
        <Marker
          eventHandlers={{
            click: (e) => {
              alert("Ibn Gvirol 10");
            },
          }}
          position={[32.07231, 34.78168]}
          icon={myIcon}
        >
          <Popup>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              Ibn Gvirol 10
            </a>
          </Popup>
          <Tooltip>Ibn Gvirol 10</Tooltip>
        </Marker>
        <Marker position={[32.0736, 34.782]}>
          <Popup>Ibn Gvirol 20</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map1;
