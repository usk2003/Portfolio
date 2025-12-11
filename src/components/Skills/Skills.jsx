// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 px-[5vw] md:px-[8vw] lg:px-[10vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
          SKILLS
        </h2>

        <div className="w-32 h-1 mx-auto mt-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          A showcase of the technologies I use to build efficient, scalable and
          user-friendly applications.
        </p>
      </div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="
              rounded-3xl p-8 border border-gray-700 
              bg-gradient-to-br from-[#10101f] to-[#1d1d35]
              shadow-xl hover:shadow-[0_0_25px_rgba(130,69,236,0.3)]
              transition-all duration-300
            "
          >
            <h3 className="text-3xl font-semibold text-gray-200 mb-6 text-center tracking-wide">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {category.skills.map((skill) => (
                <Tilt
                  key={skill.name}
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  scale={1.08}
                  transitionSpeed={800}
                >
                  <div
                    className="
                      flex flex-col items-center justify-center py-4 px-3 rounded-2xl
                      bg-white/5 border border-gray-700 backdrop-blur-md
                      hover:bg-white/10 hover:border-purple-500
                      hover:shadow-[0_0_15px_rgba(130,69,236,0.4)]
                      transition-all duration-300 cursor-pointer
                    "
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-9 h-9 object-contain mb-2"
                    />
                    <span className="text-sm text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills */}
      <div
        className="
          mt-20 rounded-3xl p-10 
          bg-gradient-to-br from-[#10101f] to-[#1d1d35]
          border border-gray-700 shadow-xl
          hover:shadow-[0_0_25px_rgba(130,69,236,0.3)]
          transition-all duration-300
        "
      >
        <h3 className="text-3xl font-semibold text-gray-200 mb-10 text-center tracking-wide">
          Soft Skills
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { name: "Teamwork", icon: "👥" },
            { name: "Communication", icon: "💬" },
            { name: "Problem Solving", icon: "🧠" },
            { name: "Leadership", icon: "⭐" },
            { name: "Time Management", icon: "⏱️" },
            { name: "Adaptability", icon: "🔄" },
          ].map((item) => (
            <Tilt key={item.name} scale={1.08} transitionSpeed={900}>
              <div
                className="
                  flex items-center justify-center gap-3 py-4 px-4 rounded-2xl
                  bg-white/5 border border-gray-700 backdrop-blur-md
                  hover:bg-white/10 hover:border-purple-500
                  hover:shadow-[0_0_15px_rgba(130,69,236,0.4)]
                  transition-all duration-300 cursor-pointer
                "
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-gray-300 font-medium text-lg">{item.name}</span>
              </div>
            </Tilt>
          ))}
        </div>
      </div>

      {/* Languages Known */}
      <div
        className="
          mt-20 rounded-3xl p-10 
          bg-gradient-to-br from-[#10101f] to-[#1d1d35]
          border border-gray-700 shadow-xl
          hover:shadow-[0_0_25px_rgba(130,69,236,0.3)]
          transition-all duration-300
        "
      >
        <h3 className="text-3xl font-semibold text-gray-200 mb-10 text-center tracking-wide">
          Languages Known
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { name: "English", icon: "ABC", color: "text-blue-400" },
            { name: "Telugu", icon: "అఆ", color: "text-green-400" },
            { name: "Hindi", icon: "अआ", color: "text-orange-400" },
          ].map((lang) => (
            <Tilt key={lang.name} scale={1.08} transitionSpeed={900}>
              <div
                className="
                  flex items-center justify-center gap-3 py-4 px-4 rounded-2xl
                  bg-white/5 border border-gray-700 backdrop-blur-md
                  hover:bg-white/10 hover:border-purple-500
                  hover:shadow-[0_0_15px_rgba(130,69,236,0.4)]
                  transition-all duration-300 cursor-pointer
                "
              >
                <span className={`text-2xl font-bold ${lang.color}`}>{lang.icon}</span>
                <span className="text-gray-300 font-medium text-lg">{lang.name}</span>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
