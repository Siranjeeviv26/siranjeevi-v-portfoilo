// import { RevealOnScroll } from "../RevealOnScroll";
// import { HiDownload } from "react-icons/hi";
// import resumePDF from "../../../src/assets/Siranjeevi.pdf";


// export const Home = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative">
//       <RevealOnScroll>
//         <div className="text-center z-10 px-4">
//         <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500  to-cyan-400 bg-clip-text text-transparent leading-right">
//           Hi, I'm Siranjeevi
//         </h1>

//         <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
//             I'm a Full-Stack Developer with hands-on experience in building robust backend systems and crafting responsive, user-friendly interfaces. 
//             From designing RESTful APIs and integrating cloud solutions to developing dynamic frontends, 
//             I deliver end-to-end web solutions that drive real-world impact.
//         </p>
//         <div className="flex justify-center space-x-4">
//             <a href="#projects" 
//                 className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5
//                         hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
//                     View Projects
//             </a>

//             <a href="#contact" 
//                 className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5
//                         hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] gover:bg-blue-500/10">
//                     Contact Me
//             </a>

//             <a
//               href={resumePDF}
//               download
//               className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded font-medium flex items-center gap-2 transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
//             >
//               <HiDownload className="text-xl" /> Resume
//             </a>
//         </div>
//       </div>
//       </RevealOnScroll>      
//     </section>
//   );
// };


import { RevealOnScroll } from "../RevealOnScroll";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import resumePDF from "../../../src/assets/Siranjeevi.pdf";

export const Home = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="home"
      className="min-h-screen full-w flex items-center justify-center relative py-20"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
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
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
          >
            Hi, I'm <span className="text-cyan-400">Siranjeevi</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I'm a <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> with
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
              className="relative overflow-hidden bg-blue-500 text-white py-3 px-8 rounded-md font-medium 
                         transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] 
                         hover:-translate-y-0.5"
            >
              View Projects
            </a>

            {/* Contact Me */}
            <a
              href="#contact"
              className="border border-cyan-500/60 text-cyan-400 py-3 px-8 rounded-md font-medium 
                         transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] 
                         hover:-translate-y-0.5"
            >
              Contact Me
            </a>

            {/* Resume Download */}
            <a
              href={resumePDF}
              download
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-8 rounded-md font-medium 
                         flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] 
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
