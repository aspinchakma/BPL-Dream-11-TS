import React, { createContext, useState, type ReactNode } from "react";
import { Bounce, toast } from "react-toastify";
import type { Player } from "../../type/type";

// react component node
interface ContextProviderProps {
  children: ReactNode;
}
interface PlayerContextType {
  handleDeletePlayer: (playerDetails: Player) => void;
  handleAddCoin: () => void;
  coins: number;
  handleSelectedPlayer: (player: Player) => void;
  players: Player[];
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
  selectedPlayers: Player[];
}
// context name
export const PlayersContext = createContext<PlayerContextType | null>(null);

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [coins, setCoins] = useState<number>(200000);
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);

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
  const handleSelectedPlayer = (playerDetails: Player): void => {
    if (coins > playerDetails.biddingPrice) {
      const isAlreadySelected = selectedPlayers.some(
        (selectedPly) => selectedPly.id === playerDetails.id,
      );
      if (selectedPlayers.length < 6) {
        if (!isAlreadySelected) {
          // update con
          setCoins(coins - Number(playerDetails.biddingPrice));
          // add to selected player
          setSelectedPlayers([...selectedPlayers, playerDetails]);
          // update player is available status
          const updatedAvailableStatus = [...players].map((ply) => {
            if (ply.id === playerDetails.id) {
              return {
                ...ply,
                isAvailable: false,
              };
            }
            return ply;
          });

          setPlayers(updatedAvailableStatus);

          // showing toast
          toast.success(`${playerDetails.name} selected!`, {
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
        } else {
          toast.error("Already Selected!", {
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
        toast.warn("Players Are Full!", {
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
  const handleDeletePlayer = (playerDetails: Player): void => {
    // update coins
    setCoins(coins + Number(playerDetails.biddingPrice));
    // update available
    const updateAvaiableArray = [...players].map((ply) => {
      if (ply.id === playerDetails.id) {
        return {
          ...ply,
          isAvailable: true,
        };
      }
      return ply;
    });
    setPlayers(updateAvaiableArray);
    // update selected players: remove this players
    const remainSelectedPlayers = [...selectedPlayers].filter(
      (ply) => ply.id !== playerDetails.id,
    );
    setSelectedPlayers(remainSelectedPlayers);
    toast.info("Successfully Deleted!", {
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
  return (
    <PlayersContext.Provider
      value={{
        handleAddCoin,
        coins,
        handleSelectedPlayer,
        players: players,
        setPlayers: setPlayers,
        selectedPlayers: selectedPlayers,
        handleDeletePlayer: handleDeletePlayer,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

export default ContextProvider;
