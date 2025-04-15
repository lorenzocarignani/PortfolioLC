import { React, useContext } from "react";
import { TranslateContext } from "../../services/traslationContext/traslation.context";
import { dictionary_translations } from "./translation.dictionary";

const useTranslation = () => {
  const { language } = useContext(TranslateContext);

  return (key) => {
    const dict =
      dictionary_translations[language] ?? dictionary_translations["en"];
    const translation = dict.find((t) => t.key === key)?.value;
    return translation || key;
  };
};

export default useTranslation;
