import { useContext } from "react";
import { PlayersContext } from "./Context/ContextProvider";
import SelectedPlayer from "./SelectedPlayer";

const Selected = () => {
  const context = useContext(PlayersContext);
  if (!context) return null;
  const { selectedPlayers } = context;
  return (
    <div>
      {selectedPlayers.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {selectedPlayers.map((ply) => (
            <SelectedPlayer key={ply.id} player={ply} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-200 bg-gray-50 p-10 text-center">
          <div className="mb-4 text-6xl">🏏</div>

          <h2 className="text-3xl font-bold text-gray-800">
            No Players Selected
          </h2>

          <p className="mt-3 max-w-md text-gray-500">
            You haven't selected any players yet. Browse the available players
            and build your dream cricket squad.
          </p>

          <button className="mt-6 rounded-xl bg-[#E7FE29] px-6 py-3 font-semibold text-black transition hover:scale-105 cursor-pointer">
            Select Players
          </button>
        </div>
      )}
    </div>
  );
};

export default Selected;
