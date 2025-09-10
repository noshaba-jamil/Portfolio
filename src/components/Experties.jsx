 import {
  FaPaintBrush,
  FaCode,
  FaCogs,
  FaMobileAlt,
  FaDatabase,
  FaWordpress,
} from "react-icons/fa";
import "./experties.css";

const Expertise = () => {
  return (
     <section className="expertise-section py-5">
  <div className="container">
   <h2 className="expertise-heading mb-5">My Expertise</h2>



        <div className="row justify-content-center">
          {/* Graphic Design */}
           
          <div className="col-lg-4 col-md-6 mb-4">
  <div className="expertise-card graphic-card">
    <FaPaintBrush className="expertise-icon graphic" />
    <h4 className="fw-bold mt-3">Graphic Design</h4>
    <p>
      Creative designs with modern tools to build strong
      visual identities and engaging brand assets.
    </p>
  </div>
</div>

<div className="col-lg-4 col-md-6 mb-4">
  <div className="expertise-card web-card">
    <FaCode className="expertise-icon web" />
    <h4 className="fw-bold mt-3">Web Development</h4>
    <p>
      Building responsive, interactive websites using
      React, Bootstrap, and modern front-end technologies.
    </p>
  </div>
</div>

<div className="col-lg-4 col-md-6 mb-4">
  <div className="expertise-card software-card">
    <FaCogs className="expertise-icon software" />
    <h4 className="fw-bold mt-3">Software Solutions</h4>
    <p>
      Developing scalable software systems with clean
      architecture and efficient performance.
    </p>
  </div>
</div>

<div className="col-lg-4 col-md-6 mb-4">
  <div className="expertise-card app-card">
    <FaMobileAlt className="expertise-icon app" />
    <h4 className="fw-bold mt-3">Mobile Applications</h4>
    <p>
      Crafting Android and cross-platform apps that
      deliver seamless user experiences on the go.
    </p>
  </div>
</div>

<div className="col-lg-4 col-md-6 mb-4">
  <div className="expertise-card database-card">
    <FaDatabase className="expertise-icon database" />
    <h4 className="fw-bold mt-3">Database Management</h4>
    <p>
      Managing MySQL & MongoDB databases with optimized
      queries and secure data handling practices.
    </p>
  </div>
</div>

<div className="col-lg-4 col-md-6 mb-4">
  <div className="expertise-card wordpress-card">
    <FaWordpress className="expertise-icon wordpress" />
    <h4 className="fw-bold mt-3">WordPress Development</h4>
    <p>
      Designing custom WordPress websites with
      Elementor, SEO optimization, and responsive layouts.
    </p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;

