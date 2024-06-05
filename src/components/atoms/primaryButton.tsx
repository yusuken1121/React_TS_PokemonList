import { FC, ReactNode } from "react";
type ButtonType = {
  children: ReactNode;
  onClickFunc: () => void;
};

export const PrimaryButton: FC<ButtonType> = ({ children, onClickFunc }) => {
  return (
    <button onClick={onClickFunc} className="button-base">
      {children}
    </button>
  );
};
