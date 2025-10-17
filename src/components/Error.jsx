import { Link } from "react-router-dom";
import "./error.css";

const Error = () => {
  return (
    <>
      {/* Hero / Breadcrumb Section */}
      <div
        className="error-hero"
        style={{
          backgroundImage:
            "url('https://jkdigisol.com/wp-content/uploads/al_opt_content/IMAGE/jkdigisol.com/wp-content/uploads/2023/08/how-to-find-and-fix-404-errors-in-wordpress.png-thegem-blog-masonry.webp?bv_host=jkdigisol.com&bv-resized-infos=bv_resized_mobile%3A480%2A273%3Bbv_resized_ipad%3A640%2A364%3Bbv_resized_desktop%3A640%2A364')",
        }}
      >
        <div className="overlay"></div>
        <div className="content">
          <h1>Error 404</h1>
          <p>Oops! The page you’re looking for doesn’t exist.</p>
          <Link to="/" className="theme-btn">
            Go Back Home
          </Link>
        </div>
      </div>

      {/* Main 404 Section */}
      <section className="error-section">
        <div className="container text-center">
          <div className="error-content">
            <h2 className="error-number">
              4<span>0</span>4
            </h2>
            <h3>Looks Like You’re Lost</h3>
            <p>
              Sorry, we couldn’t find the page you were looking for. Try going
              back to the homepage or contact us if the problem persists.
            </p>
            <Link to="/" className="theme-btn style-line-height mt-5">
              Back To Home
            </Link>
          </div>
        </div>
      </section>

      {/* Let’s Talk Section */}
      <section className="lets-talk-section">
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
    </>
  );
};

export default Error;
