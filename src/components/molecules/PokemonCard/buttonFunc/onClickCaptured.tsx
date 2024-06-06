import { PokemonInfoType } from "../../../../types/pokemonType";
import { SetPokemonsType } from "../../../../types/setPokemonsType";

export const OnClickCaptured = (
  pokemons: (PokemonInfoType | null)[],
  setPokemons: SetPokemonsType,
  id: number | undefined
): void => {
  const updatedPokemon = pokemons!
    .filter((poke) => {
      return poke!.id === id;
    })
    .map((poke) => {
      return {
        ...poke,
        quantity: poke!.quantity !== undefined ? poke!.quantity + 1 : 1,
      };
    });

  const updatedPokemons = pokemons!.map((poke) => {
    return poke!.id === id ? updatedPokemon[0] : poke;
  });
  if (updatedPokemons) setPokemons(updatedPokemons as PokemonInfoType[]);
};
