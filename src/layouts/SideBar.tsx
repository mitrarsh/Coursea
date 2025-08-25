import { useTranslation } from "react-i18next";

const SideBar = () => {

  const { t } = useTranslation();

  const menu = [
    {
      path: "",
      iconPath: `/assets/icons/active/element-4.svg`,
      option: t("overview"),
    },
    {
      path: "",
      iconPath: `/assets/icons/active/book.svg`,
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
      iconPath: `/assets/icons/active/user-octagon.svg`,
      option: t("mentors"),
    },
    {
      path: "",
      iconPath: `/assets/icons/active/message.svg`,
      option: t("message"),
    },
    {
      path: "",
      iconPath: `/assets/icons/active/setting-4.svg`,
      option: t("setting"),
    },
  ];
  // const SideBar = () => {
  //   const menu = [
  //     {
  //       path: "",
  //       iconPath: `/assets/icons/{optionActive? 'active': 'inactive'}/element-4.svg`,
  //       option: "Overview",
  //
  //     },
  //     {
  //       path: "",
  //       iconPath: `/assets/icons/{optionActive? 'active': 'inactive'}/book.svg`,
  //       option: "Courses",
  //       dropdown: [
  //         {
  //           option: "Explore Courses",
  //           path: "",
  //         },
  //         {
  //           option: "My Cources",
  //           path: "",
  //         },
  //       ],
  //     },
  //     {
  //       path: "",
  //       iconPath: `/assets/icons/{optionActive? 'active': 'inactive'}/user-octagon.svg`,
  //       option: "Mentors",
  //
  //     },
  //     {
  //       path: "",
  //       iconPath: `/assets/icons/{optionActive? 'active': 'inactive'}/message.svg`,
  //       option: "Message",
  //
  //     },
  //     {
  //       path: "",
  //       iconPath: `/assets/icons/{optionActive? 'active': 'inactive'}/setting-4.svg`,
  //       option: "Setting",
  //
  //     },
  //   ];

  return (
    <div className="w-[256px] display-flex flex-col align-middle bg-white p-8 h-screen gap-20">
      <div className="flex gap justify-center">
        <img src="/assets/images/Union.svg" alt="" />
        <img src="/assets/images/Coursea.svg" alt="" />
      </div>
      <div className="display-flex flex-col gap-2 flex-1 ">
        {menu.map((option,i) => (
          <div key={i} className="gap-4 display-flex flex-col  bg-white">
            <div className="menu-option border-radius flex space-between ">
              <div className="flex gap ">
                <img src={option.iconPath} alt="" />
                <p>{option.option}</p>
              </div>
              {option.dropdown ? (
                <img className="" src="/assets/icons/arrow-up.svg" alt="" />
              ) : null}
            </div>
            {option.dropdown
              ? option.dropdown.map((option, j) => (
                  <div key={j} className="gap-2 display-flex flex-col">
                    <div className="menu-option border-radius flex space-between">
                      <div className="flex gap">
                        <p>{option.option}</p>
                      </div>
                    </div>
                  </div>
                ))
              : null}
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
