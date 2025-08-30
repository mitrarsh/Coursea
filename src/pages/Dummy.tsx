import { useState } from "react";
import SliderWrapper from "../utils/components/slider.js";
import { useTodayCourses } from "../utils/hooks/useTodayCourses.js";

const Dummy = () => {
  const [disabledIdx, setDisabledIdx] = useState(false);
  const sliderSettings = {
    dots: false,
    infinite: true,
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
    <div className="w-96">
      <SliderWrapper
        settings={sliderSettings}
        classname=""
        disabledIdx={disabledIdx}
        title="Today"
        arrowSize="sm"
        sliderTitleClassname="text-[#9C9CA4]"
      >
        {todayCourses.map((course) => (
          <p key={course.id}>{course.title}</p>
        ))}
      </SliderWrapper>
    </div>
  );
};

export default Dummy;
