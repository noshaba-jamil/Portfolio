 import React from "react";
import "./cv.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const CV = () => {
  return (
    <div className="cv-container container my-5">
      {/* Profile Section */}
      <div className="text-center mb-5">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/053/630/747/small/a-beautiful-young-woman-in-a-business-suit-photo.jpeg"
          alt="Profile"
          className="profile-img mb-3"
        />
        <h1 className="fw-bold name-title">Noshaba Jamil</h1>
        <p className="role">Web & App Developer | Problem Solver | Learner</p>

        {/* Contact & Social Links */}
        <div className="contact-info">
          <p><FaEnvelope /> noshaba@example.com</p>
          <p><FaPhone /> +92 300 0000000</p>
          <p><FaMapMarkerAlt /> Pakistan</p>
        </div>

        <div className="social-links">
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com/yourinstagram" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
      </div>

      {/* Skills */}
      <section className="section">
        <h4>Technical Skills</h4>
        <ul className="skills-grid">
          <li>React.js</li>
          <li>Node.js / Express.js</li>
          <li>MongoDB</li>
          <li>SQL</li>
          <li>HTML5 / CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>Bootstrap / TailwindCSS</li>
          <li>WordPress / Shopify</li>
          <li>SEO & Digital Marketing</li>
          <li>Python (Basics)</li>
          <li>C++ / Java (Intermediate)</li>
          <li>Git & GitHub</li>
          <li>RESTful APIs</li>
           
        </ul>
      </section>

      {/* Education */}
      <section className="section">
        <h4>Education</h4>
        <p><strong>BScs – Virtual University</strong> (5th semester ongoing)</p>
        <p><strong>Intertech – NEI University</strong> (Web & App Development, Year 2)</p>
      </section>

      {/* Certifications */}
      <section className="section">
        <h4>Certifications</h4>
        <ul>
          <li>Web Development Certification – NEI University</li>
          <li>JavaScript & React Course – Online Platform</li>
          <li>SEO Fundamentals – Google Digital Garage</li>
          <li>AI – NAVTECH</li>
          <li>Freelauncing – Allied Accadmey</li>
           <li>Cisco Networking Essentials – Cisco</li>
           <li> c++ Adavnce course – Cisco</li>
        </ul>
      </section>

      {/* Experience */}
      <section className="section">
        <h4>Experience</h4>
        <ul>
          <li><strong>Freelance Web & App Developer</strong> – 1 year experience delivering projects for global clients</li>
          <li><strong>SEO Project</strong> – Worked on www.primemedicalrevenue.com, improving SEO & performance</li>
          <li><strong>Teacher</strong> – Mentoring students in computer science & web development</li>
          <li><strong>Video Editor</strong> – Edited YouTube content and educational videos</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="section">
        <h4>Projects</h4>
        <ul>
          <li><strong>VU Lecture Hub</strong> – YouTube channel for Virtual University lectures</li>
          <li><strong>Interactive Birthday Game</strong> – Web-based project (React + JS)</li>
          <li><strong>Portfolio & Freelance Projects</strong> – Built responsive websites & apps for clients</li>
        </ul>
      </section>

      {/* Achievements */}
      <section className="section">
        <h4>Achievements</h4>
        <ul>
          <li>Monetized YouTube channel successfully</li>
          <li>Built interactive learning projects for fun & growth</li>
          <li>Delivered freelance projects with 100% client satisfaction</li>
        </ul>
      </section>

      {/* Languages */}
      <section className="section">
        <h4>Languages</h4>
        <ul>
          <li>English (Fluent)</li>
          <li>Urdu (Native)</li>
          
        </ul>
      </section>
    </div>
  );
};
export default CV;


