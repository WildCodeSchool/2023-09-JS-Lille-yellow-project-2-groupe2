import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import TimerApp from "../TimerApp/TimerApp";
import "./Navbar.css";

function Navbar({ gameOver, setGameOver }) {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav__button">
        <img src="./src/assets/back-arrow.svg" alt="Retour à l'accueil" />
      </NavLink>
      <TimerApp gameOver={gameOver} setGameOver={setGameOver} />
    </nav>
  );
}

Navbar.propTypes = {
  gameOver: PropTypes.bool.isRequired,
  setGameOver: PropTypes.func.isRequired,
};

export default Navbar;
