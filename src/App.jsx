 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Highlight from "./Highlight"; // fixed import
import CV from "./components/CV";
import Expertise from "./components/Experties";
import Specialty from "./components/Specialty";
import StatsSection from "./components/StatesSection";
import  Education from "./components/Education";
import  Contact from "./components/Contact";
import "./app.css";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="layout">
        {/* Sidebar always visible */}
        <Navbar />

        {/* Main Content */}
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Highlight />
                   <Expertise />
                   <StatsSection></StatsSection>
                   <Specialty></Specialty>
                   <Education></Education>
                   <Work></Work>
                   
                  <Contact></Contact>
                   <Footer></Footer>
                </>
              }
            />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

