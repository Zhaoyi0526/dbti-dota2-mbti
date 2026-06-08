"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RechartsRadar,
  ResponsiveContainer,
} from "recharts";
import type { DimensionTotals, RadarPoint } from "@/types/dbti";

interface DBTIRadarChartProps {
  totals: DimensionTotals;
  radarData?: RadarPoint[];
}

export function DBTIRadarChart({ totals, radarData }: DBTIRadarChartProps) {
  const max = Math.max(
    8,
    totals.Mute,
    totals.Bark,
    totals["C-Dog"],
    totals.Altruist,
    totals.Smart,
    totals.Fierce,
    totals.Win,
    totals["Lay-flat"]
  );

  const data = (radarData ?? [
    { name: "Mute", value: totals.Mute },
    { name: "Bark", value: totals.Bark },
    { name: "C-Dog", value: totals["C-Dog"] },
    { name: "Altruist", value: totals.Altruist },
    { name: "Smart", value: totals.Smart },
    { name: "Fierce", value: totals.Fierce },
    { name: "Win", value: totals.Win },
    { name: "Lay-flat", value: totals["Lay-flat"] },
  ]).map((point) => ({
    subject: point.name,
    value: point.value,
    fullMark: max,
  }));

  return (
    <div className="h-56 w-full sm:h-64">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadar data={data} cx="50%" cy="50%" outerRadius="72%">
          <PolarGrid stroke="#ffffff" strokeOpacity={0.08} />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "#a1a1aa", fontSize: 11 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, max]}
            tick={{ fill: "#71717a", fontSize: 9 }}
            axisLine={false}
          />
          <Radar
            name="DBTI"
            dataKey="value"
            stroke="#7c3aed"
            fill="#7c3aed"
            fillOpacity={0.35}
            strokeWidth={2}
          />
        </RechartsRadar>
      </ResponsiveContainer>
    </div>
  );
}
