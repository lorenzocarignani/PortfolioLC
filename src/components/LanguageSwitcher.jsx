import React, { useContext } from "react";
import { TranslateContext } from "../services/traslationContext/traslation.context";

const LanguageSwitcher = () => {
  const { language, changeLanguageHandler } = useContext(TranslateContext);

  const buttonClasses = (lang) =>
    `px-3 py-1 rounded-full transition-all duration-300  ${
      language === lang
        ? "bg-primary text-negro font-bold shadow-sm"
        : "text-white hover:text-primary hover:bg-white/10"
    }`;

  return (
    <div className="flex gap-2 items-center text-base mr-8">
      <button
        onClick={() => changeLanguageHandler("es")}
        className={buttonClasses("es")}
      >
        ES
      </button>
      <button
        onClick={() => changeLanguageHandler("en")}
        className={buttonClasses("en")}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
