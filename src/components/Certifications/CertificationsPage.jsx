import React from "react";
import { Link } from "react-router-dom";

// Load all thumbnails dynamically
const thumbnails = import.meta.glob("/src/assets/certifications/*.png", {
  eager: true,
  import: "default"
});

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
  // Attach thumbnails
  const dataWithImages = certifications.map((item) => ({
    ...item,
    img: thumbnails[`/src/assets/certifications/${item.id}.png`]
  }));

  return (
    <section className="py-24 px-[6vw] md:px-[8vw] lg:px-[10vw] font-sans">

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-blue-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg">Detailed overview of all my certifications 🎓</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {dataWithImages.map((item, index) => (
          <div
            key={index}
            className="bg-blue-100/50 border border-blue-600 rounded-2xl p-6 shadow-xl hover:-translate-y-2 hover:shadow-blue-500/30 transition duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-44 object-cover rounded-lg mb-4"
            />

            <h3 className="text-xl font-semibold text-black mb-1">{item.title}</h3>
            <p className="text-blue-800 text-sm font-semibold">{item.issuer}</p>
            <p className="text-black text-xs mb-4">{item.date}</p>

            <p className="text-black text-sm mb-4 leading-relaxed">{item.details}</p>
            <Link
              to={`/certifications/${item.id}`}
              className="block text-center bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-lg font-semibold mt-4 transition"
            >
              View Certificate →
            </Link>
          </div>
        ))}
      </div>

    </section>
  );
};

export default CertificationsPage;
