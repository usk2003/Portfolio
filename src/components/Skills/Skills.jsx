import React from "react";
import Tilt from "react-parallax-tilt";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-10 px-[5vw] md:px-[8vw] lg:px-[10vw]"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-theme tracking-wide">
          SKILLS
        </h2>

        {/* Same accent as used everywhere */}
        <div className="w-32 h-1 mx-auto mt-4 bg-accent rounded-full"></div>

        <p className="text-muted mt-6 text-lg max-w-2xl mx-auto">
          Technologies and tools I work with to build scalable, modern applications.
        </p>
      </div>

      {/* Dynamic Flexible Skills Layout */}
      <div className="flex flex-wrap justify-center gap-10">
        {SkillsInfo.map((category) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            scale={1.03}
            className="w-full sm:w-[47%] lg:w-[30%]"
          >
            {/* OUTER CARD */}
            <div
              className="
                relative rounded-3xl p-4
                border border-white/10
                bg-blue-100/50 backdrop-blur-xl
                shadow-lg
                hover:border-blue-500
                hover:shadow-blue-500/30
                hover:-translate-y-2
                transition-all duration-300
              "
            >
              {/* Accent glow layer (same as heading underline) */}
              <div
                className="
                  absolute inset-0 rounded-3xl opacity-10
                  bg-gradient-to-br from-blue-500/40 via-transparent to-cyan-500/40
                "
              ></div>

              {/* Category Title */}
              <h3 className="relative text-xl font-semibold text-theme mb-4 text-center z-10">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="relative flex flex-wrap justify-center gap-3 z-10">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      flex items-center gap-2 px-4 py-2 rounded-full
                      bg-white border border-gray-200
                      hover:border-accent hover:bg-accent/5
                      transition-all duration-300
                    "
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-5 h-5"
                    />
                    <span className="text-theme text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
