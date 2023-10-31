import Poster from "../poster/Poster";
import Clues from "../Clues/Clues";
import Input from "../Input/Input";
import "./QuizPage.css";
import TimerApp from "../TimerApp/TimerApp";

function QuizPage() {
  return (
    <section className="quizpage_container">
      <Poster />
      <Clues />
      <TimerApp />
      <Input movieTitle="Jurassic Park" />
    </section>
  );
}

export default QuizPage;
