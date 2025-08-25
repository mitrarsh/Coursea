import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="menu-option border-radius flex menu-active">
        <img src="/assets/icons/active/Overview.svg" alt="" />
        <p>Overview</p>
      </div>
      <div className="menu-option border-radius flex menu-inactive">
        <img src="/assets/icons/inactive/menu-board.svg" alt="" />
        <p>Overview</p>
      </div>
      <div className="menu-option border-radius flex menu-active space-between">
        <div className="flex gap">
          <img src="/assets/icons/active/Overview.svg" alt="" />
          <p>Overview</p>
        </div>
        <img src="/assets/icons/arrow-up.svg" alt="" />
      </div>
    </>
  );
};

export default App;
