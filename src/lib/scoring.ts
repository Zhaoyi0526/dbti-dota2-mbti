import type {
  AxisLetter,
  AxisTotals,
  DBTIProgress,
  PersonaCode,
  Question,
  QuizResult,
  ScoreMap,
} from "@/types/dbti";
import { resolvePersona } from "@/data/personas";

const INITIAL_PROGRESS: DBTIProgress = {
  M_vs_B: 0,
  C_vs_A: 0,
  S_vs_F: 0,
  W_vs_L: 0,
};

const INITIAL_TOTALS: AxisTotals = {
  M: 0,
  B: 0,
  C: 0,
  A: 0,
  S: 0,
  F: 0,
  W: 0,
  L: 0,
};

function applyScore(progress: DBTIProgress, letter: AxisLetter, points: number) {
  switch (letter) {
    case "M":
      progress.M_vs_B -= points;
      break;
    case "B":
      progress.M_vs_B += points;
      break;
    case "C":
      progress.C_vs_A -= points;
      break;
    case "A":
      progress.C_vs_A += points;
      break;
    case "S":
      progress.S_vs_F -= points;
      break;
    case "F":
      progress.S_vs_F += points;
      break;
    case "W":
      progress.W_vs_L -= points;
      break;
    case "L":
      progress.W_vs_L += points;
      break;
  }
}

export function createEmptyProgress(): DBTIProgress {
  return { ...INITIAL_PROGRESS };
}

export function createEmptyTotals(): AxisTotals {
  return { ...INITIAL_TOTALS };
}

export function applyScores(
  progress: DBTIProgress,
  totals: AxisTotals,
  scores: ScoreMap
) {
  (Object.entries(scores) as [AxisLetter, number][]).forEach(([letter, points]) => {
    if (!points) return;
    applyScore(progress, letter, points);
    totals[letter] += points;
  });
}

export function deriveCode(progress: DBTIProgress): string {
  const m = progress.M_vs_B >= 0 ? "B" : "M";
  const c = progress.C_vs_A >= 0 ? "A" : "C";
  const s = progress.S_vs_F >= 0 ? "F" : "S";
  const w = progress.W_vs_L >= 0 ? "L" : "W";
  return `${m}${c}${s}${w}`;
}

export function calculateResult(
  progress: DBTIProgress,
  totals: AxisTotals
): QuizResult {
  const rawCode = deriveCode(progress);
  const resolved = resolvePersona(rawCode, progress, totals);
  return {
    code: rawCode,
    personaKey: resolved.key,
    progress,
    totals,
    persona: resolved.profile,
  };
}

export function scoreAllAnswers(
  questions: Question[],
  answers: Record<number, number>
): QuizResult {
  const progress = createEmptyProgress();
  const totals = createEmptyTotals();

  questions.forEach((q) => {
    const optionIndex = answers[q.id];
    if (optionIndex === undefined) return;
    const option = q.options[optionIndex];
    if (option) applyScores(progress, totals, option.scores);
  });

  return calculateResult(progress, totals);
}

export function getRadarData(totals: AxisTotals) {
  return [
    { axis: "Mute 独狼", value: totals.M, fullMark: 40 },
    { axis: "Bark 互动", value: totals.B, fullMark: 40 },
    { axis: "C-Dog 吸血", value: totals.C, fullMark: 40 },
    { axis: "Altruist 利他", value: totals.A, fullMark: 40 },
    { axis: "Smart 公式", value: totals.S, fullMark: 40 },
    { axis: "Fierce 直觉", value: totals.F, fullMark: 40 },
    { axis: "Win 分奴", value: totals.W, fullMark: 40 },
    { axis: "Lay-flat 摆烂", value: totals.L, fullMark: 40 },
  ];
}

export function formatAxisSummary(progress: DBTIProgress): string {
  return deriveCode(progress) as PersonaCode;
}
