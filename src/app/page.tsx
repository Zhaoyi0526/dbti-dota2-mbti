import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-[#121214] px-6">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59,130,246,0.25), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(124,58,237,0.15), transparent)",
        }}
      />

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

        <div className="mb-12 flex flex-wrap justify-center gap-3 font-mono text-xs text-zinc-600">
          <span className="rounded border border-zinc-800 px-2 py-1">Mute ↔ Bark</span>
          <span className="rounded border border-zinc-800 px-2 py-1">C-Dog ↔ Altruist</span>
          <span className="rounded border border-zinc-800 px-2 py-1">Smart ↔ Fierce</span>
          <span className="rounded border border-zinc-800 px-2 py-1">Win ↔ Lay-flat</span>
        </div>

        <Link
          href="/quiz"
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 text-base font-medium text-white shadow-neon transition hover:opacity-90"
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
