import React from "react";
import { motion } from "framer-motion";

const ProjectFilter = ({ selected, onSelect, categories }) => {
  return (
    <motion.div
      className="w-full flex justify-center mt-10 px-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-wrap justify-center text-center gap-3 sm:gap-4 md:gap-6 bg-gris w-full max-w-screen-md p-4 rounded-[5px]">
        {categories.map((category, index) => (
          <motion.button
            key={category}
            onClick={() => onSelect(category)}
            className={`px-4 sm:px-5 md:px-6 py-2 rounded-[5px] bg-black  transition duration-200 text-lg sm:text-xl md:text-2xl ${
              selected === category ? "text-white " : "text-mute"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05 * index, duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectFilter;
