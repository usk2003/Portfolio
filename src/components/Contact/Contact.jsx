import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Icons
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaTwitter,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_axbtt7a",
        "template_1ziboq3",
        form.current,
        "Rz7W9pVF0HdDryNNL"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅");
        },
        (error) => {
          console.error("Error:", error);
          toast.error("Failed to send message ❌");
        }
      );
  };

  return (
    <section
      id="contact"
      className="
        scroll-mt-40 
        pb-32 
        flex flex-col items-center justify-center 
        py-24 px-[6vw] md:px-[8vw] lg:px-[10vw] 
        font-sans
      "
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Let's connect — message me directly or reach me via social links!
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* LEFT — FORM */}
        <div className="md:col-span-2 bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-white text-center mb-4">
            Send Me A Message
          </h3>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 
                        focus:outline-none focus:border-purple-500"
            />

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 
                        focus:outline-none focus:border-purple-500"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 
                        focus:outline-none focus:border-purple-500"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white 
                        font-semibold rounded-md hover:opacity-90 transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* RIGHT — CONTACT INFO */}
        <div className="md:col-span-1 bg-[#0d081f] p-8 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

          {/* Email */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-[#101626] p-3 rounded-full">
              <FaEnvelope size={24} className="text-blue-400" />
            </div>
            <div>
              <p className="text-white font-semibold text-lg">Email</p>
              <p className="text-gray-400">urlanasureshkumar@gmail.com</p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-[#101626] p-3 rounded-full">
              <FaLinkedin size={24} className="text-blue-400" />
            </div>
            <div>
              <p className="text-white font-semibold text-lg">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/usk2003/"
                target="_blank"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                linkedin.com/in/usk2003
              </a>
            </div>
          </div>

          {/* FOLLOW ME */}
          <h3 className="text-xl font-bold text-white mt-10 mb-4">Follow Me</h3>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/usk2003"
              target="_blank"
              className="bg-[#101626] p-3 rounded-full hover:bg-[#182239] transition"
            >
              <FaGithub size={24} className="text-gray-300 hover:text-white transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/usk2003/"
              target="_blank"
              className="bg-[#101626] p-3 rounded-full hover:bg-[#182239] transition"
            >
              <FaLinkedin size={24} className="text-blue-400 hover:text-blue-300 transition" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="bg-[#101626] p-3 rounded-full hover:bg-[#182239] transition"
            >
              <FaInstagram size={24} className="text-pink-400 hover:text-pink-300 transition" />
            </a>

            <a
              href="https://twitter.com/usk2003"
              target="_blank"
              className="bg-[#101626] p-3 rounded-full hover:bg-[#182239] transition"
            >
              <FaTwitter size={24} className="text-blue-400 hover:text-blue-300 transition" />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
