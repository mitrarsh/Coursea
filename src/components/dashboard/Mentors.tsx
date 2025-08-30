import { useState } from "react";
import SliderWrapper from "../../utils/components/slider.js";
import { useMentors } from "../../utils/hooks/useMentors.js";

const Mentors = () => {
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

  const { data: mentors, isLoading, error } = useMentors();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error loading posts</p>;
  }

  return (
        <div className=" max-w-2xl mx-auto md: md:max-w-7xl">
      <SliderWrapper
        settings={sliderSettings}
        classname=""
        disabledIdx={disabledIdx}
        title="Today"
        arrowSize="lg"
        sliderTitleClassname="text-[#141522] text-slate-600 text-[2.4rem]"
      >
        {mentors.map((mentor) => (
          <div className="p-[3rem] " key={mentor.id} >
            <div className="flex flex-row gap-[20px]">
              <img
                className="rounded-full w-[45px] h-[45px]"
                src="/assets/images/photo.svg"
                alt=""
              />
              <div className="flex-1">
                <p className="font-[700]">{mentor.name}</p>
                <p className="text-[#9C9CA4]">{mentor.specialization}</p>
              </div>
                {mentor.isFollowed?<p className="text-[#DB5962] font-[500]">Unfollow</p>:<p className="text-[#04A4F4] font-[500]">+Follow</p>}
            </div>
            <div className="flex gap-[2rem]">
              <div className="flex gap-[5px]">
                <img src="/assets/icons/document.svg" alt="" />
                <p>{mentor.courses} Course</p>
              </div>
              <div className="flex gap-[5px]">
                <img src="/assets/icons/active/Star-medium.svg" alt="" />
                <p>{`${mentor.rating} (${mentor.reviews} Review)`}</p>
              </div>
            </div>
          </div>
        ))}
      </SliderWrapper>
    </div>
  );
};

export default Mentors;
