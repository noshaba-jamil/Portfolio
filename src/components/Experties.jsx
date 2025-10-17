import {
  FaPaintBrush,
  FaCode,
  FaCogs,
  FaMobileAlt,
  FaDatabase,
  FaWordpress,
} from "react-icons/fa";
import "./experties.css";

const Experties = () => {
  return (
    <section  id="experties" className="experties-section py-5">
      <div className="container">
        <h2 className="experties-heading mb-5">My experties</h2>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="experties-card web-card">
              <FaCode className="experties-icon web" />
              <h4 className="fw-bold mt-3">Web Development</h4>
              <p>
                Building responsive, interactive websites using React,
                Bootstrap, and modern front-end technologies.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="experties-card software-card">
              <FaCogs className="expertiess-icon software" />
              <h4 className="fw-bold mt-3">Software Solutions</h4>
              <p>
                Developing scalable software systems with clean architecture and
                efficient performance.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="experties-card app-card">
              <FaMobileAlt className="experties-icon app" />
              <h4 className="fw-bold mt-3">React Applications</h4>
              <p>
                Crafting  apps that deliver seamless
                user experiences on the go.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="experties-card database-card">
              <FaDatabase className="experties-icon database" />
              <h4 className="fw-bold mt-3">Database Management</h4>
              <p>
                Managing MySQL & MongoDB databases with optimized queries and
                secure data handling practices.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="experties-card wordpress-card">
              <FaWordpress className="experties-icon wordpress" />
              <h4 className="fw-bold mt-3">WordPress Development</h4>
              <p>
                Designing custom WordPress websites with Elementor, SEO
                optimization, and responsive layouts.
              </p>
            </div>
          </div>
          {/* Graphic Design */}

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="experties-card graphic-card">
              <FaPaintBrush className="experties-icon graphic" />
              <h4 className="fw-bold mt-3">Graphic Design</h4>
              <p>
                Creative designs with modern tools to build strong visual
                identities and engaging brand assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experties;
