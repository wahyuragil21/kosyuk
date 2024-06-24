import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const DynamicLeafletMap = dynamic(() => import('./leaflet_reverse_component'), { ssr: false });

const MapPage = () => {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("jalan citarum raya no.4 kelurahan baktijaya kecamatan sukmajaya kota depok");
  const [coordinates, setCoordinates] = useState({ lat: -6.1751, lon: 106.8650 });

  const handleMapClick = async (e) => {
    const { lat, lng } = e.latlng;
    setCoordinates({ lat, lon: lng });

    // Reverse geocoding using Nominatim
    // try {
    //   const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
    //   const data = await response.json();
    //   if (data && data.display_name) {
    //     setAddress(data.display_name);
    //   } else {
    //     setAddress("Address not found");
    //   }
    // } catch (error) {
    //   console.error("Error fetching address: ", error);
    //   setAddress("Error fetching address");
    // }
      try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
      const data = await response.json();
      console.log(data);
      
      if (data && data.lat) {
        setCoordinates({ lat: data.lat, lon: data.lon });
      } else {
        setCoordinates({ lat: 0, lon: 0 });
      }
    } catch (error) {
      console.error("Error fetching address: ", error);
      setAddress("Error fetching address");
    }
    
  };

  return (
    <>
      <input 
        type="text" 
        value={coordinates.lat +" "+ coordinates.lon} 
        onChange={(e) => setCoordinates({ lat: Number((e.target.value).split(' ')[0]), lon: Number((e.target.value).split(' ')[1]) })} 
        placeholder="Enter address" 
      />
      {loading ? (
        <p>Loading map...</p>
      ) : (
        <DynamicLeafletMap coordinates={coordinates} address={address} onMapClick={handleMapClick} />
      )}
    </>
  );
};

export default MapPage;
