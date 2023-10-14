import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function Map() {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyC3mZg6P7r2Aze0dm4X1QTmHora9Zs3fGQ"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14}
        center={defaultCenter}
      />
    </LoadScript>
  );
}

export default Map;
