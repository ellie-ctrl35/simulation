// CityData.js
import React from 'react';

const CityData = ({ city, temperature, airQuality }) => {
  return (
    <div>
      <h2>{city}</h2>
      <p>Average Temperature: {temperature}°C</p>
      <p>Air Quality (PM2.5): {airQuality}</p>
    </div>
  );
};

export default CityData;
