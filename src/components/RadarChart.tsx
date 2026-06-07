"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RechartsRadar,
  ResponsiveContainer,
} from "recharts";
import type { AxisTotals } from "@/types/dbti";

interface DBTIRadarChartProps {
  totals: AxisTotals;
}

export function DBTIRadarChart({ totals }: DBTIRadarChartProps) {
  const max = Math.max(
    8,
    totals.M,
    totals.B,
    totals.C,
    totals.A,
    totals.S,
    totals.F,
    totals.W,
    totals.L
  );

  const data = [
    { subject: "Mute", value: totals.M, fullMark: max },
    { subject: "Bark", value: totals.B, fullMark: max },
    { subject: "C-Dog", value: totals.C, fullMark: max },
    { subject: "Altruist", value: totals.A, fullMark: max },
    { subject: "Smart", value: totals.S, fullMark: max },
    { subject: "Fierce", value: totals.F, fullMark: max },
    { subject: "Win", value: totals.W, fullMark: max },
    { subject: "Lay-flat", value: totals.L, fullMark: max },
  ];

  return (
    <div className="h-64 w-full sm:h-72">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadar data={data} cx="50%" cy="50%" outerRadius="72%">
          <PolarGrid stroke="#3f3f46" strokeOpacity={0.6} />
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
