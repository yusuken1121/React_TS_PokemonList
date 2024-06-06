import { FC, useContext } from "react";
import { PokemonInfoType } from "../../../types/pokemonType";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { GetPokeContext } from "../../../provider/getPokeContext";
import { onClickCardFormat } from "./buttonFunc/onClickCardFormat";
import { incrementQuantity } from "./buttonFunc/updateQuantityFunc";

export const PokemonCard: FC<PokemonInfoType> = ({ image, pokeName, id }) => {
  const { pokemons, setPokemons } = useContext(GetPokeContext);
  return (
    <div className="relative flex flex-col items-center text-gray-700 bg-white shadow-md w-48 rounded-xl bg-clip-border p-4 m-3">
      <div className="w-28 h-28 flex justify-center items-center">
        <img className="w-full" src={image} alt={pokeName} />
      </div>
      <div className="flex justify-center items-center">
        <p className="mr-2">ID:{id}</p>
        <p className="text-xl my-2">{pokeName}</p>
      </div>

      <PrimaryButton
        onClickFunc={() =>
          onClickCardFormat(pokemons, setPokemons, id, incrementQuantity)
        }
      >
        Capture!
      </PrimaryButton>
    </div>
  );
};
