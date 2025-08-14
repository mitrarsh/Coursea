import i18next from "i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "fa", lang: "Farsi" },
];

const changeLanguage = (lng) => {
  i18next.changeLanguage(lng);
};

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
