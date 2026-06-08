"use client";

import { DBTIRadarChart } from "./RadarChart";
import type { QuizResult } from "@/types/dbti";

/** Canonical art frame & card max width: 928px (3:4 hero) */
const CARD_WIDTH = 928;
const HERO_HEIGHT_RATIO = 1232 / 928;

const PREMIUM_BG =
  "radial-gradient(110% 80% at 50% 10%, #161920 0%, #0d0e12 60%, #060708 100%)";

const glassPanelClass =
  "rounded-2xl border border-white/[0.06] bg-[#13151a]/60 bg-white/[0.02] p-5 backdrop-blur-md";

interface ResultCardProps {
  result: QuizResult;
  forExport?: boolean;
}

export function ResultCard({ result, forExport = false }: ResultCardProps) {
  const { persona, progress, totals, code, personaKey, radarData } = result;

  return (
    <div
      id={forExport ? "dbti-share-card" : undefined}
      className="relative w-full overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
      style={{
        maxWidth: CARD_WIDTH,
        width: forExport ? CARD_WIDTH : "100%",
        background: PREMIUM_BG,
      }}
    >
      {/* Hero illustration — locked 928 × 1232 (3:4) */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: `${CARD_WIDTH} / ${CARD_WIDTH * HERO_HEIGHT_RATIO}` }}
      >
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={persona.imagePath}
            alt={persona.title}
            width={CARD_WIDTH}
            height={Math.round(CARD_WIDTH * HERO_HEIGHT_RATIO)}
            className="h-full w-full object-cover object-center opacity-90"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060708]/20 via-[#0d0e12]/50 to-[#060708]" />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-6 pt-[48%] sm:px-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
              DBTI · 7.41C
            </span>
            <span className="rounded-md border border-purple-500/35 bg-purple-500/10 px-2.5 py-1 font-mono text-[11px] text-purple-300">
              {code}
            </span>
          </div>

          <h1 className="mb-3 text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
            {persona.title}
          </h1>

          <span className="mb-4 inline-flex w-fit max-w-full rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-sm font-medium leading-snug text-amber-400/90">
            {persona.tag}
          </span>
        </div>
      </div>

      {/* Lower profile stack */}
      <div className="space-y-5 px-5 py-6 sm:px-6">
        {personaKey !== code && (
          <p className="font-mono text-[11px] text-zinc-500">
            四维 {code} · 人格微调匹配
          </p>
        )}

        <div className={glassPanelClass}>
          <p className="mb-1 text-xs tracking-wide text-zinc-500">代表巨星</p>
          <p className="mb-3 text-sm font-medium text-[#c9a227]">{persona.star}</p>
          <p className="mb-1 text-xs tracking-wide text-zinc-500">本命英雄</p>
          <p className="text-sm leading-relaxed tracking-normal text-zinc-300">
            {persona.heroes}
          </p>
        </div>

        <div className={glassPanelClass}>
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-zinc-500">
            行为雷达
          </p>
          <DBTIRadarChart totals={totals} radarData={radarData} />
        </div>

        <div className={`${glassPanelClass} !py-4`}>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "社交", left: "Silent", right: "Vocal", val: progress.M_vs_B },
              { label: "资源", left: "Egoistic", right: "Altruistic", val: progress.C_vs_A },
              { label: "决策", left: "Calculated", right: "Instinctive", val: progress.S_vs_F },
              { label: "韧性", left: "Tenacious", right: "Resigned", val: progress.W_vs_L },
            ].map((axis) => (
              <span
                key={axis.label}
                className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-1.5 text-xs tracking-wide text-zinc-400"
              >
                {axis.label}: {axis.val >= 0 ? axis.right : axis.left}
              </span>
            ))}
          </div>
        </div>

        <div className={glassPanelClass}>
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-zinc-500">
            人格侧写
          </p>
          <p className="text-[15px] leading-loose tracking-normal text-zinc-300 sm:text-base sm:leading-loose">
            {persona.profileText}
          </p>
        </div>

        {forExport && (
          <p className="pt-2 text-center font-mono text-[11px] tracking-wide text-zinc-600">
            DBTI · Dota2 Behavioral Type Indicator
          </p>
        )}
      </div>
    </div>
  );
}
