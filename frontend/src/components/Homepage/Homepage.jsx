import { Link, Outlet } from "react-router-dom";
import "./Homepage.css";
import logo from "../../assets/logo.png";

function Home() {
  return (
    <section className="all-elements-home">
      <img
        src={logo}
        className="logo-home"
        alt="logo jaune ciné wild quiz de la page d'accueil"
      />
      ;<p className="slogan">Vous croyez tout connaître du Cinéma !</p>;
      <section className="btn-allButtons">
        <Link to="/quiz" className="homeButton">
          Jouer
        </Link>
        <Link to="/Ranking" className="homeButton">
          Classement
        </Link>
        <Link to="/Casting" className="homeButton">
          Casting
        </Link>
      </section>
      <Outlet />
    </section>
  );
}

export default Home;
