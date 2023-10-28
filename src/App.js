import './App.css';
import React, { useState } from 'react';
import CityData from './CityData';
import TopTenHottestCities from './DataGenerator';
import TopTenColdestCities from './ColdestCity';
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
      <div className='topdiv'>
      <div className='container'>
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
       <div className='charts'>
        <TopTenHottestCities />
       </div>
       <div className='charts'>
        <TopTenColdestCities/>
       </div>
      </div>

      <div className='bottom-div' >
        
      </div>
    </div>
  );
}
// Assuming you have an array of city names
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
