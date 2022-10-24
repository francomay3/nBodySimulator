import React from "react";
import Form from "react-bootstrap/Form";

function Controls({ frames, setFrames, controls, setControls }) {
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
    </div>
  );
}

export default Controls;
