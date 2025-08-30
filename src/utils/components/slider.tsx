import type { Settings } from "react-slick";
import { useRef } from "react";
import Slider from "react-slick";

// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

type sliderProps = {
  settings: Settings;
  classname: string;
  children?: React.ReactNode;
  disabledIdx: boolean;
  title:string
};
type refType = Slider | null;

const SliderWrapper = ({ settings, classname, disabledIdx, title, children }: sliderProps) => {
  const sliderRef = useRef<refType>(null);

  return (
    <>
      <header className="flex justify-between">
        <h4>{title}</h4>
        <div className="flex">
          <img
            className="-rotate-90"
            src={`/assets/icons/${
              disabledIdx ? "inactive" : "active"
            }/arrow-up.svg`}
            alt=""
            onClick={() => sliderRef.current?.slickPrev()}
          />
          <img
            className="rotate-90"
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
