import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Answer, Questionaire as QuestionaireType } from "../../types";
import ErrorAlert from "../Alert/Alert";
import Question from "../Question/Question";
import SubmissionForm from "../SubmissionForm/SubmissionForm";
import SurveyProgress from "../SurveyProgress/SurveyProgress";

const Main = styled.main`
  width: 100vw;
`;

const Container = styled.div`
  width: 750px;
  height: 350px;
  margin: 0 auto;
`;

const Card = styled.div`
  text-align: center;
`;

const Title = styled.h4`
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: gray;
  width: 450px;
  margin: 0 auto;
  font-size: 12px;
`;

const Button = styled.button`
  padding: 10px 40px;
  background-color: #009fea;
  border: none;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  margin-top: 40px;
`;

function StartYourAssessment({
  setCurrentQuestionIndex,
}: {
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <Card>
      <Title>Start your assessment</Title>
      <Subtitle>
        Answer a few simple questions in order to determine your eligibility for
        a Canadian student visa.
      </Subtitle>
      <Button onClick={() => setCurrentQuestionIndex(0)}>Let's Go</Button>
    </Card>
  );
}

export default function Questionaire({
  questionaire,
}: {
  questionaire: QuestionaireType;
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const initialAnswers = questionaire.questions.map((question) => {
      return {
        questionId: question.id,
        value: "",
      };
    });
    setAnswers(initialAnswers);
  }, []);

  const handleChangeAnswer = (value: string) => {
    const changedAnswers = [...answers];

    changedAnswers[currentQuestionIndex].value = value;

    setAnswers(changedAnswers);
  };

  if (currentQuestionIndex === -1)
    return (
      <Container>
        <StartYourAssessment
          setCurrentQuestionIndex={setCurrentQuestionIndex}
        />
      </Container>
    );

  if (currentQuestionIndex >= questionaire.questions.length) {
    return (
      <Container>
        <SubmissionForm questionaireId={questionaire.id} answers={answers} />
      </Container>
    );
  }

  return (
    <Main>
      {showError ? <ErrorAlert /> : null}
      <Container>
        <Question
          question={questionaire.questions[currentQuestionIndex]}
          answer={answers[currentQuestionIndex]}
          handleChangeAnswer={handleChangeAnswer}
        />
      </Container>
      <SurveyProgress
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        answer={answers[currentQuestionIndex]}
        question={questionaire.questions[currentQuestionIndex]}
        setShowError={setShowError}
      />
    </Main>
  );
}
