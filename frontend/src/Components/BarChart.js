














import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";
import { apiContext } from "./apiContext";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const BarChart = () => {

  const {chartData} = useContext(apiContext)
   // Data for Expense Categories
  const categories = ["Shopping", "Food", "Transportation", "Entertainment"];
  const amounts = [1000, 800, 500, 700]; // Example amounts for each category

  // Set dynamic alternating colors (dark green and light green)
  const barColors = ["#388E3C", "#81C784", "#388E3C", "#81C784"]; // Dark Green, Light Green, Dark Green, Light Green

  // Chart data and configuration
  const data = {
    labels: [],
    datasets: [
      {
        label: "Expense Amount",
        data: [],
        backgroundColor: barColors,
        hoverBackgroundColor: barColors.map(color => `${color}`), // Lighten color on hover
        // borderWidth: 3,
        // borderRadius: 10,
        barThickness: 25, // Adjust bar thickness for better look
      },
    ],
  };

//   setChartData({
//     labels: topCategories.map(item => item.category),
//     datasets: [
//         {
//             label: "Expenses",
//             data: topCategories.map(item => item.totalAmount),
//             backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"], // Colors for bars
//         },
//     ],
// });

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensure the chart scales well on different screen sizes
    animations: {
      tension: {
        duration: 1500,
        easing: "easeOutBounce", // Smooth bounce effect
        from: 1,
        to: 0,
        loop: false,
      },
      y: {
        type: "number",
        duration: 1500,
        easing: "easeOutBounce",
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend for a cleaner look
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: {
          size: 14,
          weight: "bold",
        },
        bodyFont: {
          size: 12,
          family: "Arial, sans-serif",
        },
        bodySpacing: 8,
        padding: 10,
 
        callbacks: {
          title: (tooltipItem) => {
            return `${tooltipItem[0].label}`;
          },
          label: (tooltipItem) => {
            return `$${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove grid lines
        },
        ticks: {
            display:false
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Remove grid lines on the y-axis as well
        },
        ticks: {
          font: {
            size: 14,
            family: "Arial, sans-serif",
          },
          stepSize: 200, // Adjust step size for better readability
        },
      },
    },
  };

  return (
    <div className="chart" style={{ width: "100%", height: "250px", margin: "0 auto", backgroundColor: "white" }}>
      <div className="chart-wrapper" style={{ width: "100%", height: "100%" }}>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
