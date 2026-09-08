import { use, useState } from "react";
import type { Player } from "../type/type";
import "./AvailableAndSelected.css";
import Players from "./Players";
import Selected from "./Selected";

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
    <div className=" my-16">
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
            className={`cursor-pointer rounded-tl-xl rounded-bl-xl ${isAvailable ? "clickedButton" : "nonClickedButton"} border-2 border-[#e7e7e7] border-r-0`}
          >
            Available
          </button>
          <button
            onClick={selectedButtonClick}
            className={`cursor-pointer rounded-tr-xl rounded-br-xl ${isAvailable ? "nonClickedButton" : "clickedButton"} border-2 border-[#e7e7e7] flex items-center gap-2`}
          >
            Selected <span>(0)</span>
          </button>
        </div>
      </div>
      <div className="min-h-screen mt-10">
        {isAvailable ? <Players players={playersArray} /> : <Selected />}
      </div>
    </div>
  );
};

export default AvailableAndSelectedContainer;
