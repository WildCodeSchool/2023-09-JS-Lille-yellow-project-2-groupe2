import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./NamePopUp.css";

function PopUp({ setOpeningPopUp }) {
  return (
    <main className="PopUpBackground">
      <section className="PopUpContainer">
        <p className="PopUpText">
          Le principe consiste à deviner quel film se cache derrière l' affiche.
          Ne t'en fais pas, des indices apparaissent au fur et à mesure du
          chrono. Bonne chance !
        </p>
        <input className="PopUpInput" placeholder="Entrez votre nom" />
        <section className="PopUpAllButtons">
          <button
            type="button"
            className="PopUpButton PopUpBackButton"
            onClick={() => setOpeningPopUp(false)}
          >
            Retour
          </button>
          <Link to="/quiz" className="PopUpButton PopUpContinueButton">
            Continuer
          </Link>
        </section>
      </section>
    </main>
  );
}
PopUp.propTypes = {
  setOpeningPopUp: PropTypes.func.isRequired,
};

export default PopUp;
