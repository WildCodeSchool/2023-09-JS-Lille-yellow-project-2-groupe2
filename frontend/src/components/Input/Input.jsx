import { useState, useEffect } from "react";
import "./input.css";
import PropTypes from "prop-types";

function Input({
  movieTitle,
  setGameOver,
  score,
  setScore,
  questionIndex,
  questionOver,
  setQuestionOver,
}) {
  const [answer, setAnswer] = useState("");
  const [answerDisplay, setAnswerDisplay] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    // initialize time-counter
    setStartTime(Date.now());
    // Resets input field state on question change
    setIsDisabled(false);
    // Resets answerDisplay value on question change
    setAnswerDisplay("");
  }, [questionIndex]);

  // Disables input field when question is over due to timeout
  useEffect(() => {
    if (questionOver) {
      setIsDisabled(true);
    }
  }, [questionOver]);

  // resets answerDisplay value after a second
  setTimeout(() => {
    if (!answerDisplay && answerDisplay !== "") {
      setAnswerDisplay("");
    }
  }, 1000);

  // Updates the answer value with the input value
  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  // Checks if the answer is right or wrong
  const handleClick = () => {
    if (answer !== "") {
      if (movieTitle.toLowerCase() === answer.toLowerCase()) {
        setAnswerDisplay(true);
        setIsDisabled(true);
        // calculate time response and time bonus
        const timeTaken = Date.now() - startTime;
        const maxScore = 10;
        const timeBonus = maxScore - Math.floor(timeTaken / 4000);
        // attribute points if right + bonus points for quick answer
        setScore(score + 10 + timeBonus);
        // Changes game state if game is over
        if (questionIndex === 10) {
          setGameOver(true);
        }
        setQuestionOver(true);
      } else {
        setAnswerDisplay(false);
      }
      setAnswer("");
    }
  };

  // Triggers answer verification if user pushes Enter key
  const handleKeyDown = (event) => {
    if (event.code === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      <section className="answer">
        <label className="answer__label" htmlFor="answer">
          Entre ta réponse ici
        </label>
        <input
          className="answer__input"
          placeholder="Entre ta réponse ici"
          type="text"
          value={answer}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          id="answer"
          name="answer"
          disabled={isDisabled}
        />
        <button
          className="answer__button"
          type="button"
          onClick={handleClick}
          disabled={isDisabled}
        >
          OK
        </button>
      </section>
      <p
        className={
          answerDisplay
            ? "answer__display answer__display--success"
            : "answer__display"
        }
      >
        Bravo, + {score} points !
      </p>
      <p
        className={
          !answerDisplay && answerDisplay !== ""
            ? "answer__display answer__display--fail"
            : "answer__display"
        }
      >
        Raté, essaie encore !
      </p>
    </>
  );
}

Input.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  setGameOver: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  questionIndex: PropTypes.number.isRequired,
  questionOver: PropTypes.bool.isRequired,
  setQuestionOver: PropTypes.func.isRequired,
};

export default Input;
