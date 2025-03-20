export type GameState = "Start" | "Playing" | "End";
export interface Question{
  question: string;
  options: string[];
  answer: number;
}