export type AxisLetter = "M" | "B" | "C" | "A" | "S" | "F" | "W" | "L";

export type ScoreMap = Partial<Record<AxisLetter, number>>;

export interface DBTIProgress {
  M_vs_B: number;
  C_vs_A: number;
  S_vs_F: number;
  W_vs_L: number;
}

export interface AxisTotals {
  M: number;
  B: number;
  C: number;
  A: number;
  S: number;
  F: number;
  W: number;
  L: number;
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
  scores: ScoreMap;
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

export interface QuizResult {
  code: string;
  personaKey: string;
  progress: DBTIProgress;
  totals: AxisTotals;
  persona: PersonaProfile;
}
