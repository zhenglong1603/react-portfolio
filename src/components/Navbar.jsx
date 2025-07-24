import { FaLinkedin, FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../ThemeProvider.jsx";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center"></div>
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
    </nav>
  );
};

export default Navbar;
