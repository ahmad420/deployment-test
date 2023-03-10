import React from "react";
import "../App.css";

function Alert(props) {
  function handleClose() {
    props.onClose();
  }

  return (
    <div className={`alert ${props.type}`}>
      <span>{props.message}</span>
      <button className="close-button" onClick={handleClose}>
        &times;
      </button>
    </div>
  );
}

export default Alert;
