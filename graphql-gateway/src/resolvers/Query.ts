import axios from "axios";

export const Query = {
  me: () => {
    return "Laith Harb";
  },
  questionaire: async (_: any, { id }: { id: number }) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/questionaire/${id}`
      );
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
