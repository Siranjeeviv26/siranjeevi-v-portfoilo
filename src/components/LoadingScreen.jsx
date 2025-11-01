// import { useEffect, useState } from "react";

// export const LoadingScreen = ({ onComplete }) => {
//   const [text, setText] = useState("");
//   const fullText = "<Hello World/>";

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       setText(fullText.substring(0, index));
//       index++;

//       if (index > fullText.length) {
//         clearInterval(interval);
//         setTimeout(() => {
//           onComplete();
//         }, 1000);
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
//       <div className="mb-4 text-4xl font-mono font-bold">{text}</div>

//       <div className="w-[200px] h-[2px] bg-gray-700 rounded relative overflow-hidden">
//         <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
//       </div>
//     </div>
//   );
// };


import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-teal-800 via-emerald-900 to-black text-gray-100 flex flex-col items-center justify-center transition-all duration-700">
      {/* Animated text */}
      <div className="mb-8 text-5xl font-mono font-bold tracking-wide text-center animate-pulse drop-shadow-[0_0_10px_rgba(45,212,191,0.8)]">
        {text}
      </div>

      {/* Loading bar container */}
      <div className="w-[250px] h-[4px] bg-gray-800 rounded-full relative overflow-hidden shadow-inner">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-emerald-500 to-teal-400 animate-[loading_1.2s_linear_infinite]" />
      </div>

      {/* Optional subtle glow circle */}
      <div className="absolute w-72 h-72 rounded-full blur-3xl opacity-30 bg-teal-500 animate-pulse" />
    </div>
  );
};
