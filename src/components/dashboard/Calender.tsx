import { useState } from "react";
import {
  addMonths,
  subMonths,
  format,
  startOfWeek,
  addDays,
  subDays
} from "date-fns";

const Calender = () => {
  const [currentMonth, setCurrentMonth]= useState(new Date());
  const [isSelected, setIsSelected] = useState(new Date());
  const [currentWeek, setCurrentWeek]=useState(startOfWeek(isSelected,{weekStartsOn:0}))


  const days= [...Array(7)].map((_,i)=>addDays(currentWeek,i));

  return (
    <div>
      <div className="bg-white p-8 rounded-2xl  display-flex flex-col gap-4">
        <div className="flex justify-between">
          <button
            onClick={()=>setCurrentWeek(subDays(currentWeek,7))}
            >
              <img className="-rotate-90" src="/assets/icons/arrow-up.svg" alt="" />
            </button>
          <h4>{format(currentMonth, "MMMM yyyy")}</h4>
          <button
            onClick={()=>setCurrentWeek(addDays(currentWeek,7))}>
              <img className="rotate-90" src="/assets/icons/arrow-up.svg" alt="" />
            </button>
        </div>
        <div className="flex justify-between gap">
          {days.map((day) => {
          const selectedDate = format(day, "yyyy-MM-dd") === format(isSelected, "yyyy-MM-dd");

          return (
            <div
              
              onClick={()=>setIsSelected(day)}
              className={`display-flex flex-col align-middle text-center gap-2 rounded-[4rem] cursor-pointer ${
                selectedDate ? "bg-[#FFBB54] p-2" : "transparent"
              }`}
            >
              <p className={`${selectedDate ? " text-black" : "text-[#9C9CA4]"
                }`}>{format(day,"E").charAt(0)}</p>
              <div
                className={`rounded-full w-10 h-10 flex justify-center  ${
                  selectedDate ? "bg-black text-white" : "bg-[#F5F5F7] text-black"
                }`}
              >
                {format(day,"d")}
              </div>
            </div>
            
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Calender;
