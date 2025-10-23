import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        alert("Oops! Something went wrong. Please try again.")
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full max-w-2xl mx-auto flex flex-col items-center text-center">
          {/* Contact Information */}
          <div className="w-full">
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Contact Information
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="bg-blue-500/10 p-4 rounded-lg mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-white mb-2 text-lg">Phone</h3>
                  <a href="tel:9042707001" className="text-gray-300 hover:text-blue-400 transition-colors text-xl">90427-07001</a>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-blue-500/10 p-4 rounded-lg mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-white mb-2 text-lg">Email</h3>
                  <a href="mailto:siranjeevi26@outlook.com" className="text-gray-300 hover:text-blue-400 transition-colors text-xl break-all">siranjeevi26@outlook.com</a>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-blue-500/10 p-4 rounded-lg mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-white mb-2 text-lg">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/siranjeevi-v-29216a226/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-xl break-all">
                    linkedin.com/in/siranjeevi-v
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-medium text-white mb-4 text-xl">Let's Connect</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Feel free to reach out for collaborations or just a friendly hello. I'm always open to discussing new projects and opportunities.
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};


// import { useState } from "react";
// import { RevealOnScroll } from "../RevealOnScroll";
// import emailjs from "emailjs-com";

// export const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
//       .then(() => {
//         alert("Message Sent!");
//         setFormData({ name: "", email: "", message: "" });
//       })
//       .catch(() =>
//         alert("Oops! Something went wrong. Please try again.")
//       );
//   };

//   return (
//     <section
//       id="contact"
//       className="min-h-screen flex items-center justify-center py-20"
//     >
//       <RevealOnScroll>
//         <div className="px-4 w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-12">
//           {/* Contact Information Sidebar */}
//           <div className="lg:w-2/5">
//             <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
//               Contact Information
//             </h2>
            
//             <div className="space-y-6">
//               <div className="flex items-start">
//                 <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-medium text-white mb-1">Phone</h3>
//                   <a href="tel:9042707001" className="text-gray-300 hover:text-blue-400 transition-colors"> 90427-07001</a>
//                 </div>
//               </div>
              
//               <div className="flex items-start">
//                 <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-medium text-white mb-1">Email</h3>
//                   <a href="mailto:siranjeevi26@outlook.com" className="text-gray-300 hover:text-blue-400 transition-colors break-all">siranjeevi26@outlook.com</a>
//                 </div>
//               </div>
              
//               <div className="flex items-start">
//                 <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-medium text-white mb-1">LinkedIn</h3>
//                   <a href="https://www.linkedin.com/in/siranjeevi-v-29216a226/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors break-all">
//                     linkedin.com/in/siranjeevi-v
//                   </a>
//                 </div>
//               </div>
//             </div>
            
//             <div className="mt-10 p-6 bg-white/5 rounded-lg border border-white/10">
//               <h3 className="font-medium text-white mb-3">Let's Connect</h3>
//               <p className="text-gray-400 text-sm">
//                 Feel free to reach out for collaborations or just a friendly hello. I'm always open to discussing new projects and opportunities.
//               </p>
//             </div>
//           </div>
          
//           {/* Contact Form */}
//           {/* <div className="lg:w-3/5">
//             <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center lg:text-left">
//               Get In Touch
//             </h2>

//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <div className="relative">
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   value={formData.name}
//                   className="w-full bg-white/5 border border-white/10 rounded py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
//                   placeholder="Name"
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                 />
//               </div>

//               <div className="relative">
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   value={formData.email}
//                   className="w-full bg-white/5 border border-white/10 rounded py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
//                   placeholder="Email"
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                 />
//               </div>

//               <div className="relative">
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   rows={5}
//                   value={formData.message}
//                   className="w-full bg-white/5 border border-white/10 rounded py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
//                   placeholder="Your Message"
//                   onChange={(e) =>
//                     setFormData({ ...formData, message: e.target.value })
//                   }
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white py-3 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div> */}
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };

