import { NavLink } from "react-router-dom";
import useName from "../GameContext";
import "./BackBtn.css";

function BackBtn() {
  const { score, setScore } = useName();
  const handleClick = () => {
    if (score !== 0) {
      setScore(0);
    }
  };
  return (
    <nav className="back__button__container">
      <NavLink onClick={handleClick} to="/" className="back__button">
        <img src="./src/assets/back-arrow.svg" alt="Retour à l'accueil" />
      </NavLink>
    </nav>
  );
}

export default BackBtn;
