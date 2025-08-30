import React from "react";
import { useTranslation } from "react-i18next";

type circularProgressProps={
    value: number; size:number; strokeWidth:number
}
const CircularProgress = ({ value, size, strokeWidth}:circularProgressProps) => {

    const { t } = useTranslation();

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Background Circle */}
      <svg className="absolute rotate-[-90deg]" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#2c2c2c"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress Arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#F6A623" // orange color
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
        />
      </svg>

      {/* Center Text */}
      <span className="text-white text-2xl font-bold">{value}%</span>
    </div>
  );
};

export default CircularProgress;
