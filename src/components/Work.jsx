 
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./work.css";
 import myImage from "../assets/portfolio/myImage.png";
  import ecomrace from "../assets/portfolio/ecomrace.webp";



const projects = [
  {
    title: "Medical Billing Website",
    description: "A responsive WordPress website for a U.S.-based medical billing service with SEO optimization.",
    img:   ecomrace, // Replace with your project image
    liveLink: "https://primemedicalrevenue.com", 
    github: "https://github.com/yourusername/medical-billing"
  },
  {
    title: "Portfolio Website",
    description: "A React-based personal portfolio website showcasing skills and projects.",
    img: myImage,
    liveLink: "https://yourportfolio.com",
    github: "https://github.com/yourusername/portfolio"
  },
  {
    title: "E-commerce Store",
    description: "Shopify + custom theme development with product pages and cart system.",
    img: "https://thecodinghubs.com/wp-content/uploads/2024/02/Ecommerce-website-source-code.webp ",
    liveLink: "https://yourecommercestore.com",
    github: "https://github.com/yourusername/ecommerce-store"
  }
];

const Work = () => {
  return (
   
      <section id="work" className="work-section"> 
      <h2 className="text-center mb-5">My Work</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card work-card shadow-sm">
              <img src={project.img} alt={project.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="d-flex justify-content-between">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    Live <FaExternalLinkAlt />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm">
                    Code <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
