import React from "react";
import { ABOUT } from "../data/index.jsx";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="container mx-auto " id="about">
      <motion.h2
        className="mt-20 text-4xl font-semibold text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        About
      </motion.h2>
      <motion.h3
        className="p-4 text-6xl uppercase lg:text-[6rem]"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        {ABOUT.text1}
      </motion.h3>
      <motion.p
        className="pl-4 mr-24 text-lg leading-loose"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        {ABOUT.text2}
      </motion.p>
    </div>
  );
};

export default About;
