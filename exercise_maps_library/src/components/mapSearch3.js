import React, { useRef, useState } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

function MapSearch3() {
  const searchProvider = new OpenStreetMapProvider();
  const [positionAr, setPositionAr] = useState([32.1630729, 34.8081001]);
  const inputRef = useRef();

  const onSearchClick = () => {
    doSearchAddress();
  };

  const doSearchAddress = async () => {
    const input_val = inputRef.current.value;
    const result = await searchProvider.search({ query: input_val });
    setPositionAr([result[0].y, result[0].x]);
  };
  return (
    <div className="container">
      <h2 className="text-center">Search for town/city/state</h2>
      <div className="col-md-4 mx-auto d-flex">
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              doSearchAddress();
            }
          }}
          ref={inputRef}
          type="search"
          className="form-control"
        />
        <button onClick={onSearchClick} className="btn btn-info">
          Search
        </button>
      </div>
      <MapContainer center={positionAr} zoom={16} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <SearchMarker positionAr={positionAr} />
      </MapContainer>
    </div>
  );
}

export default MapSearch3;

function SearchMarker(props) {
  const map = useMap();
  map.flyTo(props.positionAr);
  return <Marker position={props.positionAr}></Marker>;
}
