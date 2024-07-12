import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useInView } from 'react-intersection-observer';

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
const initialData = {
  labels,
  datasets: [
    {
      label: 'Own',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Start with zeros for initial animation
      backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue color for 'Own'
    },
    {
      label: 'Rental',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Start with zeros for initial animation
      backgroundColor: 'rgba(255, 99, 132, 0.6)', // Red color for 'Rental'
    },
  ],
};

// Export the chart component
export default function FamilyMembersByHouseOwnershipChart() {
  const [chartData, setChartData] = useState(initialData);
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow multiple triggers
    threshold: 0.9, // Trigger when 90% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      const animateChartData = () => {
        setChartData({
          labels,
          datasets: [
            {
              ...initialData.datasets[0],
              backgroundColor: 'rgba(52, 211, 153, 0.6)', // Replace with warmGreen from Tailwind CSS or other color for 'Own'
              data: [8, 14, 6, 7, 6, 7, 1, 3, 1, 13], // Replace with actual data for 'Own'
            },
            {
              ...initialData.datasets[1],
              backgroundColor: 'rgba(242, 153, 74, 0.6)', // Replace with another color for 'Rental'
              data: [7, 6, 7, 6, 7, 1, 3, 1, 13, 22], // Replace with actual data for 'Rental'
            },
          ],
        });
      };

      // Trigger animation or data loading when component is in view
      animateChartData();
    } else {
      // Reset chartData when out of view
      setChartData(initialData);
    }
  }, [inView]);

  return (
    <div ref={ref} className='h-[500px] p-4 md:p-6 w-full md:w-[650px]'>
      <Bar data={chartData} options={options} />
    </div>
  );
}
