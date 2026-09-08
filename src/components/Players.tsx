import { useContext } from "react";
import { PlayersContext } from "./Context/ContextProvider";
import PlayerComponents from "./PlayerComponents";

const Players = () => {
  const context = useContext(PlayersContext);
  if (!context) return null;
  const { players } = context;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {players.length > 0 ? (
        players.map((ply) => <PlayerComponents key={ply.id} player={ply} />)
      ) : (
        <h3>Data Loading....</h3>
      )}
    </div>
  );
};

export default Players;
