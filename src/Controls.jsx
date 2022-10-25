import React from "react";
import Form from "react-bootstrap/Form";

function Controls({
  frames,
  setFrames,
  controls,
  setControls,
  modelsNames,
  setModel,
  currentModel,
}) {
  const handleSetControls = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const prevControls = controls;
    const newControls = { ...prevControls, [name]: value };
    setControls(newControls);
  };

  return (
    <div>
      <Form.Group key={frames}>
        <Form.Label>frames</Form.Label>
        <Form.Range
          value={frames}
          onChange={(e) => setFrames(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>model</Form.Label>
        <Form.Control
          as="select"
          value={currentModel}
          onChange={(e) => setModel(e.target.value)}
        >
          {modelsNames.map((model) => (
            <option key={model}>{model}</option>
          ))}
        </Form.Control>
      </Form.Group>
    </div>
  );
}

export default Controls;
