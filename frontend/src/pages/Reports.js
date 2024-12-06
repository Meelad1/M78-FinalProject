import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import './reports.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const Reports = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://104.131.170.203:3000/api/data/reports') // Updated API URL
      .then((response) => {
        setChartData(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching reports data:', error);
        setLoading(false);
      });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: 'Monthly User Engagement Growth' },
    },
  };

  return (
    <div className="reports">
      <h1>User Engagement Trends</h1>
      {loading ? (
        <p>Loading chart...</p>
      ) : chartData ? (
        <>
          <Line data={chartData} options={options} />
          <p>
            This chart shows the monthly user engagement growth for ChatGPT and other generative AI tools. Data was
            synthesized to simulate real-world engagement trends. Source:{' '}
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

export default Reports;
