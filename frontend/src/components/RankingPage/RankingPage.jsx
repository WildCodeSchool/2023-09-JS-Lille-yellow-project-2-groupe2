import useName from "../GameContext";
import "./RankingPage.css";
import "../Navbar/Navbar.css";
import BackBtn from "../BackBtn/BackBtn";

function RankingPage() {
  const { ranking } = useName();

  const sortedRanking = [...ranking];
  sortedRanking.sort((x, y) => y.points - x.points);

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
            {sortedRanking.map((element, index) => (
              <section
                className={index < 3 ? "three_firsts_cards" : "no_display"}
                key={element.id}
              >
                <h3 className="three_firsts_name">
                  {index > 0 ? `${index + 1}ème` : `${index + 1}er`}
                </h3>
                <h2 className="three_firsts_name">{element.name}</h2>
                <img
                  src={element.imageurl}
                  className={index < 3 ? "ranking_three_first_avatars" : ""}
                  alt="avatar"
                />
                <h3 className="three_firsts_score">Score : {element.points}</h3>
                <h3 className="responsive_three_firsts_score">
                  {element.points}
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
              {sortedRanking.map((element, index) => (
                <tr
                  className={index < 3 ? "ranking_line_first" : "no_display"}
                  key={element.id}
                >
                  <td className="last_rank">
                    {index > 0 ? `${index + 1}ème` : `${index + 1}er`}
                  </td>
                  <td className="last_name">{element.name}</td>
                  <td className="last_image">
                    <img
                      src={element.imageurl}
                      className={index < 3 ? "ranking_lasts_avatars" : ""}
                      alt="avatar"
                    />
                  </td>
                  <td className="responsive_three_firsts_score">
                    {element.points}
                  </td>
                </tr>
              ))}
            </section>
            {sortedRanking.map(
              (element, index) =>
                index >= 3 && (
                  <tr key={element.id} className="ranking_line">
                    <td className="last_rank">
                      {index > 0 ? `${index + 1}ème` : `${index + 1}er`}
                    </td>
                    <td className="last_name">{element.name}</td>
                    <td className="last_image">
                      <img
                        src={element.imageurl}
                        className="ranking_lasts_avatars"
                        alt="avatar"
                      />
                    </td>
                    <td className="last_score">{element.points}</td>
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
