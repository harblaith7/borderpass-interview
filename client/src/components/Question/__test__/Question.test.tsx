import { render, screen } from "@testing-library/react";
import { QUESTION_TYPE } from "../../../types";
import Question from "../Question";

const mocks: any[] = [];

describe("Question", () => {
  it("should render radio options", () => {
    render(
      <Question
        question={{
          id: 1,
          title: "Bear",
          required: true,
          question: "What kind of bear is best",
          questionType: QUESTION_TYPE.RADIO,
          options: ["Black Bear", "Brown Bear"],
        }}
        handleChangeAnswer={() => {}}
        answer={{
          questionId: 1,
          value: "",
        }}
      />
    );
    expect(screen.getByText(/Black Bear/)).toBeInTheDocument();
    expect(screen.getByText(/Brown Bear/)).toBeInTheDocument();
  });

  it("should render date option", () => {
    render(
      <Question
        question={{
          id: 1,
          title: "Bear",
          required: true,
          question: "What kind of bear is best",
          questionType: QUESTION_TYPE.DATE,
          options: null,
        }}
        handleChangeAnswer={() => {}}
        answer={{
          questionId: 1,
          value: "",
        }}
      />
    );

    expect(screen.getByTestId("date-picker")).toHaveAttribute("type", "date");
  });
});
