import aboutImg from "../assets/projects/myProfile.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">About Me</h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl max-w-xs" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start text-justify px-6 md:px-12 lg:pr-32">
            <p className="my-2 max-w-xl py-6">
              I am a motivated and adaptable learner always seeking to upskill.
              As a Computer Science student under the School of Computing, I
              have had hands-on experience working with technologies like
              Python, Java and C++.
              <br />
              <br />
              I am always eager to expand my knowledge and embrace new
              challenges. Beyond my academic pursuits, I actively engage in
              self-directed learning to explore new technologies.
              <br />
              <br />
              Outside the rat race, I enjoy coding my own fun projects, watching
              football, find some silver coins & appreciate the smaller things in life.
              Honestly, I just try my best to live a fulfilling life and live
              with no regrets— don&apos;t we all?
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
