import { createContext, type ReactNode } from "react";

// react component node
interface ContextProviderProps {
  children: ReactNode;
}
interface PlayerContextType {
  name: string;
}
// context name
export const PlayersContext = createContext<PlayerContextType | null>(null);
const ContextProvider = ({ children }: ContextProviderProps) => {
  const name = "Aspin Chakma";
  return (
    <PlayersContext.Provider value={{ name }}>
      {children}
    </PlayersContext.Provider>
  );
};

export default ContextProvider;
