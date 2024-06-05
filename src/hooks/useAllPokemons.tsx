import { useState } from "react";
import { PokemonInfoType } from "../types/pokemonType";

export const useAllPokemons = () => {
  const [pokemons, setPokemons] = useState<Array<PokemonInfoType>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const getPokemons = async () => {
    setLoading(true);
    setError(false);
    try {
      const res: Response = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
      if (!res.ok) {
        setError(false);
      }
      const data = await res.json();
      const pokemonsData: PokemonInfoType = {
        id: data.id,
        pokeName: data.name,
        image: data.sprites.front_default,
      };
      setPokemons([...pokemons, pokemonsData]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  console.log(pokemons);
  return { pokemons, loading, error, getPokemons };
};
