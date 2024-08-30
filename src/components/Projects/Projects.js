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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Secure Messaging Server"
              description="Developed a secure messaging server in Rust, leveraging MySQL for data storage and management. The server facilitates secure communication channels, implementing end-to-end encryption for messages. Users can register, log in securely, and exchange messages while ensuring data privacy and integrity. The project showcases proficiency in Rust programming, MySQL database integration, and secure communication protocols.. This integration of sensors and controllers creates a cohesive and intelligent home environment, ensuring comfort, efficiency, and safety. "
              ghLink="https://github.com/cayanide/secure-messaging-server"
              demoLink="https://"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="WinterTraining"
              description="In the WinterTraining project, I am actively engaged in enhancing my problem-solving skills and mastering data structures. This hands-on experience involves tackling challenging problems from various platforms, including LeetCode, GeeksforGeeks, Coding360, and InterviewBit. By consistently solving these problems, I am honing my logical thinking abilities and deepening my understanding of data structures."
              ghLink="https://github.com/cayanide/WinterTraining.git"
              demoLink="https://"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="HomeServer"
              description="Implemented a comprehensive home server solution on Ubuntu, integrating Plex for media streaming, Pi-hole for network-wide ad blocking, SMB shares for file sharing, and Immich for photo and video management. Utilized Tailscale VPN for secure remote access, ensuring privacy and accessibility. This setup leverages Docker, Apache CloudStack, KVM, MariaDB, and various other tools to create a robust, user-friendly environment for seamless media consumption and network management, enhancing both functionality and security for all connected devices."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="N-Queens Visualizer"
              description="Created an N-Queens puzzle visualizer that employs a recursive backtracking algorithm to solve the problem of placing N queens on an N×N chessboard without conflicts. The project features an intuitive interface that allows users to select the board size and view the algorithm's progress in real-time. "
              ghLink="https://github.com/cayanide/N-Queens_Visualizer.git"
              demoLink="ttps://cayanide.github.io/N-Queens_Visualizer/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
