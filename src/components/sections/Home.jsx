import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion"; 

export const Home = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundColor: 'rgba(6, 61, 89, 0.53)',
        backgroundAttachment: 'fixed',
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
            background: linear-gradient(135deg, #4ca1af, #3b6978);
            color: white;
            border: 2px solid #023047;
            padding: 12px 24px;
            border-radius: 30px;
            font-size: 16px;
            font-weight: bold;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 48, 71, 0.2);
          }

          .textured-button:hover {
            background: linear-gradient(135deg, #4ca1af, #3b6978);
            box-shadow: 0 6px 12px rgba(0, 48, 71, 0.3);
            transform: translateY(-3px);
            border: 2px solid #90e0ef;
          }

          .textured-button.secondary {
            background-color: rgba(169, 169, 169, 0.1);
            border: 1px solid rgba(169, 169, 169, 0.5);
            color: white;
            position: relative;
          }

          .textured-button.secondary:hover {
            background-color: rgba(169, 169, 169, 0.2);
            box-shadow: 0 5px 15px rgba(169, 169, 169, 0.3);
            transform: translateY(-3px);
          }

          .textured-button.secondary:hover::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('https://www.transparenttextures.com/patterns/diagonal-stripes-light.png');
            background-size: cover;
            opacity: 0.2;
            z-index: 1;
            border-radius: 30px;
          }

          .animated-border {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, #023047, #90e0ef);
            transform-origin: left;
            animation: borderAnimation 80s ease-in-out infinite;
          }

          @keyframes borderAnimation {
            0% {
              transform: scaleX(0);
              background: linear-gradient(90deg, #023047, #90e0ef);
            }
            50% {
              transform: scaleX(1);
              background: linear-gradient(90deg, #023047, #90e0ef);
            }
            100% {
              transform: scaleX(0);
              background: linear-gradient(90deg, #023047, #90e0ef);
            }
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
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent"
          >
            Hi, I'm Akshat Khandelwal
          </motion.h1>

          <motion.h3
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-300"
          >
            23BCE0859 <span className="mx-3">|</span> Slot: L37-38-53-54
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-200 text-lg mb-8 max-w-lg mx-auto"
          >
            I'm a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="textured-button"
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="textured-button secondary"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </RevealOnScroll>

      <div className="animated-border"></div>
    </section>
  );
};