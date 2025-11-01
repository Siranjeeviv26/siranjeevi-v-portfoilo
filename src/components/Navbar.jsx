// import { useEffect } from "react";

// export const Navbar = ({ menuOpen, setMenuOpen }) => {
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//   }, [menuOpen]);

//   return (
//     <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
//       <div className="max-w-5xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* <a href="#home" className="font-mono text-xl font-bold text-white">
//             pedro<span className="text-blue-500">.tech</span>
//           </a> */}

//           <div
//             className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
//             onClick={() => setMenuOpen((prev) => !prev)}
//           >
//             &#9776;
//           </div>

//           <div className="hidden md:flex items-center space-x-8 ml-auto">
//             <a href="#home" className="text-gray-300 hover:text-white transition-colors">
//               Home
//             </a>
//             <a href="#about" className="text-gray-300 hover:text-white transition-colors">
//               About
//             </a>
//             <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
//               Project
//             </a>
//             <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
//               Contact
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-white/10 transition-all duration-500">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          {/* <a href="#home" className="font-mono text-xl font-bold text-white">
            pedro<span className="text-blue-500">.tech</span>
          </a> */}

          {/* Hamburger Menu - Mobile */}
          <button
            className="w-8 h-8 relative cursor-pointer z-50 flex flex-col justify-between items-center md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            <span
              className={`block h-0.5 w-full bg-white rounded transform transition duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white rounded transform transition duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <a
              href="#home"
              className="text-gray-200 hover:text-white hover:drop-shadow-[0_0_6px_rgba(99,102,241,0.7)] transition-all"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-200 hover:text-white hover:drop-shadow-[0_0_6px_rgba(99,102,241,0.7)] transition-all"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-200 hover:text-white hover:drop-shadow-[0_0_6px_rgba(99,102,241,0.7)] transition-all"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-200 hover:text-white hover:drop-shadow-[0_0_6px_rgba(99,102,241,0.7)] transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// import { useEffect } from "react";

// export const Navbar = ({ menuOpen, setMenuOpen }) => {
//   // Lock scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//   }, [menuOpen]);

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.85)] backdrop-blur-lg border-b border-white/10 shadow-lg transition-colors duration-300">
//       <div className="max-w-5xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo / Brand */}
//           {/* <a href="#home" className="font-mono text-xl font-bold text-white">
//             pedro<span className="text-blue-500">.tech</span>
//           </a> */}

//           {/* Hamburger Menu - Mobile */}
//           <button
//             className="w-8 h-8 relative cursor-pointer z-50 flex flex-col justify-between items-center md:hidden"
//             onClick={() => setMenuOpen((prev) => !prev)}
//             aria-label={menuOpen ? "Close Menu" : "Open Menu"}
//           >
//             <span
//               className={`block h-0.5 w-full bg-white rounded transform transition duration-300 ease-in-out ${
//                 menuOpen ? "rotate-45 translate-y-2" : ""
//               }`}
//             />
//             <span
//               className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ease-in-out ${
//                 menuOpen ? "opacity-0" : ""
//               }`}
//             />
//             <span
//               className={`block h-0.5 w-full bg-white rounded transform transition duration-300 ease-in-out ${
//                 menuOpen ? "-rotate-45 -translate-y-2" : ""
//               }`}
//             />
//           </button>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8 ml-auto">
//             <a
//               href="#home"
//               className="text-gray-300 hover:text-white transition-colors"
//             >
//               Home
//             </a>
//             <a
//               href="#about"
//               className="text-gray-300 hover:text-white transition-colors"
//             >
//               About
//             </a>
//             <a
//               href="#projects"
//               className="text-gray-300 hover:text-white transition-colors"
//             >
//               Projects
//             </a>
//             <a
//               href="#contact"
//               className="text-gray-300 hover:text-white transition-colors"
//             >
//               Contact
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };
