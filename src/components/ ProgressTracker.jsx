import React, { useState, useEffect } from "react";
import PieChart from "./PieChart";
import PlatformTracker from "./PlatformTracker";
import UpdateTracker from "./UpdateTracker";
import { Chart } from "chart.js"; // Assuming Chart.js is installed

const platforms = [
  { name: "LeetCode", count: 0 },
  { name: "HackerRank", count: 0 },
  // Add more platforms as needed
];

const ProgressTracker = () => {
  const [data, setData] = useState(platforms);
  const [totalCount, setTotalCount] = useState(0);

  // Fetch data from local storage or backend (replace with your logic)
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("progressData"));
    if (storedData) {
      setData(storedData);
      calculateTotalCount(storedData);
    }
  }, []);

  // Calculate total question count
  const calculateTotalCount = (data) => {
    const total = data.reduce((acc, platform) => acc + platform.count, 0);
    setTotalCount(total);
  };

  // Update question count for a platform
  const updatePlatformCount = (platformName, increment) => {
    const updatedData = data.map((platform) =>
      platform.name === platformName
        ? { ...platform, count: Math.max(platform.count + increment, 0) } // Prevent negative counts
        : platform,
    );
    setData(updatedData);
    calculateTotalCount(updatedData);
    // Store updated data in local storage or backend (replace with your logic)
    localStorage.setItem("progressData", JSON.stringify(updatedData));
  };

  return (
    <div className="progress-tracker">
      <h2>Coding Progress Tracker</h2>
      <PieChart data={data} />
      {data.map((platform) => (
        <PlatformTracker key={platform.name} platform={platform} />
      ))}
      <UpdateTracker platforms={data} onUpdate={updatePlatformCount} />
    </div>
  );
};

export default ProgressTracker;
