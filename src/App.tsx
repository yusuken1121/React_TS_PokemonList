import "./App.css";
import { PokemonInfoType } from "./types/pokemonType";
import { PokemonCard } from "./components/molecules/PokemonCard/PokemonCard";
import { useAllPokemons } from "./hooks/useAllPokemons";
import { GetPokeContext } from "./provider/getPokeContext";
import { useContext } from "react";
import { PokemonCapturedCard } from "./components/molecules/PokemonCard/PokemonCapturedCard";
import { Header } from "./components/organisms/Header";
import { PokemonCardModal } from "./components/molecules/modal/PokemonCardModal";

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
    <>
      <Header onClickFunc={onClickInsertPokemon} />
      <main>
        <PokemonCardModal />

        <div className="flex items-start">
          <div className="flex flex-col items-start">
            {pokemons.length > 0 && <h1 className="h1-base">POKEMONS</h1>}
            <div className="flex flex-wrap justify-center">
              {error ? (
                <p className="text-red-600 text-3xl">failed fetching data</p>
              ) : loading ? (
                <div className="w-dvw h-dvh flex justify-center items-center">
                  <img
                    className="w-40 object-cover"
                    src="./src/assets/Loading_Rocket.gif"
                    alt=""
                  />
                  <p className="h1-base">LOADING......</p>
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
                        imageGif={pokemon.imageGif}
                        types={pokemon.types}
                        quantity={pokemon.quantity ? pokemon.quantity : 0}
                      />
                    )
                  );
                })
              )}
            </div>
          </div>
          <div className="w-">
            {capturedPokemons.length > 0 && (
              <h1 className="h1-base">Captured</h1>
            )}
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
    </>
  );
}

export default App;
