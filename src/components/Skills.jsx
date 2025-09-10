 

 import React from "react";
import { FaReact, FaWordpress, FaSearch, FaVideo } from "react-icons/fa"; // FaSearch for SEO

const skills = [
  { name: "React", icon: <FaReact />, color: "#61DBFB" },
  { name: "WordPress", icon: <FaWordpress />, color: "#21759B" },
  { name: "SEO", icon: <FaSearch />, color: "#FFAA00" }, // SEO with icon and color
  { name: "Video Editing", icon: <FaVideo />, color: "#FF5733" },
];

const Skills = () => {
  return (
    <section  >
    <div className="container my-5">
       
      <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="col text-center"
            style={{ padding: "20px" }}
          >
            {/* Icon */}
            <div
              style={{ color: skill.color, fontSize: "2rem" }}
              className="mb-2"
            >
              {skill.icon}
            </div>
            {/* Skill Name */}
            <h4
              style={{
                borderBottom: `3px solid ${skill.color}`,
                display: "inline-block",
                paddingBottom: "5px",
                fontSize: "2rem",
              }}
            >
              {skill.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Skills;
