import type { Player } from "../type/type";
import PlayerComponents from "./PlayerComponents";

const Players = ({ players }: { players: Player[] }) => {
  console.log(players);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {players.map((player) => (
        <PlayerComponents key={player.id} player={player} />
      ))}
    </div>
  );
};

export default Players;
