import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js
import { updatedCitiesData } from './DataGenerator';

const sortedByAirQuality = updatedCitiesData.slice().sort((a, b) => a.airQuality - b.airQuality);

const top10HighAirQuality = sortedByAirQuality.slice(-10).reverse(); // Top 10 cities with the highest air quality
const top10LowAirQuality = sortedByAirQuality.slice(0, 10); // Top 10 cities with the lowest air quality
export {sortedByAirQuality,top10HighAirQuality,top10LowAirQuality}

const AirQualityBarChart = ({ top10HighAirQuality, top10LowAirQuality }) => {
  const chartRef = useRef(null);
  

  useEffect(() => {
    if (chartRef && chartRef.current) {
      new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: top10HighAirQuality.map(city => city.name),
          datasets: [
            {
              label: 'Top 10 Cities - High Air Quality',
              data: top10HighAirQuality.map(city => city.airQuality),
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            },
            {
              label: 'Top 10 Cities - Low Air Quality',
              data: top10LowAirQuality.map(city => city.airQuality),
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          scales: {
            x: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [top10HighAirQuality, top10LowAirQuality]);

  return <canvas ref={chartRef} />;
};

export default AirQualityBarChart;
