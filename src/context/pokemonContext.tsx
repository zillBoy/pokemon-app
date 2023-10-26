import { ReactNode, createContext, useContext, useState } from "react";

type PokemonContextType = {
  pokemon: any;
  setPokemon: React.Dispatch<any>;
};

// Create the pokemon context
export const PokemonContext = createContext<PokemonContextType | null>(null);

// Create a provider component for the pokemon
type PokemonProviderProps = {
  children: ReactNode;
};

export const PokemonProvider: React.FC<PokemonProviderProps> = ({
  children,
}) => {
  const [pokemon, setPokemon] = useState(null);
  const value = { pokemon, setPokemon };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};

// Define a custom hook for consuming the pokemon
export const usePokemonContext = () => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error(
      "usePokemonContext must be used inside the PokemonProvider"
    );
  }

  return context;
};
