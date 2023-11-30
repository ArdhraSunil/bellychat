import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "./graph.css";

const Graph = () => {
  const chartRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showMonthCalendar, setShowMonthCalendar] = useState(false);

  useEffect(() => {
    const labels = [
      "2023-01-01",
      "2023-01-02",
      "2023-01-03",
      "2023-01-04",
      "2023-01-05",
      "2023-01-06",
      "2023-01-07"
    ];
    const data = [100, 120, 90, 110, 80, 130, 95];

    const ctx = chartRef.current.getContext("2d");

    if (window.myChart) {
      window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Water Usage (Litres)",
            data,
            backgroundColor: "#3498db"
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Amount of Water (Litres)"
            }
          }
        }
      }
    });
  }, []);

  return (
    <div className="bar-graph">
      <div className="bar-graph-title">Water Usage in the Last 7 Days</div>
      <div className="bar-chart">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default Graph;
