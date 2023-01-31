import "./App.css";
import CircularLoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import { useQuestionaire } from "./hooks/graphql";
import styled from "styled-components";
import Questionaire from "./components/Questionaire/Questionaire";

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ErrorHeader = styled.h2`
  font-size: 30px;
  color: red;
`;

const ErrorDescription = styled.p`
  color: gray;
`;

export function ErrorDisplay({ message }: { message: string }) {
  return (
    <Container>
      <ErrorHeader>Something went wrong...</ErrorHeader>
      <ErrorDescription>{message}</ErrorDescription>
    </Container>
  );
}

function App() {
  const { data, loading, error } = useQuestionaire(1);

  const renderContent = () => {
    if (loading) return <CircularLoadingSpinner />;

    if (error) return <ErrorDisplay message={error.name} />;

    if (data) {
      const { questionaire } = data;
      if (questionaire.error)
        return <ErrorDisplay message={questionaire.error} />;
      if (questionaire.data) {
        return <Questionaire questionaire={questionaire.data} />;
      }
    }

    return <ErrorDisplay message="An unknown error occured" />;
  };

  return <Container>{renderContent()}</Container>;
}

export default App;
