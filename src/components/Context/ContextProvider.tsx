import { createContext, useState, type ReactNode } from "react";
import { Bounce, toast } from "react-toastify";
import type { Player } from "../../type/type";

// react component node
interface ContextProviderProps {
  children: ReactNode;
}
interface PlayerContextType {
  name: string;
  handleAddCoin: () => void;
  coins: number;
  handleSelectedPlayer: (player: Player) => void;
  playersFromContext: Player[];
}
// context name
export const PlayersContext = createContext<PlayerContextType | null>(null);

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [coins, setCoins] = useState<number>(0);
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [playersFromContext, setPlayersFromContext] = useState<Player[]>([]);

  // add coin
  const handleAddCoin = (): void => {
    setCoins(coins + 50000);
    toast.success("Successfully Added 50,000TK!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  // add selected player
  const handleSelectedPlayer = (player: Player): void => {
    if (coins > player.biddingPrice) {
      const isAlreadySelected = selectedPlayers.some(
        (selectedPly) => selectedPly.id === player.id,
      );
      if (!isAlreadySelected) {
      } else {
        toast.error("🦄Already Selected!", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } else {
      toast.warn("You Haven't Enough Money To Add!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  const name = "Aspin Chakma";
  return (
    <PlayersContext.Provider
      value={{
        name,
        handleAddCoin,
        coins,
        handleSelectedPlayer,
        playersFromContext,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

export default ContextProvider;
