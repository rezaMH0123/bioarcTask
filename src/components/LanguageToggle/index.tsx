import { useState } from "react";

export default function LanguageToggle() {
  const [language, setLanguage] = useState("En");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "En" ? "Fn" : "En"));
  };

  return (
    <button
      onClick={toggleLanguage}
      className="mr-8 md:mr-0 px-4 py-2 text-lightBlue rounded-lg transition cursor-pointer font-bold text-[15px] "
    >
      {language}
    </button>
  );
}
