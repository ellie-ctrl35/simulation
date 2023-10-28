import './App.css';
import React from 'react';

const CityData = ({ city, temperature, airQuality }) => {
  return (
    <div>
      <h2 className='cityname'>{city}</h2>
      <p className='text'>AVERAGE TEMPERATURE: {temperature}°C</p>
      <p className='text'>AIR QUALITY (PM2.5): {airQuality}</p>
    </div>
  );
};

export default CityData;
