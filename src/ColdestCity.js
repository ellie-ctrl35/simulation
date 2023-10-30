import React from 'react';
import { updatedCitiesData } from './DataGenerator';


const TopTenColdestCities = () => {
  // Sort the cities based on temperature in descending order
  const sortedCitiesByTemperature = updatedCitiesData.sort((city1, city2) => city1.temperature - city2.temperature);

  // Get the top 10 Coldest cities
  const topTenColdestCities = sortedCitiesByTemperature.slice(0, 5);
  return (
    <div>
      <h2>The Top 10 Coldest Cities</h2>
      <ul>
        {topTenColdestCities.map((city, index) => (
          <li key={index}>
            {`${index + 0}. ${city.name} - Temperature: ${city.temperature}°C : ${city.airQuality}PM2.5`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopTenColdestCities;
