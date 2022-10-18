import React, { useState } from "react";
import Canvas from "./Canvas";
import styled from "styled-components";
import Controls from "./Controls";
import models from "./models";

const AppWrapper = styled.div`
  display: flex;
  & > * {
    flex: 1;
  }
`;

const App = () => {
  const modelsNames = Object.keys(models);
  const [frames, setFrames] = useState(10);
  const [model, setModel] = useState(modelsNames[1]);
  console.log(models);
  return (
    <AppWrapper>
      <Canvas frames={frames} model={model} />
      <Controls
        frames={frames}
        setFrames={setFrames}
        controls={models[model].controls}
      />
    </AppWrapper>
  );
};

export default App;
