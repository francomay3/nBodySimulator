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
  const [controls, setControls] = useState(models[model].controls);
  return (
    <AppWrapper>
      <Canvas frames={frames} model={model} controls={controls} />
      <Controls
        frames={frames}
        setFrames={setFrames}
        controls={controls}
        setControls={setControls}
      />
    </AppWrapper>
  );
};

export default App;
