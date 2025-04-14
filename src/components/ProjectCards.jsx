import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "TaskMinder",
    category: ["Fullstack"],
    description:
      "Sistema completo con ABM de tareas, proyectos y usuarios. Incluye autenticación y autorización. Bases de datos SQL Server.",
    src: "/src/assets/Pictures/TaskMinderLogin.webp",
    link: "https://github.com/FrancoExeqGarcia/TP-PPS",
  },
  {
    id: 2,
    title: "Food Store",
    category: "Frontend",
    description:
      "Sitio con React, Tailwind y Swal2 para una prueba técnica de frontend.",
    src: "/src/assets/Pictures/Home-FoodStore.webp",
    link: "https://github.com/lorenzocarignani/FoodStore",
  },

  {
    id: 3,
    title: "Cafeteria Web API",
    category: "Backend",
    description: "API construida con .NET y autenticación con JWT.",
    src: "https://i.pinimg.com/736x/3f/7d/b3/3f7db31690bbba1f7ed9076c3223a735.jpg",
    link: "https://github.com/lorenzocarignani/CafeteriaWebApi",
  },
  {
    id: 4,
    title: "Estudio Carignani",
    category: "Frontend",
    description: "Landing page para estudio de abogacia con React y Tailwind.",
    src: "/src/assets/Pictures/EstudioCarignani.webp",
    link: "https://carignaniabogados.netlify.app/",
  },
];

const ProjectCards = ({ selectedCategory }) => {
  const filteredProjects =
    selectedCategory === "Todo"
      ? projects
      : projects.filter((project) =>
          project.category.includes(selectedCategory)
        );

  return (
    <div className="w-full flex justify-center mt-20">
      <motion.div
        className="flex flex-col gap-8 w-11/12 max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="flex flex-col lg:flex-row bg-gris p-6 rounded-[10px] shadow-lg hover:scale-[1.01] hover:drop-shadow-red transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Texto */}
            <div className="flex-1 pr-0 lg:pr-6 mb-4 lg:mb-0">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-mute mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Ver proyecto →
              </a>
            </div>

            {/* Imagen */}
            <div className="flex-shrink-0 lg:w-2/5 rounded-[5px]">
              <motion.img
                src={project.src}
                alt={project.title}
                className="w-full h-40 object-cover rounded-[5px] border-2 border-primary"
                loading="lazy"
                whileHover={{ scale: 1.05, brightness: 1.1 }}
                whileTap={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectCards;
