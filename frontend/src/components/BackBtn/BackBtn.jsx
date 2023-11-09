import { NavLink } from "react-router-dom";
import "./BackBtn.css";

function BackBtn() {
  return (
    <nav className="back__button__container">
      <NavLink to="/" className="back__button">
        <img src="./src/assets/back-arrow.svg" alt="Retour à l'accueil" />
      </NavLink>
    </nav>
  );
}

export default BackBtn;
