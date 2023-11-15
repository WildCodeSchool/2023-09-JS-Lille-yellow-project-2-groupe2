import PropTypes from "prop-types";
import "./Clues.css";

function Clues({ movieDate, movieDirector, movieGenres, movieCast }) {
  const movieYear = movieDate.slice(0, 4);

  return (
    <section className="clues">
      <p className="date-clue">{movieYear}</p>
      <p className="producer-clue">{movieDirector}</p>
      <p className="genre-clue">{movieGenres}</p>
      <p className="casting-clue">{movieCast}</p>
    </section>
  );
}

Clues.propTypes = {
  movieDate: PropTypes.string.isRequired,
  movieDirector: PropTypes.string.isRequired,
  movieGenres: PropTypes.string.isRequired,
  movieCast: PropTypes.string.isRequired,
};

export default Clues;
