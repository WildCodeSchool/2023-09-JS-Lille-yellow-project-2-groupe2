import PropTypes from "prop-types";
import "./TeamCard.css";

function TeamCard({ name, picture, github, linkedin }) {
  return (
    <article className="card">
      <img src={picture} alt={name} className="card__img" />
      <h2 className="card__name">{name}</h2>
      <ul className="card__socials">
        <li>
          <a className="socials__link" href={github} target="blank">
            <img
              className="socials__img"
              src="./src/assets/github.svg"
              alt="lien vers le profil Github"
            />
          </a>
        </li>
        <li>
          <a className="socials__link" href={linkedin} target="blank">
            <img
              className="socials__img"
              src="./src/assets/linkedin.svg"
              alt="lien vers le profil LinkedIn"
            />
          </a>
        </li>
      </ul>
    </article>
  );
}

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

export default TeamCard;
