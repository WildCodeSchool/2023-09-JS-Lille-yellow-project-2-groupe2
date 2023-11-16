import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useName from "../GameContext";
import "./NamePopUp.css";

function PopUp({ setOpeningPopUp }) {
  const [popUpName, setPopUpName] = useState("");
  const { setRankingName } = useName("");
  const handleChange = (event) => {
    setPopUpName(event.target.value);
  };
  const handleClick = () => {
    setRankingName(popUpName);
  };
  return (
    <main className="popup__background">
      <section className="popup__container">
        <p className="popup__text">
          Le principe consiste à deviner quel film se cache derrière l' affiche.
          Ne t'en fais pas, des indices apparaitront au fur et à mesure du
          chrono. Bonne chance !
        </p>
        <input
          className="popup__input"
          placeholder="Entre ton nom"
          onChange={handleChange}
        />
        <section className="popup__all_buttons">
          <button
            type="button"
            className="popup__button popup__back_button"
            onClick={() => setOpeningPopUp(false)}
          >
            Retour
          </button>
          <Link
            to="/quiz"
            className="popup__button popup__continue_button"
            onClick={handleClick}
          >
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
