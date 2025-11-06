// import { RevealOnScroll } from "../RevealOnScroll";
// import { HiDownload } from "react-icons/hi";
// import { motion } from "framer-motion";
// import resumePDF from "../../../src/assets/Siranjeevi.pdf";

// export const Home = () => {
//   const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen w-full flex items-center justify-center relative py-20 
//                  bg-gradient-to-br from-emerald-200 via-cyan-100 to-blue-200"
//     >
//       {/* Background Glow Effect */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] 
//                         bg-blue-400/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
//         </div>
//       </div>

//       {/* Floating Vertical Resume Button (Desktop Only, constrained to this section) */}
//       <div className="absolute right-5 top-1/2 -translate-y-1/2 hidden md:flex z-10">
//         <a
//           href={resumePDF}
//           download
//           className="bg-gradient-to-b from-teal-600 to-cyan-600 
//                      rounded-lg shadow-lg overflow-hidden
//                      hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] 
//                      transition-all duration-300 hover:-translate-y-1 hover:scale-105
//                      animate-pulse" // Added blinking effect
//         >
//           <div
//             className="flex flex-col items-center justify-center px-3 py-4 font-semibold tracking-widest
//                        text-white select-none"
//             style={{
//               writingMode: "vertical-rl",
//               textOrientation: "upright",
//               letterSpacing: "0.15em",
//             }}
//           >
//             RESUME
//           </div>
//         </a>
//       </div>

//       <RevealOnScroll>
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fadeUp}
//           className="text-center z-10 px-6"
//         >
//           <motion.h1
//             variants={fadeUp}
//             custom={1}
//             className="text-5xl md:text-7xl font-bold mb-6 text-gray-800"
//           >
//             Hi, I'm <span className="text-teal-700">Siranjeevi</span>
//           </motion.h1>

//           <motion.p
//             variants={fadeUp}
//             custom={2}
//             className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
//           >
//             I'm a <span className="text-teal-700 font-semibold">Full-Stack Developer</span> with
//             hands-on experience in building robust backend systems and crafting
//             responsive, user-friendly interfaces. From designing RESTful APIs to
//             developing dynamic frontends, I deliver end-to-end web solutions that
//             make an impact.
//           </motion.p>

//           <motion.div
//             variants={fadeUp}
//             custom={3}
//             className="flex flex-wrap justify-center gap-4"
//           >
//             {/* View Projects */}
//             <a
//               href="#projects"
//               className="relative overflow-hidden bg-teal-600 text-white py-3 px-8 rounded-md font-medium 
//                          transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] 
//                          hover:-translate-y-0.5"
//             >
//               View Projects
//             </a>

//             {/* Contact Me */}
//             <a
//               href="#contact"
//               className="border border-teal-500/60 text-teal-700 py-3 px-8 rounded-md font-medium 
//                          transition-all duration-300 hover:bg-teal-500/10 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] 
//                          hover:-translate-y-0.5"
//             >
//               Contact Me
//             </a>

//             {/* Resume Download (Visible only on Mobile) */}
//             <a
//               href={resumePDF}
//               download
//               className="md:hidden bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-8 rounded-md font-medium 
//                          flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] 
//                          hover:-translate-y-0.5"
//             >
//               <HiDownload className="text-xl" /> Resume
//             </a>
//           </motion.div>
//         </motion.div>
//       </RevealOnScroll>
//     </section>
//   );
// };


import { RevealOnScroll } from "../RevealOnScroll";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";

export const Home = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Google Drive resume link
  const resumeLink = "https://drive.google.com/file/d/12kKfIYNCHfMpFLF69vhz1E8kQg4RYr1H/view?usp=drive_link";

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative py-20 
                 bg-gradient-to-br from-emerald-200 via-cyan-100 to-blue-200"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] 
                        bg-blue-400/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
        </div>
      </div>

      {/* Floating Vertical Resume Button (Desktop Only, constrained to this section) */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 hidden md:flex z-10">
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-b from-teal-600 to-cyan-600 
                     rounded-lg shadow-lg overflow-hidden
                     hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] 
                     transition-all duration-300 hover:-translate-y-1 hover:scale-105
                     animate-pulse" // Added blinking effect
        >
          <div
            className="flex flex-col items-center justify-center px-3 py-4 font-semibold tracking-widest
                       text-white select-none"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
              letterSpacing: "0.15em",
            }}
          >
            RESUME
          </div>
        </a>
      </div>

      <RevealOnScroll>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center z-10 px-6"
        >
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-800"
          >
            Hi, I'm <span className="text-teal-700">Siranjeevi</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I'm a <span className="text-teal-700 font-semibold">Full-Stack Developer</span> with
            hands-on experience in building robust backend systems and crafting
            responsive, user-friendly interfaces. From designing RESTful APIs to
            developing dynamic frontends, I deliver end-to-end web solutions that
            make an impact.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-wrap justify-center gap-4"
          >
            {/* View Projects */}
            <a
              href="#projects"
              className="relative overflow-hidden bg-teal-600 text-white py-3 px-8 rounded-md font-medium 
                         transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] 
                         hover:-translate-y-0.5"
            >
              View Projects
            </a>

            {/* Contact Me */}
            <a
              href="#contact"
              className="border border-teal-500/60 text-teal-700 py-3 px-8 rounded-md font-medium 
                         transition-all duration-300 hover:bg-teal-500/10 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] 
                         hover:-translate-y-0.5"
            >
              Contact Me
            </a>

            {/* Resume Download (Visible only on Mobile) */}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-8 rounded-md font-medium 
                         flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] 
                         hover:-translate-y-0.5"
            >
              <HiDownload className="text-xl" /> Resume
            </a>
          </motion.div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};