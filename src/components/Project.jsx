import React, { useState } from "react";

const categories = ["BACK", "FRONT", "FULLSTACK"];

const ProjectFilter = ({ selected, onSelect }) => {
  return (
    <div className="flex justify-center gap-4 bg-gris p-4 rounded-[5px]">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-6 py-2 rounded-[5px] text-white text-2xl bg-black transition duration-300 ${
            selected === category
              ? "border-2 border-primary"
              : "border border-gris"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("FULLSTACK");

  return (
    <section className="p-8 bg-negro text-white min-h-screen">
      <h2 className="text-4xl mb-6 text-center">Proyectos</h2>
      <ProjectFilter
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {/* Aquí deberías filtrar los proyectos según la categoría seleccionada */}
      <div className="mt-8">
        <p>
          Mostrando proyectos de tipo:{" "}
          <span className="text-primary font-semibold">{selectedCategory}</span>
        </p>
        {/* Mapea tus proyectos filtrados aquí */}
      </div>
    </section>
  );
};

export default Projects;
