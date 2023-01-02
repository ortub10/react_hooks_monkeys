import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";

function Map2() {
  const [ar, setAr] = useState([]);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    const url = "http://fs1.co.il/bus/jerusalem.php";
    const resp = await axios.get(url);
    setAr(resp.data);
  };
  return (
    <div className="container">
      <h2>Jerusalem old city map</h2>
      <MapContainer center={[31.777, 35.231]} zoom={17} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {ar.map((item) => {
          return (
            <Marker
              eventHandlers={{
                click: (e) => {
                  window.open(item.link);
                },
              }}
              position={item.pos}
            >
              <Tooltip>{item.name}</Tooltip>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default Map2;
