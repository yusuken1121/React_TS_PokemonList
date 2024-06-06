import "./App.css";
import { PrimaryButton } from "./components/atoms/primaryButton";
import { PokemonInfoType } from "./types/pokemonType";
import { PokemonCard } from "./components/molecules/PokemonCard/PokemonCard";
import { useAllPokemons } from "./hooks/useAllPokemons";
import { GetPokeContext } from "./provider/getPokeContext";
import { useContext } from "react";
import { PokemonCapturedCard } from "./components/molecules/PokemonCard/PokemonCapturedCard";

function App() {
  const { loading, error, getPokemons } = useAllPokemons();
  const { pokemons } = useContext(GetPokeContext);
  const onClickInsertPokemon = () => getPokemons();
  const capturedPokemons: (PokemonInfoType | null)[] = pokemons!.filter(
    (poke) => {
      return poke?.quantity;
    }
  );
  return (
    <div>
      <header>
        <PrimaryButton onClickFunc={onClickInsertPokemon}>
          Next 10 Pokemons
        </PrimaryButton>
      </header>
      <main>
        <div className="flex">
          <div className="flex flex-wrap justify-center">
            {error ? (
              <p className="text-red-600 text-3xl">failed fetching data</p>
            ) : loading ? (
              <div className="w-1/2 h-1/2 flex justify-center items-center p-40">
                <img
                  className="w-40 h-40 object-cover"
                  src="./src/assets/Loading_Rocket.gif"
                  alt=""
                />
                <p className="text-3xl">LOADING......</p>
              </div>
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
          <div>
            {capturedPokemons.map((pokemon: PokemonInfoType | null) => {
              return (
                pokemon && (
                  <PokemonCapturedCard
                    key={pokemon.id}
                    id={pokemon.id}
                    pokeName={pokemon.pokeName}
                    image={pokemon.image}
                    quantity={pokemon.quantity ? pokemon.quantity : 0}
                  />
                )
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
