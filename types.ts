export type Dimension = 'EI' | 'SN' | 'TF' | 'JP';

export interface Option {
  text: string;
  dimension: Dimension;
  value: string; // 'E', 'I', 'S', 'N', etc.
}

export interface Question {
  id: number;
  question: string;
  options: [Option, Option];
}

export interface GroupResult {
  id: string;
  name: string;
  fandomName: string;
  color: string;
  description: string;
  vibe: string;
  imgKeyword: string; // for placeholder
  mbtiGroup: string[]; // internal check
  memberArchetypes: string[];
}

export type QuizState = 'WELCOME' | 'QUIZ' | 'ANALYZING' | 'RESULT';