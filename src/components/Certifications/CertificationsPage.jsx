import React from "react";
import { Link } from "react-router-dom";

const certifications = [
  {
    id: "nptel_cpp",
    title: "NPTEL – Programming in Modern C++",
    issuer: "NPTEL | IIT Kharagpur",
    date: "Jan 2024 – Apr 2024",
    details: "Learned fundamentals of modern C++, memory management, OOP, STL, and advanced C++ programming concepts."
  },
  {
    id: "nptel_spm",
    title: "NPTEL – Software Project Management",
    issuer: "NPTEL | IIT Madras",
    date: "Jan 2024 – Apr 2024",
    details: "Understanding SDLC models, agile methodologies, risk management, estimation models, scheduling, and project execution."
  },
  {
    id: "nptel_dap",
    title: "NPTEL – Data Analytics using Python",
    issuer: "NPTEL | IIT Madras",
    date: "Jul 2023 – Oct 2023",
    details: "Mastered data cleaning, data visualization, statistics, probability, and analytics with Pandas, NumPy, and Matplotlib."
  },
  {
    id: "nptel_pdsa",
    title: "NPTEL – Programming & Data Structures (Python)",
    issuer: "NPTEL | IIT Madras",
    date: "Jul 2022 – Oct 2022",
    details: "Learned Python programming, recursion, algorithms, data structures like stacks, queues, trees, and searching/sorting."
  },
  {
    id: "tableau",
    title: "Tableau – Hands-on Training Certificate",
    issuer: "Internshala Trainings",
    date: "Apr 2024",
    details: "Worked on dashboards, visual analytics, KPIs, storyboards and created interactive business insights using Tableau."
  },
  {
    id: "si_diamond",
    title: "Smart Interviews – Diamond Smart Coder",
    issuer: "Smart Interviews Academy",
    date: "2024",
    details: "Ranked 1657/43000. Advanced DSA: graphs, DP, greedy, trees, recursion, problem-solving & competitive programming."
  }
];

const CertificationsPage = () => {
  return (
    <section className="py-12 px-[6vw] md:px-[8vw] lg:px-[10vw] font-sans">

      {/* Title Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg">Detailed overview of all my certifications 🎓</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {certifications.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-white rounded-2xl p-8 shadow-xl hover:-translate-y-2 hover:shadow-purple-500/30 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
            <p className="text-purple-400 text-sm font-semibold">{item.issuer}</p>
            <p className="text-gray-400 text-xs mb-4">{item.date}</p>

            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {item.details}
            </p>

            <Link
              to={`/certifications/${item.id}`}
              className="block text-center bg-purple-600 hover:bg-purple-800 text-white py-2 px-4 rounded-lg font-semibold mt-4 transition"
            >
              View Certificate →
            </Link>
          </div>
        ))}
      </div>

      {/* Bottom Buttons */}
      <div className="mt-20 flex flex-col md:flex-row justify-center gap-6">
        <a
          href="/#highlights"
          className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-xl text-lg font-semibold text-center"
        >
          ← Back to Highlights
        </a>

        <a
          href="/"
          className="bg-purple-600 hover:bg-purple-800 text-white px-8 py-3 rounded-xl text-lg font-semibold text-center"
        >
          Return to Main Page →
        </a>
      </div>
    </section>
  );
};

export default CertificationsPage;
