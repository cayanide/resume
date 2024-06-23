import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Hairo Menacle"
              description="Hairdo Menacle is a comprehensive barber appointment booking application developed using Flutter, ensuring compatibility across multiple platforms including iOS, Android, and web. The app was designed to streamline the appointment scheduling process for barbers and clients alike, providing a seamless user experience with intuitive navigation and robust functionality."
              ghLink="https://github.com/cayanide/improved-booking"
              demoLink="https://"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="HomeAutomationIoTSystem"
              description="
            The Home Automation IoT System is an advanced solution designed to control and monitor electrical hardware throughout a home using ESP8266 and ESP32 controllers. The system leverages a variety of sensors to automate and optimize household operations, enhancing convenience and energy efficiency. Smart lights, for instance, can be controlled remotely, while sensors monitor water levels in tanks to prevent overflows."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
