import "./RankingPage.css";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";

function RankingPage() {
  const Ranking = [
    {
      imageurl: "./src/assets/avatars/avatar1.png",
      rank: "1er",
      name: "Rayane",
      score: "324",
    },
    {
      imageurl: "./src/assets/avatars/avatar4.png",
      rank: "2ème",
      name: "Lucas",
      score: "272",
    },
    {
      imageurl: "./src/assets/avatars/avatar1.png",
      rank: "6ème",
      name: "Yoann",
      score: "1",
    },
    {
      imageurl: "./src/assets/avatars/avatar2.png",
      rank: "3ème",
      name: "Julien",
      score: "150",
    },
    {
      imageurl: "./src/assets/avatars/avatar2.png",
      rank: "4ème",
      name: "Sébastien",
      score: "122",
    },
    {
      imageurl: "./src/assets/avatars/avatar1.png",
      rank: "5ème",
      name: "Toto",
      score: "111",
    },
  ];

  const sortedRanking = [...Ranking];
  sortedRanking.sort((x, y) => y.score - x.score);

  return (
    <main className="RankingBody">
      <nav className="nav">
        <NavLink to="/" className="nav__button">
          <img src="./src/assets/back-arrow.svg" alt="Retour à l'accueil" />
        </NavLink>
      </nav>
      <section className="AllRanking">
        <h1 className="RankingTitle">Classement</h1>
        <table className="RankingTable ResponsiveRankingTable">
          <tr className="RankingLastsHeaderCell">
            <th>Classement</th>
            <th>Nom</th>
            <th className="AvatarHeader">Avatar</th>
            <th>Score</th>
          </tr>
        </table>
        <section className="RankingContainer">
          <section className="ThreeFirstsBloc ThreeFirstsBlocResponsive">
            {sortedRanking.map((ranking, index) => (
              <section
                className={index < 3 ? "ThreeFirstsCards" : "NoDisplay"}
                key={ranking.rank}
              >
                <h3 className="ThreeFirstsName">{ranking.rank}</h3>
                <h1 className="ThreeFirstsName">{ranking.name}</h1>
                <img
                  src={ranking.imageurl}
                  className={index < 3 ? "RankingThreeFirstAvatars" : ""}
                  alt="avatar"
                />
                <h3 className="ThreeFirstsScore">Score : {ranking.score}</h3>
                <h3 className="ResponsiveThreeFirstsScore">{ranking.score}</h3>
              </section>
            ))}
          </section>
        </section>
        <table className="RankingTable">
          <thead className="RankingLastsHeader">
            <tr className="RankingLastsHeaderCell">
              <th>Classement</th>
              <th>Nom</th>
              <th>Avatar</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody className="RankingLastsContainer">
            <section className=" ThreeFirstsBlocResponsive">
              {sortedRanking.map((ranking, index) => (
                <tr
                  className={index < 3 ? "RankingLineFirst" : "NoDisplay"}
                  key={ranking.rank}
                >
                  <td className="LastRank">{ranking.rank}</td>
                  <td className="LastName">{ranking.name}</td>
                  <td className="LastImage">
                    <img
                      src={ranking.imageurl}
                      className={index < 3 ? "RankingLastsAvatars" : ""}
                      alt="avatar"
                    />
                  </td>
                  <td className="ResponsiveThreeFirstsScore">
                    {ranking.score}
                  </td>
                </tr>
              ))}
            </section>
            {sortedRanking.map(
              (element, index) =>
                index >= 3 && (
                  <tr key={element.rank} className="RankingLine">
                    <td className="LastRank">{element.rank}</td>
                    <td className="LastName">{element.name}</td>
                    <td className="LastImage">
                      <img
                        src={element.imageurl}
                        className="RankingLastsAvatars"
                        alt="avatar"
                      />
                    </td>
                    <td className="LastScore">{element.score}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default RankingPage;
