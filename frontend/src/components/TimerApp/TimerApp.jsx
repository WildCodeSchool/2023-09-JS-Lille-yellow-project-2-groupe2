import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./TimerApp.css";

function TimerApp({
  gameOver,
  setGameOver,
  questionIndex,
  questionOver,
  setQuestionOver,
}) {
  const [seconds, setSeconds] = useState(40);

  useEffect(() => {
    const interval = setInterval(() => {
      // Timer discreases every second if superior to 1, question is not over and game is not over
      if (seconds - 1 > 0 && !gameOver && !questionOver) {
        setSeconds(seconds - 1);
        // End of timer
      } else if (seconds === 1) {
        setSeconds(seconds - 1);
        // End of game
        if (questionIndex === 10) {
          setGameOver(true);
        }
        setQuestionOver(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  useEffect(() => {
    setSeconds(40);
  }, [questionIndex]);
  return <p className="btn_TimerApp">{seconds}s</p>;
}

TimerApp.propTypes = {
  gameOver: PropTypes.bool.isRequired,
  setGameOver: PropTypes.func.isRequired,
  questionIndex: PropTypes.number.isRequired,
  questionOver: PropTypes.bool.isRequired,
  setQuestionOver: PropTypes.func.isRequired,
};

export default TimerApp;
