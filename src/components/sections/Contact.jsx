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
  FaCheckCircle,
  FaFileDownload,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully!", {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-[6vw] md:px-[8vw] lg:px-[10vw] flex flex-col items-center justify-center font-sans"
    >
      {/* Toast Container */}
      <ToastContainer position="top-left" />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-theme">CONTACT</h2>
        <div className="w-32 h-1 bg-blue-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="w-full bg-blue-100/50 dark:bg-slate-800/50 border border-transparent dark:border-slate-700 backdrop-blur-xl p-8 rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(10,61,171,0.35)]">
          <h3 className="text-2xl font-semibold text-theme text-center mb-6">
            Send Me A Message
          </h3>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-5">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 focus:outline-none focus:border-blue-500 text-theme shadow-sm transition-all duration-300"
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 focus:outline-none focus:border-blue-500 text-theme shadow-sm transition-all duration-300"
            />
            <input
              type="text"
              name="title"
              placeholder="Subject"
              required
              className="w-full p-4 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 focus:outline-none focus:border-blue-500 text-theme shadow-sm transition-all duration-300"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
              className="w-full p-4 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 focus:outline-none focus:border-blue-500 text-theme shadow-sm transition-all duration-300"
            />
            
            <button
              type="submit"
              className="w-full bg-blue-600 py-4 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info & Socials */}
        <div className="w-full flex flex-col justify-center bg-blue-100/50 dark:bg-slate-800/50 border border-transparent dark:border-slate-700 backdrop-blur-xl p-8 rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(10,61,171,0.35)]">
          <h3 className="text-2xl font-bold text-theme mb-8">
            Contact Information
          </h3>

          <div className="flex flex-col gap-6 mb-10">
            <div className="flex items-center gap-5">
              <div className="bg-white dark:bg-slate-900 border border-transparent dark:border-gray-600 p-4 rounded-full shadow-sm">
                <FaEnvelope size={24} className="text-blue-600" />
              </div>
              <div>
                <p className="text-theme font-bold text-lg">Email</p>
                <a href="mailto:urlanasureshkumar@gmail.com" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300 break-all">
                  urlanasureshkumar@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-5">
              <div className="bg-white dark:bg-slate-900 border border-transparent dark:border-gray-600 p-4 rounded-full shadow-sm">
                <FaLinkedin size={24} className="text-blue-600" />
              </div>
              <div>
                <p className="text-theme font-bold text-lg">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/usk2003/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  linkedin.com/in/usk2003
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-white dark:bg-slate-900 border border-transparent dark:border-gray-600 p-4 rounded-full shadow-sm">
                <FaCheckCircle size={24} className="text-green-500" />
              </div>
              <div>
                <p className="text-theme font-bold text-lg">Status</p>
                <p className="text-gray-500 dark:text-gray-400">
                  Currently seeking full-time roles & freelance opportunities
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-white dark:bg-slate-900 border border-transparent dark:border-gray-600 p-4 rounded-full shadow-sm">
                <FaClock size={24} className="text-blue-600" />
              </div>
              <div>
                <p className="text-theme font-bold text-lg">Active Hours</p>
                <p className="text-gray-500 dark:text-gray-400">
                  I typically respond within 24 hours on weekdays
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-theme mb-4">Resume</h3>
          <div className="mb-10 px-2">
            <a
              href="/cv.pdf"
              download="CV_UrlanaSureshKumar.pdf"
              className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-semibold"
            >
              Download my Resume/CV
            </a>
          </div>

        </div>

        {/* FOLLOW ME - HORIZONTAL BAR */}
        <div className="lg:col-span-2 mt-8 bg-blue-100/30 dark:bg-slate-800/30 border border-transparent dark:border-slate-700 backdrop-blur-md p-6 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between px-10 gap-6">
          <h3 className="text-2xl font-bold text-theme whitespace-nowrap">
            Follow On Social Media
          </h3>

          <div className="flex items-center gap-6 flex-wrap justify-center">
            {[
              { icon: <FaGithub />, link: "https://github.com/usk2003", name: "GitHub" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/usk2003/", name: "LinkedIn" },
              { icon: <FaInstagram />, link: "https://instagram.com/urlana_suresh_kumar", name: "Instagram" },
              { icon: <FaTwitter />, link: "https://twitter.com/usk2003", name: "Twitter" }
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                className="
                  bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-600 p-3 rounded-full shadow-sm
                  hover:bg-blue-600 dark:hover:bg-blue-600 hover:-translate-y-2 transition-all duration-300 group
                "
              >
                {React.cloneElement(item.icon, {
                  size: 24,
                  className: "text-blue-600 group-hover:text-white transition-colors duration-300"
                })}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
