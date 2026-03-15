import React from "react";
import Highlights from "./Highlights";
import PositionOfResponsibility from "../Experience/Experience";

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
