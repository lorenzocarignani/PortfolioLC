import React from "react";
import { motion } from "framer-motion";
import LazyLottie from "./LazyLottie";
import HeroTechCarousel from "./HeroTechCarousel";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section className="w-full min-h-screen mt-28 sm:pt-0 md:pt-0 bg-negro text-white flex flex-col items-center justify-center px-6 md:px-20 gap-10">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
        <HeroContent />
        <motion.div
          className="w-60 h-60 md:w-80 md:h-80"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <LazyLottie />
        </motion.div>
      </div>
      <HeroTechCarousel />
    </section>
  );
};

export default Hero;
