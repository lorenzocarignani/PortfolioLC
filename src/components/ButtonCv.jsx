import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

import useTranslation from "../custom/useTraslation/useTraslation";

const ButtonCv = () => {
  const t = useTranslation();
  return (
    <motion.a
      href="/public/Lorenzo-Carignani-CV.pdf"
      download="CV-Lorenzo-Carignani.pdf"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-negro text-white px-6 py-3 w-full  rounded-[8px] font-semibold text-lg flex items-center justify-center gap-2 shadow-md border border-primary transition-colors duration-300 hover:drop-shadow-red text-center break-keep"
    >
      {t("nabar.cv")}
      <Download className="text-primary" />
    </motion.a>
  );
};

export default ButtonCv;
