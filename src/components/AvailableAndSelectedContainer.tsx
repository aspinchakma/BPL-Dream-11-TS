import { use, useState } from "react";
import type { Player } from "../type/type";
import "./AvailableAndSelected.css";

interface PlayersProps {
  players: Promise<Player[]>;
}

const AvailableAndSelectedContainer = ({ players }: PlayersProps) => {
  const playersArray = use(players);
  const [isAvailable, setIsAvailable] = useState(true);
  const avaiableButtonClick = () => {
    setIsAvailable(true);
  };
  const selectedButtonClick = () => {
    setIsAvailable(false);
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {isAvailable ? (
            <h2 className="font-bold text-3xl">Available Players</h2>
          ) : (
            <h2 className="font-bold text-3xl flex gap-2 items-center">
              Selected Players <span>()</span>
            </h2>
          )}
        </div>
        <div className="flex items-center">
          <button
            onClick={avaiableButtonClick}
            className={`rounded-tl-xl rounded-bl-xl ${isAvailable ? "clickedButton" : "nonClickedButton"} border-2 border-[#e7e7e7] border-r-0`}
          >
            Available
          </button>
          <button
            onClick={selectedButtonClick}
            className={`rounded-tr-xl rounded-br-xl ${isAvailable ? "nonClickedButton" : "clickedButton"} border-2 border-[#e7e7e7] flex items-center gap-2`}
          >
            Selected <span>(0)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailableAndSelectedContainer;
