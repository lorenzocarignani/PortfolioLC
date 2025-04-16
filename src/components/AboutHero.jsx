import React from "react";
import ButtonCv from "./ButtonCv";
import { motion } from "framer-motion";
import Logo from "../assets/Pictures/Logo-Lc.png";
import useTranslation from "../custom/useTraslation/useTraslation";

const AboutHero = () => {
  const t = useTranslation();
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
            className="w-72 h-72 md:w-96 md:h-96 p-8 rounded-full border-primary border-[5px] "
            loading="lazy"
          />
        </div>

        {/* Texto a la izquierda */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Título + animación */}
          <div className="text-center md:text-left">
            <h1 className="text-6xl md:text-5xl font-semibold text-white">
              {t("about.title")}
            </h1>
            <motion.div
              className="h-[3px] bg-primary rounded-full mt-2 mx-auto md:mx-0"
              initial={{ width: 0 }}
              animate={{ width: "33%" }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
          </div>

          <p className="text-lg leading-relaxed text-gray-200">
            {t("about.hi")}
            <strong className="text-white">
              Lorenzo Carignani{" "}
              <em className="border-b-[1px] border-primary">
                {t("about.degree")}
              </em>
            </strong>
          </p>

          <p className="text-lg leading-relaxed text-gray-200">
            {t("about.formation1")}
          </p>
          <p className="text-lg leading-relaxed text-gray-200">
            {t("about.formation2")}
          </p>
          <p className="text-lg leading-relaxed text-gray-200">
            {t("about.formation3")}
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
