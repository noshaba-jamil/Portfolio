 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Highlight from "./Highlight";
import CV from "./components/CV";
import Experties from "./components/Experties";
import Specialty from "./components/Specialty";
import StatsSection from "./components/StatesSection";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Success from "./components/success";
import "./app.css";

function HomePage() {
  return (
    <>
      <WhatsAppButton />
      <Hero />
      <About />
      <Skills />
      <Highlight />
      <Experties />
      <StatsSection />
      <Specialty />
      <Education />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="layout">
        {/* ✅ Navbar always visible */}
        <Navbar />

        {/* ✅ Page Content */}
        <div className="content">
          <Routes>
            {/* ✅ Home Page */}
            <Route path="/" element={<HomePage />} />

            {/* ✅ Separate Pages */}
            <Route path="/cv" element={<CV />} />
            <Route path="/success" element={<Success />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/hero" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/highlight" element={<Highlight />} />
            <Route path="/experties" element={<Experties />} />
            <Route path="/stats" element={<StatsSection />} />
            <Route path="/specialty" element={<Specialty />} />
            <Route path="/education" element={<Education />} />
            <Route path="/work" element={<Work />} />

            {/* ✅ Fallback (for 404) */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
