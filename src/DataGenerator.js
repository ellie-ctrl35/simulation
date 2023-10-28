import React from 'react';
import citiesData from './Citiesdata';

const generateRandomCityData = () => {
  const updatedCities = citiesData.map(city => ({
    ...city,
    temperature: Math.floor(Math.random() * 50 -10), // Random temperature between -10°C and 40°C
    airQuality: Math.floor(Math.random() * 150 + 40) // Random air quality value up to 300 PM2.5
  }));
  return updatedCities;
};

// Use generateRandomCityData function to get the updated list of cities with random temperature and air quality
const updatedCitiesData = generateRandomCityData();
export {updatedCitiesData};

const TopTenHottestCities = () => {
  // Sort the cities based on temperature in descending order
  const sortedCitiesByTemperature = updatedCitiesData.sort((city1, city2) => city2.temperature - city1.temperature);

  // Get the top 10 hottest cities
  const topTenHottestCities = sortedCitiesByTemperature.slice(0, 10);

  return (
    <div>
      <h2>Top 10 Hottest Cities</h2>
      <ul>
        {topTenHottestCities.map((city, index) => (
          <li key={index}>
            {`${index + 1}. ${city.name} - Temperature: ${city.temperature}°C : ${city.airQuality}PM2.5`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopTenHottestCities;
