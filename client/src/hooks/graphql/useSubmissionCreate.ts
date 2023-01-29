import { useMutation, gql } from "@apollo/client";

interface SubmissionParams {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  questionaireId: number;
  answers: { questionId: number; value: string }[];
}

const CREATE_SUBMISSION = gql`
  mutation CreateSubmission(
    $firstName: String!
    $lastName: String!
    $email: String!
    $phone: String!
    $questionaireId: Int!
    $answers: [AnswerInput!]!
  ) {
    submissionCreate(
      submission: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        phone: $phone
        questionaireId: $questionaireId
        answers: $answers
      }
    ) {
      error
      successMessage
    }
  }
`;

const useSubmissionCreate = () => {
  const [createSubmission, { data, loading, error }] =
    useMutation(CREATE_SUBMISSION);

  return [createSubmission, { data, loading, error }];
};

export default useSubmissionCreate;
