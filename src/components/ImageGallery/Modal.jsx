import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { useEffect } from "react";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ srcImgs, tags, onClose }) {
  useEffect((event) => {
    console.log("Рендер юзефект add", event);
    handleKeyDown();
    // window.addEventListener("keydown", handleKeyDown);
  }, []);
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

  function handleKeyDown(event) {
    console.log(event);
    // if (e.code === "Escape") {
    //   onClose();
    // }
  }

  console.log(handleKeyDown);
  return createPortal(
    <div className="Overlay" onKeyDown={handleKeyDown()}>
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
