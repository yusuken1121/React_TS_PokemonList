import { Dispatch, FC, createContext, useState } from "react";
import { ChildrenType } from "../types/childrenType";
import { PokemonInfoType } from "../types/pokemonType";
interface pokemonContext {
  pokemons: (PokemonInfoType | null)[];
  setPokemons: Dispatch<React.SetStateAction<(PokemonInfoType | null)[]>>;
}
const defaultPokemonCtx = {
  pokemons: [],
  setPokemons: () => {},
};

export const GetPokeContext = createContext<pokemonContext>(defaultPokemonCtx);

export const GetPokeProvider: FC<ChildrenType> = ({ children }) => {
  const [pokemons, setPokemons] = useState<Array<PokemonInfoType | null>>([]);
  return (
    <GetPokeContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </GetPokeContext.Provider>
  );
};
