 
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./education.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
    <div className="container my-5 education-section">
      <h1 className="text-center mb-4">Education</h1>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>🎓 Bachelor of Science in Computer Science</Accordion.Header>
          <Accordion.Body>
            Currently pursuing a **Bachelor of Science in Computer Science** from
            Virtual University (5th semester). Gaining strong fundamentals in
            programming, algorithms, and software engineering with CGPA of 3.61.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>💻 Diploma in Web & App Development</Accordion.Header>
          <Accordion.Body>
            Completing a **2-year program** in Web and App Development from NEI
            University. Focused on MERN stack, API integration, and full-stack
            project development.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>📘 Intermediate in Computer Science</Accordion.Header>
          <Accordion.Body>
            Completed **Intermediate (ICS)** with majors in Computer Science,
            Mathematics, and Physics. Built early problem-solving and analytical
            skills.With 945 makes.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>🏫 High School Education</Accordion.Header>
          <Accordion.Body>
            Successfully completed **Secondary School Certificate (SSC)** with
            focus on Science subjects, laying the foundation for higher studies
            in technology.With 1083 markes.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
    </section>
  );
};

export default Education;
