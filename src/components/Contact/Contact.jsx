import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_axbtt7a",
      "template_1ziboq3",
      form.current,
      "Rz7W9pVF0HdDryNNL"
    ).then(
      () => {
        setIsSent(true);
        form.current.reset();
        toast.success("Message sent successfully! ✅");
      },
      () => toast.error("Failed to send message ❌")
    );
  };

  return (
    <section
      id="contact"
      className="scroll-mt-40 pb-32  px-[6vw] md:px-[8vw] lg:px-[10vw] font-sans"
    >
      <ToastContainer />

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black">CONTACT</h2>
        <div className="w-32 h-1 bg-blue-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Let's connect — message me directly or reach me via social links!
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* FORM */}
        <div className="md:col-span-3">
          <div
            className="
              bg-blue-100/50 backdrop-blur-xl
              p-6 rounded-2xl
              border border-transparent
              shadow-lg
              transition-all duration-300
              hover:-translate-y-2
              hover:border-blue-500
              hover:shadow-[0_0_30px_rgba(10,61,171,0.35)]
            "
          >
              <h3 className="text-xl font-semibold text-black text-center mb-4">
                Send Me A Message
              </h3>

              <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="
                    w-full p-3 rounded-md
                    bg-white text-black
                    border border-gray-600
                    focus:outline-none focus:border-blue-500
                  "
                />

                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="
                    w-full p-3 rounded-md
                    bg-white text-black
                    border border-gray-600
                    focus:outline-none focus:border-blue-500
                  "
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message"
                  required
                  className="
                    w-full p-3 rounded-md
                    bg-white text-black
                    border border-gray-600
                    focus:outline-none focus:border-blue-500
                  "
                />

                <button
                  type="submit"
                  className="
                    w-full py-3 rounded-md font-semibold
                    text-white
                    bg-blue-700
                    hover:opacity-90 transition
                  "
                >
                  Send
                </button>
              </form>
            </div>
        </div>

        {/* CONTACT INFO */}
        <div className="md:col-span-2">
          <div
            className="
              bg-blue-100/50 backdrop-blur-xl
              p-8 rounded-2xl
              border border-transparent
              shadow-lg
              transition-all duration-300
              hover:-translate-y-2
              hover:border-blue-500
              hover:shadow-[0_0_30px_rgba(10,61,171,0.35)]
            "
          >
              <h3 className="text-2xl font-bold text-black mb-8">
                Contact Information
              </h3>

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-white p-3 rounded-full">
                  <FaEnvelope size={22} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-black font-semibold">Email</p>
                  <p className="text-gray-400">
                    urlanasureshkumar@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-white p-3 rounded-full">
                  <FaLinkedin size={22} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-black font-semibold">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/usk2003/"
                    target="_blank"
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    linkedin.com/in/usk2003
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-black mt-10 mb-4">
                Follow Me
              </h3>

              <div className="flex items-center gap-5">
                {[
                  { icon: <FaGithub />, link: "https://github.com/usk2003" },
                  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/usk2003/" },
                  { icon: <FaInstagram />, link: "https://instagram.com" },
                  { icon: <FaTwitter />, link: "https://twitter.com/usk2003" }
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    className="
                      bg-white p-3 rounded-full
                      hover:bg-blue-600 transition
                    "
                  >
                    {React.cloneElement(item.icon, {
                      size: 22,
                      className: "text-blue-600 hover:text-white transition"
                    })}
                  </a>
                ))}
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
