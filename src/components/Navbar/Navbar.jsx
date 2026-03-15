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
    { id: "academic-highlights", label: "Academic Highlights" },
  ];

  /* Detect scroll for navbar blur */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Detect active section */
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = [
      ...menuItems.map((item) => document.getElementById(item.id)),
      document.getElementById("contact"),
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;

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

  const handleMenuItemClick = (item) => {
    setIsOpen(false);
    setActiveSection(item.id);

    if (location.pathname === "/") {
      const section = document.getElementById(item.id);
      if (section) {
        const navbarHeight = 120;
        const y =
          section.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
      return;
    }

    navigate(`/#${item.id}`);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        px-[6vw] md:px-[8vw] lg:px-[10vw]
        ${
          isScrolled
            ? "bg-white/70 backdrop-blur-xl shadow-sm border-b border-gray-200"
            : "bg-transparent"
        }
      `}
    >
      <div className="py-5 flex justify-between items-center text-theme">
        {/* Logo */}
        <div
          className="text-lg font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-accent">&lt;</span>
          Suresh Kumar
          <span className="text-accent">/</span>
          Urlana
          <span className="text-accent">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.id} className="relative group">
              <button
                onClick={() => handleMenuItemClick(item)}
                className={`transition
                  ${
                    activeSection === item.id
                      ? "text-accent"
                      : "text-theme"
                  }
                  hover:text-accent
                `}
              >
                {item.label}
              </button>

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-accent rounded-full transition-all duration-300
                  ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <button
          onClick={() => handleMenuItemClick({ id: "contact" })}
          className={`hidden md:block px-5 py-2 rounded-full border transition-all duration-300
            ${
              activeSection === "contact"
                ? "bg-blue-300/50 backdrop-blur-xl text-blue-950 font-semibold border-accent scale-105"
                : "bg-blue-100/50 backdrop-blur-xl text-blue border-gray-300 hover:scale-105"
            }
          `}
        >
          Contact
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-accent"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-accent"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-4/5
          bg-white/80 backdrop-blur-xl rounded-lg shadow-md md:hidden"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item)}
                  className={`transition
                    ${
                      activeSection === item.id
                        ? "text-accent"
                        : "text-theme"
                    }
                  `}
                >
                  {item.label}
                </button>
              </li>
            ))}

            <button
              onClick={() => handleMenuItemClick({ id: "contact" })}
              className={`mt-3 px-5 py-2 rounded-full border transition-all duration-300
                ${
                  activeSection === "contact"
                    ? "bg-accent text-white border-accent scale-105"
                    : "bg-white text-theme border-gray-300"
                }
              `}
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
