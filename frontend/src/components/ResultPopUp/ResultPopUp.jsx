import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./ResultPopUp.css";

function ResultPopUp({ gameOver, score }) {
  return (
    gameOver && (
      <section className="popUp">
        <h2 className="popUp__title">Fin de partie</h2>
        <p className="popUp__paragraph">Votre score est : {score} points</p>
        <nav className="popUp__buttons">
          <Link className="popUp__button" to="/">
            Menu
          </Link>
          <Link className="popUp__button" to="/ranking">
            Classement
          </Link>
        </nav>
      </section>
    )
  );
}

ResultPopUp.propTypes = {
  gameOver: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
};

export default ResultPopUp;
