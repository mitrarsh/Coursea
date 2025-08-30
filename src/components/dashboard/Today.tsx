import { useState } from "react";
import SliderWrapper from "../../utils/components/slider.js";
import { useTodayCourses } from "../../utils/hooks/useTodayCourses.js";

const Today = () => {
  const [disabledIdx, setDisabledIdx] = useState(false);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const{data:todayCourses, isLoading, error}= useTodayCourses();

    if (isLoading) {return <p>Loading...</p>};
    if (error) {return <p>Error loading posts</p>;}

  return (
    <div className="bg-white p-8 rounded-2xl  display-flex flex-col gap-4">
      <SliderWrapper
        settings={sliderSettings}
        classname=""
        disabledIdx={disabledIdx}
        title="Today"
        arrowSize="sm"
        sliderTitleClassname="text-[#9C9CA4]"
      >
        <div className="w-full">
          <main className="justify-center">
          <div className="p-[3rem] flex-col course gap-[2rem] align-center">
            <div className="relative">
              <img
                className="rounded-[10px] w-full"
                src="/assets/images/photo.svg"
                alt=""
              />
              <div className="range-box px-[10px] py-[6px] rounded-lg absolute bottom-3 left-3 bg-white">
                <div className="flex gap">
                  <p>Beginner</p>
                  <img src="/assets/images/range-beginner.svg" alt="" />
                </div>
              </div>
            </div>
            <h3>khkhkjhl</h3>
            <div className="w-auto">
              <div className="flex flex-row gap-[20px]">
                <div className="flex-1">
                  <p className="text-[#9C9CA4]">sdfasd</p>
                </div>
                <img
                  className="rounded-full w-[45px] h-[45px]"
                  src="/assets/images/photo.svg"
                  alt=""
                />
              </div>
              <div className="flex justify-between">
                <div className="flex gap-[5px]">
                  <img src="/assets/icons/user.svg" alt="" />
                  <p>dsgfsdg</p>
                </div>
                <div className="flex gap-[5px]">
                  <img src="/assets/icons/document.svg" alt="" />
                  <p>dsgfsdg</p>
                </div>
                <div className="flex gap-[5px]">
                  <img src="/assets/icons/clock.svg" alt="" />
                  <p>dsgfsdg</p>
                </div>
              </div>
            </div>
            <div className="todayCourseParts display-flex gap-4 flex-col">
              <div className="flex justify-between">
                <h3 className="text-[1.6rem]">5 modul</h3>
                <p className="text-[#9C9CA4]">0/5 Done</p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <div className="bg-[#F5F5F7] rounded-[8px] w-10 h-10 flex justify-center">
                    1
                  </div>
                  <p className="text-[#9C9CA4]">Introduction</p>
                </div>
                <div className="text-[#9C9CA4]">10:00</div>
              </div>
   

              <button className="rounded-2xl btn-primary flex gap justify-center mt-6">
                Go to Detail
              </button>
            </div>
          </div>
        </main>
        </div>
      </SliderWrapper>
    </div>
  );
};

export default Today;
