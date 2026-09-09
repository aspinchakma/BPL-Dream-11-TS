import { use, useContext, useEffect, useState } from "react";
import type { Player } from "../type/type";
import "./AvailableAndSelected.css";
import { PlayersContext } from "./Context/ContextProvider";
import Players from "./Players";
import Selected from "./Selected";

interface PlayersProps {
  players: Promise<Player[]>;
}

const AvailableAndSelectedContainer = ({ players }: PlayersProps) => {
  const playersArray = use(players);
  const context = useContext(PlayersContext);
  const [isAvailable, setIsAvailable] = useState(true);
  const avaiableButtonClick = () => {
    setIsAvailable(true);
  };
  const selectedButtonClick = () => {
    setIsAvailable(false);
  };
  if (!context) return null;

  const { setPlayers, selectedPlayers } = context;

  useEffect(() => {
    setPlayers(playersArray);
  }, [playersArray]);
  return (
    <div className="mb-64 lg:mt-40 mt-24">
      <div className="flex items-center justify-between flex-col lg:flex-row gap-4">
        <div className="flex items-center gap-4">
          {isAvailable ? (
            <h2 className="font-bold text-3xl">Available Players</h2>
          ) : (
            <h2 className="font-bold text-3xl flex gap-2 items-center">
              Selected Players{" "}
              {selectedPlayers.length > 0 && (
                <span>({selectedPlayers.length})</span>
              )}
            </h2>
          )}
        </div>
        <div className="flex items-center">
          <button
            onClick={avaiableButtonClick}
            className={`cursor-pointer rounded-tl-xl rounded-bl-xl ${isAvailable ? "clickedButton" : "nonClickedButton"} border-2 border-[#e7e7e7] border-r-0`}
          >
            Available
          </button>
          <button
            onClick={selectedButtonClick}
            className={`cursor-pointer rounded-tr-xl rounded-br-xl ${isAvailable ? "nonClickedButton" : "clickedButton"} border-2 border-[#e7e7e7] flex items-center gap-2`}
          >
            Selected{" "}
            {selectedPlayers.length > 0 && (
              <span>({selectedPlayers.length})</span>
            )}
          </button>
        </div>
      </div>
      <div className=" mt-10 ">{isAvailable ? <Players /> : <Selected />}</div>
    </div>
  );
};

export default AvailableAndSelectedContainer;
