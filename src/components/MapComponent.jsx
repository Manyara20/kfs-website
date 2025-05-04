"use client";
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom SVG icon with #0D3C00 fill color
const createCustomIcon = (size, isHeadquarters) => {
  const iconSize = isHeadquarters ? [38, 38] : [25, 25];
  const iconAnchor = isHeadquarters ? [19, 38] : [12, 25];
  const popupAnchor = isHeadquarters ? [0, -38] : [0, -25];
  const shadowSize = isHeadquarters ? [41, 41] : [28, 28];

  return new L.Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}">
        <path fill="#0D3C00" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    `)}`,
    iconSize,
    iconAnchor,
    popupAnchor,
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    shadowSize,
  });
};

// Icons for headquarters and conservancies
const headquartersIcon = createCustomIcon(38, true);
const conservancyIcon = createCustomIcon(25, false);

const MapComponent = ({ mapCenter, locations }) => {
  return (
    <MapContainer
      center={mapCenter}
      zoom={7}
      style={{ height: '100%', width: '100%' }}
      
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        
      />
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={location.position}
          icon={location.isHeadquarters ? headquartersIcon : conservancyIcon}
        >
          <Popup>
            <div className="text-sm">
              <p className="font-semibold">{location.name}</p>
              <a
                href={`https://www.google.com/maps?q=${location.position[0]},${location.position[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Navigate
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;