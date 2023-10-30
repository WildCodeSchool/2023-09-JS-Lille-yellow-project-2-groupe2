import Poster from "../poster/Poster";
import Clues from "../Clues/Clues";
import Input from "../Input/Input";
import "./QuizPage.css";

function QuizPage() {
  return (
    <section className="quizpage_container">
      <Poster />
      <Clues />
      <Input movieTitle="Jurassic Park" />
    </section>
  );
}

export default QuizPage;
