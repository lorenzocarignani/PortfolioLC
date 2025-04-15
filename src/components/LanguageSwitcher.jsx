import React, { useContext } from "react";
import { TranslateContext } from "../services/traslationContext/traslation.context";

const LanguageSwitcher = () => {
  const { language, changeLanguageHandler } = useContext(TranslateContext);

  return (
    <div className="flex gap-2 text-sm font-semibold text-white">
      <button
        onClick={() => changeLanguageHandler("es")}
        className={`hover:text-primary transition ${
          language === "es" ? "text-primary underline" : ""
        }`}
      >
        ES
      </button>
      <span>/</span>
      <button
        onClick={() => changeLanguageHandler("en")}
        className={`hover:text-primary transition ${
          language === "en" ? "text-primary underline" : ""
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
