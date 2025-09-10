 import React, { useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            // Remove animation when leaving viewport so it replays
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <section id="about" className="about-section">
    <div className="about-container" ref={aboutRef}>
      <div className="about-content">
        <h4>About Me</h4>
        <h2>Who Am I?</h2>
        <p>
          Hi, I'm Noshaba Jamil. I am a passionate Web & App Developer,
          constantly exploring new technologies and building interactive
          projects. On my journey, I have gained experience in web development,
          WordPress, Shopify, React, and professional video editing.
        </p>
        <p>
          I started my career with freelancing and teaching, learning to solve
          real-world problems while helping others. Even when challenges
          appeared, I focused on improving my skills and delivering quality
          work. I believe that every project is an opportunity to learn and
          grow.
        </p>
        <p>
          Beyond development, I am passionate about creating applications that
          make people's lives easier and more engaging. I strive to combine
          creativity and technology to bring ideas to life in meaningful ways.
        </p>
      </div>
    </div>
    </section>
  );
  
};

export default About;

