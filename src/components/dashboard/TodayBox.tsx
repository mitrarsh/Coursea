import { useState } from "react";
import Calender from "./Calender.js";
import Today from "./Today.js";

const TodayBox = () => {


  return (
    <div className="bg-[#F5F5F7] p-8 rounded-2xl display-flex flex-col gap-8">

      <Calender/>
      <Today/>
      
    </div>
  );
};

export default TodayBox;
