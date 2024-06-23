import React, { useRef } from "react";

const PieChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && data.length > 0) {
      const ctx = chartRef.current.getContext("2d");
      const chart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: data.map((platform) => platform.name),
          datasets: [
            {
              label: "Questions Done",
              data: data.map((platform) => platform.count),
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)", // Customize colors as desired
                "rgba(54, 162, 235, 0.2)",
                // Add more colors for additional platforms
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                // Add more border colors
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          // Customize chart options (labels, hover effects, etc.)
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} width="400" height="400" />;
};

export default PieChart;
