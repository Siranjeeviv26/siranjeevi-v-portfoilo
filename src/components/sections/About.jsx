import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = [
        "HTML",
        "CSS",
        "ReactJs",
        "JavaScript",
        "TailwindCSS"
    ];

    const backendSkills = [
        "NodeJs",
        "ExpressJs",
        "MySQL",
        "Python",
        "MangoDB",
        ".NET",
        "Postman"
    ]

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
                As a Full-Stack Developer with a strong foundation in backend engineering and hands-on experience in building responsive, user-friendly frontends. 
                With 1 year 8 months of professional experience, I've contributed to the development of scalable and secure systems across diverse domains including e-commerce, warehouse management, HR systems, and hotel administration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div  className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                        {frontendSkills.map((tech, key)=> (
                            <span 
                                key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all">
                                    {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div  className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                        {backendSkills.map((tech, key)=> (
                            <span 
                                key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2) transition">
                                    {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                    <strong> M.Sc. in Computer Science</strong> - Thiagarajar College, Madurai.(May 2023)
                </li>
                <li>
                    <strong> B.Sc. in Computer Science</strong> - Thiagarajar College, Madurai.(May 2020)
                </li>
            </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-all">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <div className="space-y-4 text-gray-300">
                <div>
                    <h4 className="font-semibold">Junior Backend Developer at FlexiDigit Technologies LLP(May 2024 - May 2025)</h4>
                    <p>Developed and maintained </p>
                </div>

                <div>
                    <h4 className="font-semibold">FULL STACK DEVELOPER (MERN) - INTERN at WHY GLOBAL SERVICES (Oct 2023 – April 2024)</h4>
                    <p>Developed and maintained </p>
                </div>
            </div>
            </div>
        </div>
      </div>
        </RevealOnScroll>
    </section>
  );
};
