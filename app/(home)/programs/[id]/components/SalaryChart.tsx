import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useInView } from 'react-intersection-observer';

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
const initialData = {
  labels,
  datasets: [
    {
      label: 'Average Salary',
      data: [0, 0, 0, 0, 0, 0, 0], // Start with zeros for initial animation
      backgroundColor: 'rgba(52, 211, 153, 0.2)', // Example color
      borderColor: 'rgba(52, 211, 153, 1)', // Example color
      borderWidth: 1,
      fill: true,
      tension: 0.1,
    },
  ],
};

// Export the chart component
export default function SalaryChart() {
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
              data: [35000, 20000, 30000, 20000, 26000, 41000, 26429], // Replace with actual salary data
              backgroundColor: 'rgba(52, 211, 153, 0.2)', // Update to warmGreen color
              borderColor: 'rgba(52, 211, 153, 1)', // Update to warmGreen color
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
      <Line data={chartData} options={options} />
    </div>
  );
}
