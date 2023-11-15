import PropTypes from "prop-types";
import "./Clues.css";

function Clues({
  movieDate,
  movieDirector,
  movieGenres,
  movieCast,
  questionOver,
}) {
  const movieYear = movieDate.slice(0, 4);

  return (
    <section className="clues">
      <p className={questionOver ? ".clues-reveal" : "date-clue"}>
        {movieYear}
      </p>
      <p className={questionOver ? ".clues-reveal" : "producer-clue"}>
        {movieDirector}
      </p>
      <p className={questionOver ? ".clues-reveal" : "genre-clue"}>
        {movieGenres}
      </p>
      <p className={questionOver ? ".clues-reveal" : "casting-clue"}>
        {movieCast}
      </p>
    </section>
  );
}

Clues.propTypes = {
  movieDate: PropTypes.string.isRequired,
  movieDirector: PropTypes.string.isRequired,
  movieGenres: PropTypes.string.isRequired,
  movieCast: PropTypes.string.isRequired,
  questionOver: PropTypes.bool.isRequired,
};

export default Clues;
