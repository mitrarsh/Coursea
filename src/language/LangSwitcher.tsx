import { useTranslation } from "react-i18next";

const LangSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => {
          i18n.language === "en"
            ? i18n.changeLanguage("fa")
            : i18n.changeLanguage("en");
        }}
      >
        {i18n.language === "en" ? "EN" : "FA"}
      </button>
    </div>
  );
};

export default LangSwitcher;
