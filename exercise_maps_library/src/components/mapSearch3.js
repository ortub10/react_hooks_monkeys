import React, { useRef } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { MapContainer, TileLayer } from "react-leaflet";

function MapSearch3() {
  const searchProvider = new OpenStreetMapProvider();
  const inputRef = useRef();

  const onSearchClick = () => {
    doSearchAddress();
  };

  const doSearchAddress = async () => {
    const input_val = inputRef.current.value;
    const result = await searchProvider.search({ query: input_val });
    console.log(result);
  };
  return (
    <div className="container">
      <h2 className="text-center">Search for town/city/state</h2>
      <div className="col-md-4 mx-auto d-flex">
        <input ref={inputRef} type="search" className="form-control" />
        <button onClick={onSearchClick} className="btn btn-info">
          Search
        </button>
      </div>
      <MapContainer
        center={[32.1630729, 34.8081001]}
        zoom={16}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}

export default MapSearch3;
