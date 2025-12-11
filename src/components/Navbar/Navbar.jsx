import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }, // Contact section on homepage
    { id: "academic-highlights", label: "Academic Highlights", external: true },
  ];

  // Detect scroll for navbar blur
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section only on homepage
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = menuItems
      .filter(item => !item.external)
      .map(item => document.getElementById(item.id));

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.6;

      sections.forEach((section) => {
        if (!section) return;
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos <= bottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // NAVIGATION HANDLER
  const handleMenuItemClick = (item) => {
    setActiveSection(item.id);
    setIsOpen(false);

    // External navigation (Academic Highlights page)
    if (item.external) {
      navigate("/academic-highlights");
      return;
    }

    // Scroll on homepage
    if (location.pathname === "/") {
      const section = document.getElementById(item.id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Move to homepage with section id
    navigate(`/#${item.id}`);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[6vw] md:px-[8vw] lg:px-[10vw] ${
        isScrolled
          ? "bg-[#050414]/60 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">

        {/* Logo */}
        <div
          className="text-lg font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-[#8245ec]">&lt;</span>
          Suresh Kumar
          <span className="text-[#8245ec]">/</span>
          Urlana
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map(item => (
            <li key={item.id} className="relative cursor-pointer group">
              <button
                onClick={() => handleMenuItemClick(item)}
                className={`${
                  activeSection === item.id ? "text-[#8245ec]" : "text-gray-300"
                } hover:text-[#8245ec]`}
              >
                {item.label}
              </button>

              {/* Underline animation */}
              {!item.external && (
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#8245ec] rounded-full transition-all duration-300
                    ${activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              )}
            </li>
          ))}
        </ul>

        {/* Right Side: Minimal Aesthetic Contact Button */}
        <button
          onClick={() => handleMenuItemClick({ id: "contact" })}
          className="hidden md:block px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white 
                     hover:bg-white/20 hover:scale-105 transition-all duration-300"
        >
          Contact
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX className="text-3xl text-[#8245ec]" onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu className="text-3xl text-[#8245ec]" onClick={() => setIsOpen(true)} />
          )}
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 
                        bg-[#050414]/80 backdrop-blur-xl rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">

            {menuItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item)}
                  className={`${
                    activeSection === item.id ? "text-[#8245ec]" : "text-gray-200"
                  } hover:text-white`}
                >
                  {item.label}
                </button>
              </li>
            ))}

            {/* Contact Button in Mobile */}
            <button
              onClick={() => handleMenuItemClick({ id: "contact" })}
              className="mt-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white
                         hover:bg-white/20 transition-all duration-300"
            >
              Contact
            </button>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
