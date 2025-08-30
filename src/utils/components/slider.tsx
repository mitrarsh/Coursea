import type { Settings } from "react-slick";
import { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

type sliderProps = {
  settings: Settings;
  classname: string;
  children?: React.ReactNode;
  disabledIdx: boolean;
  title:string;
  arrowSize: "sm" | "lg";
  sliderTitleClassname?: string;
};
type refType = Slider | null;

const SliderWrapper = ({ settings, classname, disabledIdx, title, children, arrowSize,sliderTitleClassname }: sliderProps) => {
  const sliderRef = useRef<refType>(null);

  const arrowClasses= arrowSize==="lg"?"w-8 h-8":""

  return (
    <>
      <header className="flex justify-between">
        <h4 className={sliderTitleClassname}>{title}</h4>
        <div className="flex">
          <img
            className={`-rotate-90 ${arrowClasses} cursor-pointer`}
            src={`/assets/icons/${
              disabledIdx ? "inactive" : "active"
            }/arrow-up.svg`}
            alt=""
            onClick={() => sliderRef.current?.slickPrev()}
          />
          <img
            className={`rotate-90 ${arrowClasses} cursor-pointer`}
            src={`/assets/icons/${
              disabledIdx ? "inactive" : "active"
            }/arrow-up.svg`}
            alt=""
            onClick={() => sliderRef.current?.slickNext()}
          />
        </div>
      </header>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </>
  );
};

export default SliderWrapper;
