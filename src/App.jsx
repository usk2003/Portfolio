import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Work from "./components/sections/Work";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

import ProjectsPage from "./pages/ProjectsPage";
import CertificationsPage from "./pages/CertificationsPage";
import PDFViewer from "./pages/PDFViewer";
import AcademicHighlightsPage from "./pages/AcademicHighlightsPage";
import ResponsibilityDetail from "./pages/ResponsibilityDetail";
import MouseGlow from "./components/ui/MouseGlow";


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
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      // Using rootMargin compensates for the 20px jump during animation
      // Top boundary expanded by 100px so it doesn't blink when scrolling up.
      // Bottom boundary shrunken by 50px so animation triggers a bit later for visual effect.
      { rootMargin: "100px 0px -50px 0px", threshold: 0 }
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
        <div className="absolute inset-0 -z-10 bg-theme transition-colors duration-300">

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
              absolute inset-0 pointer-events-none
              bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]
              dark:bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2),transparent_70%)]
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
