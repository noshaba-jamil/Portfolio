 import "./highlight.css";
import  { useEffect, useRef } from "react";
const Highlight = () => {
  const highlightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate"); // replay animation
          }
        });
      },
      { threshold: 0.3 }
    );

    if (highlightRef.current) {
      observer.observe(highlightRef.current);
    }

    return () => {
      if (highlightRef.current) observer.unobserve(highlightRef.current);
    };
  }, []);
  return (
    <section ref={highlightRef} id="hierMe" className="highlight-section py-5 text-center">

      <div className="container">
         
 <p className="display-5 mb-2">I am happy to know you</p>
<p className="display-6 mb-4">
  that <strong>I Recently completed my internship</strong>  successfully!
</p>

        <a href="contact/" className="btn btn-dark btn-lg">
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Highlight;
