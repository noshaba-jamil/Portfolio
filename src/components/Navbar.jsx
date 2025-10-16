 import { useState, useEffect } from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const navigate = useNavigate();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            // optional: use hash to avoid router mismatch
            window.history.replaceState(null, "", `${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (item) => {
    if (item === "cv" || item === "success") {
      navigate(`/${item}`);
    } else {
      document.getElementById(item)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    "home",
    "about",
    "skills",
    "experties",
    "education",
    "work",
    "hireMe",
    "contact",
  ];

  return (
    <>
      <button
        className="btn btn-primary d-lg-none m-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
      >
        <FaBars />
      </button>

      <nav id="sidebarMenu" className="sidebar collapse d-lg-block">
        <div className="text-center mb-6">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/053/630/747/small/a-beautiful-young-woman-in-a-business-suit-photo.jpeg"
            alt="Profile"
            className="mb-2 rounded-circle"
            style={{ width: "120px", height: "120px", objectFit: "cover" }}
          />
          <h5 style={{ fontWeight: "bold", fontSize: "2rem" }}>Noshaba Jamil</h5>
          <p style={{ color: "#007bff", fontSize: "0.9rem" }}>
            Web & App Developer
          </p>
        </div>

        <ul className="nav flex-column text-center">
          {navItems.map((item) => (
            <li className="nav-item" key={item}>
              <a
                className={`nav-link ${active === item ? "active" : ""}`}
                onClick={() => handleClick(item)}
                style={{ cursor: "pointer" }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
