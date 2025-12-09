import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";
import ProjectsPage from "./components/Work/ProjectsPage";
import PositionOfResponsibility from "./components/Experience/Experience";
import Highlights from "./components/Highlights/Highlights";
import CertificationsPage from "./components/Certifications/CertificationsPage";
import PDFViewer from "./components/Certifications/PDFViewer";

const App = () => {
  return (
    <Router>
      <div className="bg-[#050414]">

        {/* Background Blur */}
        <BlurBlob
          position={{ top: "35%", left: "20%" }}
          size={{ width: "30%", height: "40%" }}
        />
        
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="relative pt-20">
          <Navbar />

          <Routes>

            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Skills />
                  <Work />          {/* Shows only 4 projects */}
                  <Education />
                  <Highlights />
                  <PositionOfResponsibility />
                  <Contact />
                </>
              }
            />

            {/* Full Projects Page */}
            <Route path="/projects" element={<ProjectsPage />} />
            
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/certifications/:id" element={<PDFViewer />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
