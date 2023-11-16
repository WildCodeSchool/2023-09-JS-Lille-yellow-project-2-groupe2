import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const GameContext = createContext();

export function GameProvider({ children }) {
  const [rankingName, setRankingName] = useState("");
  const [score, setScore] = useState(0);

  const contextValue = useMemo(() => {
    return {
      rankingName,
      setRankingName,
      score,
      setScore,
    };
  }, [rankingName, score]);

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
