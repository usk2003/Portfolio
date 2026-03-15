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
import ResponsibilityDetail from "./components/Experience/ResponsibilityDetail";
import MouseGlow from "./components/MouseGlow";


// UPDATED SCROLL HANDLER
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        const navbarHeight = 120; // Adjust if your navbar height changes

        setTimeout(() => {
          const rect = el.getBoundingClientRect();
          const elementY = rect.top + window.pageYOffset;
          const offsetY = elementY - navbarHeight;

          window.scrollTo({
            top: offsetY,
            behavior: "smooth",
          });
        }, 150); // Wait for DOM to render
      }
    }
  }, [location]);

  return null;
}


const App = () => {
  useEffect(() => {
    // Observe all section elements and toggle 'in-view' for smooth entrance animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
          else entry.target.classList.remove("in-view");
        });
      },
      { threshold: 0.12 }
    );

    const sections = Array.from(document.querySelectorAll("section"));
    sections.forEach((s) => {
      s.classList.add("section-animate");
      observer.observe(s);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <Router>
      <ScrollToHash />

      <div className="relative min-h-screen w-full overflow-hidden">

        {/* ------------------- BACKGROUND ------------------- */}
        <div className="absolute inset-0 -z-10 bg-[#ffffff]">

          {/* Very Soft Purple Mist */}
          <div
            className="
              absolute top-[-200px] left-[-150px]
              w-[600px] h-[600px]
              bg-blue-700/15 blur-[160px] rounded-full
            "
          />

          {/* Secondary Soft Purple Glow */}
          <div
            className="
              absolute bottom-[-200px] right-[-150px]
              w-[500px] h-[500px]
              bg-blue-500/10 blur-[150px] rounded-full
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

        <MouseGlow />

        {/* CONTENT */}
        <div className="relative z-10 pt-5">
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
                  <AcademicHighlightsPage/>
                  <Contact />
                </>
              }
            />

            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/certifications/:id" element={<PDFViewer />} />
            <Route path="/experience/:id" element={<ResponsibilityDetail />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
