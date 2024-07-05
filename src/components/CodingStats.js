import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";

const CodingStats = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/coding-stats",
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching coding stats:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Coding Stats",
        data: Object.values(data),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Coding Stats</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default CodingStats;
