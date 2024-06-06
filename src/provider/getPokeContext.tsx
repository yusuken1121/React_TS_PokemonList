import { FC, createContext, useState } from "react";
import { ChildrenType } from "../types/childrenType";
import { PokemonInfoType } from "../types/pokemonType";
import { SetPokemonsType } from "../types/setPokemonsType";
interface pokemonContext {
  pokemons: (PokemonInfoType | null)[];
  setPokemons: SetPokemonsType;
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
