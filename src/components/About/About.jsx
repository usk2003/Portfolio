import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-28 pt-32 pb-20 px-[6vw] md:px-[10vw] text-center font-sans"
    >
      {/* Smooth fade-up */}
      <div className="max-w-6xl mx-auto flex flex-col items-center animate-[fadeUp_1s_ease]">

        {/* NAME */}
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Hi, I'm
        </h1>

        {/* Hover gradient text */}
        <h2
          className="
            text-6xl md:text-7xl font-extrabold mt-3 leading-tight 
            text-white transition-all duration-500 
            hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 
            hover:text-transparent hover:bg-clip-text hover:scale-105
          "
        >
          Suresh Kumar Urlana
        </h2>

        {/* Typing Effect */}
        <h4 className="text-2xl md:text-3xl font-semibold mt-4 text-[#8245ec]">
          <span className="text-white">I am </span>
          <ReactTypingEffect
            text={[
              "an Aspiring Software Developer",
              "a Fullstack Developer",
              "a Competitive Programmer",
              "a Designer",
            ]}
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={2000}
            cursorRenderer={(cursor) => (
              <span className="text-[#8245ec]">{cursor}</span>
            )}
          />
        </h4>

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl mt-8 leading-relaxed max-w-2xl opacity-90">
          I enjoy building intuitive, responsive web experiences and exploring how
          technology can solve real-world problems. I’m constantly learning,
          improving, and working on projects that push my skills forward.
        </p>

        {/* PREMIUM ICON ROW */}
        <div className="mt-16 w-full">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Profiles & Connect
          </h3>

          {/* ICON ROW with spacing fixed */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-4xl md:text-5xl">

            {/* LeetCode */}
            <a
              href="https://leetcode.com/your_id"
              target="_blank"
              className="
                text-[#FFA116]
                transition-all duration-300
                hover:scale-125 hover:-translate-y-1
                hover:drop-shadow-[0_0_12px_rgba(255,161,22,0.8)]
              "
            >
              <SiLeetcode />
            </a>

            {/* CodeChef */}
            <a
              href="https://www.codechef.com/users/your_id"
              target="_blank"
              className="
                text-[#5B3CC4]
                transition-all duration-300
                hover:scale-125 hover:-translate-y-1
                hover:drop-shadow-[0_0_12px_rgba(91,60,196,0.8)]
              "
            >
              <SiCodechef />
            </a>

            {/* Codeforces */}
            <a
              href="https://codeforces.com/profile/your_id"
              target="_blank"
              className="
                text-[#2F9FFF]
                transition-all duration-300
                hover:scale-125 hover:-translate-y-1
                hover:drop-shadow-[0_0_12px_rgba(47,159,255,0.8)]
              "
            >
              <SiCodeforces />
            </a>

            {/* Github */}
            <a
              href="https://github.com/usk2003"
              target="_blank"
              className="
                text-gray-300
                transition-all duration-300
                hover:scale-125 hover:-translate-y-1
                hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]
              "
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/usk2003"
              target="_blank"
              className="
                text-blue-500
                transition-all duration-300
                hover:scale-125 hover:-translate-y-1
                hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]
              "
            >
              <FaLinkedin />
            </a>

            {/* Email */}
            <a
              href="mailto:urlanasureshkumar@gmail.com"
              className="
                text-red-400
                transition-all duration-300
                hover:scale-125 hover:-translate-y-1
                hover:drop-shadow-[0_0_12px_rgba(248,113,113,0.8)]
              "
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Codolio Button */}
        <div className="mt-16">
          <a
            href="https://codolio.com/profile/usk2003"
            target="_blank"
            className="
              inline-block py-3 px-12 text-lg font-bold text-white rounded-full 
              transition duration-300 hover:scale-110
            "
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 15px #8245ec, 0 0 25px #a855f7",
            }}
          >
            View My Coding Portfolio
          </a>
        </div>

        {/* CV Buttons */}
        <div className="mt-12 flex flex-row gap-8">

          {/* View CV */}
          <a
            href="/view-cv"
            className="
              backdrop-blur-xl bg-white/10 border border-white/20 
              py-3 px-10 rounded-full text-lg text-white font-bold 
              hover:scale-110 hover:bg-white/20 transition-all duration-300
            "
          >
            VIEW CV
          </a>

          {/* Download CV */}
          <a
            href="/cv.pdf"
            download="SureshKumar_CV.pdf"
            className="
              backdrop-blur-xl bg-white/10 border border-white/20 
              py-3 px-10 rounded-full text-lg text-white font-bold 
              hover:scale-110 hover:bg-white/20 transition-all duration-300
            "
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>

      {/* Fade-up animation keyframes */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default About;
