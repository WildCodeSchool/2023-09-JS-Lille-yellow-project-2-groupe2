import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./ResultPopUp.css";

function ResultPopUp({ score, questionIndex, setQuestionIndex, questionOver }) {
  const handleClick = () => {
    setQuestionIndex(questionIndex + 1);
  };

  return (
    questionOver && (
      <section className="popUp">
        <h2 className="popUp__title">
          {questionIndex < 10 ? `Film ${questionIndex} / 10` : `Fin de partie`}
        </h2>
        <p className="popUp__paragraph">Votre score est : {score} points</p>
        <nav className="popUp__buttons">
          {questionIndex < 10 ? (
            <button
              type="button"
              className="popUp__button"
              onClick={handleClick}
            >
              Continuer
            </button>
          ) : (
            <>
              <Link
                className="popUp__button popUp__button--border-radius-right"
                to="/"
              >
                Menu
              </Link>
              <Link
                className="popUp__button popUp__button--border-radius-left"
                to="/ranking"
              >
                Classement
              </Link>
            </>
          )}
        </nav>
      </section>
    )
  );
}

ResultPopUp.propTypes = {
  score: PropTypes.number.isRequired,
  questionIndex: PropTypes.number.isRequired,
  setQuestionIndex: PropTypes.func.isRequired,
  questionOver: PropTypes.bool.isRequired,
};

export default ResultPopUp;
