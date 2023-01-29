import axios from "axios";

interface SubmissionArgs {
  submission: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    questionaireId: number;
    answers: { questionId: number; value: string }[];
  };
}

export const Mutation = {
  submissionCreate: async (_: any, { submission }: SubmissionArgs) => {
    console.log(submission);
    try {
      const response = await axios.post(`http://localhost:8080/submission`, {
        ...submission,
      });
      return {
        data: response.data,
        error: null,
      };
    } catch (error: any) {
      return {
        data: null,
        error: error.message,
      };
    }

    // console.log(response);
  },
};
