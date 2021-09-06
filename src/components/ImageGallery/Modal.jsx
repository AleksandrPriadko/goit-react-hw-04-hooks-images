import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { useEffect } from "react";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ srcImgs, tags, onClose }) {
  // useEffect(() => {
  //   console.log("Рендер юзефект add");
  //   window.addEventListener("keydown", handleKeyDown);
  // }, []);
  // useEffect(() => {
  //   console.log("Рендер юзефект remove");
  //   window.removeEventListener("keydown", handleKeyDown);
  // }, [srcImgs]);
  // // componentDidMount() {
  // //   window.addEventListener("keydown", this.handleKeyDown);
  // // }
  // // componentWillUnmount() {
  // //   window.removeEventListener("keydown", this.handleKeyDown);
  // // }

  const handleKeyDown = (event) => {
    console.log(event.code);
    if (event.code === "Escape") {
      onClose();
    }
  };

  return (
    <div className="Overlay" onKeyDown={handleKeyDown} onClick={onClose}>
      <div
        onKeyDown={(e) => {
          console.log(e.code);
          if (e.code === "Escape") {
            onClose();
          }
        }}
      >
        <img src={srcImgs} alt={tags} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  srcImgs: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { createPortal } from "react-dom";

// const modalRoot = document.querySelector("#modal-root");

// class ModalWin extends Component {
//   componentDidMount() {
//     window.addEventListener("keydown", this.handleKeyDown);
//   }
//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.handleKeyDown);
//   }

//   handleKeyDown = (e) => {
//     if (e.code === "Escape") {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { srcImgs, tags } = this.props;
//     return createPortal(
//       <div className="Overlay">
//         <div>
//           <img src={srcImgs} alt={tags} />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }

// ModalWin.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   srcImgs: PropTypes.string.isRequired,
//   alt: PropTypes.string,
// };
// export default ModalWin;
