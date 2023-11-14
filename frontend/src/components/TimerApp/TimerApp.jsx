import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./TimerApp.css";

function TimerApp({ gameOver, setGameOver }) {
  const [seconds, setSeconds] = useState(40);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds - 1 > 0 && !gameOver) {
        setSeconds(seconds - 1);
      } else if (seconds === 1) {
        setSeconds(seconds - 1);
        clearInterval(interval);
        if (!gameOver) {
          setGameOver(true);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return <p className="btn_TimerApp">{seconds}s</p>;
}

TimerApp.propTypes = {
  gameOver: PropTypes.bool.isRequired,
  setGameOver: PropTypes.func.isRequired,
};

export default TimerApp;
