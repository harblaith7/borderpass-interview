import { Answer, Question as QuestionType, QUESTION_TYPE } from "../../types";
import styled from "styled-components";
import Dropdown from "./components/Dropdown/Dropdown";
import Date from "./components/Date/Date";
import RadioButtons from "./components/Radio/Radio";

const Container = styled.div``;

const Header = styled.h2``;

const Paragraph = styled.p`
  margin: 15px 0;
  font-size: 12px;
`;

const RequiredSpan = styled.span`
  color: red;
`;

export default function Question({
  question,
  answer,
  handleChangeAnswer,
}: {
  question: QuestionType;
  answer: Answer;
  handleChangeAnswer: (value: string) => void;
}) {
  const renderOptions = () => {
    if (question.questionType === QUESTION_TYPE.DROPDOWN) {
      return (
        <Dropdown
          options={question.options}
          handleChangeAnswer={handleChangeAnswer}
          answer={answer}
        />
      );
    } else if (question.questionType === QUESTION_TYPE.DATE) {
      return <Date handleChangeAnswer={handleChangeAnswer} answer={answer} />;
    } else if (question.questionType === QUESTION_TYPE.RADIO) {
      return (
        <RadioButtons
          options={question.options}
          handleChangeAnswer={handleChangeAnswer}
          answer={answer}
        />
      );
    } else return <div>unknown</div>;
  };

  return (
    <Container>
      <Header>
        {question.title}
        {question.required ? <RequiredSpan>*</RequiredSpan> : null}
      </Header>
      <Paragraph>{question.question}</Paragraph>
      {renderOptions()}
    </Container>
  );
}
