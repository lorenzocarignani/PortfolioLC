import React from "react";
import ButtonCv from "./ButtonCv";
import { motion } from "framer-motion";
import Logo from "../assets/Pictures/Logo.png";

const AboutHero = () => {
  return (
    <section className="px-6 md:px-20 py-20 text-white bg-negro mt-28">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Imagen a la derecha */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
          <img
            src={Logo}
            alt="Lorenzo Carignani"
            className="w-72 h-72 md:w-96 md:h-96 object-scale-down border-primary drop-shadow-red "
            loading="lazy"
          />
        </div>

        {/* Texto a la izquierda */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-primary text-center md:text-left">
            Sobre mí
          </h1>

          <p className="text-lg leading-relaxed text-gray-200">
            ¡Hola! Soy <strong className="text-white">Lorenzo Carignani</strong>
            , desarrollador especializado en tecnologías como{" "}
            <strong className="text-white">
              .NET, React, SQL Server y Azure
            </strong>
            . Mi camino en la programación comenzó con la curiosidad de entender
            cómo funcionan las cosas por dentro, y desde entonces no paré de
            aprender y crear.
          </p>

          <p className="text-lg leading-relaxed text-gray-200">
            Me formé como desarrollador en{" "}
            <strong className="text-white">Coderhouse</strong> y complementé mi
            formación con cursos avanzados de{" "}
            <strong className="text-white">
              arquitectura de software, patrones de diseño
            </strong>{" "}
            y desarrollo web full stack. Además, cuento con certificaciones en{" "}
            <strong className="text-white">
              Desarrollo Web Full Stack, .NET Fundamentals y Azure DevOps
            </strong>
            .
          </p>

          <p className="text-lg leading-relaxed text-gray-200">
            Soy una persona orientada a los detalles, con fuerte capacidad de
            análisis y resolución de problemas. Me entusiasma trabajar en
            equipo, enfrentar nuevos desafíos y seguir creciendo como
            profesional.
          </p>

          <p className="text-lg leading-relaxed text-gray-200">
            Mi objetivo es contribuir con soluciones escalables, limpias y bien
            estructuradas, en proyectos que aporten valor. Si estás buscando a
            alguien comprometido, con iniciativa y pasión por el desarrollo, ¡no
            dudes en contactarme!
          </p>

          {/* Botón centrado */}
          <div className="flex justify-center md:justify-start mt-6">
            <ButtonCv />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
