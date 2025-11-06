import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const techIcons = {
  HTML: <SiHtml5 className="text-orange-500 text-lg" />,
  CSS: <SiCss3 className="text-blue-500 text-lg" />,
  JAVASCRIPT: <SiJavascript className="text-yellow-400 text-lg" />,
  ReactJS: <SiReact className="text-cyan-400 text-lg" />,
  NodeJS: <SiNodedotjs className="text-green-500 text-lg" />,
  ExpressJS: <SiExpress className="text-gray-300 text-lg" />,
  TailwindCSS: <SiTailwindcss className="text-teal-400 text-lg" />,
  MangoDB: <SiMongodb className="text-green-600 text-lg" />,
};

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 
                 bg-gradient-to-br from-emerald-200 via-cyan-100 to-blue-200"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] 
                        bg-blue-400/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
        </div>
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          {/* Title */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent text-center"
          >
            Featured Projects
          </motion.h2>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
            {/* Project 1 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(20,184,166,0.3)",
                transition: { duration: 0.3 },
              }}
              className="relative overflow-hidden rounded-2xl border border-teal-500/20 
                bg-white/80 backdrop-blur-md 
                transition-all duration-500 hover:border-teal-500/40 group"
            >
              {/* Gradient Glow Layer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-teal-700 transition-colors duration-300">
                  MARVEL TRAVEL WEBSITE
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Developed a fully responsive travel-themed web page using
                  HTML, CSS, and JavaScript, ensuring compatibility across
                  different devices and screen sizes.
                </p>

                <div className="flex gap-2 flex-wrap mb-4">
                  {["HTML", "CSS", "JAVASCRIPT"].map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-2 bg-teal-500/20 text-teal-700 py-1 px-3 rounded-full text-sm 
                      hover:bg-teal-500/30 transition-all duration-300"
                    >
                      {techIcons[tech]} <span>{tech}</span>
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="https://siranjeeviv26.github.io/travel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 hover:text-cyan-600 font-medium transition-colors duration-300"
                  >
                    View Demo →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(20,184,166,0.3)",
                transition: { duration: 0.3 },
              }}
              className="relative overflow-hidden rounded-2xl border border-teal-500/20 
                bg-white/80 backdrop-blur-md 
                transition-all duration-500 hover:border-teal-500/40 group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-teal-700 transition-colors duration-300">
                  GYM Website
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Developed a responsive frontend using ReactJS (Vite) and
                  Tailwind CSS to provide a modern, user-friendly interface.
                </p>

                <div className="flex gap-2 flex-wrap mb-4">
                  {["ReactJS", "TailwindCSS"].map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-2 bg-teal-500/20 text-teal-700 py-1 px-3 rounded-full text-sm 
                      hover:bg-teal-500/30 transition-all duration-300"
                    >
                      {techIcons[tech]} <span>{tech}</span>
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="https://Siranjeeviv26.github.io/Matrix_gym"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 hover:text-cyan-600 font-medium transition-colors duration-300"
                  >
                    View Demo →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={3}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(20,184,166,0.3)",
                transition: { duration: 0.3 },
              }}
              className="relative overflow-hidden rounded-2xl border border-teal-500/20 
                bg-white/80 backdrop-blur-md 
                transition-all duration-500 hover:border-teal-500/40 group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-teal-700 transition-colors duration-300">
                  Moments
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Developed a responsive MERN Stack user-friendly interface
                  where we can store our beautiful days with pics and notes.
                </p>

                <div className="flex gap-2 flex-wrap mb-4">
                  {[
                    "ReactJS",
                    "TailwindCSS",
                    "NodeJS",
                    "ExpressJS",
                    "MangoDB",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-2 bg-teal-500/20 text-teal-700 py-1 px-3 rounded-full text-sm 
                      hover:bg-teal-500/30 transition-all duration-300"
                    >
                      {techIcons[tech]} <span>{tech}</span>
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="https://moments-pink.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 hover:text-cyan-600 font-medium transition-colors duration-300"
                  >
                    View Demo →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 4 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={3}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(20,184,166,0.3)",
                transition: { duration: 0.3 },
              }}
              className="relative overflow-hidden rounded-2xl border border-teal-500/20 
                bg-white/80 backdrop-blur-md 
                transition-all duration-500 hover:border-teal-500/40 group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-teal-700 transition-colors duration-300">
                  QR-Generator
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Easy-to-use QR code generator that allows users to quickly create QR codes for any URL or link
                </p>

                <div className="flex gap-2 flex-wrap mb-4">
                  {[
                    "ReactJS",
                    "TailwindCSS",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-2 bg-teal-500/20 text-teal-700 py-1 px-3 rounded-full text-sm 
                      hover:bg-teal-500/30 transition-all duration-300"
                    >
                      {techIcons[tech]} <span>{tech}</span>
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="https://qr-generator-three-omega.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 hover:text-cyan-600 font-medium transition-colors duration-300"
                  >
                    View Demo →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
