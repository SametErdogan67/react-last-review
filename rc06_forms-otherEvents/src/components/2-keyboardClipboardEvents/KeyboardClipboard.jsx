import { useState } from "react";

const KeyboardClipboard = () => {
  const [inputData, setInputData] = useState("");

  const handleKeyDown = (e) => {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      alert("Please dont enter a number");
      e.preventDefault();
    }
  };
  return (
    <div className="container text-center">
      <h2 className="display-5 text-danger">Keyboard-Clipboard Event</h2>
      <input
        type="text"
        className="form-control"
        onChange={(e) => {
          e.target.value = e.target.value.toUpperCase();
          setInputData(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <div className="text-start mt-4">
        <h6>Copied Input Data</h6>
        <p className="text-start mt-4">{inputData.toLowerCase()}</p>
      </div>

      <textarea
        className="form-control"
        name="textarea"
        id="textarea"
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
