 import "./footer.css";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Handle click (scroll or navigate)
  const handleClick = (sectionId) => {
    if (location.pathname === "/") {
      // Scroll smoothly if already on homepage
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Go to homepage first, then scroll
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 600);
    }
  };

  return (
    <footer className="footer text-center">
      <p>&copy; {new Date().getFullYear()} Noshaba Jamil | All Rights Reserved</p>
      <div className="footer-links">
        <a onClick={() => handleClick("home")} style={{ cursor: "pointer" }}>
          Home
        </a>
        <a onClick={() => handleClick("about")} style={{ cursor: "pointer" }}>
          About
        </a>
        <a onClick={() => handleClick("skills")} style={{ cursor: "pointer" }}>
          Services
        </a>
        <a onClick={() => navigate("/contact")} style={{ cursor: "pointer" }}>
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;

