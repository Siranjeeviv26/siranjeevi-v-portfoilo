import { useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex flex-col items-center justify-center
        backdrop-blur-2xl bg-gradient-to-b from-emerald-100/95 via-cyan-100/90 to-blue-200/95
        transition-all duration-500 ease-in-out
        ${
          menuOpen
            ? "h-[100dvh] opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
    >
      {/* --- Close Button --- */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-5 right-6 text-teal-700/80 hover:text-teal-700 text-4xl focus:outline-none transition-all duration-300"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* --- Logo or Title --- */}
      <div className="absolute top-8 left-8 text-teal-700 font-semibold text-xl tracking-wide">
        Siranjeevi<span className="text-cyan-600">.</span>
      </div>

      {/* --- Navigation Links --- */}
      <nav className="flex flex-col items-center gap-8 mt-6">
        {menuItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-medium text-gray-700 hover:text-teal-700 
              transform transition-all duration-500 hover:scale-110
              ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            style={{
              transitionDelay: menuOpen ? `${index * 100}ms` : "0ms",
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* --- Social Icons --- */}
      <div
        className={`flex gap-6 mt-12 text-gray-600 transition-all duration-700 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <a
          href="https://www.linkedin.com/in/siranjeevi-v-29216a226/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-teal-700 text-2xl transition-all hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Siranjeeviv26"
          target="_blank"
          rel="noreferrer"
          className="hover:text-teal-700 text-2xl transition-all hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:siranjeevi26@outlook.com"
          className="hover:text-teal-700 text-2xl transition-all hover:scale-110"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};