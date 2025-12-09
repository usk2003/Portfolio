import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 px-[6vw] md:px-[8vw] lg:px-[10vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of my technical projects across Web Development,
          Machine Learning, and NLP.
        </p>
      </div>

      {/* Projects Grid → Always 2 per row for md & lg */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {projects.slice(0,4).map((project) => (
          <div
            key={project.id}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons Section */}
              <div className="flex gap-3 mt-4">
                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 px-4 py-2 rounded-xl text-center font-semibold"
                >
                  GitHub
                </a>

                {/* Dynamic Button */}
                {project.type === "web" && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl text-center font-semibold"
                  >
                    Live Demo
                  </a>
                )}

                {project.type === "ml" && (
                  <a
                    href={project.colab}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl text-center font-semibold"
                  >
                    Open Notebook
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-[90%] max-w-3xl overflow-hidden relative">

            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center px-4">
                <img
                  src={selectedProject.image}
                  className="w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>

              <div className="p-6 lg:p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-400 mb-6">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons in Modal */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-300 px-6 py-2 rounded-xl text-xl text-center font-semibold"
                  >
                    GitHub
                  </a>

                  {selectedProject.type === "web" && (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-xl text-xl text-center font-semibold"
                    >
                      Live Demo
                    </a>
                  )}

                  {selectedProject.type === "ml" && (
                    <a
                      href={selectedProject.colab}
                      target="_blank"
                      className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-xl text-xl text-center font-semibold"
                    >
                      Colab Notebook
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View More + GitHub Buttons */}
      <div className="text-center mt-16 flex flex-col md:flex-row justify-center gap-6">
        
        <a
          href="/projects"
          className="bg-purple-600 hover:bg-purple-800 text-white px-8 py-3 rounded-xl text-lg font-semibold transition"
        >
          View More Projects →
        </a>
      

        <a
          href="https://github.com/usk2003?tab=repositories"
          target="_blank"
          className="bg-gray-800 hover:bg-gray-900 text-gray-300 px-8 py-3 rounded-xl text-lg font-semibold transition"
        >
          View on GitHub →
        </a>

      </div>

    </section>
  );
};

export default Work;
