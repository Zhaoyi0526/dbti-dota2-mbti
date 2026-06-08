"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RechartsRadar,
  ResponsiveContainer,
} from "recharts";
import { DIMENSION_RADAR_LABELS } from "@/types/dbti";
import type { DimensionKey, DimensionTotals, RadarPoint } from "@/types/dbti";

interface DBTIRadarChartProps {
  totals: DimensionTotals;
  radarData?: RadarPoint[];
}

export function DBTIRadarChart({ totals, radarData }: DBTIRadarChartProps) {
  const max = Math.max(
    8,
    totals.Silent,
    totals.Vocal,
    totals.Egoistic,
    totals.Altruistic,
    totals.Calculated,
    totals.Instinctive,
    totals.Tenacious,
    totals.Resigned
  );

  const data = (radarData ?? [
    { name: "Silent" as const, value: totals.Silent },
    { name: "Vocal" as const, value: totals.Vocal },
    { name: "Egoistic" as const, value: totals.Egoistic },
    { name: "Altruistic" as const, value: totals.Altruistic },
    { name: "Calculated" as const, value: totals.Calculated },
    { name: "Instinctive" as const, value: totals.Instinctive },
    { name: "Tenacious" as const, value: totals.Tenacious },
    { name: "Resigned" as const, value: totals.Resigned },
  ]).map((point) => ({
    subject: DIMENSION_RADAR_LABELS[point.name as DimensionKey],
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
            tick={{ fill: "#a1a1aa", fontSize: 10 }}
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
