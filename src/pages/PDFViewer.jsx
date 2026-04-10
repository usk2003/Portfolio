import React from "react";
import { useParams, Link } from "react-router-dom";

// Map certificate IDs to PDF paths
const pdfFiles = {
  nptel_cpp: "/certifications/nptel_cpp.pdf",
  nptel_spm: "/certifications/nptel_spm.pdf",
  nptel_dap: "/certifications/nptel_dap.pdf",
  nptel_pdsa: "/certifications/nptel_pdsa.pdf",
  tableau: "/certifications/internshala_tableau.pdf",
  si_diamond: "/certifications/si_diamond.pdf",
  cv: "/cv.pdf",
};

// Titles for display
const pdfTitles = {
  nptel_cpp: "NPTEL – Programming in Modern C++",
  nptel_dap: "NPTEL – Data Analytics using Python",
  nptel_pdsa: "NPTEL – Programming & Data Structures (Python)",
  tableau: "Tableau – Hands-on Training",
  si_diamond: "Smart Interviews – Diamond Smart Coder",
  cv: "Curriculum Vitae — Urlana Suresh Kumar"
};

const PDFViewer = () => {
  const { id } = useParams();
  const pdfSrc = pdfFiles[id];
  const title = pdfTitles[id];

  // PDF not found
  if (!pdfSrc) {
    return (
      <div className="text-center text-white mt-40">
        <h2 className="text-3xl font-bold">Certificate Not Found</h2>
        <Link
          to="/certifications"
          className="text-blue-400 underline mt-4 block"
        >
          Go Back to Certifications
        </Link>
      </div>
    );
  }

  return (
    <section className="py-24 px-[6vw] md:px-[8vw] lg:px-[10vw] font-sans">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-theme">{title}</h2>
        <div className="w-32 h-1 bg-blue-500 mx-auto mt-4"></div>
      </div>

      {/* PDF Viewer */}
      <div className="w-full aspect-[4/3] bg-black rounded-xl overflow-hidden border border-gray-700 shadow-xl">
        <iframe
          src={pdfSrc}
          title={title}
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">
        {id !== "cv" && (
          <Link
            to="/certifications"
            className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-xl text-lg font-semibold text-center"
          >
            ← Back to Certifications
          </Link>
        )}

        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl text-lg font-semibold text-center"
        >
          ← Return to Main Page
        </Link>
        {id === "cv" && (
          <a
            href={pdfSrc}
            download="CV_UrlanaSureshKumar.pdf"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl text-lg font-semibold text-center"
          >
            Download CV
          </a>
        )}
      </div>

      
    </section>
  );
};

export default PDFViewer;
