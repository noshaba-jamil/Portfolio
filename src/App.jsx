 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Highlight from "./Highlight"; // fixed import
import CV from "./components/CV";
import Experties from "./components/Experties";
import Specialty from "./components/Specialty";
import StatsSection from "./components/StatesSection";
import  Education from "./components/Education";
import  Contact from "./components/Contact";
import "./app.css";
import Work from "./components/Work";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Success from "./components/success";

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
                  <WhatsAppButton/>
                  <Hero />
                  <About />
                  <Skills  path="/skills" element={<Skills />}/>
                  <Highlight path="/hireMe" element={<Highlight/>}/>
                   <Experties path="/experties" element={<Experties/>}/>
                   <StatsSection  path="/StatsSection" element={<StatsSection/>} />
                   <Specialty path="/Specialty" element={<Specialty/>} /> 
                   <Education path="/Education" element={<Education/>} />  
                   <Work path="/ Work" element={<Work/>} /> 
                   
                  <Contact  path="/  Contact" element={<Contact/>} />  
                   <Footer   path="/  Footer" element={< Footer/>} />
                </>
              }
            />
            <Route path="/cv" element={<CV/>} />
             <Route path="/success" element={<Success/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

