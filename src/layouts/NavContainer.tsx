import { useTranslation } from "react-i18next";
import LangSwitcher from "../language/LangSwitcher.js";
import { useMenuStore } from "../utils/store/store.js";

const NavContainer = () => {
  const { t } = useTranslation();

  const menuIsOpen = useMenuStore((state) => state.menuIsOpen);
  const openMenu = useMenuStore((state) => state.openMenu);
  const openBar = useMenuStore((state) => state.openBar);

  console.log(openBar)
  return (
    <nav className={`flex flex-row p-10 pt-16 justify-between flex-1  ${openBar.toLowerCase()==="overview"?"bg-[#FCFCFC]":"bg-white"}`}>
      <div className="menu-icon cursor-pointer md:hidden" onClick={openMenu}>
        <img src={`assets/icons/${menuIsOpen?"close.svg":"menu.svg"}`} alt="" />
      </div>
      <div className="title hidden md:flex">
        <h1> {openBar==="Overview"? "Welcome, Mitra": openBar}</h1>
      </div>
      <div className="flex flex-row gap-[4rem]">
        <LangSwitcher />
        <div className="search">
          <img src="assets/icons/search-normal.svg" alt="" />
        </div>
        <div className="notif">
          <img src="assets/icons/notif.svg" alt="" />
        </div>
        <div className="profilePic w-[5rem] h-[5rem] rounded-full overflow-hidden flex justify-center">
          <img src="assets/images/prof.avif" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default NavContainer;
