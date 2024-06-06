import { useContext, useState } from "react";
import { PokemonInfoType } from "../types/pokemonType";
import { GetPokeContext } from "../provider/getPokeContext";

export const useAllPokemons = () => {
  const { setPokemons } = useContext(GetPokeContext);
  const [pokeId, setPokeID] = useState<number>(1);
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

      setPokemons((prevpokemons) => [...prevpokemons, ...pokemonsData]);
      setPokeID(pokeId + 10);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, getPokemons };
};
