"use client";

interface ProgressBarProps {
  answered: number;
  total: number;
}

export function ProgressBar({ answered, total }: ProgressBarProps) {
  const pct = total > 0 ? Math.min(100, (answered / total) * 100) : 0;

  return (
    <div
      className="fixed left-0 top-0 z-50 h-1 w-full bg-zinc-800"
      role="progressbar"
      aria-valuenow={answered}
      aria-valuemin={0}
      aria-valuemax={total}
    >
      <div
        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
