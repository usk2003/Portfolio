import React from "react";
import Highlights from "../components/sections/Highlights";
import PositionOfResponsibility from "../components/sections/Experience";

const AcademicHighlightsPage = () => {
  return (
    <section
      id="academic-highlights"
      className="scroll-mt-32 pt-16  min-h-screen"
    >
      {/* MAIN PAGE SECTIONS */}
      <Highlights />
      <PositionOfResponsibility />
    </section>
  );
};

export default AcademicHighlightsPage;
