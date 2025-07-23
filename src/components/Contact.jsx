import {motion} from "framer-motion";
import { FaLinkedin, FaGithub} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{duration: 0.5 }}
        className="my-10 text-center text-4xl">Get in Touch</motion.h1>
        <div className="text-center tracking-tighter">
            <a href="#" className="border-b">zhenglongsue@gmail.com</a>
            <br />
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
        </div>
    </div>
  )
}

export default Contact