import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Neon from "../../Assets/Projects/neon_snake_rythm.png";
import Game from "../../Assets/Projects/ROCK_PAPAER_SCISSORS.png";
import educare from "../../Assets/Projects/educare.png";
import Passforge from "../../Assets/Projects/password_generator.png";

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
              imgPath={educare}
              isBlog={false}
              title="EDUCARE"
              description="Educare helps you discover your perfect career through provided information about the courses and approach to career counselling and career guidance. Get your career into safe hands with Educare."
              ghLink="https://github.com/PatanHajeeBaba/EDUCARE_SYSTEM"
              demoLink="https://my-educare.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Passforge}
              isBlog={false}
              title="Password-Generator"
              description="A web-based security tool designed to generate strong passwords using various character sets and length options. It features a modern dark-themed interface that allows users to instantly create and copy 'unbreakable' credentials for enhanced digital safety."
              ghLink="https://github.com/PatanHajeeBaba/Password_generator"
              demoLink="https://patanhajeebaba.github.io/Password_generator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Game}
              isBlog={false}
              title="Rock-Paper-Scissor"
              description="This Rock Paper Scissor project is an interactive, web-based game that allows users to compete against an AI in a visually engaging environment. It features a clean, responsive design with real-time score tracking for wins, losses, and draws, providing an intuitive and seamless user experience."
              ghLink="https://github.com/PatanHajeeBaba/Rock-Paper-Scissor-game"
              demoLink="https://patanhajeebaba.github.io/Rock-Paper-Scissor-game/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Neon}
              isBlog={false}
              title="Neon-Rhythm-Snake"
              description="NEON_RHYTHM is a stylized, web-based interactive experience that features a retro-futuristic synthwave aesthetic and Kernel V1.0.4 system architecture. It utilizes a high-contrast neon interface where users navigate a data stream using arrow keys and manage a Data Stream Score through rhythm-based or movement-oriented gameplay."
              ghLink="https://github.com/PatanHajeeBaba/Neon-Rhythm-Snake"
              demoLink="https://neon-rhythm-snake-379798789185.us-west1.run.app/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
