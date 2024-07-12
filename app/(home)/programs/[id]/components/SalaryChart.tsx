import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

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
      text: 'Average Salary by Profession',
    },
  },
};

// Data for the chart
const labels = ['Driver', 'Electrician', 'Employee', 'Labour', 'Shopkeeper', 'Police Officer', 'Other'];
const data = {
  labels,
  datasets: [
    {
      label: 'Average Salary',
      data: [35000, 20000, 30000, 20000, 26000, 41000, 26429], // Replace with actual salary data
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      fill: true,
      tension: 0.1,
    },
  ],
};

// Export the chart component
export default function SalaryChart() {
  return (
    <div className='h-[500px] p-4 md:p-6 w-full md:w-[650px]'>
      <Line data={data} options={options} />
    </div>
  );
}
