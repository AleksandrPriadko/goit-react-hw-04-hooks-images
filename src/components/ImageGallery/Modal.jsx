import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ srcImgs, tags, onClose }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  });
  useEffect(() => {
    window.removeEventListener("keydown", handleKeyDown);
  });

  // componentDidMount() {
  //   window.addEventListener("keydown", this.handleKeyDown);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener("keydown", this.handleKeyDown);
  // }

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  return createPortal(
    <div className="Overlay">
      <div>
        <img src={srcImgs} alt={tags} />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  srcImgs: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
