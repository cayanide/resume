import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import CodingStats from "./CodingStats"; // Import the new component

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sayan Chatterjee</span>
            from <span className="purple">Uttrakhand, India.</span>
            <br />
            I am currently a Fresher and expected to Graduate in 2025.
            <br />
            I have completed a Diploma and am pursuing higher education BTech
            from Lovely Professional University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Innovate Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sayan</footer>
        </blockquote>
        <CodingStats /> {/* Add the new component here */}
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
