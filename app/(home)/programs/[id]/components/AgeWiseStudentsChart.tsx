import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Define options for the chart
const options = {
  responsive: true,
  maintainAspectRatio: false, // Allow chart resizing
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Age Wise Students In Class',
    },
  },
};

// Data for the chart
const labels = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
const data = {
  labels,
  datasets: [
    {
      label: 'Number of Students',
      data: [2, 5, 10, 15, 13, 14, 14, 12, 8, 11, 8], // Replace with actual data
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

// Export the chart component
export default function AgeWiseStudentsChart() {
  return (
    <div className='h-[500px] p-4 md:p-6 w-full md:w-[650px]'>
      <Bar data={data} options={options} />
    </div>
  );
}
