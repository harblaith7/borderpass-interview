import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    me: String!
    questionaire(id: Int!): QuestionairePayload!
  }

  type Mutation {
    submissionCreate(submission: SubmissionInput!): SubmissionPayload!
  }

  type Questionaire {
    id: Int!
    name: String!
    questions: [Question!]!
  }

  type Question {
    id: Int!
    title: String!
    question: String!
    questionType: String!
    required: Boolean!
    options: [String!]
  }

  type QuestionairePayload {
    error: String
    data: Questionaire
  }

  type SubmissionPayload {
    error: String
    successMessage: String
  }

  input AnswerInput {
    questionId: Int!
    value: String
  }

  input SubmissionInput {
    firstName: String!
    lastName: String!
    email: String!
    phone: String!
    questionaireId: Int!
    answers: [AnswerInput!]!
  }
`;
