import { motion } from "framer-motion";

const techStack = {
  "Programming Languages": ["Python", "C++", "JavaScript", "TypeScript", "SQL", "HTML/CSS",  "Java"],
  "Frontend Development": ["React.js", "Next.js", "Tailwind", "Material-UI", "Angular", "Vue"],
  "Backend Development": ["Node.js", "Express.js", "Next.js", "Firebase", ],
  "Dev-Ops": ["Git", "GitHub", "Docker", "Vercel", "Heroku", "Netlify"],
  "Others":  ["Enlish", "Chinese", "Floorball", "Trading"]
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl dark:text-white"
      >
        Technical Skills
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {Object.entries(techStack).map(([category, techs]) => (
          <div
            key={category}
            className="rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent p-6 shadow-md"
          >
            <h2 className="text-xl font-semibold mb-4 border-b border-purple-300 pb-2 dark:text-white">
              {category}
            </h2>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <div
                  key={tech}
                  className="rounded bg-purple-600 text-white dark:bg-neutral-900 dark:text-purple-500 border border-transparent dark:border-neutral-500 px-2 py-1 text-sm font-medium transition"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;

