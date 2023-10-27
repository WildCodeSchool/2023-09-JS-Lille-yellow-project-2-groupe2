import Poster from "../poster/Poster";
import Clues from "../Clues/Clues";
import Input from "../Input/Input";
import "./QuizPage.css";

function QuizPage() {
  return (
    <section className="quizpage_container">
      <Poster />
      <Clues />
      <Input />
    </section>
  );
}

export default QuizPage;
