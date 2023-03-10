import React, { useState } from "react";
import Alert from "./Alert";

function Btn() {
  const [showAlert, setShowAlert] = useState(false);

  function handleClick() {
    setShowAlert(true);
  }

  function handleClose() {
    setShowAlert(false);
  }

  return (
    <div>
      <button className="hello-button" onClick={handleClick}>
        Click me
      </button>
      {showAlert && (
        <Alert
          className="alert"
          type="success"
          message="This is a success message! "
          onClose={handleClose}
        />
      )}
    </div>
  );
}

export default Btn;
