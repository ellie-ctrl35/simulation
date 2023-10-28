import React from 'react';
const citiesData = [
  { name: "New York", temperature: 20, airQuality: 25 },
  { name: "London", temperature: 18, airQuality: 30 },
  { name: "Tokyo", temperature: 25, airQuality: 20 },
  { name: "Accra", temperature: 25, airQuality: 20 },
  { name: "Tema", temperature: 25, airQuality: 20 },
  { name: "Kumasi", temperature: 25, airQuality: 20 },
  { name: "Oyibi", temperature: 25, airQuality: 20 },
  { name: "Texas", temperature: 25, airQuality: 20 },
  { name: "Ohio", temperature: 25, airQuality: 20 },
  { name: "Madina", temperature: 25, airQuality: 20 },
  { name: "Abuja", temperature: 25, airQuality: 20 },
  { name: "Lome", temperature: 25, airQuality: 20 },
  { name: "Lagos", temperature: 25, airQuality: 20 },
  { name: "Abijan", temperature: 25, airQuality: 20 },
  { name: "Tunis", temperature: 25, airQuality: 20 },
  { name: "Rabat", temperature: 25, airQuality: 20 },
  { name: "Kigali", temperature: 25, airQuality: 20 },
  { name: "Oslo", temperature: 25, airQuality: 20 },
  { name: "Cape Town", temperature: 25, airQuality: 20 },
  { name: "Johanesburg", temperature: 25, airQuality: 20 },
  { name: "Pretoria", temperature: 25, airQuality: 20 },
  { name: "Ipswich", temperature: 25, airQuality: 20 },
  { name: "Nagano", temperature: 25, airQuality: 20 },
  { name: "Ottawa", temperature: 25, airQuality: 20 },
  { name: "Sunderland", temperature: 25, airQuality: 20 },
  { name: "Manchester", temperature: 25, airQuality: 20 },
  { name: "Norwich", temperature: 25, airQuality: 20 },
  { name: "Beijing", temperature: 25, airQuality: 20 },
  { name: "Turin", temperature: 25, airQuality: 20 },
  { name: "Madrid", temperature: 25, airQuality: 20 },
  { name: "Barcelona", temperature: 25, airQuality: 20 },
  { name: "Lisbon", temperature: 25, airQuality: 20 },
  { name: "Dubai", temperature: 25, airQuality: 20 },
  { name: "Riyahd", temperature: 25, airQuality: 20 },
  { name: "Rio", temperature: 25, airQuality: 20 },
  { name: "Milan", temperature: 25, airQuality: 20 },
  { name: "Port Harcourt", temperature: 25, airQuality: 20 },
  { name: "Bamako", temperature: 25, airQuality: 20 },
   
];

const generateRandomCityData = () => {
  const updatedCities = citiesData.map(city => ({
    ...city,
    temperature: Math.floor(Math.random() * 50 - 10), // Random temperature between -10°C and 40°C
    airQuality: Math.floor(Math.random() * 300) // Random air quality value up to 300 PM2.5
  }));
  return updatedCities;
};

// Use generateRandomCityData function to get the updated list of cities with random temperature and air quality
const updatedCitiesData = generateRandomCityData();

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
            {`${index + 1}. ${city.name} - Temperature: ${city.temperature}°C`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopTenHottestCities;
