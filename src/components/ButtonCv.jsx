import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const ButtonCv = () => {
  return (
    <motion.a
      href=""
      download=""
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-negro text-white px-6 py-3 rounded-[8px] font-semibold text-lg flex items-center justify-center gap-2 shadow-md border border-primary transition-colors duration-300  hover:drop-shadow-red"
    >
      Descargar CV
      <Download className="text-primary" />
    </motion.a>
  );
};

export default ButtonCv;
