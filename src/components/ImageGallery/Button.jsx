import PropTypes from "prop-types";

export default function Button({ onFetchGallery }) {
  return (
    <button type="submit" className="Button" onClick={onFetchGallery}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onFetchGallery: PropTypes.func.isRequired,
};

// class Buton extends Component {
//   render() {
//     const { onFetchGallery } = this.props;
//     return (
//       <button type="submit" className="Button" onClick={onFetchGallery}>
//         Load more
//       </button>
//     );
//   }
// }

// Buton.propTypes = {
//   onFetchGallery: PropTypes.func.isRequired,
// };
// export default Buton;
