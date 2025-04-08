import { Undo2 } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const backToHomePageHandler = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-negro text-white px-4">
      <h1 className="text-6xl mb-2">¡Página no encontrada!.</h1>
      <p className="text-xl text-white mb-6">La página que buscas no existe.</p>

      {/* Drop shadow aplicada solo al contenedor */}
      <div className="hover:drop-shadow-red">
        <button
          onClick={backToHomePageHandler}
          className="flex items-center justify-center gap-2 text-2xl px-16 py-2 border-[4px] border-primary rounded-[5px] hover:bg-gray-800 transition-all duration-200"
        >
          Volver
          <Undo2 className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default NotFound;
