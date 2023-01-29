import Alert from "@mui/material/Alert";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 5%;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export default function ErrorAlert() {
  return (
    <Container>
      <Alert
        severity="error"
        style={{
          width: "400px",
        }}
      >
        This Field is Required
      </Alert>
    </Container>
  );
}
