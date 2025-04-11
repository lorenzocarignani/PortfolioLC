import React from "react";
import { motion } from "framer-motion";

const HeroContent = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-6 max-w-xl text-center md:text-center">
        <motion.h1
          className="text-5xl text-center md:text-6xl leading-tight"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          ¡Bienvenido a mi portafolio!
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 pb-1 border-b-4 border-primary italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="text-white font-semibold">
            Desarrollador Full Stack
          </span>{" "}
          en <span className="text-primary font-semibold">.NET</span> y{" "}
          <span className="text-primary font-semibold">React</span>
        </motion.p>
      </div>
    </div>
  );
};

export default HeroContent;
