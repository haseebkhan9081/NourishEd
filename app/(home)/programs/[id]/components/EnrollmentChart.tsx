import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Define options for the chart
const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  maintainAspectRatio: false, // Allow chart resizing
  plugins: {
    title: {
      display: true,
      text: 'Enrollment by Grade Level',
    },
  },
};

// Mock data for the chart
const labels = ['KG', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const data = {
  labels,
  datasets: [
    {
      label: 'Enrollment by Grade Level',
      data: [2, 5, 2, 8, 10, 12, 9, 12, 8, 21, 10], // Replace with actual enrollment data
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

// Export the chart component
export default function EnrollmentChart() {
  return (
    <div
      className='h-[500px] p-4 md:p-6 w-full md:w-[650px]'>
      <Bar data={data} options={options} />
    </div>
  );
}
