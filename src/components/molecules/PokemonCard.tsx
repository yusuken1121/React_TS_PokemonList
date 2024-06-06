import { FC, useContext } from "react";
import { PokemonInfoType } from "../../types/pokemonType";
import { PrimaryButton } from "../atoms/primaryButton";
import { GetPokeContext } from "../../provider/getPokeContext";

export const PokemonCard: FC<PokemonInfoType> = ({
  image,
  pokeName,
  id,
  quantity,
}) => {
  const { pokemons, setPokemons } = useContext(GetPokeContext);
  const onClickCaptured = () => {
    const updatedPokemon = pokemons
      .filter((poke) => {
        return poke!.id === id;
      })
      .map((poke) => {
        return {
          ...poke,
          quantity: poke!.quantity !== undefined ? poke!.quantity + 1 : 1,
        };
      });

    const updatedPokemons = pokemons.map((poke) => {
      return poke!.id === id ? updatedPokemon[0] : poke;
    });
    if (updatedPokemons) setPokemons(updatedPokemons as PokemonInfoType[]);
  };
  return (
    <div className="relative flex flex-col items-center text-gray-700 bg-white shadow-md w-48 rounded-xl bg-clip-border p-4 m-3">
      <div className="w-28 h-28 flex justify-center items-center">
        <img className="w-full" src={image} alt={pokeName} />
      </div>
      <p>Capture: x{quantity}</p>
      <div className="flex justify-center items-center">
        <p className="mr-2">ID:{id}</p>
        <p className="text-xl my-2">{pokeName}</p>
      </div>

      <PrimaryButton onClickFunc={() => onClickCaptured()}>Get</PrimaryButton>
    </div>
  );
};
