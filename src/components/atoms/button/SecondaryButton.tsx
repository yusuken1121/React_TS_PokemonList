import { FC, ReactNode } from "react";
type ButtonType = {
  children: ReactNode;
  onClickFunc: () => void;
};

export const SecondaryButton: FC<ButtonType> = ({ children, onClickFunc }) => {
  return (
    <button onClick={onClickFunc} className="button-base-red">
      {children}
    </button>
  );
};
