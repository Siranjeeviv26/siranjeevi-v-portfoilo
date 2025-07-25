import { RevealOnScroll } from "../RevealOnScroll";
import { HiDownload } from "react-icons/hi";
import resumePDF from "../../../src/assets/Siranjeevi.pdf";


export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500  to-cyan-400 bg-clip-text text-transparent leading-right">
          Hi, I'm Siranjeevi
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a Full-Stack Developer with hands-on experience in building robust backend systems and crafting responsive, user-friendly interfaces. 
            From designing RESTful APIs and integrating cloud solutions to developing dynamic frontends, 
            I deliver end-to-end web solutions that drive real-world impact.
        </p>
        <div className="flex justify-center space-x-4">
            <a href="#projects" 
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5
                        hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                    View Projects
            </a>

            <a href="#contact" 
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5
                        hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] gover:bg-blue-500/10">
                    Contact Me
            </a>

            <a
              href={resumePDF}
              download
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded font-medium flex items-center gap-2 transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
            >
              <HiDownload className="text-xl" /> Resume
            </a>
        </div>
      </div>
      </RevealOnScroll>      
    </section>
  );
};
