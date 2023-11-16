import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import levenshtein from "js-levenshtein";
import "./input.css";

function Input({
  movieTitle,
  movieOriginalTitle,
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
  const [questionScore, setQuestionScore] = useState();

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

  // Removes accents and special characters
  const simplify = (string) => {
    const simplifiedString = string
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/([^\w]+|\s+)/g, "");
    return simplifiedString;
  };

  // Sets error percentage depending on title length
  const getErrorMargin = (title) => {
    if (title.length > 40) {
      return 0.75;
    }
    if (title.length > 30) {
      return 0.7;
    }
    if (title.length > 20) {
      return 0.55;
    }
    return title.length / 65;
  };

  const compare = (expected, expectedOriginal, input) => {
    // Removes accents and special characters
    const titleFr = simplify(expected);
    const titleOg = simplify(expectedOriginal);
    const userInput = simplify(input);

    if (titleFr !== titleOg) {
      // Sets error percentage depending on title length
      const percent = getErrorMargin(titleOg);
      const max = Math.max(titleOg.length, userInput.length);
      // Test if original title matches user imput
      if (levenshtein(titleOg, userInput) / max <= percent) {
        return true;
      }
    }
    // Sets error percentage depending on title length
    const percent = getErrorMargin(titleFr);
    const max = Math.max(titleFr.length, userInput.length);
    // Test if French title matches user imput
    if (levenshtein(titleFr, userInput) / max <= percent) {
      return true;
    }
    return false;
  };

  // Checks if the answer is right or wrong
  const handleClick = () => {
    if (answer !== "") {
      if (
        compare(
          movieTitle.toLowerCase(),
          movieOriginalTitle.toLowerCase(),
          answer.toLowerCase()
        )
      ) {
        setAnswerDisplay(true);
        setIsDisabled(true);
        // calculate time response and time bonus
        const timeTaken = Date.now() - startTime;
        const maxScore = 10;
        const timeBonus = maxScore - Math.floor(timeTaken / 4000);
        // attribute points if right + bonus points for quick answer
        setQuestionScore(10 + timeBonus);
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
        Bravo, + {questionScore} points !
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
  movieOriginalTitle: PropTypes.string.isRequired,
  setGameOver: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  questionIndex: PropTypes.number.isRequired,
  questionOver: PropTypes.bool.isRequired,
  setQuestionOver: PropTypes.func.isRequired,
};

export default Input;
