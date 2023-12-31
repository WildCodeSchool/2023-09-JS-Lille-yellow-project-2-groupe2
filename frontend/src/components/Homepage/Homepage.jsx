import { Link } from "react-router-dom";
import { useState } from "react";
import "./Homepage.css";
import PopUp from "../NamePopUp/NamePopUp";
import logo from "../../assets/logo.png";

function Home() {
  const [openingPopUp, setOpeningPopUp] = useState(false);

  return (
    <main>
      <section
        className={`all-elements-home ${openingPopUp ? "opened_popup" : ""}`}
      >
        <img
          src={logo}
          className="logo-home"
          alt="logo jaune ciné wild quiz de la page d'accueil"
        />
        <p className="slogan">Prêt à tester tes connaissances Ciné ?</p>
        <section className="btn-allButtons">
          <button
            type="button"
            className="homeButton"
            onClick={() => setOpeningPopUp(true)}
          >
            Jouer
          </button>
          {openingPopUp && <PopUp setOpeningPopUp={setOpeningPopUp} />}
          <Link to="/Ranking" className="homeButton">
            Classement
          </Link>
          <Link to="/Casting" className="homeButton">
            Casting
          </Link>
        </section>
      </section>
    </main>
  );
}

export default Home;
