import { createContext, useState, type ReactNode } from "react";
import { Bounce, toast } from "react-toastify";

// react component node
interface ContextProviderProps {
  children: ReactNode;
}
interface PlayerContextType {
  name: string;
  handleAddCoin: () => void;
  coins: number;
}
// context name
export const PlayersContext = createContext<PlayerContextType | null>(null);

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [coins, setCoins] = useState<number>(0);

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
  const name = "Aspin Chakma";
  return (
    <PlayersContext.Provider value={{ name, handleAddCoin, coins }}>
      {children}
    </PlayersContext.Provider>
  );
};

export default ContextProvider;
