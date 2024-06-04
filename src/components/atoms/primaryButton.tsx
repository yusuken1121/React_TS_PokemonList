import { FC, ReactNode } from "react";
type ButtonType = {
  children: ReactNode;
  onClickInsertPokemon: () => void;
};

export const PrimaryButton: FC<ButtonType> = ({
  children,
  onClickInsertPokemon,
}) => {
  return (
    <button onClick={onClickInsertPokemon} className="button-base">
      {children}
    </button>
  );
};
