import React from "react";
import styles from "./css/modal.css";
import Trailer from "./Trailer";
const Modal = ({ setIsOpen, name, trailerKey }) => {
  return (
    <div onClick={() => setIsOpen(false)}>
      <div className="modal">
        <button onClick={() => setIsOpen(false)}>Close</button>
        <div className="modal-content">
          <Trailer name={name} id={trailerKey} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
