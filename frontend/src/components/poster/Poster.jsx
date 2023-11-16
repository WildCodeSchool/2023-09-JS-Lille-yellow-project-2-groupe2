import PropTypes from "prop-types";
import "./Poster.css";

function Poster({ poster, questionOver }) {
  // Base for poster URL, concatenate with movie poster_path attribute to get full URL
  const imageUrl = "https://image.tmdb.org/t/p/original";
  return (
    <img
      className={
        questionOver ? "poster__img poster__img--reveal" : "poster__img"
      }
      src={`${imageUrl}${poster}`}
      alt=""
      draggable="false"
    />
  );
}

Poster.propTypes = {
  poster: PropTypes.string.isRequired,
  questionOver: PropTypes.bool.isRequired,
};

export default Poster;
