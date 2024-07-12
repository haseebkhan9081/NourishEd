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
      text: 'Distribution of Family Members by House Ownership',
    },
  },
};

// Data for the chart
const labels = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
const data = {
  labels,
  datasets: [
    {
      label: 'Own',
      data: [8, 14, 6, 7, 6, 7, 1, 3, 1, 13], // Replace with actual data
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    },
    {
      label: 'Rental',
      data: [7, 6, 7, 6, 7, 1, 3, 1, 13, 22], // Replace with actual data
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
    },
  ],
};

// Export the chart component
export default function FamilyMembersByHouseOwnershipChart() {
  return (
    <div className='h-[500px] p-4 md:p-6 w-full md:w-[650px]'>
      <Bar data={data} options={options} />
    </div>
  );
}
