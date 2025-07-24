import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../ThemeProvider.jsx";

const Contact = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch!
      </motion.h1>
      <div className="text-center tracking-tighter">
        <a href="#" className="border-b">
          zhenglongsue@gmail.com
        </a>
        <br />
        <div className="m-8 flex items-center justify-center gap-4 text-4xl">
          <a
            href="https://www.linkedin.com/in/suezhenglong"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/zhenglong1603"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="relative w-14 h-8 rounded-full bg-gray-300 dark:bg-neutral-700 transition-colors duration-300"
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 flex items-center justify-center rounded-full bg-white text-yellow-500 dark:text-red shadow-md transform transition-all duration-300 ${
                theme === "dark" ? "translate-x-6" : "translate-x-0"
              }`}
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
