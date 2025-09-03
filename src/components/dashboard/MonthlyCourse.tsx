import { useState } from "react";
import SliderWrapper from "../../utils/components/slider.js";
import { useMonthlyCourses } from "../../utils/hooks/useMonthlyCourses.js";

const MonthlyCourse = () => {
  const [disabledIdx, setDisabledIdx] = useState(false);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { data: monthlyCourses, isLoading, error } = useMonthlyCourses();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error loading posts</p>;
  }

  return (
    <div className=" max-w-[60rem] mx-auto md:w-full md:max-w-screen-lg">
      <SliderWrapper
        settings={sliderSettings}
        classname=""
        disabledIdx={disabledIdx}
        title="Monthly Courses"
        arrowSize="lg"
        sliderTitleClassname="text-[#141522] text-slate-700 text-[2.4rem]"
      >
        {monthlyCourses.map((course) => (
          <div
            className=" flex-col course gap-[2rem]"
            key={course.id}
          >
            <div className=" p-[3rem] me-10 bg-white rounded-2xl m-auto display-flex flex-col gap-8">
              <div className="relative">
                <img
                  className="rounded-[10px] m-auto w-full"
                  src="/assets/images/photo.svg"
                  alt=""
                />
                <div className="range-box px-[10px] py-[6px] rounded-lg absolute bottom-3 left-3 bg-white">
                  <div className="flex gap">
                    <p>{course.level}</p>
                    <img src={`/assets/images/${course.level==="Beginner"?"range-beginner.svg":course.level==="Intermediate"?"range-intermediate.svg":"range-advance.svg"}`} alt="" />
                  </div>
                </div>
              </div>
              <h3>{course.title}</h3>
              <div className="w-auto  display-flex flex-col gap-4">
                <div className="flex flex-row gap-[20px]">
                  <img
                    className="rounded-full w-[45px] h-[45px]"
                    src="/assets/images/photo.svg"
                    alt=""
                  />
                  <div className="flex-1">
                    <p className="text-[#9C9CA4]">{course.instructor}</p>
                  </div>
                  <div className="flex gap-[5px]">
                    <img src="/assets/icons/active/Star-medium.svg" alt="" />
                    <p>{course.rating}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-[5px]">
                    <img src="/assets/icons/user.svg" alt="" />
                    <p>{course.students} Students</p>
                  </div>
                  <div className="flex gap-[5px]">
                    <img src="/assets/icons/clock.svg" alt="" />
                    <p>{course.modul} Modul</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </SliderWrapper>
    </div>
  );
};

export default MonthlyCourse;
