import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          if (typeof onComplete === "function") {
            onComplete();
          }
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [fullText, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-black to-purple-900 animate-background" />
      
      <div className="relative z-10 text-4xl font-mono font-bold text-center text-glitch">
        {text} <span className="animate-blink ml-1">|</span>
      </div>

      <div className="relative z-10 w-[250px] h-[4px] bg-gray-800 rounded-full overflow-hidden mt-4">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
