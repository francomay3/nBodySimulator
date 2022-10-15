import React from "react";
import Canvas from "./Canvas";
import styled from "styled-components";
import Controls from "./Controls";

const AppWrapper = styled.div`
  display: flex;
  & > * {
    flex: 1;
  }
`;

const App = () => (
  <AppWrapper>
    <Canvas />
    <Controls />
  </AppWrapper>
);

export default App;
