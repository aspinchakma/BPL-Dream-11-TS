import { useContext } from "react";
import type { Player } from "../type/type";
import { PlayersContext } from "./Context/ContextProvider";

const SelectedPlayer = ({ player }: { player: Player }) => {
  const context = useContext(PlayersContext);
  if (!context) return null;
  const { handleDeletePlayer } = context;
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      {/* Player Image */}
      <img
        src={player.image}
        alt={player.name}
        className="h-16 w-16 rounded-xl object-cover"
      />

      {/* Player Info */}
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900">{player.name}</h3>

        <p className="text-sm text-gray-500">
          {player.country} • {player.role}
        </p>

        <p className="mt-1 font-semibold text-gray-900">
          ${player.biddingPrice.toLocaleString()}
        </p>
      </div>

      {/* Delete */}
      <button
        onClick={() => handleDeletePlayer(player)}
        className="flex h-10 w-10 items-center justify-center rounded-xl
               bg-red-50 text-red-500 transition
               hover:bg-red-500 hover:text-white cursor-pointer"
      >
        🗑️
      </button>
    </div>
  );
};

export default SelectedPlayer;
