export type DimensionKey =
  | "Silent"
  | "Vocal"
  | "Egoistic"
  | "Altruistic"
  | "Calculated"
  | "Instinctive"
  | "Tenacious"
  | "Resigned";

/** Per-option score weights (8 in-game dimensions) */
export type DimensionScoreMap = Partial<Record<DimensionKey, number>>;

export interface DimensionTotals {
  Silent: number;
  Vocal: number;
  Egoistic: number;
  Altruistic: number;
  Calculated: number;
  Instinctive: number;
  Tenacious: number;
  Resigned: number;
}

export const DIMENSION_RADAR_LABELS: Record<DimensionKey, string> = {
  Silent: "Silent 静默",
  Vocal: "Vocal 喧嚣",
  Egoistic: "Egoistic 利己",
  Altruistic: "Altruistic 利他",
  Calculated: "Calculated 精算",
  Instinctive: "Instinctive 直觉",
  Tenacious: "Tenacious 坚韧",
  Resigned: "Resigned 随缘",
};

export interface DBTIProgress {
  M_vs_B: number;
  C_vs_A: number;
  S_vs_F: number;
  W_vs_L: number;
}

export type PersonaCode =
  | "MCBW"
  | "BCFW"
  | "MCSF"
  | "BCAF"
  | "MCSL"
  | "MCFL"
  | "MASW"
  | "BCFL"
  | "BCSF"
  | "MASL"
  | "BCAW"
  | "MAFL"
  | "BCSW"
  | "MALW"
  | "MBLF";

export interface QuestionOption {
  text: string;
  scores: DimensionScoreMap;
}

export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}

export interface PersonaProfile {
  title: string;
  tag: string;
  imagePath: string;
  star: string;
  heroes: string;
  profileText: string;
}

export interface RadarPoint {
  name: DimensionKey;
  value: number;
}

export interface QuizResult {
  code: string;
  personaKey: string;
  progress: DBTIProgress;
  totals: DimensionTotals;
  radarData: RadarPoint[];
  persona: PersonaProfile;
}

/** @deprecated Use DimensionTotals */
export type AxisTotals = DimensionTotals;
