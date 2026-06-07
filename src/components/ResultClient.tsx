"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { QuizResult } from "@/types/dbti";
import { ResultCard } from "./ResultCard";
import { ShareCardButton } from "./ShareCardButton";

const STORAGE_KEY = "dbti-result";

export function ResultClient() {
  const [result, setResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) setResult(JSON.parse(raw) as QuizResult);
    } catch {
      setResult(null);
    }
  }, []);

  if (result === null) {
    return (
      <main className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-[#121214] px-4">
        <p className="text-zinc-400">暂无测试结果，请先完成问卷。</p>
        <Link
          href="/quiz"
          className="rounded-lg border border-zinc-700 px-6 py-2 text-sm text-zinc-200 hover:border-violet-500/50"
        >
          开始测试
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-dvh bg-[#121214] px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <header className="mb-8 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-violet-400">
            Your DBTI Profile
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-zinc-100">人格侧写报告</h1>
        </header>

        <div className="mb-8">
          <ResultCard result={result} />
        </div>

        <div className="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ShareCardButton />
          <Link
            href="/quiz"
            className="rounded-lg border border-zinc-700 px-6 py-3 text-sm text-zinc-300 hover:border-zinc-500"
          >
            重新测试
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-zinc-800 px-6 py-3 text-sm text-zinc-500 hover:text-zinc-300"
          >
            返回首页
          </Link>
        </div>

        <div className="pointer-events-none fixed -left-[9999px] top-0 opacity-0">
          <ResultCard result={result} forExport />
        </div>
      </div>
    </main>
  );
}
