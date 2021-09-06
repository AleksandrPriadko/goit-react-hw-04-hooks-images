import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ srcImgs, tags, onClose, showModals }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
  useEffect(() => {
    window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // componentDidMount() {
  //   window.addEventListener("keydown", this.handleKeyDown);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener("keydown", this.handleKeyDown);
  // }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleKeyDown(e) {
    if (e.code === "Escape") {
      onClose();
    }
  }

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
