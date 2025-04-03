import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 relative"
      style={{
        background: 'linear-gradient(135deg,#1e2a47,rgb(12, 90, 129))',
        backgroundSize: '400% 400%',
        backgroundPosition: '70% 4  0%',
      }}
    >
      <style>
        {`
          .texture {
            background-image: url('https://www.transparenttextures.com/patterns/diagonal-stripes-light.png');
            background-size: cover;
            opacity: 0.1;
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

          .textured-button.secondary {
            background-color: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.5);
            color: white;
          }

          .textured-button.secondary:hover {
            background-color: rgba(255, 255, 255, 0.2);
            box-shadow: 0 5px 15px rgba(255, 255, 255, 0.3);
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

          .box-inner-effect {
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            padding: 15px;
          }

          .side-by-side {
            display: flex;
            justify-content: space-between;
            gap: 20px;
          }

          .spacing-between {
            margin-top: 40px;
          }

          .skill-badge {
            background-color: #38bdf8;
            color: white;
            padding: 10px 15px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            transition: transform 0.3s ease, background-color 0.3s ease;
          }

          .skill-badge:hover {
            background-color: #0284c7;
            transform: translateY(-3px);
          }

          .frontend-badge {
            background-color: #06b6d4;
          }

          .coding-languages-badge {
            background-color: #9333ea;
          }

          .frontend-badge:hover {
            background-color: #0284c7;
          }

          .coding-languages-badge:hover {
            background-color: #7c3aed;
          }

          .static-border {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, #023047, #90e0ef);
            z-index: 10;
          }
        `}
      </style>

      <div className="texture absolute inset-0 z-0"></div>

      <RevealOnScroll>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center z-10 px-4"
        >
          <motion.h2
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-200 text-lg mb-8 max-w-lg mx-auto"
          >
            I am a passionate and driven Computer Science student at Vellore Institute of Technology. Currently, I serve as a Core Committee Member at Team Prometheus, CSED, and TAG Club, actively engaging in technical and management roles. Additionally, I am an Indigo Squad Member at Mood Indigo, IIT Bombay, where I contribute to event organization and coordination. Beyond my academic and professional pursuits, I am a YouTuber and a Bronze Medalist at the International Astronomy and Astrophysics Competition (IAAC).
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="box-shadow-effect mb-16"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-300">🛠 Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillsData.map(({ title, skills }, index) => (
                <div key={index} className="box-inner-effect">
                  <h4 className="text-xl font-bold mb-4 text-gray-200">{title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, key) => (
                      <span
                        key={key}
                        className={`skill-badge ${
                          title === "Frontend"
                            ? "frontend-badge"
                            : title === "Coding Languages"
                            ? "coding-languages-badge"
                            : ""
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="side-by-side spacing-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.div className="box-shadow-effect flex-1">
              <h3 className="text-2xl font-bold mb-6 text-gray-300">🎓 Education</h3>
              <div className="space-y-6">
                {educationData.map(({ title, institution, duration, details }, index) => (
                  <div key={index} className="box-inner-effect">
                    <h4 className="text-xl font-bold mb-4">{title}</h4>
                    <p className="space-y-4 text-gray-300">
                      <strong className="text-lg">{institution}</strong> ({duration})
                      <br />
                      {details}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="box-shadow-effect flex-1">
              <h3 className="text-2xl font-bold mb-6 text-gray-300">💼 Work Experience</h3>
              <div className="space-y-6">
                {workExperienceData.map(({ title, duration, description }, index) => (
                  <div key={index} className="box-inner-effect">
                    <h4 className="font-semibold text-xl mb-4">{title} ({duration})</h4>
                    <p className="text-gray-300">{description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </RevealOnScroll>

      <div className="static-border"></div>
    </section>
  );
};

const skillsData = [
  {
    title: "Frontend",
    skills: ["React", "HTML", "JavaScript", "TailwindCSS", "CSS"],
  },
  {
    title: "Coding Languages",
    skills: ["Java", "Python", "C", "C++"],
  },
];

const educationData = [
  {
    title: "B.Tech in Computer Science",
    institution: "VIT University",
    duration: "2023-2027",
    details: "Relevant Coursework: Data Structures, Web Development, Java, Python...",
  },
  {
    title: "High School",
    institution: "RBMHS",
    duration: "2008-2023",
    details: "82% - 12th Boards, 96% - 10th Boards",
  },
];

const workExperienceData = [
  {
    title: "AI/ML Co-Lead - Team Prometheus",
    duration: "2024 - Present",
    description: "Developed and maintained simulations for seamless integration of Robots.",
  },
  {
    title: "R&D Core Member - CSED",
    duration: "2024 - Present",
    description: "Researched startups, connected them with audiences, developed Hackathon problems.",
  },
  {
    title: "Management Core Committee - TAG Club VIT",
    duration: "Mar 2025 - Present",
    description: "Led and managed team activities and events in a hybrid environment.",
  },
  {
    title: "Indigo Squad Member - Mood Indigo IIT Bombay",
    duration: "Dec 2024 - Jan 2025",
    description: "Contributed to event management and coordination at India's largest college cultural festival.",
  },
];