import { useState } from "react";
import "./App.css";
import { PrimaryButton } from "./components/atoms/primaryButton";
import { PokemonInfoType } from "./types/pokemonType";
import { PokemonCard } from "./components/molecules/PokemonCard";

function App() {
  const [pokemons, setPokemons] = useState<Array<PokemonInfoType>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const onClickInsertPokemon = async () => {
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
  return (
    <div>
      <PrimaryButton onClickFunc={onClickInsertPokemon}>
        Next 10 Pokemons
      </PrimaryButton>
      {error ? (
        <p className="text-red-600 text-3xl">failed fetching data</p>
      ) : loading ? (
        <p>Now loading</p>
      ) : (
        pokemons.map((pokemon: PokemonInfoType) => {
          return (
            <PokemonCard
              key={pokemon.id}
              pokeName={pokemon.pokeName}
              image={pokemon.image}
            />
          );
        })
      )}
    </div>
  );
}

export default App;
