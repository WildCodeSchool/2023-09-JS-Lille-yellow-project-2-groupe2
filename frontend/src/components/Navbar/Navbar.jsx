import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav__button">
        <img src="./src/assets/back-arrow.svg" alt="Retour à l'accueil" />
      </NavLink>
    </nav>
  );
}

export default Navbar;
