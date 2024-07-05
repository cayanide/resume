import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

// Existing routes here...

// Define the /api/stats route
app.get("/api/stats", async (req, res) => {
  try {
    // Example data fetching and processing
    const leetcodeResponse = await axios.get(
      "https://leetcode.com/api/problems/all/",
    );
    const leetcodeData = leetcodeResponse.data;

    // Process data to get question counts by topic
    const stats = {
      algorithms: 100, // Example data
      dataStructures: 80,
      databases: 60,
      // Add more topics
    };

    res.json(stats);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
