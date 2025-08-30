import React from 'react'
import ProgressCircle from "../progressCircle/ProgressCircle.js"
import { useTranslation } from "react-i18next";

const RunningCourse = () => {
    
      const { t } = useTranslation();

  return (
    <div className="runningCourse w-full bg-[#141522] h-full rounded-[10px] p-8 md:w-fit">
        <h4 className="text-white ">{t("runningCourse")}</h4>
        <div className="runningCourse-progress display-flex justify-between md:flex-col">
          <h1 className="text-white">50</h1>
          <div className="progressCircle flex gap-[1.5rem]">
            <ProgressCircle value={50} size={70} strokeWidth={3} />
            <div className="display-flex flex-col gap-[0.75rem]">
              <p className="text-white text-2xl font-bold">100</p>
              <p className="text-[#9C9CA4]">{t("course")}</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default RunningCourse