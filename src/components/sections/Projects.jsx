import { useEffect } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 relative"
      style={{
        background: 'linear-gradient(30deg,#1e2a47,rgb(12, 90, 129))',
        backgroundSize: '400% 400%',
        backgroundPosition: '70% 4  0%',
      }}
    >
      <style>
        {`
          .project-box {
            background-color: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.4);
            transition: all 0.3s ease-in-out;
          }

          .project-box:hover {
            transform: translateY(-5px);
            box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.6);
          }

          .text-gradient {
            background: linear-gradient(45deg, #ff6a00, #ee0979);
            -webkit-background-clip: text;
            color: transparent;
          }

          .tech-badge {
            background-color: rgba(59, 130, 246, 0.2);
            color: #38bdf8;
            padding: 8px 16px;
            border-radius: 9999px;
            font-size: 14px;
            font-weight: 600;
            transition: all 0.3s ease;
          }

          .tech-badge:hover {
            background-color: rgba(59, 130, 246, 0.4);
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(59, 130, 246, 0.2);
          }

          .project-card {
            animation: fadeInUp 1s ease-out;
          }

          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .textured-button {
            background-color: rgba(59, 130, 246, 0.7);
            background-image: url('https://www.transparenttextures.com/patterns/diagonal-stripes-light.png');
            background-size: 8px 8px;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 12px;
            font-size: 16px;
            font-weight: bold;
            transition: all 0.3s ease;
          }

          .textured-button:hover {
            background-color: rgba(59, 130, 246, 1);
            box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
            transform: translateY(-3px);
          }

          .box-shadow-effect {
            background-color: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.4);
            padding: 20px;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }

          .box-shadow-effect:hover {
            transform: translateY(-5px);
            box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.6);
          }

          .static-border {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, #023047, #90e0ef);
          }
        `}
      </style>

      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-1 gap-10"
          >
            {[
              {
                title: "Personalised Portfolio",
                description:
                  "A portfolio as unique as my journey—designed, built, and crafted to showcase my skills, passion, and creativity.",
                techStack: ["React", "Node.js", "JavaScript", "Tailwind CSS"],
                link: "#",
              },
              {
                title: "AI & Sensor-Based Navigation",
                description:
                  "An AI-driven autonomous vehicle system that detects and follows predefined paths using advanced sensor technology and microcontroller-based control.",
                techStack: [
                  "Microcontroller Programming (8051/Arduino/Raspberry Pi)",
                  "Sensors & Actuators",
                  "Signal Processing",
                  "Automation & Robotics",
                ],
                link: "#",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="project-box p-6 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition project-card"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-100">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, key) => (
                    <span key={key} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </RevealOnScroll>

      <div className="static-border"></div>
    </section>
  );
};