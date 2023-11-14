import PropTypes from "prop-types";
import BackBtn from "../BackBtn/BackBtn";
import TimerApp from "../TimerApp/TimerApp";
import "./Navbar.css";

function Navbar({ gameOver, setGameOver }) {
  return (
    <nav className="navbar_container">
      <BackBtn />
      <TimerApp gameOver={gameOver} setGameOver={setGameOver} />
    </nav>
  );
}

Navbar.propTypes = {
  gameOver: PropTypes.bool.isRequired,
  setGameOver: PropTypes.func.isRequired,
};

export default Navbar;
