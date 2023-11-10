import { useState, useEffect } from "react";
import "./input.css";
import PropTypes from "prop-types";

function Input({ movieTitle }) {
  const [answer, setAnswer] = useState("");
  const [answerDisplay, setAnswerDisplay] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState(null);

  // initialize time-counter on first components load
  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  // resets answerDisplay value after a second
  setTimeout(() => {
    if (!answerDisplay && answerDisplay !== "") {
      setAnswerDisplay("");
    }
  }, 1000);

  // Updates the answer value with the input value
  function handleChange(e) {
    setAnswer(e.target.value);
  }

  // Checks if the answer is right or wrong
  function handleClick() {
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
      } else {
        setAnswerDisplay(false);
      }
      setAnswer("");
    }
  }

  // Triggers answer verification if user pushes Enter key
  function handleKeyDown(e) {
    if (e.code === "Enter") {
      handleClick();
    }
  }

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
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => handleKeyDown(e)}
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
};

export default Input;
