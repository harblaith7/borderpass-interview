import { gql, useQuery } from "@apollo/client";
import { Questionaire } from "../../types";

interface QuestionaireGQLResponse {
  questionaire: {
    error?: string;
    data?: Questionaire;
  };
}

const GET_QUESTIONAIRE = gql`
  query GetQuestionaire($id: Int!) {
    questionaire(id: $id) {
      data {
        id
        name
        questions {
          id
          title
          question
          questionType
          options
          required
        }
      }
      error
    }
  }
`;

export const useQuestionaire = (id: number) => {
  const { error, loading, data } = useQuery<QuestionaireGQLResponse>(
    GET_QUESTIONAIRE,
    {
      fetchPolicy: "no-cache",
      variables: {
        id,
      },
    }
  );

  return { error, loading, data };
};
