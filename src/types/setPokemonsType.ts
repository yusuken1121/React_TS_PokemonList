import { Dispatch } from "react";
import { PokemonInfoType } from "./pokemonType";

export type SetPokemonsType = Dispatch<
  React.SetStateAction<(PokemonInfoType | null)[]>
>;
