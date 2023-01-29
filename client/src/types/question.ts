export enum QUESTION_TYPE {
  DROPDOWN = "DROPDOWN",
  RADIO = "RADIO",
  DATE = "DATE",
}

export interface QuestionBase {
  id: number;
  title: string;
  question: string;
  required: boolean;
}

interface QuestionRadio extends QuestionBase {
  questionType: QUESTION_TYPE.RADIO;
  options: string[];
}

interface QuestionDropdown extends QuestionBase {
  questionType: QUESTION_TYPE.DROPDOWN;
  options: string[];
}

interface QuestionDate extends QuestionBase {
  questionType: QUESTION_TYPE.DATE;
  options: null;
}

export type Question = QuestionRadio | QuestionDropdown | QuestionDate;
