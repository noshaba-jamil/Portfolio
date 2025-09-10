 import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./specialty.css";

const Specialty = () => {
  return (
      <section id="skills" className="skills-section"> 
    <div className="specialty container my-5" id="specialty">
      <h2 className="text-center mb-4">My Specialty</h2>
 <p className="text-center mb-5">
  I am a dedicated Web & App Developer with hands-on experience in building 
  modern, responsive, and user-friendly applications. Skilled in React, Node.js, 
  Express.js, MongoDB, SQL, and API integrations, I enjoy creating seamless 
  solutions that combine performance with clean design. With additional expertise 
  in WordPress, SEO, and version control (Git), I bring both technical knowledge 
  and problem-solving ability. Having freelanced for clients and taught others, 
  I am passionate about continuous learning, adapting quickly to new technologies, 
  and delivering impactful digital experiences.
</p>


      <div className="row">
        {/* Left Column */}
        <div className="col-md-6">
          <h5>My Skills</h5>

          <div className="mb-3">
            <label>React</label>
            <div className="progress">
              <div className="progress-bar bg-primary" style={{ width: "90%" }}>
                100%
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label>Redux</label>
            <div className="progress">
              <div className="progress-bar bg-success" style={{ width: "80%" }}>
                100%
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label>Bootstrap</label>
            <div className="progress">
              <div className="progress-bar bg-info" style={{ width: "85%" }}>
                100%
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label>Tailwind CSS</label>
            <div className="progress">
              <div className="progress-bar bg-warning text-dark" style={{ width: "75%" }}>
                95%
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label>SQL</label>
            <div className="progress">
              <div className="progress-bar bg-danger" style={{ width: "70%" }}>
                100%
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6">
          <div className="mb-3">
            <label>Node.js</label>
            <div className="progress">
              <div className="progress-bar bg-secondary" style={{ width: "80%" }}>
                80%
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label>Express.js</label>
            <div className="progress">
              <div className="progress-bar bg-dark" style={{ width: "75%" }}>
                75%
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label>MongoDB</label>
            <div className="progress">
              <div className="progress-bar bg-success" style={{ width: "85%" }}>
                85%
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label>API Integration</label>
            <div className="progress">
              <div className="progress-bar bg-primary" style={{ width: "80%" }}>
                80%
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label>Git & Version Control</label>
            <div className="progress">
              <div className="progress-bar bg-info" style={{ width: "85%" }}>
                90%
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label>PHP</label>
            <div className="progress">
              <div className="progress-bar bg-warning text-dark" style={{ width: "65%" }}>
                70%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </section>
  );
};

export default Specialty;

