import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useLanguage = () => {
  const [lang, setLang] = useLocalStorage<"ja" | "en">("lang", "ja");

  const selectLang = (ja: string, en: string) => {
    if (lang === "ja") return ja;
    else if (lang === "en") return en;
  };

  return [selectLang, setLang];
};

export default useLanguage;
