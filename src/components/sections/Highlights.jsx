import React from "react";
import {
  SiLeetcode,
  SiCodechef,
  SiCodeforces,
  SiCodeium,
  SiGithub
} from "react-icons/si";
import { FaCertificate, FaMedal, FaCode } from "react-icons/fa";

const Highlights = () => {
  return (
    <section
      id="highlights"
      className="px-[6vw] md:px-[8vw] lg:px-[10vw] font-sans"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-theme">
          ACADEMIC HIGHLIGHTS
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* ================= CODING PROFILES ================= */}
        <div className="p-6 rounded-3xl bg-blue-100/50 dark:bg-slate-800/50 backdrop-blur-xl border border-transparent dark:border-slate-700 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(10,61,171,0.3)] flex flex-col h-full">
          
          <div className="flex items-center gap-2 mb-4">
            <FaCode className="text-blue-500 text-2xl" />
            <h3 className="text-2xl font-bold text-theme">
              Coding Profiles
            </h3>
          </div>

          <div className="grid gap-4 flex-1">
            {[
              {
                name: "LeetCode",
                icon: <SiLeetcode className="text-[#ffa116] text-3xl" />,
                link: "https://leetcode.com/usk2003",
                value: "1623",
                label: "Rating",
                sub: "Top 23%"
              },
              {
                name: "CodeChef",
                icon: <SiCodechef className="text-theme text-3xl" />,
                link: "https://www.codechef.com/users/usk2003",
                value: "1539",
                label: "Rating",
                sub: "Top 20%"
              },
              {
                name: "CodeForces",
                icon: <SiCodeforces className="text-[#2f9fff] text-3xl" />,
                link: "https://codeforces.com/profile/usk2003",
                value: "976",
                label: "Rating",
                sub: "Beginner"
              },
              {
                name: "SI - Hive",
                icon: <SiCodeium className="text-[#00eaff] text-3xl" />,
                link: "https://smartinterviews.in/profile/usk2003",
                value: "2261",
                label: "Rank",
                sub: "Diamond Rank"
              },

              /* NEW PROJECTS ITEM */
              {
                name: "GitHub",
                icon: <SiGithub className="text-theme text-3xl" />,
                link: "https://github.com/usk2003",
                value: "12+",
                label: "Projects",
                sub: "AI & Web Projects"
              }
            ].map((item) => (
              <a key={item.name} href={item.link} target="_blank" rel="noreferrer">
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border dark:border-slate-700 backdrop-blur-md hover:shadow-[0_0_18px_rgba(10,61,171,0.3)] transition">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <div>
                        <div className="font-semibold text-theme">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.sub}</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-xs font-semibold text-gray-500">{item.label}</div>
                      <div className="text-xl font-bold text-theme">{item.value}</div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-6">
            <a
              href="https://codolio.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-2 rounded-xl font-semibold border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition"
            >
              Coding Portfolio
            </a>
          </div>
        </div>

        {/* ================= CERTIFICATIONS ================= */}
        <div className="p-6 rounded-3xl bg-blue-100/50 dark:bg-slate-800/50 backdrop-blur-xl border border-transparent dark:border-slate-700 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(10,61,171,0.3)] flex flex-col h-full">
          
          <div className="flex items-center gap-3 mb-4">
            <FaCertificate className="text-blue-500 text-2xl" />
            <h3 className="text-2xl font-bold text-theme">
              Certifications
            </h3>
          </div>

          <div className="grid gap-3 flex-1">
            {[
              { issuer: "NPTEL", name: "Modern C++", link: "/certifications/nptel_cpp" },
              { issuer: "NPTEL", name: "Data Analytics using Python", link: "/certifications/nptel_python" },
              { issuer: "NPTEL", name: "Programming & DS (Python)", link: "/certifications/nptel_pdsa" },
              { issuer: "Internshala", name: "Tableau – Hands-on Training", link: "/certifications/tableau" },
              { issuer: "Smart Interviews", name: "Diamond Coder", link: "/certifications/si_diamond" }
            ].map((c, i) => (
              <div
                key={i}
                className="p-3 bg-white dark:bg-slate-800/80 border dark:border-slate-700 rounded-lg hover:shadow-[0_0_12px_rgba(10,61,171,0.2)] transition flex items-center gap-4"
              >
                
                <div>
                  <div className="text-xs text-gray-500 font-semibold">{c.issuer}</div>
                  <div className="text-theme">{c.name}</div>
                </div>

                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto text-blue-600 font-semibold text-sm hover:underline"
                >
                  View
                </a>

              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <a
              href="/certifications"
              className="inline-block px-6 py-2 rounded-xl font-semibold border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition"
            >
              View All Certificates
            </a>
          </div>
        </div>

        {/* ================= ACHIEVEMENTS ================= */}
        <div className="p-6 rounded-3xl bg-blue-100/50 dark:bg-slate-800/50 backdrop-blur-xl border border-transparent dark:border-slate-700 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(10,61,171,0.3)] flex flex-col h-full">
          
          <div className="flex items-center gap-3 mb-4">
            <FaMedal className="text-blue-500 text-2xl" />
            <h3 className="text-2xl font-bold text-theme">
              Achievements
            </h3>
          </div>

          <div className="grid gap-3 flex-1">
            {[
              "CodeChef Top 20%",
              "Rank 1657 – SI Hive",
              "39th Rank – GFG VNR Contest",
              "Finalist in National Hackathons",
              "SSC School Topper",
              "Intermediate – 98.2%"
            ].map((a) => (
              <div
                key={a}
                className="p-3 bg-white dark:bg-slate-800/80 border dark:border-slate-700 rounded-lg text-theme hover:shadow-[0_0_12px_rgba(10,61,171,0.2)] transition"
              >
                {a}
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <a
              href="/experience"
              className="inline-block px-6 py-2 rounded-xl font-semibold border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition"
            >
              View Responsibilities
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Highlights;
