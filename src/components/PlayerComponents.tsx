import { useContext } from "react";
import { FaFlag, FaStar } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";
import type { Player } from "../type/type";
import { PlayersContext } from "./Context/ContextProvider";

const PlayerComponents = ({ player }: { player: Player }) => {
  const context = useContext(PlayersContext);
  if (!context) return null;
  const { handleSelectedPlayer } = context;
  return (
    <div className="rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
      {/* Image */}
      <div className="relative">
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-72 object-cover"
        />

        <span className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <FaStar />
          {player.rating}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Name */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{player.name}</h2>

          <div className="flex items-center gap-2 text-gray-500 mt-1">
            <FaFlag />
            <span>{player.country}</span>
          </div>
        </div>

        {/* Role */}
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
          <div className="flex items-center gap-2">
            <MdSportsCricket className="text-green-600" />
            <span className="font-medium">{player.role}</span>
          </div>

          {player.isAvailable ? (
            <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
              Available
            </span>
          ) : (
            <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full">
              Not Available
            </span>
          )}
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-50 p-3 rounded-xl">
            <p className="text-xs text-gray-500">Batting</p>
            <p className="font-semibold">{player.batting}</p>
          </div>

          <div className="bg-slate-50 p-3 rounded-xl">
            <p className="text-xs text-gray-500">Bowling</p>
            <p className="font-semibold">{player.bowling}</p>
          </div>
        </div>

        {/* About */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
          {player.about}
        </p>

        {/* Price */}
        <div className="flex justify-between items-center border-t pt-4">
          <div>
            <p className="text-xs text-gray-500">Bidding Price</p>
            <h3 className="text-xl font-bold text-indigo-600">
              ${player.biddingPrice}
            </h3>
          </div>

          <button
            disabled={!player.isAvailable}
            onClick={() => handleSelectedPlayer(player)}
            className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-semibold  active:scale-95 transition cursor-pointer hover:text-indigo-600 duration-500 hover:bg-white border-2 border-indigo-600 disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:border-white"
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerComponents;
