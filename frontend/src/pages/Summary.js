import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import './summary.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Summary = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://104.131.170.203:3000/api/data/summary') // Updated API URL
      .then((response) => {
        setChartData(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching summary data:', error);
        setLoading(false);
      });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: 'Adoption of Generative AI Tools in Industries' },
    },
  };

  return (
    <div className="summary">
      <h1>Generative AI Innovations</h1>
      {loading ? (
        <p>Loading chart...</p>
      ) : chartData ? (
        <>
          <Bar data={chartData} options={options} />
          <p>
            This chart highlights the most popular applications of generative AI in 2024, focusing on tools such as ChatGPT
            and DALL-E. Data was collected and visualized based on innovation trends. Source:{' '}
            <a href="https://www.statista.com" target="_blank" rel="noopener noreferrer">
              Statista
            </a>
          </p>
        </>
      ) : (
        <p>Error loading chart data. Please try again later.</p>
      )}
    </div>
  );
};

export default Summary;
