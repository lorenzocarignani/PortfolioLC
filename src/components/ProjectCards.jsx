import React from "react";
import TaskMinderPic from "../assets/Pictures/TaskMinderLogin.webp";

const projects = [
  {
    id: 1,
    title: "TaskMinder",
    category: "Fullstack",
    description:
      "Sistema completo con ABM de tareas, proyectos y usuarios. Incluye autenticación y autorización. Bases de datos SQL Server.",
    src: TaskMinderPic,
    link: "https://github.com/FrancoExeqGarcia/TP-PPS",
  },
  {
    id: 2,
    title: "Portfolio Personal",
    category: "Frontend",
    description: "Sitio animado con React, Tailwind y Framer Motion.",
    src: "/images/portfolio.png",
    link: "#",
  },
  {
    id: 3,
    title: "API RESTful",
    category: "Backend",
    description: "API construida con .NET y autenticación con JWT.",
    src: "/images/api.png",
    link: "#",
  },
  {
    id: 4,
    title: "ETL para informes",
    category: "Data",
    description: "Pipeline de datos desde SQL Server hacia Power BI.",
    src: "/images/etl.png",
    link: "#",
  },
];

const ProjectCards = ({ selectedCategory }) => {
  const filteredProjects = projects.filter(
    (project) => project.category === selectedCategory
  );

  return (
    <div className="w-full flex justify-center mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 max-w-7xl">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gris p-4 rounded-[5px] shadow-lg hover:scale-[1.02] hover:drop-shadow-red transition-transform duration-300"
          >
            <img
              src={project.src}
              alt={project.title}
              className="w-full h-40 object-cover rounded-[5px] mb-4"
              loading="lazy"
            />
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
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
