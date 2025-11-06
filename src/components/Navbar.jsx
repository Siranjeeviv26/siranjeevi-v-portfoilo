import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-teal-500/20 transition-all duration-500">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <a href="#home" className="font-mono text-xl font-bold text-teal-700">
            Siranjeevi
          </a>

          {/* Hamburger Menu - Mobile */}
          <button
            className="w-6 h-6 relative cursor-pointer z-50 flex flex-col justify-between items-center md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            <span
              className={`block h-0.5 w-full bg-teal-700 rounded transform transition duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-teal-700 rounded transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-teal-700 rounded transform transition duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5 ml-auto">
            <a
              href="#home"
              className="text-gray-600 hover:text-teal-700 hover:drop-shadow-[0_0_6px_rgba(20,184,166,0.5)] transition-all font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-teal-700 hover:drop-shadow-[0_0_6px_rgba(20,184,166,0.5)] transition-all font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-teal-700 hover:drop-shadow-[0_0_6px_rgba(20,184,166,0.5)] transition-all font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-teal-700 hover:drop-shadow-[0_0_6px_rgba(20,184,166,0.5)] transition-all font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-md md:hidden z-40 pt-16">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a
              href="#home"
              className="text-2xl font-medium text-gray-700 hover:text-teal-700 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-2xl font-medium text-gray-700 hover:text-teal-700 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="text-2xl font-medium text-gray-700 hover:text-teal-700 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-2xl font-medium text-gray-700 hover:text-teal-700 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

