import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  type TooltipProps,
  XAxis,
  YAxis,
} from "recharts";

export type DataPoint = { day: string; hours: number };

const defaultData: DataPoint[] = [
  { day: "S", hours: 2 },
  { day: "M", hours: 3 },
  { day: "T", hours: 1 },
  { day: "W", hours: 1 },
  { day: "T", hours: 1 },
  { day: "F", hours: 1 },
  { day: "S", hours: 1 },
];

type Props = {
  data?: DataPoint[];
  highlight?: { day: string; hours: number } | null;
  height?: number;
};

const ActivityChart: React.FC<Props> = ({ data = defaultData }) => {
  const RingDot = (props: any) => {
    const { cx, cy } = props;
    if (cx == null || cy == null) return null;
    return (
      <g>
        {/* outer ring */}
        <circle cx={cx} cy={cy} r={10} fill="rgba(255,179,0)" />
        {/* solid inner dot */}
        <circle cx={cx} cy={cy} r={5} fill="black" />
      </g>
    );
  };

  const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
    active,
    payload,
  }) => {
    if (active && payload && payload.length) {
      const val = payload[0].value as number;
      return (
        <div
          style={{
            background: "#111",
            color: "#fff",
            fontSize: 12,
            padding: "6px 10px",
            borderRadius: 8,
            boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
          }}
        >
          {`${val} Hours`}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-5/6">
      <ResponsiveContainer height={130}>
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="hours"
            stroke="#111"
            strokeWidth={3}
            dot={false}
            activeDot={<RingDot />}
            filter="url(#dropShadow)"
          />

          <CartesianGrid
            vertical
            horizontal={false}
            stroke="#EEF1F4"
            // strokeDasharray="3 3"
          />

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#141522", fontSize: 12 }}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis
            domain={[1, 4]}
            ticks={[1, 2, 3, 4]}
            allowDecimals={false}
            axisLine={false}
            tickLine={false}
            width={24}
            tick={{ fill: "#141522", fontSize: 12 }}
            padding={{ top: 20, bottom: 20 }}
          />
          <defs>
            <filter id="dropShadow" height="130%">
              <feGaussianBlur
                in="SourceAlpha"
                stdDeviation="1.5"
                result="blur"
              />
              <feOffset dx="0" dy="2" result="offsetblur" />
              <feMerge>
                <feMergeNode in="offsetblur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: "#E9EDF2", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
