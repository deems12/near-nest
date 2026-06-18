import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const defaultCenter = {
  lat: 13.0827,
  lng: 80.2707,
};

// Example destination (change this to your resource location)
const destination = {
  lat: 13.067439,
  lng: 80.237617,
};

const MapComponent = () => {
  const [location, setLocation] = useState(defaultCenter);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const openNavigation = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${destination.lat},${destination.lng}&travelmode=driving`,
      "_blank"
    );
  };

  return (
    <>
      <button
        onClick={openNavigation}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 1000,
          padding: "10px 15px",
        }}
      >
        Navigate
      </button>

      <LoadScript
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location}
          zoom={15}
        >
          <Marker position={location} />
          <Marker position={destination} />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default MapComponent;