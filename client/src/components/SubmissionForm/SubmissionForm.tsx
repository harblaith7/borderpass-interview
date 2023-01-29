import { gql, useMutation } from "@apollo/client";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import useSubmissionCreate from "../../hooks/graphql/useSubmissionCreate";
import { Answer } from "../../types";
import CircularLoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  cursor: pointer;
`;

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

export default function SubmissionForm({
  questionaireId,
  answers,
}: {
  questionaireId: number;
  answers: Answer[];
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [createSubmission, { data, loading, error }] =
    useMutation(CREATE_SUBMISSION);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      phone,
      email,
      questionaireId,
      answers,
    });
    createSubmission({
      variables: {
        firstName,
        lastName,
        phone,
        email,
        questionaireId,
        answers,
      },
    });
  };

  if (loading) return <CircularLoadingSpinner />;

  if (error || data?.error) return <div>Error</div>;

  if (data)
    return (
      <div>
        <h1>Thank you for your submission</h1>
        <p>We will get back to you shortly</p>
      </div>
    );

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        required
        id="outlined-required"
        label="First Name"
        defaultValue=""
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        style={{ width: "49%", marginBottom: "10px" }}
      />
      <TextField
        required
        id="outlined-required"
        label="Last Name"
        defaultValue=""
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        style={{ width: "49%", marginBottom: "10px" }}
      />
      <TextField
        required
        id="outlined-required"
        label="Email"
        defaultValue=""
        value={email}
        style={{ width: "49%" }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        required
        id="outlined-required"
        label="Phone"
        defaultValue=""
        value={phone}
        style={{ width: "49%" }}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Button>Submit</Button>
    </Form>
  );
}
