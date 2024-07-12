import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useInView } from 'react-intersection-observer';

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
const initialData = {
  labels,
  datasets: [
    {
      label: 'Enrollment by Grade Level',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Start with zeros for initial animation
      backgroundColor: 'rgba(52, 211, 153, 0.6)', // Use warmGreen color from Tailwind CSS
    },
  ],
};

// Export the chart component
export default function EnrollmentChart() {
  const [chartData, setChartData] = useState(initialData);
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow multiple triggers
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      const animateChartData = () => {
        setChartData({
          labels,
          datasets: [
            {
              ...initialData.datasets[0],
              data: [2, 5, 2, 8, 10, 12, 9, 12, 8, 21, 10], // Replace with actual enrollment data
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
