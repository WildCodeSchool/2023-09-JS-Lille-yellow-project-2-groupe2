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
        <button type="button" className="homeButton">
          Jouer
        </button>
        <button type="button" className="homeButton">
          Classement
        </button>
        <button type="button" className="homeButton">
          Casting
        </button>
      </section>
    </section>
  );
}

export default Home;
