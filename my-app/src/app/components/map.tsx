'use client'

import React, { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

const getCoordinates = async (address: string) => {
  const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
  const data = await response.json();
  console.log(data);
  
  if (data.length > 0) {
    return {
      lat: parseFloat(data[0].lat),
      lon: parseFloat(data[0].lon)
    };
  } else {
    throw new Error("Address not found");
  }
};

const DynamicMapComponent = dynamic(() => import('../components/leaflet_component'), {
  ssr: false
});

const MapComponent = ({loading, setLoading, address}) => {
  const [coordinates, setCoordinates] = useState(null);
  const [debouncedAddress, setDebouncedAddress] = useState(address);

  const load = ()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 3000);
  };

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedAddress(address);
    }, 2000); // 2 seconds debounce

    return () => {
      clearTimeout(handler);
    };
  }, [address]);

  useEffect(() => {
    if (debouncedAddress) {
      getCoordinates(debouncedAddress)
        .then((coords: any) => {
          setCoordinates(coords);
        })
        .catch((error) => {
          console.error("Error fetching coordinates: ", error);
        });
      load();
    }
  }, [debouncedAddress]);

  if (!coordinates || loading) {
    return <p>Loading map...</p>;
  }

  return (
    <>
      <DynamicMapComponent coordinates={coordinates} address={address} />
    </>
  );
};

export default MapComponent;