import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll"; // Adjust this import based on your file structure.
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      );
      alert("Message Sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative py-16 px-6"
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

    /* Lighter color for the outer box */
    .outer-box {
      position: relative;
      z-index: 1;
      padding: 20px;
      border-radius: 10px;
      background: rgba(6, 61, 89, 0.3); /* Lighter background */
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    /* Same color as background for inner box */
    .inner-box {
      position: relative;
      z-index: 2;
      padding: 20px;
      border-radius: 10px;
      background: rgba(6, 61, 89, 0.53); /* Same color as section background */
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease;
    }

    .inner-box:hover {
      transform: translateY(-5px);
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
            className="text-3xl font-bold text-center bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent"
          >
            Let's Connect
          </motion.h2>

          <div className="outer-box">
            <motion.div className="inner-box">
              <form className="space-y-6 w-full" onSubmit={handleSubmit}>
                {["name", "email", "message"].map((field) => (
                  <motion.div
                    key={field}
                    className="relative w-full"
                    whileFocus={{ scale: 1.02 }}
                  >
                    {field !== "message" ? (
                      <input
                        type={field === "email" ? "email" : "text"}
                        id={field}
                        name={field}
                        required
                        value={formData[field]}
                        className="w-full bg-transparent px-4 py-3 text-black text-base focus:outline-none focus:border-blue-500 transition"
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1) + "..."}
                        onChange={(e) =>
                          setFormData({ ...formData, [field]: e.target.value })
                        }
                      />
                    ) : (
                      <textarea
                        id={field}
                        name={field}
                        required
                        rows={5}
                        value={formData[field]}
                        className="w-full bg-transparent px-4 py-3 text-black text-base focus:outline-none focus:border-blue-500 transition"
                        placeholder="Your Message..."
                        onChange={(e) =>
                          setFormData({ ...formData, [field]: e.target.value })
                        }
                      />
                    )}
                  </motion.div>
                ))}

                <motion.button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-base"
                  whileTap={{ scale: 0.95 }}
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </RevealOnScroll>

      <div className="static-border"></div>
    </section>
  );
};
