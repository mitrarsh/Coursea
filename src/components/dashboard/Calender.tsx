import { useState } from "react";

const Calender = () => {
  const [isToday, setIsToday] = useState(true);
  return (
    <div>
      <div className="bg-white p-8 rounded-2xl  display-flex flex-col gap-4">
        <div className="flex justify-between">
          <img className="-rotate-90" src="/assets/icons/arrow-up.svg" alt="" />
          <h4>April 2022</h4>
          <img className="rotate-90" src="/assets/icons/arrow-up.svg" alt="" />
        </div>
        <div className="flex justify-between gap">
          <div
            className={`display-flex flex-col align-middle text-center gap-2 rounded-[4rem] ${
              isToday ? "bg-[#FFBB54] p-2" : "transparent"
            }`}
          >
            <p className={`${isToday ? " text-black" : "text-[9C9CA4]"
              }`}>S</p>
            <div
              className={`rounded-full w-10 h-10 flex justify-center  ${
                isToday ? "bg-black text-white" : "bg-[#F5F5F7] text-black"
              }`}
            >
              13
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
