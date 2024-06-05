import { FC } from "react";
import { PokemonInfoType } from "../../types/pokemonType";
import { PrimaryButton } from "../atoms/primaryButton";

export const PokemonCard: FC<PokemonInfoType> = ({ image, pokeName }) => {
  return (
    <div className="relative flex flex-col items-center text-gray-700 bg-white shadow-md max-w-44 rounded-xl bg-clip-border p-4">
      <div className="w-28 h-28 flex justify-center items-center">
        <img className="w-full" src={image} alt={pokeName} />
      </div>

      <p className="text-xl my-2">{pokeName}</p>
      <PrimaryButton onClickFunc={() => alert("get")}>Get</PrimaryButton>
    </div>
  );
};
