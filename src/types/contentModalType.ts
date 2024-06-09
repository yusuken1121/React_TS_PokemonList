import { Dispatch } from "react";
import { PokemonInfoType } from "./pokemonType";

export type ContentModalType = Pick<
  PokemonInfoType,
  "id" | "imageGif" | "pokeName" | "types"
>;

export type SetContentModalType = Dispatch<
  React.SetStateAction<(ContentModalType | null)[]>
>;
