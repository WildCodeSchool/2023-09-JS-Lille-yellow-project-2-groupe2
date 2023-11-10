import "./RankingPage.css";
import "../Navbar/Navbar.css";
import BackBtn from "../BackBtn/BackBtn";

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
    <main className="ranking_body">
      <nav className="back__button--ranking">
        <BackBtn />
      </nav>
      <section className="all_ranking">
        <h1 className="ranking_title">Classement</h1>
        <table className="ranking_table responsive_ranking_table">
          <tr className="ranking_lasts_header_cell">
            <th>Rang</th>
            <th>Nom</th>
            <th className="avatar_header">Avatar</th>
            <th>Score</th>
          </tr>
        </table>
        <section className="ranking_container">
          <section className="three_firsts_bloc three_firsts_bloc_responsive">
            {sortedRanking.map((ranking, index) => (
              <section
                className={index < 3 ? "three_firsts_cards" : "no_display"}
                key={ranking.rank}
              >
                <h3 className="three_firsts_name">{ranking.rank}</h3>
                <h2 className="three_firsts_name">{ranking.name}</h2>
                <img
                  src={ranking.imageurl}
                  className={index < 3 ? "ranking_three_first_avatars" : ""}
                  alt="avatar"
                />
                <h3 className="three_firsts_score">Score : {ranking.score}</h3>
                <h3 className="responsive_three_firsts_score">
                  {ranking.score}
                </h3>
              </section>
            ))}
          </section>
        </section>
        <table className="ranking_table">
          <thead className="ranking_lasts_header">
            <tr className="ranking_lasts_header_cell">
              <th>Rang</th>
              <th>Nom</th>
              <th>Avatar</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody className="ranking_lasts_container">
            <section className="three_firsts_bloc_responsive">
              {sortedRanking.map((ranking, index) => (
                <tr
                  className={index < 3 ? "ranking_line_first" : "no_display"}
                  key={ranking.rank}
                >
                  <td className="last_rank">{ranking.rank}</td>
                  <td className="last_name">{ranking.name}</td>
                  <td className="last_image">
                    <img
                      src={ranking.imageurl}
                      className={index < 3 ? "ranking_lasts_avatars" : ""}
                      alt="avatar"
                    />
                  </td>
                  <td className="responsive_three_firsts_score">
                    {ranking.score}
                  </td>
                </tr>
              ))}
            </section>
            {sortedRanking.map(
              (element, index) =>
                index >= 3 && (
                  <tr key={element.rank} className="ranking_line">
                    <td className="last_rank">{element.rank}</td>
                    <td className="last_name">{element.name}</td>
                    <td className="last_image">
                      <img
                        src={element.imageurl}
                        className="ranking_lasts_avatars"
                        alt="avatar"
                      />
                    </td>
                    <td className="last_score">{element.score}</td>
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
