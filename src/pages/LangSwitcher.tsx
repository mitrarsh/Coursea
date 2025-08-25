import { useTranslation } from "react-i18next";

const LangSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2">
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      <button onClick={() => i18n.changeLanguage("fa")}>FA</button>
    </div>
  );
};

export default LangSwitcher;
