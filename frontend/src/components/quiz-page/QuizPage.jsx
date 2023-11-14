import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Poster from "../poster/Poster";
import Clues from "../Clues/Clues";
import Input from "../Input/Input";
import ResultPopUp from "../ResultPopUp/ResultPopUp";
// Movie list that will be replaced by API calls
import movies from "../movies";
import "./QuizPage.css";

function QuizPage() {
  // Index used to switch movies during the game
  const [questionIndex, setQuestionIndex] = useState(1);
  // Question state, true when the user answered correctly or timer reached 0
  const [questionOver, setQuestionOver] = useState(false);
  // Game state, true when the game is over
  const [gameOver, setGameOver] = useState(false);
  // User score
  const [score, setScore] = useState(0);

  // Resets questionOver state on question switch
  useEffect(() => {
    setQuestionOver(false);
  }, [questionIndex]);

  return (
    <section className="quizpage_container">
      <Navbar
        gameOver={gameOver}
        setGameOver={setGameOver}
        questionIndex={questionIndex}
        questionOver={questionOver}
        setQuestionOver={setQuestionOver}
      />
      <Poster poster={movies[questionIndex - 1].poster_path} />
      <Clues />
      <Input
        movieTitle={movies[questionIndex - 1].title}
        setGameOver={setGameOver}
        score={score}
        setScore={setScore}
        questionIndex={questionIndex}
        questionOver={questionOver}
        setQuestionOver={setQuestionOver}
      />
      <ResultPopUp
        gameOver={gameOver}
        score={score}
        questionIndex={questionIndex}
        setQuestionIndex={setQuestionIndex}
        questionOver={questionOver}
        setQuestionOver={setQuestionOver}
      />
    </section>
  );
}

export default QuizPage;
