import React from "react";
import { motion } from "framer-motion";
import {
  DiDotnet,
  DiReact,
  DiSqllite,
  DiPython,
  DiGithubBadge,
  DiMysql,
  DiDocker,
} from "react-icons/di";
import { VscAzure } from "react-icons/vsc";

const techLogos = [
  {
    icon: <DiDotnet className="text-[#512BD4] text-5xl" />,
    name: ".NET",
    key: "dotnet",
  },
  {
    icon: <DiReact className="text-[#00D8FF] text-5xl" />,
    name: "React",
    key: "react",
  },
  {
    icon: <DiSqllite className="text-[#CC2927] text-5xl" />,
    name: "SQL Server",
    key: "sql",
  },
  {
    icon: <VscAzure className="text-[#007FFF] text-5xl" />,
    name: "Azure",
    key: "azure",
  },
  {
    icon: <DiPython className="text-[#3776AB] text-5xl" />,
    name: "Python",
    key: "python",
  },
  {
    icon: <DiGithubBadge className="text-white text-5xl" />,
    name: "GitHub",
    key: "github",
  },
  {
    icon: <DiMysql className="text-[#4479A1] text-5xl" />,
    name: "MySQL",
    key: "mysql",
  },
  {
    icon: <DiDocker className="text-[#2496ED] text-5xl" />,
    name: "Docker",
    key: "docker",
  },
];

const HeroTechCarousel = () => {
  return (
    <div className="justify-center w-full flex items-center">
      <motion.div
        className="bg-gris relative rounded-[5px] p-6 w-full md:w-3/4 flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="text-3xl text-white mb-4">Tecnologías principales</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full justify-items-center">
          {techLogos.map((logo) => (
            <motion.div
              key={logo.key}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center justify-center text-center group"
              aria-label={logo.name}
            >
              <div
                className="bg-black w-20 h-20 rounded-[5px] flex items-center justify-center shadow-md cursor-pointer group-hover:shadow-lg"
                title={logo.name}
              >
                {logo.icon}
              </div>
              <span className="text-white text-sm mt-2 group-hover:text-primary transition">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroTechCarousel;
