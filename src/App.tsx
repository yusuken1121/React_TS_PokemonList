import "./App.css";
import { PrimaryButton } from "./components/atoms/primaryButton";
import { PokemonInfoType } from "./types/pokemonType";
import { PokemonCard } from "./components/molecules/PokemonCard/PokemonCard";
import { useAllPokemons } from "./hooks/useAllPokemons";
import { GetPokeContext } from "./provider/getPokeContext";
import { useContext } from "react";

function App() {
  const { loading, error, getPokemons } = useAllPokemons();
  const { pokemons } = useContext(GetPokeContext);
  const onClickInsertPokemon = () => getPokemons();
  return (
    <div>
      <PrimaryButton onClickFunc={onClickInsertPokemon}>
        Next 10 Pokemons
      </PrimaryButton>
      <div className="flex flex-wrap">
        {error ? (
          <p className="text-red-600 text-3xl">failed fetching data</p>
        ) : loading ? (
          <p>Now loading</p>
        ) : (
          pokemons.map((pokemon: PokemonInfoType | null) => {
            return (
              pokemon && (
                <PokemonCard
                  key={pokemon.id}
                  id={pokemon.id}
                  pokeName={pokemon.pokeName}
                  image={pokemon.image}
                  quantity={pokemon.quantity ? pokemon.quantity : 0}
                />
              )
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
