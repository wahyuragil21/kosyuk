import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Resolve leaflet default icon issue in Next.js
delete L.Icon.Default.prototype._getIconUrl;

const DefaultIcon = L.icon({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const LeafletMapReverse = ({ coordinates, address, onMapClick }) => {
  return (
    <MapContainer
      center={[coordinates.lat, coordinates.lon]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
      zoomControl={true}
      doubleClickZoom={false}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[coordinates.lat, coordinates.lon]}>
        <Popup>
          {address}
        </Popup>
      </Marker>
      <MapEventsHandler onMapClick={onMapClick} />
    </MapContainer>
  );
};

const MapEventsHandler = ({ onMapClick }) => {
  useMapEvents({
    click: onMapClick,
  });
  return null;
};

export default LeafletMapReverse;
