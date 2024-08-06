import { SKILLS } from "../data";
import { motion } from "framer-motion";
const Skills = () => {
  const containerVarient = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  };
  const itemVarients = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div id="skills" className="mx-auto cointainer ">
      <h2 className="mt-20 mb-12 text-4xl text-center"> Skills</h2>
      <motion.div
        className="flex flex-col px-4 py-10 mx-20 rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 lg:px-20"
        initial="hidden"
        whileInView="visible"
        variants={containerVarient}
        viewport={{ once: false }}
      >
        {SKILLS.map((skill, index) => {
          return (
            <motion.div
              key={index}
              className="flex items-center justify-between mb-8"
              variants={itemVarients}
            >
              <div className="flex items-center">
                {skill.icon}
                <h3 className="px-6 text-lg lg:text-3xl">{skill.name}</h3>
              </div>
              <div className="font-semibold border-b-2 border-yellow-400 text-md lg:texl-lg">
                <span>{skill.experience}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
