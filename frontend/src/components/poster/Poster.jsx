import PropTypes from "prop-types";
import "./Poster.css";

function Poster({ poster }) {
  // Base for poster URL, concatenate with movie poster_path attribute to get full URL
  const imageUrl = "https://image.tmdb.org/t/p/original";
  return (
    <img
      className="poster__img poster poster"
      src={`${imageUrl}${poster}`}
      alt=""
      draggable="false"
    />
  );
}

Poster.propTypes = {
  poster: PropTypes.string.isRequired,
};

export default Poster;
