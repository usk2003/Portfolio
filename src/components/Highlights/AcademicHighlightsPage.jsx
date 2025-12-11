import React from "react";
import Highlights from "./Highlights";
import PositionOfResponsibility from "../Experience/Experience";

const AcademicHighlightsPage = () => {
  return (
    <div className="min-h-screen">

      {/* MAIN PAGE SECTIONS */}
      <Highlights />
      <PositionOfResponsibility />

      {/* ===== BOTTOM BUTTONS ABOVE FOOTER ===== */}
      <div className="w-full flex flex-col md:flex-row justify-center gap-6 mt-12 pb-16">

        {/* Back to Education */}
        <a
          href="/#education"
          className="px-8 py-3 rounded-xl bg-purple-600 text-white font-semibold 
                     hover:bg-purple-800 transition shadow-lg
                     hover:shadow-[0_0_15px_rgba(168,85,247,0.7)] text-center"
        >
          ← Back to Education
        </a>

        {/* Back to Home */}
        <a
          href="/"
          className="px-8 py-3 rounded-xl bg-gray-800 text-white font-semibold 
                     hover:bg-gray-600 transition shadow-lg text-center"
        >
          ⌂ Home
        </a>
      </div>

    </div>
  );
};

export default AcademicHighlightsPage;
