import { Dispatch, FC, createContext, useState } from "react";
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
interface PokemonCardModal {
  showModal: boolean;
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
}
const defaultPokemonCardModalCtx = {
  showModal: false,
  setShowModal: () => {},
};

export const GetPokeContext = createContext<pokemonContext>(defaultPokemonCtx);
export const PokemonCardModalContext = createContext<PokemonCardModal>(
  defaultPokemonCardModalCtx
);

export const GetPokeProvider: FC<ChildrenType> = ({ children }) => {
  const [pokemons, setPokemons] = useState<Array<PokemonInfoType | null>>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <GetPokeContext.Provider value={{ pokemons, setPokemons }}>
      <PokemonCardModalContext.Provider value={{ showModal, setShowModal }}>
        {children}
      </PokemonCardModalContext.Provider>
    </GetPokeContext.Provider>
  );
};
