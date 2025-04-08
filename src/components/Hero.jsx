import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import devAnimation from "../assets/animations/dev-animation.json";

// React Icons
import { DiDotnet, DiReact, DiSqllite } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";

const techLogos = [
  {
    icon: <DiDotnet className="text-[#512BD4] text-5xl" title=".NET" />,
    key: "dotnet",
  },
  {
    icon: <DiReact className="text-[#61DAFB] text-5xl" title="React" />,
    key: "react",
  },
  {
    icon: <DiSqllite className="text-[#CC2927] text-5xl" title="SQL Server" />,
    key: "sql",
  },
  {
    icon: <VscAzure className="text-[#007FFF] text-5xl" title="Azure" />,
    key: "azure",
  },
];

const Hero = () => {
  return (
    <section className="w-full min-h-screen pt-32 sm:pt-28 md:pt-0 bg-negro text-white flex flex-col items-center justify-center px-6 md:px-20 py-16 gap-10">
      {/* Título + animación */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10">
        <div className="flex flex-col items-start gap-6 max-w-xl text-center md:text-left">
          <motion.h1
            className="text-5xl md:text-6xl leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            ¡Bienvenido a mi portafolio!
          </motion.h1>
        </div>

        <motion.div
          className="w-60 h-60 md:w-80 md:h-80"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Player autoplay loop src={devAnimation} className="w-full h-full" />
        </motion.div>
      </div>

      {/* Carrusel de tecnologías con efecto fade */}
      <motion.div
        className="bg-gris relative rounded-[5px] p-6 w-full md:w-3/4 lg:w-2/3 flex flex-col items-center gap-6 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="text-3xl md:text-3xl text-white mb-4">
          Tecnologías principales
        </h2>

        {/* Fade lateral con carrusel */}
        <div className="relative w-3/4 overflow-hidden">
          {/* Gradientes laterales (fade) */}
          <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-negro to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-negro to-transparent z-10" />

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 10,
            }}
          >
            {/* Logos duplicados una sola vez para el bucle */}
            {[...techLogos, ...techLogos].map((logo, index) => (
              <div
                key={`${logo.key}-${index}`}
                className="bg-black w-20 h-20 rounded-[5px] flex items-center justify-center shadow-md"
              >
                {logo.icon}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
