import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
            ? "bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm border-b border-gray-200 dark:border-slate-800"
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

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-300 dark:border-slate-600 text-theme hover:bg-gray-100 dark:hover:bg-slate-800 transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
          </button>

          {/* Contact Button */}
          <button
            onClick={() => handleMenuItemClick({ id: "contact" })}
            className={`hidden md:block px-5 py-2 rounded-full border transition-all duration-300
              ${
                activeSection === "contact"
                  ? "bg-blue-300/50 dark:bg-blue-900/50 backdrop-blur-xl text-blue-950 dark:text-blue-100 font-semibold border-accent scale-105"
                  : "bg-blue-100/50 dark:bg-slate-800/50 backdrop-blur-xl text-blue-600 dark:text-blue-300 border-gray-300 dark:border-slate-600 hover:scale-105"
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
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-4/5
          bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl rounded-lg shadow-md border dark:border-slate-700 md:hidden"
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
                    : "bg-white dark:bg-slate-800 text-theme border-gray-300 dark:border-slate-600"
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
