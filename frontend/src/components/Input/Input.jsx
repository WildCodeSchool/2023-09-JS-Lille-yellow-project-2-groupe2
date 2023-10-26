import { useState } from "react";
import "./input.css";
import PropTypes from "prop-types";

function Input({ movieTitle }) {
  const [answer, setAnswer] = useState("");
  const [answerDisplay, setAnswerDisplay] = useState("");

  // Updates the answer value with the input value
  function handleChange(e) {
    setAnswer(e.target.value);
  }
  // Checks if the answer is right or wrong
  function handleClick() {
    if (answer !== "") {
      if (movieTitle.toLowerCase() === answer.toLowerCase()) {
        setAnswerDisplay("Bonne réponse");
      } else {
        setAnswerDisplay("Mauvaise réponse");
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
        />
        <button className="answer__button" type="button" onClick={handleClick}>
          OK
        </button>
      </section>
      <p>{answerDisplay}</p>
    </>
  );
}

Input.propTypes = {
  movieTitle: PropTypes.string.isRequired,
};

export default Input;