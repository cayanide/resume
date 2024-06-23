import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sayan Chatterjee </span>
            from <span className="purple"> Uttrakhand, India.</span>
            <br />
            I am currently a Fresher and expected to Graduated At 2025
            <br />
            I have completed Diploma and Pursuing Higher education Btech From
            Lovely Proffesional University.
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
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
