import styled from "styled-components";
import { Answer } from "../../../../types";

const DateInput = styled.input`
  padding: 5px;
`;

export default function Date({
  answer,
  handleChangeAnswer,
}: {
  answer: Answer;
  handleChangeAnswer: (value: string) => void;
}) {
  return (
    <DateInput
      type="date"
      value={answer.value}
      onChange={(e) => handleChangeAnswer(e.target.value)}
      data-testid="date-picker"
    />
  );
}
