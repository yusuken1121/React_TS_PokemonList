import { PokemonInfoType } from "../../../../types/pokemonType";
import { SetPokemonsType } from "../../../../types/setPokemonsType";
export type SameIdPokemonType = PokemonInfoType | null | undefined;

export const onClickCardFormat = (
  pokemons: (PokemonInfoType | null)[],
  setPokemons: SetPokemonsType,
  id: number | undefined,
  updateQuantityFunc: (sameIdPokemon: SameIdPokemonType) => number | undefined
): void => {
  const sameIdPokemon: SameIdPokemonType = pokemons!.find((poke) => {
    return poke!.id === id;
  });
  if (sameIdPokemon) {
    const updatedPokemon = {
      ...sameIdPokemon,
      quantity: updateQuantityFunc(sameIdPokemon),
    };
    const updatedPokemons = pokemons!.map((poke) => {
      return poke!.id === id ? updatedPokemon : poke;
    });
    if (updatedPokemons) setPokemons(updatedPokemons as PokemonInfoType[]);
  }
};
