import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm md:text-base tracking-wide text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text hover:opacity-80 transition">
          © 2025 Akshat Khandelwal. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a 
            href="https://github.com/Akshatrix404" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-blue-400 transition duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/akshatkhndelwal/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-yellow-400 transition duration-300 hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:akshatkhandelwalunofficial@gmail.com" 
            className="text-gray-300 hover:text-red-400 transition duration-300 hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};
