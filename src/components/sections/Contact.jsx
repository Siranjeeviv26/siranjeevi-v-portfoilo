import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
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
      id="contact"
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
        <div className="w-full max-w-6xl px-6 mx-auto text-center">
          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent"
          >
            Contact
          </motion.h2>

          {/* Contact Grid */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-10 rounded-2xl bg-white/80 border border-teal-500/20 backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(20,184,166,0.3)] transition-all"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

              {/* Phone */}
              <motion.a
                href="tel:9042707001"
                variants={fadeUp}
                custom={1}
                className="flex flex-col items-center hover:scale-105 transition-transform"
              >
                <div className="bg-teal-500/20 p-4 rounded-xl mb-4 shadow-inner">
                  <FaPhoneAlt className="h-8 w-8 text-teal-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
                <span className="text-gray-600 hover:text-teal-700 text-lg transition-colors">
                  90427-07001
                </span>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:siranjeevi26@outlook.com"
                variants={fadeUp}
                custom={2}
                className="flex flex-col items-center hover:scale-105 transition-transform"
              >
                <div className="bg-teal-500/20 p-4 rounded-xl mb-4 shadow-inner">
                  <FaEnvelope className="h-8 w-8 text-teal-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                <span className="text-gray-600 hover:text-teal-700 text-lg transition-colors break-all">
                  siranjeevi26@outlook.com
                </span>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/siranjeevi26"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                custom={3}
                className="flex flex-col items-center hover:scale-105 transition-transform"
              >
                <div className="bg-teal-500/20 p-4 rounded-xl mb-4 shadow-inner">
                  <FaGithub className="h-8 w-8 text-teal-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">GitHub</h3>
                <span className="text-gray-600 hover:text-teal-700 text-lg transition-colors break-all">
                  github.com/siranjeevi26
                </span>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/siranjeevi-v-29216a226/"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                custom={4}
                className="flex flex-col items-center hover:scale-105 transition-transform"
              >
                <div className="bg-teal-500/20 p-4 rounded-xl mb-4 shadow-inner">
                  <FaLinkedin className="h-8 w-8 text-teal-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">LinkedIn</h3>
                <span className="text-gray-600 hover:text-teal-700 text-lg transition-colors break-all">
                  linkedin.com/in/siranjeevi-v
                </span>
              </motion.a>

            </div>
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
