import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./NamePopUp.css";

function PopUp({ setOpeningPopUp }) {
  return (
    <main className="popup__background">
      <section className="popup__container">
        <p className="popup__text">
          Le principe consiste à deviner quel film se cache derrière l' affiche.
          Ne t'en fais pas, des indices apparaitront au fur et à mesure du
          chrono. Bonne chance !
        </p>
        <input className="popup__input" placeholder="Entre ton nom" />
        <section className="popup__all_buttons">
          <button
            type="button"
            className="popup__button popup__back_button"
            onClick={() => setOpeningPopUp(false)}
          >
            Retour
          </button>
          <Link to="/quiz" className="popup__button popup__continue_button">
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
