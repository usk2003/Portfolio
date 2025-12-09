import React from "react";

// import logos
import siLogo from "../../assets/responsibility_logo/smartinterviews.png";
import nssLogo from "../../assets/responsibility_logo/nss.png";
import smLogo from "../../assets/responsibility_logo/socialmedia.png";

const responsibilities = [
  {
    id: 1,
    role: "DSA Mentor",
    organization: "Smart Interviews",
    date: "Jan 2025 – Jul 2025",
    desc: "Mentored 300+ students in Data Structures and Algorithms, provided structured guidance, improved their problem-solving skills, and helped them strengthen recursion, DP, and graph concepts.",
    skills: ["DSA", "Mentoring", "Problem Solving", "Competitive Programming"],
    logo: siLogo
  },
  {
    id: 2,
    role: "Organizing Team Member",
    organization: "NSS VNRVJIET",
    date: "2024 – Present",
    desc: "Led 5+ social initiatives including Blood Donation Camp, Village Camp, Clay Ganesha, and Fist Full of Rice while managing large-scale event execution and coordination.",
    skills: ["Leadership", "Teamwork", "Event Management"],
    logo: nssLogo
  },
  {
    id: 3,
    role: "Head Design Coordinator",
    organization: "Social Media Club, VNRVJIET",
    date: "2024 – Present",
    desc: "Designed 25+ high-engagement posts (50K+ reach) for college events including Graduation Day and Sintillashunz, handled branding and digital content strategy.",
    skills: ["Design", "Branding", "Canva", "Creativity"],
    logo: smLogo
  },
];

const PositionOfResponsibility = () => {
  return (
    <section
      id="responsibility"
      className="py-24 px-[5vw] md:px-[8vw] lg:px-[10vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">POSITION OF RESPONSIBILITY</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Roles where I contributed, led teams, and handled responsibilities.
        </p>
      </div>

      {/* RESPONSIBILITY CARDS */}
      <div className="space-y-10">
        {responsibilities.map((item) => (
          <div
            key={item.id}
            className="p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105"
          >
            <div className="flex flex-col md:flex-row justify-between items-start">
            {/* LEFT SIDE CONTENT */}
            <div className="md:w-3/4">
              <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
              <h4 className="text-md text-gray-300">{item.organization}</h4>

              {/* DATE BELOW POSITION (LIKE YOU WANT) */}
              <p className="text-sm text-gray-400 mt-1">{item.date}</p>

              {/* Description */}
              <p className="mt-4 text-gray-400">{item.desc}</p>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {item.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-200 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
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
