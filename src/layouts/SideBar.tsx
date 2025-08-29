import { useState } from "react";
import { useTranslation } from "react-i18next";

const SideBar = () => {
  const [activeOptionIdx, setActiveOptionIdx]= useState(0)
  const [activeSubOptionIdx, setActiveSubOptionIdx] = useState(-1)

  const { t } = useTranslation();

  const menu = [
    {
      path: "",
      iconPath: `/assets/icons/${activeOptionIdx===0? 'active': 'inactive'}/element-4.svg`,
      option: t("overview"),
    },
    {
      path: "",
      iconPath: `/assets/icons/${activeOptionIdx===1? 'active': 'inactive'}/book.svg`,
      option: t("courses"),
      dropdown: [
        {
          option: t("exploreCourses"),
          path: "",
        },
        {
          option: t("myCourses"),
          path: "",
        },
      ],
    },
    {
      path: "",
      iconPath: `/assets/icons/${activeOptionIdx===2? 'active': 'inactive'}/user-octagon.svg`,
      option: t("mentors"),
    },
    {
      path: "",
      iconPath: `/assets/icons/${activeOptionIdx===3? 'active': 'inactive'}/message.svg`,
      option: t("message"),
    },
    {
      path: "",
      iconPath: `/assets/icons/${activeOptionIdx===4? 'active': 'inactive'}/setting-4.svg`,
      option: t("setting"),
    },
  ];

  return (
    <div className="w-[256px] flex-col align-middle bg-white p-8 h-screen gap-20 fixed z-10 top-0 left-0 hidden md:relative md:flex">
      <div className="flex gap justify-center">
        <img src="/assets/images/Union.svg" alt="" />
        <img src="/assets/images/Coursea.svg" alt="" />
      </div>
      <div className="display-flex flex-col gap-2 flex-1 ">
        {menu.map((option,i) => (
          <div key={i} className={`gap-4 display-flex flex-col rounded-[10px] transition-all duration-300  ${activeOptionIdx===i?'bg-[#F5F5F7]':'bg-white'}`} onClick={()=>{activeOptionIdx!==i? setActiveOptionIdx(i):null}}>
            <div className="menu-option border-radius flex space-between ">
              <div className="flex gap ">
                <img src={option.iconPath} alt="" />
                <p className={`transition-all duration-300 ${activeOptionIdx===i?'text-[#141522]':'text-[#9C9CA4]'}`}>{option.option}</p>
              </div>
              {option.dropdown ? (
                <img className={`transition-all duration-300 ${activeOptionIdx===i?'':'rotate-180'}`} src="/assets/icons/arrow-up.svg" alt="" />
              ) : null}
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${activeOptionIdx===i?'max-h-40':'max-h-0'}`}>
              {option.dropdown
              ? option.dropdown.map((option, j) => (
                  <div key={j} className="gap-2 display-flex flex-col" onClick={()=>{activeSubOptionIdx!==j? setActiveSubOptionIdx(j):null}}>
                    <div className="menu-option border-radius flex space-between">
                      <div className="flex gap">
                        <p className={`transition-all duration-300 ${activeSubOptionIdx===j?'text-[#141522]': 'text-[#9C9CA4]'}`}>{option.option}</p>
                      </div>
                    </div>
                  </div>
                ))
              : null}
            </div>
          </div>
        ))}
      </div>
      <div className="w-[196px] h-[150px] bg-[#141522] rounded-[1rem] relative p-7 flex">
        <div className="w-8/12 gap-4 display-flex flex-col">
            <img src="/assets/images/Upgrade to Pro.svg" alt="" />
            <p className="text-slate-600 font-medium text-nowrap">Get 1 Month Free</p>
        </div>
            <img src="/assets/images/rocket.svg" alt="" />
      </div>
    </div>
  );
};

export default SideBar;
