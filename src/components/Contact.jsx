 import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://noshaba.infinityfree.me/contact_backend/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        navigate("/success"); // ✅ Redirect to Success page
      } else {
        setStatus(data.message || "Message not sent. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
     {/* Let’s Talk Section */}
      <section   id="contact" className="lets-talk-section">
        <div className="container text-center">
          <div className="lets-talk-wrapper">
            <h2>
              Have a project in mind? <br /> Let’s work together!
            </h2>
            <Link to="/contact" className="theme-btn">
              Let’s Talk!
            </Link>
          </div>
        </div>
      </section>
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
                <p>Street No 20, New Model Town, Taxila</p>
              </div>
            </div>

            <div className="info-box d-flex align-items-center mb-4">
              <div className="icon"><FaPhone /></div>
              <div>
                <h5>Phone</h5>
                <p>+92 3195776141</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                className="form-control mb-3"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                className="form-control mb-3"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                className="form-control mb-3"
                rows="5"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>

              {status && <p className="mt-3 text-center text-danger">{status}</p>}
            </form>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default Contact;
