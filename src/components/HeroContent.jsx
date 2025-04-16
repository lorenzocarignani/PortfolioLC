import React from "react";
import { motion } from "framer-motion";

import SocialIcons from "./SocialIcons";
import useTranslation from "../custom/useTraslation/useTraslation";

const HeroContent = () => {
  const t = useTranslation();

  return (
    <div className="flex flex-col items-center gap-6 max-w-xl text-center md:text-center">
      <motion.h1
        className="text-5xl text-center md:text-6xl leading-tight"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("hero.title")}
      </motion.h1>
      <motion.div
        className="relative inline-block text-lg md:text-xl text-gray-300 italic text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <p>
          <span className="text-white font-semibold">{t("hero.subtitle")}</span>{" "}
          {t("hero.in")}{" "}
          <strong className="text-primary font-semibold">
            .NET {t("hero.and")} React
          </strong>
        </p>

        {/* Línea animada */}
        <motion.div
          className="absolute left-0 -bottom-1 h-[3px] bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, delay: 1 }} // comienza después del texto
        />
      </motion.div>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <SocialIcons />
      </motion.button>
    </div>
  );
};

export default HeroContent;
