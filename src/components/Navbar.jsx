 import { useState, useEffect } from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Detect visible section & update URL (only on home page)
  useEffect(() => {
    if (location.pathname !== "/") return; // run only on home

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActive(id);

            // ✅ Update URL dynamically (without reloading)
            window.history.replaceState(null, "", `/${id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  // ✅ Handle click navigation or scroll
  const handleClick = (item) => {
    if (["cv", "success", "contact"].includes(item)) {
      // navigate to standalone pages
      navigate(`/${item}`);
    } else {
      if (location.pathname !== "/" && !location.pathname.includes(item)) {
        // If not on home, go home first, then scroll
        navigate("/");
        setTimeout(() => {
          document.getElementById(item)?.scrollIntoView({ behavior: "smooth" });
        }, 600);
      } else {
        document.getElementById(item)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = [
    "home",
    "about",
    "skills",
    "experties",
    "education",
    "work",
    "HireMe",
    "contact",
    "cv"
     
  ];

  return (
    <>
      {/* ✅ Sidebar toggle button for mobile */}
      <button
        className="btn btn-primary d-lg-none m-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
      >
        <FaBars />
      </button>

      {/* ✅ Sidebar Menu */}
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
