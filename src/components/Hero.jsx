 import "./hero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Hero = () => {
  return (
    <section className="hero container d-flex align-items-center py-5">
      <div className="row w-100 align-items-center">
        {/* Left side - Text */}
        <div className="col-md-5 text-center text-md-start hero-text">
          <h1 className="fw-bold mb-3 display-4">Hi!  </h1>
           <h2 className="fw-bold mb-3 display-4">I’m Noshaba</h2>
          <p 
  className="lead fs-4" 
  style={{ color: "#2C98F0" }}
>
  Web & App Developer | React | Bootstrap| Redux
</p>

     <a
            href="/cv"
            onClick={(e) => {
              e.preventDefault();
              window.open("/cv", "_blank"); // ✅ Opens only CV in new tab
            }}
            className="btn btn-outline-dark mt-3 btn-lg"
          >
            View CV
          </a>

        </div>

        {/* Right side - Image Slider (auto only) */}
        <div className="col-md-7 d-flex justify-content-center hero-image">
          <div
            id="heroCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000" // auto change every 3s
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src=" https://templatesjungle.com/wp-content/uploads/2022/02/chris-lee-designer-portfolio-figma-template-cover-1200x900.jpg"
                  className="d-block img-fluid rounded shadow-sm"
                  alt="Web Developer 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://dcpweb.co.uk/wp-content/uploads/2023/02/portfolio_cms_mln-security_content-768x662.jpg"
                  className="d-block img-fluid rounded shadow-sm"
                  alt="Web Developer 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.webtechnoz.com/wp-content/uploads/2023/05/Group-1261156376-1.jpg"
                  className="d-block img-fluid rounded shadow-sm"
                  alt="Web Developer 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
