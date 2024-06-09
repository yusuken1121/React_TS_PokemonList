import { useContext } from "react";
import { PokemonCardModal } from "../molecules/modal/PokemonCardModal";
import { GetPokeContext } from "../../provider/getPokeContext";
import { PokemonInfoType } from "../../types/pokemonType";
import { PokemonCard } from "../molecules/PokemonCard/PokemonCard";
import { PokemonCapturedCard } from "../molecules/PokemonCard/PokemonCapturedCard";

export const Main = ({
  loading,
  error,
}: {
  loading: boolean;
  error: boolean;
}) => {
  const { pokemons } = useContext(GetPokeContext);
  const capturedPokemons: (PokemonInfoType | null)[] = pokemons!.filter(
    (poke) => {
      return poke?.quantity;
    }
  );
  return (
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
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif"
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
          {capturedPokemons.length > 0 && <h1 className="h1-base">Captured</h1>}
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
  );
};
