import React, { useState, useEffect } from "react";
import "./TimerApp.css";

function TimerApp() {
  const [seconds, setSeconds] = useState(40);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return <p className="btn_TimerApp">{seconds}s</p>;
}

export default TimerApp;
