import { React, createContext, useState, useEffect } from "react";

export const TranslateContext = createContext();

export const TranslateContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("translation");
    if (saved) setLanguage(saved);
  }, []);

  const changeLanguageHandler = (newLang) => {
    localStorage.setItem("translation", newLang);
    setLanguage(newLang);
  };

  return (
    <TranslateContext.Provider value={{ language, changeLanguageHandler }}>
      {children}
    </TranslateContext.Provider>
  );
};
