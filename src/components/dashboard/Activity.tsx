import { useTranslation } from "react-i18next";
import ActivityChart from "../activityChart/ActivityChart.js";

const Activity = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto activity min-w-[60rem] rounded-2xl bg-[#F5F5F7]  min-h-[200px] p-8 md:flex-1 md:h-full md:max-w-full">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <h4>{t("activity")}</h4>
        <div
          style={{
            fontSize: 12,
            color: "#5A6473",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          This Week <span style={{ transform: "translateY(1px)" }}>▾</span>
        </div>
      </div>

        <ActivityChart/>

    </div>
  );
};

export default Activity;
