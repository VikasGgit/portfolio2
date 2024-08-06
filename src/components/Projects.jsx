import React from "react";
import { PROJECTS } from "../data"; // Adjust the import path as necessary
import Card from "./Card";
import { motion } from "framer-motion";

const containerVarient = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const itemVarients = {
  hidden: { opacity: 0, y: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Projects = () => {
  return (
    <div id="projects">
      <motion.h2
        className="mt-20 text-4xl font-semibold text-center"
        initial="hidden"
        whileInView="visible"
        variants={containerVarient}
        viewport={{ once: false }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center py-8"
        initial="hidden"
        whileInView="visible"
        variants={containerVarient}
        viewport={{ once: false }}
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            className=""
            key={index}
            variants={itemVarients}
            viewport={{ once: false }}
          >
            <Card
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              website={project.website}
              github={project.github}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
