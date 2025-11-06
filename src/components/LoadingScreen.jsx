import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Loading"; // Removed the dots from text

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 800); // Slightly faster transition
      }
    }, 150); // Slightly slower for dramatic effect

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-emerald-200 via-cyan-100 to-blue-200 
                    text-gray-800 flex flex-col items-center justify-center transition-all duration-700">
      
      {/* Animated typewriter text with circles */}
      <div className="mb-8 sm:mb-12 text-3xl sm:text-4xl md:text-5xl font-mono font-bold tracking-wider 
                    text-center text-teal-700 drop-shadow-[0_0_15px_rgba(20,184,166,0.5)]
                    px-4 sm:px-6 flex items-center">
        {text}
        {/* Animated circles instead of dots */}
        <div className="flex items-center ml-2 space-x-1">
          <div className="w-2 h-2 bg-teal-700 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-teal-700 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-teal-700 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
        <span className="animate-pulse">|</span> {/* Cursor effect */}
      </div>

      {/* Loading bar container */}
      <div className="w-[80%] sm:w-[300px] h-[4px] sm:h-[6px] bg-teal-200 rounded-full 
                    relative overflow-hidden shadow-inner mx-4">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 
                      animate-[loading_1.5s_linear_infinite]" />
      </div>

      {/* Optional glowing circles for depth - responsive sizes */}
      <div className="absolute w-48 sm:w-72 h-48 sm:h-72 rounded-full blur-2xl sm:blur-3xl 
                    opacity-20 sm:opacity-30 bg-teal-400 animate-pulse" />
      <div className="absolute w-32 sm:w-48 h-32 sm:h-48 rounded-full blur-xl sm:blur-2xl 
                    opacity-15 sm:opacity-20 bg-cyan-300 animate-pulse" />
    </div>
  );
};
// import { useEffect, useState } from "react";

// export const LoadingScreen = ({ onComplete }) => {
//   const [text, setText] = useState("");
//   const fullText = "Loading..."; // Changed text

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       setText(fullText.substring(0, index));
//       index++;

//       if (index > fullText.length) {
//         clearInterval(interval);
//         setTimeout(() => {
//           onComplete();
//         }, 800); // Slightly faster transition
//       }
//     }, 150); // Slightly slower for dramatic effect

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="fixed inset-0 z-50 bg-gradient-to-br from-emerald-200 via-cyan-100 to-blue-200 
//                     text-gray-800 flex flex-col items-center justify-center transition-all duration-700">
      
//       {/* Animated typewriter text */}
//       <div className="mb-8 sm:mb-12 text-3xl sm:text-4xl md:text-5xl font-mono font-bold tracking-wider 
//                     text-center text-teal-700 drop-shadow-[0_0_15px_rgba(20,184,166,0.5)]
//                     px-4 sm:px-6">
//         {text}
//         <span className="animate-pulse">|</span> {/* Cursor effect */}
//       </div>

//       {/* Loading bar container */}
//       <div className="w-[80%] sm:w-[300px] h-[4px] sm:h-[6px] bg-teal-200 rounded-full 
//                     relative overflow-hidden shadow-inner mx-4">
//         <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 
//                       animate-[loading_1.5s_linear_infinite]" />
//       </div>

//       {/* Optional glowing circles for depth - responsive sizes */}
//       <div className="absolute w-48 sm:w-72 h-48 sm:h-72 rounded-full blur-2xl sm:blur-3xl 
//                     opacity-20 sm:opacity-30 bg-teal-400 animate-pulse" />
//       <div className="absolute w-32 sm:w-48 h-32 sm:h-48 rounded-full blur-xl sm:blur-2xl 
//                     opacity-15 sm:opacity-20 bg-cyan-300 animate-pulse" />
//     </div>
//   );
// };