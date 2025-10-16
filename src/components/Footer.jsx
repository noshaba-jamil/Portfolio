import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer text-center">
      <p>&copy; {new Date().getFullYear()} Noshaba Jamil | All Rights Reserved</p>
      <div className="footer-links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/about">Services</a>
        <a href="/contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
