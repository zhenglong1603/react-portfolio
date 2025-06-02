import { motion } from "framer-motion";
// import resume from "../assets/Sue_Zheng_Long_Resume.pdf";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-center">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mp-16 lg:text-6xl text-center">
                        Sue Zheng Long
                    </motion.h1>
                    <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent text-center">
                        NUS Computer Science
                        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-pink-300 to-transparent mt-2"></div>
                        Aspiring Software Engineer
                    </motion.span>

                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 tracking-tighter text-justify text-center">
                        Welcome to my portfolio! I&apos;m a Year 2 Computer Science student at the National University of Singapore (NUS). Passionate about Software Engineering and Network Systems, I enjoy collaborating with teams and working independently to solve challenging problems.
                    </motion.p>

                    {/* <a href={resume} download>
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                            }}
                            transition={{ duration: 0.3 }}
                            className="px-10 py-4 my-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white rounded-full border-none shadow-lg hover:opacity-90"
                        >
                            Download Resume
                        </motion.button>
                    </a> */}
                </div>
            </div>
            {/* <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1 }}
                    transition={{duration: 0.5, delay: 1}}
                    src={profilePic} alt="Kevin Rush" />
                </div>
            </div> */}
        </div>
    </div>
  );
}

export default Hero;
