import { useContext } from "react";
import { PlayersContext } from "./Context/ContextProvider";
import SelectedPlayer from "./SelectedPlayer";

const Selected = () => {
  const context = useContext(PlayersContext);
  if (!context) return null;
  const { selectedPlayers } = context;
  return (
    <div className="grid grid-cols-1 gap-4">
      {selectedPlayers.map((ply) => (
        <SelectedPlayer key={ply.id} player={ply} />
      ))}
    </div>
  );
};

export default Selected;
