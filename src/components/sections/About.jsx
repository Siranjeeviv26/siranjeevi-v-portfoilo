import { RevealOnScroll } from "../RevealOnScroll";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiHapi,
  SiPython,
  SiDotnet,
  SiPostman,
  SiMysql,
  SiMongodb,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import collegeLogo from "../../assets/college_logo.png";
import drdoLogo from "../../assets/Defence_Research_and_Development_Organisation.svg";
import flexidigitlogo from "../../assets/flexidigit_logo.jfif";
import whyGlobalLogo from "../../assets/logo.png";

const techIcons = {
  HTML: <SiHtml5 className="text-orange-500 text-lg" />,
  CSS: <SiCss3 className="text-blue-500 text-lg" />,
  ReactJs: <SiReact className="text-cyan-400 text-lg" />,
  JavaScript: <SiJavascript className="text-yellow-400 text-lg" />,
  TailwindCSS: <SiTailwindcss className="text-teal-400 text-lg" />,
  NodeJs: <SiNodedotjs className="text-green-500 text-lg" />,
  ExpressJs: <SiExpress className="text-gray-300 text-lg" />,
  HapiJs: <SiHapi className="text-gray-300 text-lg" />,
  Python: <SiPython className="text-yellow-300 text-lg" />,
  ".NET": <SiDotnet className="text-purple-400 text-lg" />,
  Postman: <SiPostman className="text-orange-400 text-lg" />,
  MySQL: <SiMysql className="text-blue-600 text-lg" />,
  MongoDB: <SiMongodb className="text-green-600 text-lg" />,
  SQLServer: <SiMicrosoftsqlserver className="text-red-500 text-lg" />, // Added SQL Server
};

export const About = () => {
  const frontendSkills = ["HTML", "CSS", "ReactJs", "JavaScript", "TailwindCSS"];
  const backendSkills = ["NodeJs", "ExpressJs", "HapiJs", "Python", ".NET", "Postman"];
  const dataBaseSkills = ["MySQL", "MongoDB", "SQLServer"]; // Added SQLServer

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About
          </h2>

          <div className="glass rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all duration-300">
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              As a Full-Stack Developer with a strong foundation in backend engineering and hands-on experience in building responsive, user-friendly frontends. With 1 year 8 months of professional experience, I've contributed to the development of scalable and secure systems across diverse domains including e-commerce, warehouse management, HR systems, and hotel administration.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Frontend */}
              <div className="rounded-xl p-4 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-2 text-white">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20 transition-all duration-300"
                    >
                      {techIcons[tech]} {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="rounded-xl p-4 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-2 text-white">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20 transition-all duration-300"
                    >
                      {techIcons[tech]} {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Database */}
              <div className="md:col-span-2 flex justify-center">
                <div className="rounded-xl p-4 hover:-translate-y-1 transition-all duration-300 w-full md:w-2/3">
                  <h3 className="text-lg font-semibold mb-2 text-center text-white">Database</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {dataBaseSkills.map((tech, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20 transition-all duration-300"
                      >
                        {techIcons[tech]} {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Work Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Education */}
            <div className="glass rounded-xl p-4 border-white/10 border hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4 text-white">Education</h3>
              <ul className="list-none text-gray-300 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <img 
                    src={collegeLogo} 
                    alt="College Logo" 
                    className="w-8 h-8 object-contain mt-1 flex-shrink-0 rounded" 
                  />
                  <div>
                    <strong className="text-white">M.Sc. in Computer Science</strong> – Thiagarajar College, Madurai. (May 2023)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <img 
                    src={collegeLogo} 
                    alt="College Logo" 
                    className="w-8 h-8 object-contain mt-1 flex-shrink-0 rounded" 
                  />
                  <div>
                    <strong className="text-white">B.Sc. in Computer Science</strong> – Thiagarajar College, Madurai. (May 2020)
                  </div>
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="glass rounded-xl p-4 border-white/10 border hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4 text-white">Work Experience</h3>
              <div className="space-y-4 text-sm text-gray-300">
                {/* FlexiDigit */}
                <div className="flex items-start gap-3">
                  <img 
                    src={flexidigitlogo} 
                    alt="FlexiDigit Logo" 
                    className="w-8 h-8 object-contain rounded mt-1 flex-shrink-0" 
                  />
                  <div>
                    <h4 className="font-semibold text-white">Backend Developer – FlexiDigit Technologies LLP (May 2024 – May 2025)</h4>
                    <p className="mt-1">Developed and maintained scalable backend APIs, and actively contributed to frontend modules.</p>
                  </div>
                </div>

                {/* WHY Global */}
                <div className="flex items-start gap-3">
                  <img 
                    src={whyGlobalLogo} 
                    alt="WHY Global Services Logo" 
                    className="w-8 h-8 object-contain rounded mt-1 flex-shrink-0" 
                  />
                  <div>
                    <h4 className="font-semibold text-white">Full Stack Developer (Intern) – WHY Global Services (Oct 2023 – Apr 2024)</h4>
                    <p className="mt-1">Built full-stack modules and supported deployment tasks.</p>
                  </div>
                </div>

                {/* DRDO */}
                <div className="flex items-start gap-3">
                  <img 
                    src={drdoLogo} 
                    alt="DRDO Logo" 
                    className="w-8 h-8 object-contain mt-1 flex-shrink-0 rounded" 
                  />
                  <div>
                    <h4 className="font-semibold text-white">Research Intern – DRDO (Jan 2023 – Mar 2023)</h4>
                    <p className="mt-1">Worked on secure backend processing for defense-grade systems and communication protocol research.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};