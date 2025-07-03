// import { RevealOnScroll } from "../RevealOnScroll";

// export const Projects = () => {
//     return (
//         <section 
//             id="projects" 
//             className="min-h-screen flex items-center justify-center py-20">
//                 <RevealOnScroll>
//                     <div className="max-w-5xl mx-auto px-4">
//                 <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
//                     Featured Projects
//                 </h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
//                     <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
//                         <h3 className="text-xl font-bold mb-2">MARVEL TRAVEL WEBSITE</h3>
//                         <p className="text-gray-400 mb-4">
//                             Developed a fully responsive travel-themed web page using HTML, CSS, and JavaScript, ensuring compatibility 
//                             across different devices and screen sizes.
//                         </p>
//                         <div className="flex gap-2 flex-wrap">
//                             {["HTML", "CSS", "JAVASCRIPT"].map((tech) => (
//                                 <span
//                                     key={tech}
//                                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
//                                     {tech}
//                                 </span>
//                             ))}
//                         </div>
//                         <div className="flex justify-between items-center">
//                             <a href="https://guild-master-ethan-hunt-code-eh1.netlify.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">{""} View Project{""} </a>
//                         </div>
//                     </div>

//                     <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
//                         <h3 className="text-xl font-bold mb-2">GYM Website</h3>
//                         <p className="text-gray-400 mb-4">
//                             Designed a responsive frontend using ReactJS (Vite) and Tailwind CSS to provide a modern, 
//                             user-friendly interface.
//                         </p>
//                         <div className="flex gap-2 flex-wrap">
//                             {["ReactJS", "NodeJS", "ExpressJS"].map((tech) => (
//                                 <span
//                                     key={tech}
//                                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
//                                     {tech}
//                                 </span>
//                             ))}
//                         </div>
//                         <div className="flex justify-between items-center">
//                             <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">{""} View Project{""} </a>
//                         </div>
//                     </div>

//                     <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
//                         <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
//                         <p className="text-gray-400 mb-4">
//                             Designed a responsive frontend using ReactJS (Vite) and Tailwind CSS to provide a modern, 
//                             user-friendly interface.
//                         </p>
//                         <div className="flex gap-2 flex-wrap">
//                             {["ReactJS", "NodeJS", "ExpressJS"].map((tech) => (
//                                 <span
//                                     key={tech}
//                                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
//                                     {tech}
//                                 </span>
//                             ))}
//                         </div>
//                         <div className="flex justify-between items-center">
//                             <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">{""} View Project{""} </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//                 </RevealOnScroll>
//         </section>
//     );
// }


import { RevealOnScroll } from "../RevealOnScroll";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

const techIcons = {
  HTML: <SiHtml5 className="text-orange-500 text-lg" />,
  CSS: <SiCss3 className="text-blue-500 text-lg" />,
  JAVASCRIPT: <SiJavascript className="text-yellow-400 text-lg" />,
  ReactJS: <SiReact className="text-cyan-400 text-lg" />,
  NodeJS: <SiNodedotjs className="text-green-500 text-lg" />,
  ExpressJS: <SiExpress className="text-gray-300 text-lg" />,
};

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* Project 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">MARVEL TRAVEL WEBSITE</h3>
              <p className="text-gray-400 mb-4">
                Developed a fully responsive travel-themed web page using HTML,
                CSS, and JavaScript, ensuring compatibility across different
                devices and screen sizes.
              </p>
              <div className="flex gap-2 flex-wrap">
                {["HTML", "CSS", "JAVASCRIPT"].map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
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
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">GYM Website</h3>
              <p className="text-gray-400 mb-4">
                Designed a responsive frontend using ReactJS (Vite) and Tailwind
                CSS to provide a modern, user-friendly interface.
              </p>
              <div className="flex gap-2 flex-wrap">
                {["ReactJS", "NodeJS", "ExpressJS"].map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {techIcons[tech]} <span>{tech}</span>
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
              <p className="text-gray-400 mb-4">
                Designed a responsive frontend using ReactJS (Vite) and Tailwind
                CSS to provide a modern, user-friendly interface.
              </p>
              <div className="flex gap-2 flex-wrap">
                {["ReactJS", "NodeJS", "ExpressJS"].map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {techIcons[tech]} <span>{tech}</span>
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
