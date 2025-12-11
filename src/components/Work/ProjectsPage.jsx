import React, { useState } from "react";
import { projects } from "../../constants";

const categories = ["All Projects", "Web Development", "Machine Learning", "Others"];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  // Filter Logic
  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-10 px-[6vw] md:px-[8vw] lg:px-[10vw] font-sans">
      
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">ALL PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>

      {/* CATEGORY FILTER UI */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                activeCategory === cat
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-[#1b1d2e] text-gray-300 hover:bg-[#2a2d40]"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="border border-white/10 bg-gray-900 rounded-2xl shadow-xl 
            hover:-translate-y-2 transition duration-300 overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />

            <div className="p-6">
              <h3 className="text-2xl text-white font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 text-sm">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#251f38] text-xs text-purple-400 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 bg-gray-800 hover:bg-gray-900 text-gray-300 text-center py-2 rounded-xl font-semibold"
                >
                  GitHub
                </a>

                {project.type === "web" && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white text-center py-2 rounded-xl font-semibold"
                  >
                    Live Demo
                  </a>
                )}

                {project.type === "ml" && (
                  <a
                    href={project.colab}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white text-center py-2 rounded-xl font-semibold"
                  >
                    Notebook
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM BUTTONS */}
      <div className="mt-20 flex flex-col md:flex-row justify-center gap-6">
        <a
          href="/"
          className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-xl text-lg font-semibold text-center"
        >
          ← Return to Main Page
        </a>

        <a
          href="https://github.com/usk2003?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-800 text-white px-8 py-3 rounded-xl text-lg font-semibold text-center"
        >
          View All Projects on GitHub →
        </a>
      </div>
    </section>
  );
};


export default ProjectsPage;
