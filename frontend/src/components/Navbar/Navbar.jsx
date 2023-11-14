import PropTypes from "prop-types";
import BackBtn from "../BackBtn/BackBtn";
import TimerApp from "../TimerApp/TimerApp";
import "./Navbar.css";

function Navbar({
  gameOver,
  setGameOver,
  questionIndex,
  questionOver,
  setQuestionOver,
}) {
  return (
    <nav className="navbar_container">
      <BackBtn />
      <TimerApp
        gameOver={gameOver}
        setGameOver={setGameOver}
        questionIndex={questionIndex}
        questionOver={questionOver}
        setQuestionOver={setQuestionOver}
      />
    </nav>
  );
}

Navbar.propTypes = {
  gameOver: PropTypes.bool.isRequired,
  setGameOver: PropTypes.func.isRequired,
  questionIndex: PropTypes.number.isRequired,
  questionOver: PropTypes.bool.isRequired,
  setQuestionOver: PropTypes.func.isRequired,
};

export default Navbar;
