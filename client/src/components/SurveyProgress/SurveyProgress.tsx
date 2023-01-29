import LinearProgressBar from "../ProgressBar/ProgressBar";
import styled from "styled-components";
import { useContext } from "react";
import { Answer, Question } from "../../types";
// import { QuestionaireContext } from "../App";
// import { QUESTION_TYPE } from "../types";

const ProgressCard = styled.div`
  width: 90vw;
  padding 5px;
  position: fixed;
  bottom: 5%;
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 5px;
  left: 5%
`;

const Button = styled.button`
  width: 150px;
  background-color: rgb(0, 183, 255);
  border: none;
  color: white;
  text-decoration: uppercase;
  padding: 10px;
  border-radius: 5px;
  font-weight: 900;
  cursor: pointer;
`;

const BackButton = styled.button`
  background-color: rgb(142, 205, 230);
  border: none;
  color: white;
  text-decoration: uppercase;
  padding: 10px;
  border-radius: 5px;
  font-weight: 900;
  margin-right: 10px;
  cursor: pointer;
`;

export default function SurveyProgress({
  answer,
  setCurrentQuestionIndex,
  currentQuestionIndex,
  question,
  setShowError,
}: {
  answer: Answer;
  question: Question;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleNextQuestion = () => {
    console.log(
      question.required && !answer.value,
      question.required,
      !answer.value,
      question,
      answer
    );
    if (question.required && !answer.value) {
      return setShowError(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowError(false);
    }
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };
  return (
    <ProgressCard>
      <BackButton onClick={handlePreviousQuestion}>Back</BackButton>
      <LinearProgressBar
        questionaireLength={5}
        currentQuestionIndex={currentQuestionIndex}
      />
      <Button onClick={handleNextQuestion}>Next Question</Button>
    </ProgressCard>
  );
}
