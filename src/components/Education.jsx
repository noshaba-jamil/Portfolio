 import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./education.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container my-5">
        <h1 className="education-title ">🎓 My Education Journey</h1>

        <Accordion defaultActiveKey="0" alwaysOpen className="education-accordion">
          <Accordion.Item eventKey="0" className="education-item">
            <Accordion.Header>🎓 Bachelor of Science in Computer Science</Accordion.Header>
            <Accordion.Body>
              <strong>Virtual University of Pakistan</strong> — Currently in 5th semester,
              developing strong skills in programming, algorithms, and software
              engineering. <br />
              <span className="highlight">CGPA: 3.61</span>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className="education-item">
            <Accordion.Header>💻 Diploma in Web & App Development</Accordion.Header>
            <Accordion.Body>
              <strong>NEI University</strong> — Enrolled in a 2-year program focusing on
              MERN Stack, API integration, and full-stack development. <br />
              <span className="highlight">Hands-on project experience.</span>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="education-item">
            <Accordion.Header>📘 Intermediate in Computer Science</Accordion.Header>
            <Accordion.Body>
              <strong>Intermediate (ICS)</strong> — Specialized in Computer Science,
              Mathematics, and Physics. <br />
              <span className="highlight">Scored 945 marks.</span>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className="education-item">
            <Accordion.Header>🏫 High School Education</Accordion.Header>
            <Accordion.Body>
              <strong>Science Stream</strong> — Completed Secondary School Certificate
              (SSC) with Science subjects. <br />
              <span className="highlight">Achieved 1083 marks.</span>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default Education;
