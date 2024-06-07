import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Header = ({
  onClickFunc,
}: {
  onClickFunc: () => Promise<void>;
}) => {
  return (
    <header>
      <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-around bg-red-500 p-3">
        <div className="flex justify-center items-center mb-2 sm:mb-0">
          <div className="w-10 mr-2">
            <img
              className="w-full"
              src="./src/assets/pokemons/monster-ball.png"
            />
          </div>
          <h1 className="h1-base text-white">POKEMON INDEX</h1>
          <div className="w-10 ml-2">
            <img
              className="w-full"
              src="./src/assets/pokemons/monster-ball.png"
            />
          </div>
        </div>
        <PrimaryButton onClickFunc={onClickFunc}>
          Next 10 Pokemons
        </PrimaryButton>
      </div>
    </header>
  );
};
