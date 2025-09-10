 import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section container">
      <h2 className="text-center mb-5">Contact</h2>
      <div className="row">
        {/* Contact Info */}
        <div className="col-md-5 contact-info">
          <div className="info-box d-flex align-items-center mb-4">
            <div className="icon"><FaEnvelope /></div>
            <div>
              <h5>Email</h5>
              <p>nosmal1083@gmail.com</p>
            </div>
          </div>

          <div className="info-box d-flex align-items-center mb-4">
            <div className="icon"><FaMapMarkerAlt /></div>
            <div>
              <h5>Address</h5>
              <p>Street No 20, New Model Town, Near Shansha Marriage Hall, Taxila</p>
            </div>
          </div>

          <div className="info-box d-flex align-items-center mb-4">
            <div className="icon"><FaPhone /></div>
            <div>
              <h5>Phone</h5>
              <p>+92 3195776141</p>
            </div>
          </div>

          {/* GitHub */}
          <div className="info-box d-flex align-items-center mb-4">
            <div className="icon"><FaGithub /></div>
            <div>
              <h5>GitHub</h5>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                github.com/noshaba-jamil
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="info-box d-flex align-items-center">
            <div className="icon"><FaLinkedin /></div>
            <div>
              <h5>LinkedIn</h5>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/Noshabajamil
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-7">
          <form className="contact-form">
            <input type="text" className="form-control mb-3" placeholder="Name" required />
            <input type="email" className="form-control mb-3" placeholder="Email" required />
            <input type="text" className="form-control mb-3" placeholder="Subject" />
            <textarea className="form-control mb-3" rows="5" placeholder="Message"></textarea>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

