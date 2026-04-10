import React from "react";
import { projects } from "../../data/constants";

const Work = () => {
  return (
    <section
      id="work"
      className="py-10 px-[6vw] md:px-[8vw] lg:px-[10vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-theme tracking-wide">
          PROJECTS
        </h2>

        <div className="w-32 h-1 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>

        <p className="text-theme mt-6 text-lg max-w-3xl mx-auto">
          A showcase of my technical projects across Web Development,
          Machine Learning, and NLP.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 items-stretch">
        {projects.slice(0, 4).map((project) => (
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
            {/* Gradient Overlay */}
            <div
              className="
                absolute inset-0 rounded-3xl opacity-10
                bg-gradient-to-br from-blue-500/40 via-transparent to-cyan-500/40

              "
            />

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

            {/* Content */}
            <div className="relative p-6 z-10 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-theme mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 line-clamp-3">
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

              {/* Buttons (fixed at bottom of card) */}
              <div className="flex gap-4">
                {/* GitHub */}
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

                {/* Live / Notebook */}
                {project.type === "web" && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1 px-4 py-2 rounded-xl text-center font-semibold
                      text-white
                      bg-blue-500
                      hover:shadow-[0_0_25px_rgba(10,61,171,0.5)]
                      hover:-translate-y-0.5
                      transition-all duration-300
                    "
                  >
                    Live Demo
                  </a>
                )}

                {project.type === "ml" && (
                  <a
                    href={project.colab}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1 px-4 py-2 rounded-xl text-center font-semibold
                      text-white
                      bg-blue-500
                      hover:shadow-[0_0_25px_rgba(10,61,171,0.5)]
                      hover:-translate-y-0.5
                      transition-all duration-300
                    "
                  >
                    Open Notebook
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="text-center mt-20 flex flex-col md:flex-row justify-center gap-6">
        <a
          href="/projects"
          className="
            px-8 py-3 rounded-xl text-lg font-semibold
            text-white
            bg-blue-500
            hover:shadow-[0_0_25px_rgba(10,61,171,0.5)]
            transition-all duration-300
          "
        >
          View More Projects →
        </a>

        <a
          href="https://github.com/usk2003?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="
            px-8 py-3 rounded-xl text-lg font-semibold
            text-blue-600
            border border-blue-500/50
            bg-blue-500/5
            hover:bg-blue-500 hover:text-white
            hover:shadow-[0_0_30px_rgba(10,61,171,0.5)]
            transition-all duration-300
          "
        >
          View on GitHub →
        </a>
      </div>
    </section>
  );
};

export default Work;
