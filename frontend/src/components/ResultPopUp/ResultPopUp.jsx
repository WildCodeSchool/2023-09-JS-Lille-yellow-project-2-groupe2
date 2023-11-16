import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useName from "../GameContext";
import "./ResultPopUp.css";

function ResultPopUp({ questionIndex, setQuestionIndex, questionOver }) {
  const handleClick = () => {
    setQuestionIndex(questionIndex + 1);
  };
  const { score, setScore, setRanking, ranking, rankingName } = useName();

  const avatars = [
    "./src/assets/avatars/avatar1.png",
    "./src/assets/avatars/avatar2.png",
    "./src/assets/avatars/avatar4.png",
  ];

  const getRandomAvatar = () => {
    const randomAvatar = Math.floor(Math.random() * avatars.length);
    return avatars[randomAvatar];
  };

  const updateRanking = (playerInfo) => {
    setRanking([...ranking, playerInfo]);
  };

  const playerInfo = {
    id: ranking.length + 1,
    imageurl: getRandomAvatar(),
    name: rankingName,
    points: score,
  };

  const handleClick1 = () => {
    updateRanking(playerInfo);
    setScore(0);
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
                onClick={handleClick1}
              >
                Menu
              </Link>
              <Link
                className="popUp__button popUp__button--border-radius-left"
                to="/ranking"
                onClick={handleClick1}
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
  questionIndex: PropTypes.number.isRequired,
  setQuestionIndex: PropTypes.func.isRequired,
  questionOver: PropTypes.bool.isRequired,
};

export default ResultPopUp;
