import { useContext } from "react";
import type { Player } from "../type/type";
import { PlayersContext } from "./Context/ContextProvider";
import PlayerComponents from "./PlayerComponents";

const Players = ({ players }: { players: Player[] }) => {
  const context = useContext(PlayersContext);
  if (!context) return null;
  const { playersFromContext } = context;
  console.log(playersFromContext);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {playersFromContext.length > 0
        ? playersFromContext.map((ply) => (
            <PlayerComponents key={ply.id} player={ply} />
          ))
        : players.map((ply) => <PlayerComponents key={ply.id} player={ply} />)}
    </div>
  );
};

export default Players;
