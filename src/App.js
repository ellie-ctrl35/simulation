import './App.css';
import React, { useState } from 'react';
import CityData from './CityData';
function App() {
  const [cities] = useState(updatedCitiesData); // Assuming you have a function generateRandomCities()

  const [searchQuery, setSearchQuery] = useState('');
  const [searchedCity, setSearchedCity] = useState(null);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const foundCity = cities.find(city => city.name.toLowerCase() === e.target.value.toLowerCase());
    if (foundCity) {
      setSearchedCity(foundCity);
    } else {
      setSearchedCity(null);
    }
  };

  return (
    <div className='App'>
      <input className='Input' type="text" value={searchQuery} onChange={handleSearch} placeholder="Search for a city" />
      {searchedCity ? (
        <CityData
          city={searchedCity.name}
          temperature={searchedCity.temperature}
          airQuality={searchedCity.airQuality}
        />
      ) : (
        <p>No city found. Please try again.</p>
      )}
    </div>
  );
}
// Assuming you have an array of city names
const citiesData = [
  { name: "New York", temperature: 20, airQuality: 25 },
  { name: "London", temperature: 18, airQuality: 30 },
  { name: "Tokyo", temperature: 25, airQuality: 20 },
  // Add more city names with their initial temperature and air quality
  // ... up to 50 cities
];

// Function to generate random temperature and air quality for cities
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

// Now you can use updatedCitiesData in your React application to display the city information and implement the search functionality to find specific cities.


export default App;
