import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import ProjectsPage from "./components/Work/ProjectsPage";
import CertificationsPage from "./components/Certifications/CertificationsPage";
import PDFViewer from "./components/Certifications/PDFViewer";
import AcademicHighlightsPage from "./components/Highlights/AcademicHighlightsPage";
import MouseGlow from "./components/MouseGlow";


function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      setTimeout(() => {
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, [location]);

  return null;
}

const App = () => {
  return (
    <Router>
      <ScrollToHash />

      <div className="relative min-h-screen w-full overflow-hidden">

        {/* ------------------- DARK GRAY + LIGHT PURPLE BACKGROUND ------------------- */}
        <div className="absolute inset-0 -z-10 bg-[#0a0616]">

          {/* Very Soft Purple Mist */}
          <div
            className="
              absolute top-[-200px] left-[-150px]
              w-[600px] h-[600px]
              bg-purple-700/15 blur-[160px] rounded-full
            "
          />

          {/* Secondary Soft Purple Glow */}
          <div
            className="
              absolute bottom-[-200px] right-[-150px]
              w-[500px] h-[500px]
              bg-purple-500/10 blur-[150px] rounded-full
            "
          />

          {/* Faint Gray Vignette */}
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]
            "
          />
        </div>
        {/* ---------------------------------------------------------------------- */}
         <MouseGlow />
        {/* CONTENT */}
        <div className="relative z-10 pt-20">
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Skills />
                  <Work />
                  <Education />
                  <Contact />
                </>
              }
            />

            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/certifications/:id" element={<PDFViewer />} />
            <Route path="/academic-highlights" element={<AcademicHighlightsPage />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
