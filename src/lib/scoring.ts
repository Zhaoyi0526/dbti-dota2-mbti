import { questions } from "@/data/questions";
import { resolvePersona } from "@/data/personas";
import type {
  DBTIProgress,
  DimensionKey,
  DimensionScoreMap,
  DimensionTotals,
  Question,
  QuizResult,
  RadarPoint,
} from "@/types/dbti";

export type ScoreMap = DimensionTotals;

/** Esports psychometric compensation coefficients */
const BIAS_MULTIPLIERS = {
  Vocal: 1.45,
  Instinctive: 1.38,
  Altruistic: 1.3,
  Resigned: 1.15,
} as const;

interface AdjustedScores {
  Silent: number;
  Vocal: number;
  Egoistic: number;
  Altruistic: number;
  Calculated: number;
  Instinctive: number;
  Tenacious: number;
  Resigned: number;
}

export function createEmptyTotals(): DimensionTotals {
  return {
    Silent: 0,
    Vocal: 0,
    Egoistic: 0,
    Altruistic: 0,
    Calculated: 0,
    Instinctive: 0,
    Tenacious: 0,
    Resigned: 0,
  };
}

function aggregateRawTotals(
  questionBank: Question[],
  answers: Record<number, number>
): DimensionTotals {
  const rawTotals = createEmptyTotals();

  Object.entries(answers).forEach(([qIdStr, selectedOptionIndex]) => {
    const qId = Number(qIdStr);
    const question = questionBank.find((q) => q.id === qId);
    if (!question) return;

    const selectedOption = question.options[selectedOptionIndex];
    if (!selectedOption?.scores) return;

    (Object.entries(selectedOption.scores) as [DimensionKey, number][]).forEach(
      ([dimension, value]) => {
        if (value) rawTotals[dimension] += value;
      }
    );
  });

  return rawTotals;
}

function applyMedianBiasCompensation(rawTotals: DimensionTotals): AdjustedScores {
  return {
    Silent: rawTotals.Silent * 1.0,
    Vocal: rawTotals.Vocal * BIAS_MULTIPLIERS.Vocal,
    Egoistic: rawTotals.Egoistic * 1.0,
    Altruistic: rawTotals.Altruistic * BIAS_MULTIPLIERS.Altruistic,
    Calculated: rawTotals.Calculated * 1.0,
    Instinctive: rawTotals.Instinctive * BIAS_MULTIPLIERS.Instinctive,
    Tenacious: rawTotals.Tenacious * 1.0,
    Resigned: rawTotals.Resigned * BIAS_MULTIPLIERS.Resigned,
  };
}

function adjustedToTotals(adjusted: AdjustedScores): DimensionTotals {
  return {
    Silent: adjusted.Silent,
    Vocal: adjusted.Vocal,
    Egoistic: adjusted.Egoistic,
    Altruistic: adjusted.Altruistic,
    Calculated: adjusted.Calculated,
    Instinctive: adjusted.Instinctive,
    Tenacious: adjusted.Tenacious,
    Resigned: adjusted.Resigned,
  };
}

function deriveProgressFromAdjusted(adjusted: AdjustedScores): DBTIProgress {
  return {
    M_vs_B: adjusted.Vocal - adjusted.Silent,
    C_vs_A: adjusted.Altruistic - adjusted.Egoistic,
    S_vs_F: adjusted.Instinctive - adjusted.Calculated,
    W_vs_L: adjusted.Resigned - adjusted.Tenacious,
  };
}

function derivePersonaCodeWithTieBreaks(adjusted: AdjustedScores): string {
  const letter1 = adjusted.Silent >= adjusted.Vocal ? "M" : "B";
  const letter2 = adjusted.Egoistic >= adjusted.Altruistic ? "C" : "A";
  const letter3 = adjusted.Calculated >= adjusted.Instinctive ? "S" : "F";
  const letter4 = adjusted.Tenacious >= adjusted.Resigned ? "W" : "L";

  let finalCode = `${letter1}${letter2}${letter3}${letter4}`;

  if (finalCode === "MCSW" && adjusted.Vocal > adjusted.Silent * 0.85) {
    finalCode = "BCSW";
  }
  if (finalCode === "MCSL" && adjusted.Instinctive > adjusted.Calculated * 0.88) {
    finalCode = "MCFL";
  }
  if (
    finalCode === "MCBW" &&
    adjusted.Vocal > adjusted.Silent * 0.88 &&
    adjusted.Instinctive > adjusted.Calculated * 0.88
  ) {
    finalCode = "BCSF";
  }
  if (finalCode === "MASL" && adjusted.Instinctive >= adjusted.Calculated) {
    finalCode = "MAFL";
  }

  return finalCode;
}

export function buildRadarData(adjusted: AdjustedScores): RadarPoint[] {
  return [
    { name: "Silent", value: Math.round(adjusted.Silent) },
    { name: "Vocal", value: Math.round(adjusted.Vocal) },
    { name: "Egoistic", value: Math.round(adjusted.Egoistic) },
    { name: "Altruistic", value: Math.round(adjusted.Altruistic) },
    { name: "Calculated", value: Math.round(adjusted.Calculated) },
    { name: "Instinctive", value: Math.round(adjusted.Instinctive) },
    { name: "Tenacious", value: Math.round(adjusted.Tenacious) },
    { name: "Resigned", value: Math.round(adjusted.Resigned) },
  ];
}

export function calculateDbtiResult(
  answers: Record<number, number>,
  questionBank: Question[] = questions
): {
  code: string;
  radarData: RadarPoint[];
  totals: DimensionTotals;
  progress: DBTIProgress;
  rawTotals: DimensionTotals;
} {
  const rawTotals = aggregateRawTotals(questionBank, answers);
  const adjusted = applyMedianBiasCompensation(rawTotals);
  const totals = adjustedToTotals(adjusted);
  const progress = deriveProgressFromAdjusted(adjusted);
  const code = derivePersonaCodeWithTieBreaks(adjusted);
  const radarData = buildRadarData(adjusted);

  return { code, radarData, totals, progress, rawTotals };
}

export function scoreAllAnswers(
  questionBank: Question[],
  answers: Record<number, number>
): QuizResult {
  const { code, radarData, totals, progress } = calculateDbtiResult(
    answers,
    questionBank
  );
  const resolved = resolvePersona(code, progress, totals);

  return {
    code,
    personaKey: resolved.key,
    progress,
    totals,
    radarData,
    persona: resolved.profile,
  };
}

export function deriveCode(progress: DBTIProgress): string {
  const m = progress.M_vs_B >= 0 ? "B" : "M";
  const c = progress.C_vs_A >= 0 ? "A" : "C";
  const s = progress.S_vs_F >= 0 ? "F" : "S";
  const w = progress.W_vs_L >= 0 ? "L" : "W";
  return `${m}${c}${s}${w}`;
}

export function applyScores(
  totals: DimensionTotals,
  scores: DimensionScoreMap
) {
  (Object.entries(scores) as [DimensionKey, number][]).forEach(
    ([dimension, points]) => {
      if (points) totals[dimension] += points;
    }
  );
}
