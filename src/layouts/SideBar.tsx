import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useMenuStore } from "../utils/store/store.js";

const SideBar = () => {
  const [activeOptionIdx, setActiveOptionIdx]= useState(0)
  const [activeSubOptionIdx, setActiveSubOptionIdx] = useState(-1)

  const menuIsOpen= useMenuStore((state)=>state.menuIsOpen);
  const openBar= useMenuStore((state)=>state.openBar);
  const setOpenBar= useMenuStore((state)=>state.setOpenBar);

  const { t } = useTranslation();

  const menu = [
    {
      path: "",
      iconPath: `/assets/icons/${activeOptionIdx===0? 'active': 'inactive'}/element-4.svg`,
      option: "Overview",
    },
    {
      path: "/courses/explore-courses",
      iconPath: `/assets/icons/${activeOptionIdx===1? 'active': 'inactive'}/book.svg`,
      option: "Courses",
      dropdown: [
        {
          option: "Explore Courses",
          path: "/courses/explore-courses",
        },
        {
          option: "My Courses",
          path: "/courses/my-courses",
        },
      ],
    },
    {
      path: "/mentors",
      iconPath: `/assets/icons/${activeOptionIdx===2? 'active': 'inactive'}/user-octagon.svg`,
      option: "Mentors",
    },
    {
      path: "/message",
      iconPath: `/assets/icons/${activeOptionIdx===3? 'active': 'inactive'}/message.svg`,
      option: "Message",
    },
    {
      path: "/setting",
      iconPath: `/assets/icons/${activeOptionIdx===4? 'active': 'inactive'}/setting-4.svg`,
      option: "Setting",
    },
  ];

    useEffect(() => {
    menu.forEach((item, i) => {
      if (item.dropdown) {
        item.dropdown.forEach((sub, j) => {
          if (location.pathname.startsWith(sub.path)) {
            setActiveOptionIdx(i);
            setActiveSubOptionIdx(j);
            setOpenBar(sub.option);
          }
        });
      }
      if (location.pathname.startsWith(item.path) && !item.dropdown) {
        setActiveOptionIdx(i);
        setActiveSubOptionIdx(-1);
        setOpenBar(item.option);
      }
    });
  }, [location.pathname]);


  return (
    <div className={`border-r border-[#F7F7F7] overflow-hidden flex-col align-middle bg-white p-8 h-screen gap-20 z-10 top-0 left-0 transition-all duration-300
  ${menuIsOpen ? "display-flex min-w-[28rem]" : "hidden"} md:flex md:relative md:min-w-[20rem]`}
>
     <div className="flex gap justify-center mx-4 mt-4">
        <img src="/assets/images/Union.svg" alt="" />
        <img src="/assets/images/Coursea.svg" alt="" />
      </div>
      <div className={`display-flex flex-col gap-2 flex-1 `}>
        {menu.map((option,i) => (
          <Link to={option.path} >
            <div onClick={()=>{setOpenBar(option.option)}} key={i} className={`gap-4 display-flex flex-col rounded-[10px] transition-all duration-300 cursor-pointer ${activeOptionIdx===i?'bg-[#F5F5F7]':'bg-white'}`}>
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
              ? option.dropdown.map((subOption, j) => (
                  <Link to={subOption.path} >
                  <div onClick={()=>{activeSubOptionIdx!==j? setActiveSubOptionIdx(j):null; }} key={j} className="gap-2 display-flex flex-col" >
                    <div className="menu-option border-radius flex space-between">
                      <div className="flex gap">
                        <p className={`transition-all duration-300 ${activeSubOptionIdx===j?'text-[#141522]': 'text-[#9C9CA4]'}`}>{subOption.option}</p>
                      </div>
                    </div>
                  </div>
                  </Link>
                ))
              : null}
            </div>
          </div>
          
          </Link>
        ))}
      </div>
      <div className="w-[196px] h-[150px] bg-[#141522] rounded-[1rem] p-7 flex fixed bottom-6">
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

