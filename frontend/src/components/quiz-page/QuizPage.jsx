import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Poster from "../poster/Poster";
import Clues from "../Clues/Clues";
import Input from "../Input/Input";
import ResultPopUp from "../ResultPopUp/ResultPopUp";
import "./QuizPage.css";

function QuizPage() {
  // Game state, true when the game is over
  const [gameOver, setGameOver] = useState(false);
  // User score
  const [score, setScore] = useState(0);
  return (
    <section className="quizpage_container">
      <Navbar gameOver={gameOver} setGameOver={setGameOver} />
      <Poster />
      <Clues />
      <Input
        movieTitle="Jurassic Park"
        gameOver={gameOver}
        setGameOver={setGameOver}
        score={score}
        setScore={setScore}
      />
      <ResultPopUp gameOver={gameOver} score={score} />
    </section>
  );
}

export default QuizPage;
