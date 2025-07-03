import { RevealOnScroll } from "../RevealOnScroll";
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

// Icon mapping by category
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
  MangoDB: <SiMongodb className="text-green-600 text-lg" />,
};

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "ReactJs",
    "JavaScript",
    "TailwindCSS",
  ];

  const backendSkills = ["NodeJs", "ExpressJs", "Python", ".NET", "Postman"];

  const dataBaseSkills = ["MySQL", "MangoDB"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About
          </h2>
          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 translate-all">
            <p className="text-gray-300 mb-6">
              As a Full-Stack Developer with a strong foundation in backend
              engineering and hands-on experience in building responsive,
              user-friendly frontends. With 1 year 8 months of professional
              experience, I've contributed to the development of scalable and
              secure systems across diverse domains including e-commerce,
              warehouse management, HR systems, and hotel administration.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {techIcons[tech]} {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {techIcons[tech]} {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Database */}
                <div className="md:col-span-2 flex justify-center">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all w-full md:w-1/2">
                        <h3 className="text-xl font-bold mb-4 text-center">Database</h3>
                        <div className="flex flex-wrap justify-center gap-2">
                        {dataBaseSkills.map((tech, key) => (
                            <span
                            key={key}
                            className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>M.Sc. in Computer Science</strong> - Thiagarajar
                  College, Madurai. (May 2023)
                </li>
                <li>
                  <strong>B.Sc. in Computer Science</strong> - Thiagarajar
                  College, Madurai. (May 2020)
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Junior Backend Developer at FlexiDigit Technologies LLP
                    (May 2024 - May 2025)
                  </h4>
                  <p>Developed and maintained scalable backend APIs.</p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Full Stack Developer (MERN) - Intern at WHY GLOBAL SERVICES
                    (Oct 2023 – April 2024)
                  </h4>
                  <p>Built full-stack modules and supported deployment tasks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
