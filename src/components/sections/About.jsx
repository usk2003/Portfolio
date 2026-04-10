import React from "react";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-28 pt-32 pb-20 px-[6vw] md:px-[10vw] text-center bg-transparent"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center animate-[fadeUp_1s_ease]">

        {/* NAME */}
        <span className="text-4xl md:text-5xl font-bold text-inherit leading-tight">
          Hi, I'm
        </span>

        {/* Hover gradient name */}
        <h1
          className="
            text-6xl md:text-7xl font-extrabold mt-3 leading-tight
            text-inherit transition-all duration-500
            hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-500 hover:to-sky-600
            hover:text-transparent hover:bg-clip-text hover:scale-105
          "
        >
          Suresh Kumar Urlana
        </h1>

        {/* Typing Effect */}
        <h4 className="text-2xl md:text-3xl font-semibold mt-4">
          <span className="text-inherit">I am </span>
          <span className="text-[#0a3dab]">
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
              cursorRenderer={(cursor) => <span>{cursor}</span>}
            />
          </span>
        </h4>

        {/* Description */}
        <p className="text-inherit text-lg md:text-xl mt-8 leading-relaxed max-w-2xl opacity-80">
          I enjoy building intuitive, responsive web experiences and exploring how
          technology can solve real-world problems. I’m constantly learning,
          improving, and working on projects that push my skills forward.
        </p>

        {/* Profiles */}
        <div className="mt-16 w-full">
          <h3 className="text-2xl font-semibold text-inherit mb-6">
            Profiles & Connect
          </h3>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-4xl md:text-5xl">

            <a
              href="https://leetcode.com/usk2003"
              target="_blank"
              className="text-[#FFA116] transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <SiLeetcode />
            </a>

            <a
              href="https://www.codechef.com/users/usk2003"
              target="_blank"
              className="text-[#5B3CC4] transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <SiCodechef />
            </a>

            <a
              href="https://codeforces.com/profile/usk2003"
              target="_blank"
              className="text-[#2F9FFF] transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <SiCodeforces />
            </a>

            <a
              href="https://github.com/usk2003"
              target="_blank"
              className="text-inherit transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/usk2003"
              target="_blank"
              className="text-blue-600 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:urlanasureshkumar@gmail.com"
              className="text-red-500 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Coding Portfolio + View CV buttons side by side */}
      <div className="mt-16 flex flex-col sm:flex-row gap-6">
      <a
        href="https://codolio.com/profile/usk2003"
        target="_blank"
        className="
          inline-block py-3 px-12 text-lg font-bold text-white rounded-full
           bg-[#3b73eb] backdrop-blur-xl
          border border-white/10
          shadow-md
          hover:bg-blue-900 hover:text-white
          hover:shadow-xl hover:border-blue-500
          hover:-translate-y-1
          transition-all duration-300
        "
      >
        View Coding Portfolio
      </a>


        <Link
          to="/certifications/cv"
          className="py-3 px-12 rounded-full text-lg font-bold text-white
                    bg-[#3b73eb] hover:bg-blue-900
                    shadow-md hover:shadow-xl
                    transform hover:-translate-y-1
                    transition-all duration-300"
        >
          View CV
        </Link>
      </div>


      </div>

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
