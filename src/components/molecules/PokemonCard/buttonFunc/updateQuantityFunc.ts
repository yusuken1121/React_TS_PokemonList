import { SameIdPokemonType } from "./onClickCardFormat";

export const incrementQuantity = (sameIdPokemon: SameIdPokemonType) => {
  if (sameIdPokemon)
    return sameIdPokemon.quantity !== undefined
      ? sameIdPokemon.quantity + 1
      : 1;
};

export const decrementQuantity = (sameIdPokemon: SameIdPokemonType) => {
  if (sameIdPokemon)
    return sameIdPokemon.quantity !== undefined
      ? sameIdPokemon.quantity - 1
      : 1;
};
