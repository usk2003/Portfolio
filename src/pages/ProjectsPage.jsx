import React, { useState } from "react";
import { projects } from "../data/constants";

const categories = [
  "All Projects",
  "Machine Learning",
  "Web Development",
  "Others",
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 px-[6vw] md:px-[8vw] lg:px-[10vw]">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-theme">ALL PROJECTS</h2>
        <div className="w-32 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                activeCategory === cat
                  ? "bg-accent text-white shadow-md"
                  : "bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-theme dark:hover:border-accent"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 items-stretch">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="
              relative rounded-3xl overflow-hidden
              border border-white/10
              bg-blue-100/50 dark:bg-slate-800/50 border dark:border-slate-700 backdrop-blur-xl
              shadow-lg
              hover:border-blue-500
              hover:shadow-blue-500/30
              hover:-translate-y-2
              transition-all duration-300
              flex flex-col h-full
            "
          >
            {/* Accent glow layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-transparent to-cyan-500/40 opacity-5 rounded-3xl"></div>

            {/* Image */}
            <div className="relative p-4 z-10">
              <div className="w-full aspect-video rounded-2xl overflow-hidden bg-white/5 dark:bg-slate-900/50 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="p-6 relative z-10 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold text-theme mb-2">
                {project.title}
              </h3>

              <p className="text-muted text-sm mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="
                      px-3 py-1 rounded-full text-xs font-semibold
                      bg-blue-500/10 text-blue-600
                      border border-blue-500/40
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons (pinned to bottom) */}
              <div className="mt-auto flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex-1 px-4 py-2 rounded-xl text-center font-semibold
                    text-blue-600
                    border border-blue-500/50
                    bg-blue-500/5 backdrop-blur
                    hover:bg-blue-500 hover:text-white
                    hover:shadow-[0_0_25px_rgba(10,61,171,0.5)]
                    transition-all duration-300
                  "
                >
                  GitHub
                </a>

                {project.type === "web" && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-1/2 text-center py-2 rounded-xl font-semibold
                      bg-accent text-white
                      hover:shadow-md hover:opacity-90
                      transition-all duration-300
                    "
                  >
                    Live Demo
                  </a>
                )}

                
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Buttons */}
      <div className="mt-20 flex flex-col md:flex-row justify-center gap-6">
        <a
          href="/"
          className="
            px-8 py-3 rounded-xl text-lg font-semibold text-center
            border border-gray-300 text-theme
            hover:border-accent hover:text-accent
            transition-all
          "
        >
          ← Return to Main Page
        </a>

        <a
          href="https://github.com/usk2003?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-8 py-3 rounded-xl text-lg font-semibold text-center
            bg-accent text-white
            hover:shadow-md hover:opacity-90
            transition-all
          "
        >
          View All Projects on GitHub →
        </a>
      </div>
    </section>
  );
};

export default ProjectsPage;
