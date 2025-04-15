import React from "react";
import { motion } from "framer-motion";
import useTranslation from "../custom/useTraslation/UseTraslation";

import TaskMinder from "../assets/Pictures/TaskMinder.webp";

import FoodStore from "../assets/Pictures/Home-FoodStore.webp";

import Estudio from "../assets/Pictures/EstudioCarignani.webp";

const ProjectCards = ({ selectedCategory }) => {
  const t = useTranslation();

  const projects = [
    {
      id: 1,
      title: "TaskMinder",
      category: ["Fullstack"],
      description: t("project.taskminder"),
      src: TaskMinder,
      link: "https://github.com/FrancoExeqGarcia/TP-PPS",
    },
    {
      id: 2,
      title: "Food Store",
      category: "Frontend",
      description: t("project.foodstore"),
      src: FoodStore,
      link: "https://github.com/lorenzocarignani/FoodStore",
    },

    {
      id: 3,
      title: "Cafeteria Web API",
      category: "Backend",
      description: t("project.cafeteria"),
      src: "https://i.pinimg.com/736x/3f/7d/b3/3f7db31690bbba1f7ed9076c3223a735.jpg",
      link: "https://github.com/lorenzocarignani/CafeteriaWebApi",
    },
    {
      id: 4,
      title: "Estudio Carignani",
      category: "Frontend",
      description: t("project.estudio"),
      src: Estudio,
      link: "https://carignaniabogados.netlify.app/",
    },
  ];

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
                {t("project.view")}
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
