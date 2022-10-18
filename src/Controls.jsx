import React from "react";
import Form from "react-bootstrap/Form";

function Controls({ frames, setFrames, controls }) {
  console.log(controls);
  return (
    <div>
      <Form.Label>frames</Form.Label>
      <Form.Range value={frames} onChange={(e) => setFrames(e.target.value)} />
    </div>
  );
}

export default Controls;
