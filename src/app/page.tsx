import Link from "next/link";
import { DimensionPills } from "@/components/DimensionPills";
import { LandingCanvas } from "@/components/LandingCanvas";

export default function HomePage() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-[#0b0c10] px-6">
      <LandingCanvas />

      <div className="relative z-10 max-w-xl text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-violet-400/90">
          Dota 2 · 7.41C
        </p>
        <h1 className="mb-3 text-5xl font-bold tracking-tight text-zinc-50 sm:text-6xl">
          DBTI
        </h1>
        <p className="mb-2 text-lg text-zinc-400">
          Dota2 Behavioral Type Indicator
        </p>
        <p className="mb-10 text-sm leading-relaxed text-zinc-500">
          25 道基于真实对局肌肉记忆的抉择，解码你在天梯里的社交、资源、决策与韧性四维刀狗人格。
        </p>

        <DimensionPills />

        <Link
          href="/quiz"
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 text-base font-medium text-white shadow-[0_0_32px_rgba(124,58,237,0.25)] transition hover:opacity-90"
        >
          开始人格测试
          <span aria-hidden>→</span>
        </Link>

        <p className="mt-8 text-xs text-zinc-600">
          16 种人格侧写 · 可分享心理卡片 · 非官方娱乐向测试
        </p>
      </div>
    </main>
  );
}
