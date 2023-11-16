import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const GameContext = createContext();

export function GameProvider({ children }) {
  const [rankingName, setRankingName] = useState("");
  const [score, setScore] = useState(0);
  const [ranking, setRanking] = useState([
    {
      id: 1,
      imageurl: "./src/assets/avatars/avatar1.png",
      name: "Rayane",
      points: "324",
    },
    {
      id: 2,
      imageurl: "./src/assets/avatars/avatar4.png",
      name: "Lucas",
      points: "272",
    },
    {
      id: 3,
      imageurl: "./src/assets/avatars/avatar1.png",
      name: "Yoann",
      points: "1",
    },
    {
      id: 4,
      imageurl: "./src/assets/avatars/avatar2.png",
      name: "Julien",
      points: "150",
    },
    {
      id: 5,
      imageurl: "./src/assets/avatars/avatar2.png",
      name: "Sébastien",
      points: "122",
    },
    {
      id: 6,
      imageurl: "./src/assets/avatars/avatar1.png",
      name: "Toto",
      points: "111",
    },
  ]);

  const contextValue = useMemo(() => {
    return {
      rankingName,
      setRankingName,
      score,
      setScore,
      ranking,
      setRanking,
    };
  }, [rankingName, score, ranking]);

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
}
GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
const useName = () => {
  return useContext(GameContext);
};
export default useName;
