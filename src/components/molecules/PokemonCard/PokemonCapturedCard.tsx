import { FC } from "react";
import { PokemonInfoType } from "../../../types/pokemonType";
import { SecondaryButton } from "../../atoms/secondoryButton";

export const PokemonCapturedCard: FC<PokemonInfoType> = ({
  image,
  pokeName,
  id,
  quantity,
}) => {
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

      <SecondaryButton onClickFunc={() => alert()}>Release!</SecondaryButton>
    </div>
  );
};
