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
      text: 'Age Wise Students In Class',
    },
  },
};

// Data for the chart
const labels = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
const initialData = {
  labels,
  datasets: [
    {
      label: 'Number of Students',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Start with zeros for initial animation
      backgroundColor: 'rgba(52, 211, 153, 0.6)', // Example color
    },
  ],
};

// Export the chart component
export default function AgeWiseStudentsChart() {
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
              backgroundColor: 'rgba(162, 189, 157, 1)', // Replace with warmGreen from Tailwind CSS
              data: [2, 5, 10, 15, 13, 14, 14, 12, 8, 11, 8], // Replace with actual data
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
