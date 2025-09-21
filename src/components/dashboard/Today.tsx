import { useEffect, useState } from "react";
import SliderWrapper from "../../utils/components/slider.js";
import { useTodayCourses } from "../../utils/hooks/useTodayCourses.js";
import { useTranslation } from "react-i18next";

const Today = () => {
  
  const {t,i18n}= useTranslation();
  const en= i18n.language==="en";

    useEffect(() => {
      const dir = i18n.language === "fa" ? "rtl" : "ltr";
      document.documentElement.setAttribute("dir", dir);
    }, [i18n.language]);

  const [disabledIdx, setDisabledIdx] = useState(false);
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { data: todayCourses, isLoading, error } = useTodayCourses();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error loading posts</p>;
  }

  return (
    <div
    dir={i18n.language === "fa" ? "rtl" : "ltr"}
     className="max-w-[60rem] mx-auto bg-white p-8 rounded-2xl  display-flex flex-col gap-4 md:max-w-[50rem] ">
      <SliderWrapper
        settings={sliderSettings}
        classname=""
        disabledIdx={disabledIdx}
        title="Today"
        arrowSize="sm"
        sliderTitleClassname="text-[#9C9CA4]"
      >
        {todayCourses.map((course) => (
          <div>
            <main className="justify-center ">
              <div className="p-[3rem] flex-col course gap-[2rem] align-center">
                <div className="relative">
                  <img
                    className="rounded-[10px] w-full"
                    src="assets/images/photo.svg"
                    alt=""
                  />
                  <div className="range-box px-[10px] py-[6px] rounded-lg absolute bottom-3 start-3 w-fit bg-white">
                    <div className="flex gap">
                      <p>{en?course.level:course.levelFa}</p>
                      <img src={`assets/images/${course.level==="Beginner"?"range-beginner.svg":course.level==="Intermediate"?"range-intermediate.svg":"range-advance.svg"}`} alt="" />
                    </div>
                  </div>
                </div>
                <h3>{course.title}</h3>
                <div className="w-auto display-flex flex-col gap-4">
                  <div className="flex flex-row gap-[20px]">
                    <div className="flex-1">
                      <p className="text-[#9C9CA4]">{en?course.instructor:course.instructorFa}</p>
                    </div>
                    <img
                      className="rounded-full w-[45px] h-[45px]"
                      src="assets/images/mentor.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-[5px]">
                      <img src="assets/icons/user.svg" alt="" />
                      <p className="text-nowrap">{course.students} {t("students")}</p>
                    </div>
                    <div className="flex gap-[5px]">
                      <img src="assets/icons/document.svg" alt="" />
                      <p className="text-nowrap">{course.modulesCount} modul</p>
                    </div>
                    <div className="flex gap-[5px]">
                      <img src="assets/icons/clock.svg" alt="" />
                      <p className="text-nowrap">{course.duration}</p>
                    </div>
                  </div>
                </div>
                <div className="todayCourseParts display-flex gap-4 flex-col">
                  <div className="flex justify-between">
                    <h3 className="text-[1.6rem]">
                      {course.modulesCount} modul
                    </h3>
                    <p className="text-[#9C9CA4]">
                      {course.progress.completed}/{course.progress.total} Done
                    </p>
                  </div>
                  {course.modules.map((m) => (
                    <div className="flex justify-between" key={m.id}>
                      <div className="flex gap-4">
                        <div className="bg-[#F5F5F7] rounded-[8px] w-10 h-10 flex justify-center ">
                          <p className="text-slate-600">{m.id}</p>
                        </div>
                        <p className="text-[#9C9CA4]">{m.title}</p>
                      </div>
                      <div className="text-[#9C9CA4]">{m.duration}</div>
                    </div>
                  ))}

                  <button className="rounded-2xl btn-primary flex gap justify-center mt-6">
                    Go to Detail
                  </button>
                </div>
              </div>
            </main>
          </div>
        ))}
      </SliderWrapper>
    </div>
  );
};

export default Today;
