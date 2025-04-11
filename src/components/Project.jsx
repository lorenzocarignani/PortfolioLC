import React, { useState } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectCards from "./ProjectCards";

const categories = ["Fullstack", "Frontend", "Backend", "Data"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Fullstack");

  return (
    <section className="bg-negro text-white min-h-screen px-4 sm:px-6 lg:px-24 py-12">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-10">
        Proyectos
      </h2>

      <div className="flex justify-center">
        <div className="w-full max-w-5xl">
          <ProjectFilter
            selected={selectedCategory}
            onSelect={setSelectedCategory}
            categories={categories}
          />
        </div>
      </div>

      <div className="mt-10">
        <ProjectCards selectedCategory={selectedCategory} />
      </div>
    </section>
  );
};

export default Projects;
