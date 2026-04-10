import React from "react";
import { education } from "../../data/constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-10 px-[5vw] md:px-[8vw] lg:px-[10vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-theme tracking-wide">
          EDUCATION
        </h2>

        <div className="w-32 h-1 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>

        <p className="text-muted mt-6 text-lg max-w-2xl mx-auto">
          My academic journey and achievements so far.
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-10">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="
                relative p-8 rounded-3xl
                border border-white/10
                bg-blue-100/50 dark:bg-slate-800/50 border border-transparent dark:border-slate-700 backdrop-blur-xl
                shadow-lg
                hover:border-blue-500
                hover:shadow-blue-500/30
                hover:-translate-y-2
                transition-all duration-300
              "
            >
              {/* Gradient Overlay */}
              <div
                className="
                  absolute inset-0 rounded-3xl opacity-10
                  bg-gradient-to-br from-blue-500/40 via-transparent to-cyan-500/40
                "
              ></div>

              {/* Content */}
              <div className="relative flex justify-between items-center z-10">
                {/* Left Info */}
                <div className="flex-1 pr-6">
                  <h3 className="text-xl font-semibold text-theme">
                    {edu.degree}
                  </h3>

                  <p className="text-md text-blue-600 font-semibold">
                    Specialization: {edu.specialization}
                  </p>

                  <h4 className="text-md text-theme mt-1">
                    {edu.school}
                  </h4>

                   <p className="text-sm text-muted mt-1">
                    {edu.date}
                  </p>

                   <p className="mt-4 text-theme font-semibold">
                    Grade: {edu.grade}
                  </p>

                   <p className="mt-2 text-muted">
                    {edu.desc}
                  </p>
                </div>

                {/* Right Image */}
                <div className="flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="rounded-xl object-cover max-h-28 md:max-h-36 lg:max-h-40"
                  />
                </div>
              </div>
            </div>
          
        ))}
      </div>
    </section>
  );
};

export default Education;
