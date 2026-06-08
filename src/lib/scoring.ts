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

export function createEmptyTotals(): DimensionTotals {
  return {
    Mute: 0,
    Bark: 0,
    "C-Dog": 0,
    Altruist: 0,
    Smart: 0,
    Fierce: 0,
    Win: 0,
    "Lay-flat": 0,
  };
}

function aggregateAnswers(
  questionBank: Question[],
  answers: Record<number, number>
): DimensionTotals {
  const totals = createEmptyTotals();

  Object.entries(answers).forEach(([qIdStr, selectedOptionIndex]) => {
    const qId = Number(qIdStr);
    const question = questionBank.find((q) => q.id === qId);
    if (!question) return;

    const selectedOption = question.options[selectedOptionIndex];
    if (!selectedOption?.scores) return;

    (Object.entries(selectedOption.scores) as [DimensionKey, number][]).forEach(
      ([dimension, scoreValue]) => {
        if (scoreValue) totals[dimension] += scoreValue;
      }
    );
  });

  return totals;
}

function deriveProgress(totals: DimensionTotals): DBTIProgress {
  return {
    M_vs_B: totals.Bark - totals.Mute,
    C_vs_A: totals.Altruist - totals["C-Dog"],
    S_vs_F: totals.Fierce - totals.Smart,
    W_vs_L: totals["Lay-flat"] - totals.Win,
  };
}

function derivePersonaCode(totals: DimensionTotals): string {
  const letter1 = totals.Mute >= totals.Bark ? "M" : "B";
  const letter2 = totals["C-Dog"] >= totals.Altruist ? "C" : "A";
  const letter3 = totals.Smart >= totals.Fierce ? "S" : "F";
  const letter4 = totals.Win >= totals["Lay-flat"] ? "W" : "L";

  let finalCode = `${letter1}${letter2}${letter3}${letter4}`;

  if (finalCode === "MASL" && totals.Smart < totals.Fierce) {
    finalCode = "MAFL";
  }

  return finalCode;
}

export function buildRadarData(totals: DimensionTotals): RadarPoint[] {
  return [
    { name: "Mute", value: totals.Mute },
    { name: "Bark", value: totals.Bark },
    { name: "C-Dog", value: totals["C-Dog"] },
    { name: "Altruist", value: totals.Altruist },
    { name: "Smart", value: totals.Smart },
    { name: "Fierce", value: totals.Fierce },
    { name: "Win", value: totals.Win },
    { name: "Lay-flat", value: totals["Lay-flat"] },
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
} {
  const totals = aggregateAnswers(questionBank, answers);
  const progress = deriveProgress(totals);
  const code = derivePersonaCode(totals);
  const radarData = buildRadarData(totals);

  return { code, radarData, totals, progress };
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
