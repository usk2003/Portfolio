import React from "react";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

import { responsibilities } from "../../data/responsibilities";


const PositionOfResponsibility = () => {
  return (
    <section
      id="responsibility"
      className="py-24 px-[5vw] md:px-[8vw] lg:px-[10vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-theme">POSITION OF RESPONSIBILITY</h2>
        <div className="w-32 h-1 bg-blue-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Roles where I contributed, led teams, and handled responsibilities.
        </p>
      </div>

      {/* RESPONSIBILITY CARDS */}
      <div className="space-y-10">
        {responsibilities.map((item) => (
          <div
            key={item.id}
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
            <div className="flex flex-col md:flex-row justify-between items-start">
            {/* LEFT SIDE CONTENT */}
            <div className="md:w-3/4">
              <div className="flex items-center gap-2">
                <Link
                  to={`/experience/${item.id}`}
                  className="group flex items-center gap-2"
                >
                  <span className="text-2xl font-semibold text-theme">
                    {item.role}
                  </span>
                  <FiExternalLink className="text-gray-400 group-hover:text-blue-500 transition text-2xl" />
                </Link>
              </div>
              <h4 className="text-md text-blue-600">{item.organization}</h4>

              {/* DATE BELOW POSITION (LIKE YOU WANT) */}
              <p className="text-sm text-theme mt-1">{item.date}</p>

              {/* Description */}
              <p className="mt-4 text-theme">{item.desc}</p>

              {/* Skills */}
              <div className="mt-4">
                <ul className="flex flex-wrap mt-2">
                  {item.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-blue-500/10 text-blue-600 font-semibold px-4 py-1 text-xs sm:text-sm rounded-2xl mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* RIGHT SIDE LOGO — MATCH EDUCATION STYLE */}
            <div className="flex-shrink-0">
              <img
                src={item.logo}
                alt={item.organization}
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

export default PositionOfResponsibility;
