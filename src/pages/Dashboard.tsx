import { useTranslation } from "react-i18next";
import Activity from "../components/dashboard/Activity.js";
import RunningCourse from "../components/dashboard/RunningCourse.js";
import TodayBox from "../components/dashboard/TodayBox.js";


const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="md:flex">
      <div className="p-8 display-flex flex-col gap-8 flex-1">
        <h4 className="text-[#9C9CA4] text-[1.8rem]">
          {t("letslearnsomethingnewtoday")}
        </h4>
        <div className="display-flex flex-col gap-8 md:flex-row">
          <div className="title dispaly-flex  md:hidden">
            <h1> {t("greeting")}</h1>
          </div>

          <div className="display-flex flex-col gap-[2rem] md:flex-row md:flex-1">
            <RunningCourse />
            <Activity />

          </div>
        </div>
      </div>
      <TodayBox />
    </div>
  );
};

export default Dashboard;
