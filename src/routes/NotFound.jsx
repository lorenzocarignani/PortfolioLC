import { Undo2 } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();

  const backToHomePageHandler = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-negro text-white px-4">
      <h1 className="text-6xl mb-2 text-center">¡Página no encontrada!.</h1>
      <p className="text-xl text-white mb-6">La página que buscas no existe.</p>

      {/* Drop shadow aplicada solo al contenedor */}
      <div className="hover:drop-shadow-red">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={backToHomePageHandler}
          className="flex text-white bg-negro items-center justify-center gap-2 text-2xl px-16 py-2 font-semibold rounded-[8px] shadow-md border border-primary transition-colors duration-300  "
        >
          Volver
          <Undo2 className="h-6 w-6 text-primary" />
        </motion.button>
      </div>
    </div>
  );
};

export default NotFound;
