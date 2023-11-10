import { Link } from "react-router-dom";
import TeamCard from "../TeamCard/TeamCard";
import BackBtn from "../BackBtn/BackBtn";
import "./AboutUs.css";

function AboutUs() {
  const team = [
    {
      id: 1,
      name: "Julien",
      picture: "./src/assets/julien.jpg",
      github: "https://github.com/JulienOza",
      linkedin: "https://www.linkedin.com/in/julien-ozarowski",
    },
    {
      id: 2,
      name: "Lucas",
      picture: "./src/assets/lucas.jpeg",
      github: "https://github.com/LucasMerino10",
      linkedin: "https://www.linkedin.com/in/lucasmerino10",
    },
    {
      id: 3,
      name: "Rayane",
      picture: "./src/assets/rayane.jpeg",
      github: "https://github.com/Rayane0823",
      linkedin: "https://www.linkedin.com/in/rayane-moussaoui-946a69299/",
    },
    {
      id: 4,
      name: "Sébastien",
      picture: "./src/assets/sebastien.jpeg",
      github: "https://github.com/SebSamPro",
      linkedin: "https://www.linkedin.com/in/sebastien-samyn",
    },
  ];

  return (
    <>
      <header className="header">
        <Link className="header__logo" to="/">
          <img src="./src/assets/logo.png" alt="logo ciné wild quiz" />
        </Link>
      </header>
      <nav className="back__button--about_us">
        <BackBtn />
      </nav>
      <main className="container">
        <section className="teamCards">
          {team.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              picture={member.picture}
              github={member.github}
              linkedin={member.linkedin}
            />
          ))}
        </section>
      </main>
      <footer className="footer">
        <a href="https://www.themoviedb.org" target="blank">
          <img
            className="footer__img"
            src="./src/assets/tmdb.svg"
            alt="Lien vers themoviedb.org"
          />
        </a>
      </footer>
    </>
  );
}

export default AboutUs;
