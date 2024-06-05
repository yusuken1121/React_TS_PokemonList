import { useState } from "react";
import { PokemonInfoType } from "../types/pokemonType";

export const useAllPokemons = () => {
  const [pokeId, setPokeID] = useState<number>(1);
  const [pokemons, setPokemons] = useState<Array<PokemonInfoType>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const getPokemons = async () => {
    setLoading(true);
    setError(false);
    try {
      const pokemonPromises = [];
      for (let i = pokeId; i < pokeId + 10; i++) {
        const res: Response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${i}/`
        );
        pokemonPromises.push(res);
      }
      const result = await Promise.all(pokemonPromises);
      // console.log(result);
      const dataPromises = result.map(async (res) => {
        if (!res.ok) {
          setError(true);
          throw new Error("Failed to fetch");
        }
        return await res.json();
      });
      const data = await Promise.all(dataPromises);
      const pokemonsData: PokemonInfoType[] = data.map((pokemon) => {
        return {
          id: pokemon.id,
          pokeName: pokemon.name,
          image: pokemon.sprites.front_default,
        };
      });
      setPokemons(pokemonsData);
      setPokeID(pokeId + 10);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return { pokemons, loading, error, getPokemons };
};
