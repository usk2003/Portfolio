import React from "react";
import {
  SiLeetcode,
  SiCodechef,
  SiCodeforces,
  SiGithub,
  SiCoder,
  SiCodeproject,
  SiCodeium
} from "react-icons/si";
import { FaCertificate, FaMedal } from "react-icons/fa";

const Highlights = () => {
  return (
    <section
      id="highlights"
      className="py-24 px-[6vw] md:px-[8vw] lg:px-[10vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">ACADEMIC HIGHLIGHTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>

      {/* GRID → 2×2 Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* ===================== ROW 1 — CODING PROFILES (SPAN 2 COLS) ===================== */}
        <div className="md:col-span-2 bg-gray-900 border border-white rounded-2xl p-10 shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-6">Coding Profiles</h3>

          {/* Icons + Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* LeetCode */}
            <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-[#ffa116] hover:shadow-[0_0_15px_#ffa116] transition">
              <div className="flex items-center gap-3">
                <SiLeetcode className="text-[#ffa116] text-3xl" />
                <a
                  href="https://leetcode.com/usk2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white font-semibold hover:underline hover:text-[#ffa116] transition"
                >
                  LeetCode →
                </a>

              </div>
              <p className="text-gray-400 mt-2">250+ problems</p>
              <p className="text-gray-400">Top % Rank: —</p>
            </div>

            {/* CodeChef */}
            <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-[#5b3cc4] hover:shadow-[0_0_15px_#5b3cc4] transition">
              <div className="flex items-center gap-3">
                <SiCodechef className="text-[#5b3cc4] text-3xl" />
                {/* CLICKABLE HEADING */}
                <a
                  href="https://www.codechef.com/users/usk2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white font-semibold hover:underline hover:text-[#5b3cc4] transition"
                >
                  CodeChef →
                </a>
              </div>
              <p className="text-gray-400 mt-2">1539 Rating</p>
              <p className="text-gray-400">Top 20% Worldwide</p>
            </div>

            {/* CodeForces */}
            <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-[#2f9fff] hover:shadow-[0_0_15px_#2f9fff] transition">
              <div className="flex items-center gap-3">
                <SiCodeforces className="text-[#2f9fff] text-3xl" />
                <a
                href="https://codeforces.com/profile/usk2003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-white font-semibold hover:underline hover:text-[#2f9fff] transition"
              >
                CodeForces →
              </a>
              </div>
              <p className="text-gray-400 mt-2">Beginner</p>
              <p className="text-gray-400">Improving Daily</p>
            </div>

            {/* Smart Interviews */}
            <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-[#00eaff] hover:shadow-[0_0_15px_#00eaff] transition">
              <div className="flex items-center gap-3">
                <SiCodeium className="text-[#00eaff] text-3xl" />
                {/* CLICKABLE HEADING */}
                <a
                  href="https://smartinterviews.in/profile/usk2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white font-semibold hover:underline hover:text-[#00eaff] transition"
                >
                  SI - Hive→
                </a>
              </div>
              <p className="text-gray-400 mt-2">Diamond Coder</p>
              <p className="text-gray-400">Rank: 1657 / 43000</p>
            </div>
          </div>

          {/* Total Problems Solved */}
          <p className="text-purple-400 font-bold text-center text-xl mt-6">
            ⭐ 1000+ Coding Problems Solved ⭐
            
          </p>

          {/* Codolio Button */}
          <div className="text-center mt-6">
            <a
              href="https://codolio.com/profile/usk2003"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-800 text-white rounded-xl font-semibold"
            >
              View My Coding Portfolio →
            </a>
          </div>
        </div>

        {/* ===================== ROW 2 LEFT — CERTIFICATIONS ===================== */}
        <div className="bg-gray-900 border border-white rounded-2xl p-10 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <FaCertificate className="text-purple-500 text-3xl" />
            <h3 className="text-2xl font-bold text-white">Certifications</h3>
          </div>

          <ul className="text-gray-300 space-y-3">
            <li>📘 NPTEL – Modern C++</li>
            <li>📘 NPTEL – Data Analytics using Python</li>
            <li>📘 NPTEL – Programming & Data Structures (Python)</li>
            <li>📘 Tableau – Hands-on Training</li>
            <li>📘 Smart Interviews – Diamond Smart Coder</li>
          </ul>

          {/* Certifications Page Button */}
          <div className="text-center mt-6">
            <a
              href="/certifications"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-800 text-white rounded-xl font-semibold"
            >
              View All Certifications →
            </a>
          </div>
        </div>

        {/* ===================== ROW 2 RIGHT — ACHIEVEMENTS ===================== */}
        <div className="bg-gray-900 border border-white rounded-2xl p-10 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <FaMedal className="text-purple-500 text-3xl" />
            <h3 className="text-2xl font-bold text-white">Achievements</h3>
          </div>

          <ul className="text-gray-300 space-y-3">
            <li>🏆 Solved 100+ LeetCode Hard Problems</li>
            <li>🏆 CodeChef Top 20% India</li>
            <li>🏆 39th Rank in GFG VNR Contest</li>
            <li>🏆 Finalist in 3+ National Hackathons</li>
            <li>🏆 SSC School Topper</li>
            <li>🏆 Intermediate 98.2% State Ranker</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
