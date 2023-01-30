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

function App() {
  const { data, loading, error } = useQuestionaire(1);

  const renderContent = () => {
    if (loading) return <CircularLoadingSpinner />;

    if (error)
      return (
        <div>
          <p>Something went wrong...</p>
        </div>
      );

    if (data) {
      const { questionaire } = data;
      if (questionaire.error)
        return (
          <div>
            <p>Something went wrong...</p>
          </div>
        );
      if (questionaire.data) {
        return <Questionaire questionaire={questionaire.data} />;
      }
    }

    return <div>Unknown error occured</div>;
  };

  return <Container>{renderContent()}</Container>;
}

export default App;
