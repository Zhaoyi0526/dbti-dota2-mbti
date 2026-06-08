export type DimensionKey =
  | "Mute"
  | "Bark"
  | "C-Dog"
  | "Altruist"
  | "Smart"
  | "Fierce"
  | "Win"
  | "Lay-flat";

/** Per-option score weights (8 in-game dimensions) */
export type DimensionScoreMap = Partial<Record<DimensionKey, number>>;

export interface DimensionTotals {
  Mute: number;
  Bark: number;
  "C-Dog": number;
  Altruist: number;
  Smart: number;
  Fierce: number;
  Win: number;
  "Lay-flat": number;
}

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
  name: string;
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

/** @deprecated Use DimensionTotals — kept for gradual migration */
export type AxisTotals = DimensionTotals;
