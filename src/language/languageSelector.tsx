import i18next from "i18next";
import { useEffect } from "react";
import i18n from "i18next"; 

const languages = [
  { code: "en", lang: "English" },
  { code: "fa", lang: "Farsi" },
];

const changeLanguage = (lng:string) => {
  i18next.changeLanguage(lng);
};

useEffect(()=>{
  document.body.dir=i18n.dir()
}, [i18n.language])

const LanguageSelector = () => {
  return (
    <div>
      {languages.map((lng) => (
        <button key={lng.code} onClick={() => changeLanguage(lng.code)}>
          {lng.lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
