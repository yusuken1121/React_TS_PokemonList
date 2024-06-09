import { Dispatch, FC, createContext, useState } from "react";
import { ChildrenType } from "../types/childrenType";
import { PokemonInfoType } from "../types/pokemonType";
import { SetPokemonsType } from "../types/setPokemonsType";
import { ContentModalType } from "../types/contentModalType";
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
  contentModal: ContentModalType | null;
  setContentModal: Dispatch<React.SetStateAction<ContentModalType | null>>;
}
const defaultPokemonCardModalCtx = {
  showModal: false,
  setShowModal: () => {},
  contentModal: null,
  setContentModal: () => {},
};

export const GetPokeContext = createContext<pokemonContext>(defaultPokemonCtx);
export const PokemonCardModalContext = createContext<PokemonCardModal>(
  defaultPokemonCardModalCtx
);

export const GetPokeProvider: FC<ChildrenType> = ({ children }) => {
  const [pokemons, setPokemons] = useState<Array<PokemonInfoType | null>>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [contentModal, setContentModal] = useState<ContentModalType | null>(
    null
  );
  return (
    <GetPokeContext.Provider value={{ pokemons, setPokemons }}>
      <PokemonCardModalContext.Provider
        value={{ showModal, setShowModal, contentModal, setContentModal }}
      >
        {children}
      </PokemonCardModalContext.Provider>
    </GetPokeContext.Provider>
  );
};
