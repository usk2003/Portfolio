import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[5vw] md:px-[8vw] lg:px-[10vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic journey and achievements so far.
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-10">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="
              p-8 rounded-2xl
              shadow-2xl border border-white 
              bg-gray-900 backdrop-blur-md
              shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
              transition-transform duration-300 hover:scale-105
            "
          >
            {/* Row layout */}
            <div className="flex justify-between items-center">

              {/* Left Info */}
              <div className="flex-1 pr-6">
                <h3 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h3>

                <p className="text-md text-purple-400 font-semibold">
                  Specialization: {edu.specialization}
                </p>

                <h4 className="text-md text-gray-300 mt-1">
                  {edu.school}
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  {edu.date}
                </p>

                <p className="mt-4 text-gray-400 font-bold">
                  Grade: {edu.grade}
                </p>

                <p className="mt-2 text-gray-400">{edu.desc}</p>
              </div>

              {/* Right Image */}
              <div className="flex-shrink-0">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="rounded-lg object-cover max-h-28 md:max-h-36 lg:max-h-40"
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
