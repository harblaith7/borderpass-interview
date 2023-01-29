import { Question } from ".";

export interface Questionaire {
  id: number;
  name: string;
  questions: Question[];
}
