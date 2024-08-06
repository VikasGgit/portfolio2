import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../data/index.jsx";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="mt-20 mb-8">
      <div className="flex items-center justify-center mb-5 hover:text-yellow-400">
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <span className="p-3 mb-4">PortFolio</span>
        </motion.a>
      </div>

      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((media, index) => (
          <motion.a
            href={media.href}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.5 * index }}
            viewport={{ once: false }}
          >
            {media.icon}
          </motion.a>
        ))}
      </div>
      <p className="mt-8 text-sm tracking-wide text-center text-gray-400">
        &copy;compileTab. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
