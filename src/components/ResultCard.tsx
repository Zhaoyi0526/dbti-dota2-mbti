"use client";

import { DBTIRadarChart } from "./RadarChart";
import type { QuizResult } from "@/types/dbti";

/** Canonical hero art frame: 928 × 1232 (3:4) */
const HERO_WIDTH = 928;
const HERO_HEIGHT = 1232;

interface ResultCardProps {
  result: QuizResult;
  forExport?: boolean;
}

export function ResultCard({ result, forExport = false }: ResultCardProps) {
  const { persona, progress, totals, code, personaKey } = result;

  return (
    <div
      id={forExport ? "dbti-share-card" : undefined}
      className={`relative w-full overflow-hidden rounded-2xl border border-zinc-800/50 bg-[#121214] ${
        forExport ? "mx-auto" : ""
      }`}
      style={
        forExport
          ? { width: HERO_WIDTH, background: "#121214" }
          : { maxWidth: HERO_WIDTH }
      }
    >
      <div
        className="relative w-full bg-[#121214]"
        style={{ aspectRatio: `${HERO_WIDTH} / ${HERO_HEIGHT}` }}
      >
        <div className="absolute left-0 top-0 z-0 h-full w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={persona.imagePath}
            alt={persona.title}
            width={HERO_WIDTH}
            height={HERO_HEIGHT}
            className="h-full w-full object-cover object-center opacity-85"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121214]/40 to-[#121214]" />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-5 pt-[55%] sm:px-8 sm:pb-6">
          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              DBTI · 7.41C
            </span>
            <span className="rounded border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 font-mono text-[10px] text-purple-300">
              {code}
            </span>
          </div>

          <h1 className="mb-2 text-3xl font-bold tracking-tight text-zinc-100">
            {persona.title}
          </h1>
          <p className="mb-4 text-sm leading-relaxed text-zinc-400">{persona.tag}</p>

          <p className="mb-1 text-xs text-zinc-500">
            代表巨星 ·{" "}
            <span className="text-glow-aegis text-[#c9a227]">{persona.star}</span>
          </p>
          <p className="mb-4 text-xs text-zinc-500">本命英雄 · {persona.heroes}</p>
        </div>
      </div>

      <div className="relative z-10 bg-[#121214] px-5 pb-6 sm:px-8">
        {personaKey !== code && (
          <p className="mb-4 font-mono text-[10px] text-zinc-600">
            四维 {code} · 人格微调匹配
          </p>
        )}

        <div className="mb-6 rounded-xl border border-zinc-800/40 bg-zinc-950/30 p-3">
          <DBTIRadarChart totals={totals} />
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {[
            { label: "社交", left: "Mute", right: "Bark", val: progress.M_vs_B },
            { label: "资源", left: "C-Dog", right: "Altruist", val: progress.C_vs_A },
            { label: "决策", left: "Smart", right: "Fierce", val: progress.S_vs_F },
            { label: "韧性", left: "Win", right: "Lay-flat", val: progress.W_vs_L },
          ].map((axis) => (
            <span
              key={axis.label}
              className="rounded border border-zinc-800/60 px-2 py-1 text-[10px] text-zinc-400"
            >
              {axis.label}: {axis.val >= 0 ? axis.right : axis.left}
            </span>
          ))}
        </div>

        <p className="text-sm leading-7 text-zinc-400">{persona.profileText}</p>

        {forExport && (
          <p className="mt-8 text-center font-mono text-[10px] text-zinc-600">
            DBTI · Dota2 Behavioral Type Indicator
          </p>
        )}
      </div>
    </div>
  );
}
