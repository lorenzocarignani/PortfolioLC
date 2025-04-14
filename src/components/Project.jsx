import React, { useState } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectCards from "./ProjectCards";
import { motion } from "framer-motion";

const categories = ["Todo", "Frontend", "Backend", "Fullstack"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todo");

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-negro text-white min-h-screen px-4 sm:px-6 lg:px-24 py-12"
    >
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Proyectos
      </motion.h2>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="w-full max-w-5xl">
          <ProjectFilter
            selected={selectedCategory}
            onSelect={setSelectedCategory}
            categories={categories}
          />
        </div>
      </motion.div>

      <div className="mt-10">
        <ProjectCards selectedCategory={selectedCategory} />
      </div>
    </motion.section>
  );
};

export default Projects;
