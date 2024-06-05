import "./App.css";
import { PrimaryButton } from "./components/atoms/primaryButton";
import { PokemonInfoType } from "./types/pokemonType";
import { PokemonCard } from "./components/molecules/PokemonCard";
import { useAllPokemons } from "./hooks/useAllPokemons";

function App() {
  const { pokemons, loading, error, getPokemons } = useAllPokemons();
  const onClickInsertPokemon = () => getPokemons();
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
              id={pokemon.id}
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
