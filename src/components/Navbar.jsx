import { FaLinkedin, FaGithub} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-20" src={logo} alt="logo" /> */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-4xl">
        <a 
          href="https://www.linkedin.com/in/suezhenglong" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn Profile">
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/zhenglong1603" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub Profile">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
