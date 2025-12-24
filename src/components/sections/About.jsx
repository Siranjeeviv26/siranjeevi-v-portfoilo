import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDotnet,
  SiPostman,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

import collegeLogo from "../../assets/college_logo.png";
import drdoLogo from "../../assets/Defence_Research_and_Development_Organisation.svg";
import flexidigitlogo from "../../assets/flexidigit_logo.jfif";
import whyGlobalLogo from "../../assets/logo.png";
import hapiLogo from "../../assets/hapi.png";
import sqlServerLogo from "../../assets/SQLServer.png";
import prosperoustechLogo from "../../assets/ProsperousTech.jpeg"
import dmediaLogo from "../../assets/D-media.png";

const techIcons = {
  HTML: <SiHtml5 className="text-orange-500 text-lg" />,
  CSS: <SiCss3 className="text-blue-500 text-lg" />,
  ReactJs: <SiReact className="text-cyan-400 text-lg" />,
  JavaScript: <SiJavascript className="text-yellow-400 text-lg" />,
  TailwindCSS: <SiTailwindcss className="text-teal-400 text-lg" />,
  NodeJs: <SiNodedotjs className="text-green-500 text-lg" />,
  ExpressJs: <SiExpress className="text-gray-300 text-lg" />,
  Python: <SiPython className="text-yellow-300 text-lg" />,
  ".NET": <SiDotnet className="text-purple-400 text-lg" />,
  Postman: <SiPostman className="text-orange-400 text-lg" />,
  MySQL: <SiMysql className="text-blue-600 text-lg" />,
  MongoDB: <SiMongodb className="text-green-600 text-lg" />,
  HapiJs: <img src={hapiLogo} alt="Hapi.js" className="w-5 h-5 object-contain" />,
  SQLServer: <img src={sqlServerLogo} alt="SQL Server" className="w-5 h-5 object-contain" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export const About = () => {
  const frontendSkills = ["HTML", "CSS", "ReactJs", "JavaScript", "TailwindCSS"];
  const backendSkills = ["NodeJs", "ExpressJs", "HapiJs", "Python", ".NET", "Postman"];
  const dataBaseSkills = ["MySQL", "MongoDB", "SQLServer"];

  return (
    // <section
    //   id="about"
    //   className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-emerald-200 via-cyan-100 to-blue-200">

    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 ">

      {/* Background Glow Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] 
                        bg-blue-400/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
        </div>
      </div>

      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          {/* Title */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent text-center"
          >
            About
          </motion.h2>

          {/* Summary */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-teal-500/20 bg-white/80 backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-500"
          >
            <p className="text-gray-700 mb-6 text-sm leading-relaxed">
              A results-driven Full Stack Developer with expertise in the MERN stack and .NET, specializing in building scalable and high-performance web applications. 
              I have a proven track record of leading backend re-architecting initiatives with Node.js and Hapi.js, and designing intuitive front-end interfaces with React.js. 
              My experience spans developing secure RESTful APIs, integrating cloud solutions on Microsoft Azure, and managing databases like MongoDB and MS SQL Server to deliver robust, end-to-end solutions
            </p>

            {/* Skill Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={1}
                viewport={{ once: true }}
                className="rounded-xl p-4 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-3 text-teal-700">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-2 bg-teal-500/20 text-teal-700 py-1 px-3 rounded-full text-xs hover:bg-teal-500/30 transition-all duration-300"
                    >
                      {techIcons[tech]} {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Backend */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={2}
                viewport={{ once: true }}
                className="rounded-xl p-4 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-3 text-teal-700">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-2 bg-teal-500/20 text-teal-700 py-1 px-3 rounded-full text-xs hover:bg-teal-500/30 transition-all duration-300"
                    >
                      {techIcons[tech]} {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Database */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={3}
                viewport={{ once: true }}
                className="md:col-span-2 flex justify-center"
              >
                <div className="rounded-xl p-4 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 hover:-translate-y-1 transition-all duration-300 w-full md:w-2/3">
                  <h3 className="text-lg font-semibold mb-3 text-center text-teal-700">Database</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {dataBaseSkills.map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center gap-2 bg-teal-500/20 text-teal-700 py-1 px-3 rounded-full text-xs hover:bg-teal-500/30 transition-all duration-300"
                      >
                        {techIcons[tech]} {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Education & Work Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {/* Education */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={4}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-teal-500/20 bg-white/80 backdrop-blur-md hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]"
            >
              <h3 className="text-lg font-semibold mb-4 text-teal-700">Education</h3>
              <ul className="text-gray-700 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <img src={collegeLogo} alt="College Logo" className="w-8 h-8 object-contain mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-800">M.Sc. in Computer Science</strong> – Thiagarajar College, Madurai. (May 2023)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <img src={collegeLogo} alt="College Logo" className="w-8 h-8 object-contain mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-800">B.Sc. in Computer Science</strong> – Thiagarajar College, Madurai. (May 2020)
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Work Experience */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={5}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-teal-500/20 bg-white/80 backdrop-blur-md hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]"
            >
              <h3 className="text-lg font-semibold mb-4 text-teal-700">Work Experience</h3>
              <div className="space-y-4 text-sm text-gray-700">

                {/* ProsperousTech */}
                <div className="flex items-start gap-3">
                  <img src={prosperoustechLogo} alt="prosperoustechLogo" className="w-8 h-8 object-contain rounded mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Junior Software Engineer – PROSPEROUSTECH (Sep 2025 – Present)</h4>
                    <p className="mt-1 text-gray-600">Developed and maintained scalable backend APIs, and collaborated on integrations with frontend modules.</p>
                  </div>
                </div>
                
                {/* D-media */}
                <div className="flex items-start gap-3">
                  <img src={dmediaLogo} alt="dmedia Logo" className="w-8 h-8 object-contain rounded mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Full Stack Developer – D-Media (Jul 2025 – Sep 2025)</h4>
                    <p className="mt-1 text-gray-600">Designed and implemented scalable backend APIs while enhancing frontend and backend modules to improve performance, maintainability, and user experience.</p>
                  </div>
                </div>
                
                {/* Flexidigit */}
                <div className="flex items-start gap-3">
                  <img src={flexidigitlogo} alt="FlexiDigit Logo" className="w-8 h-8 object-contain rounded mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Backend Developer – FlexiDigit Technologies LLP (May 2024 – May 2025)</h4>
                    <p className="mt-1 text-gray-600">Developed and maintained scalable backend APIs and contributed to frontend modules.</p>
                  </div>
                </div>

                {/* WHY Global Services */}
                <div className="flex items-start gap-3">
                  <img src={whyGlobalLogo} alt="WHY Global Services Logo" className="w-8 h-8 object-contain rounded mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Full Stack Developer (Intern) – WHY Global Services (Oct 2023 – Apr 2024)</h4>
                    <p className="mt-1 text-gray-600">Built full-stack modules and supported deployment tasks.</p>
                  </div>
                </div>

                {/* DRDO */}
                <div className="flex items-start gap-3">
                  <img src={drdoLogo} alt="DRDO Logo" className="w-8 h-8 object-contain mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Research Intern – DRDO (Jan 2023 – Mar 2023)</h4>
                    <p className="mt-1 text-gray-600">Worked on secure backend processing for defense-grade systems and communication protocol research.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

