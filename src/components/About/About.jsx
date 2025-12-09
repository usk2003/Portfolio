import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[6vw] md:px-[8vw] lg:px-[10vw] font-sans mt-10 md:mt-16 lg:mt-1"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">

        {/* LEFT SIDE */}
        <div className="md:w-1/2 flex flex-col text-center md:text-left mt-8 md:mt-0">

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Suresh Kumar Urlana
          </h2>

          {/* Typing Effect */}
          <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am </span>
            <ReactTypingEffect
              text={[
                'an Aspiring Software Developer',
                'a Fullstack Developer',
                'a Competitive programmer',
                'a Canva Designer',
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

          {/* Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I enjoy building intuitive, responsive web experiences and exploring how
            technology can solve real-world problems. I’m constantly learning,
            improving, and working on projects that push my skills forward.
          </p>

          {/* BUTTONS SIDE BY SIDE */}
          <div className="flex flex-row gap-4 justify-center md:justify-start">

            {/* View CV */}
            <a
              href="https://drive.google.com/file/d/YOUR_VIEW_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 hover:scale-105 bg-gray-800 hover:bg-gray-900"
            >
              VIEW CV
            </a>

            {/* Download CV */}
            <a
              href="https://drive.google.com/file/d/1nluaC-LrGYFYihVvBQZZONK68pz3aCME/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
              }}
            >
              DOWNLOAD CV
            </a>
          </div>

          {/* CODING PROFILES */}
          <div className="mt-10">
            
            <a
              href="https://codolio.com/profile/usk2003"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-xl font-semibold text-white mb-4 hover:text-[#8245ec] cursor-pointer transition">
                My Coding Profiles
              </h3>
            </a>

            <div className="flex flex-row gap-8 justify-center md:justify-start items-center">

              {/* LeetCode */}
              <a href="https://leetcode.com/your_id" target="_blank" className="text-[#FFA116] text-3xl hover:scale-110 transition">
                <SiLeetcode />
              </a>

              {/* CodeChef */}
              <a href="https://www.codechef.com/users/your_id" target="_blank" className="text-[#5B3CC4] text-3xl hover:scale-110 transition">
                <SiCodechef />
              </a>

              {/* CodeForces */}
              <a href="https://codeforces.com/profile/your_id" target="_blank" className="text-[#2F9FFF] text-3xl hover:scale-110 transition">
                <SiCodeforces />
              </a>

            </div>
          </div>

          {/* SOCIAL LINKS — SIDE BY SIDE */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-white mb-4">
              Let's Connect
            </h3>

            <div className="flex flex-row gap-8 justify-center md:justify-start items-center">

              {/* Email */}
              <a href="mailto:urlanasureshkumar@gmail.com" className="text-red-400 text-3xl hover:scale-110 transition">
                <FaEnvelope />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/usk2003"
                target="_blank"
                className="text-blue-500 text-3xl hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/usk2003"
                target="_blank"
                className="text-gray-300 text-3xl hover:scale-110 transition"
              >
                <FaGithub />
              </a>

            </div>
          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt 64">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;
