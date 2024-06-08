import { FC, useContext } from "react";
import { SecondaryButton } from "../../atoms/button/SecondaryButton";
import { PokemonCardModalContext } from "../../../provider/getPokeContext";

export type PokemonCardModalType = {
  showModal: boolean;
  onClose: () => void;
};
export const PokemonCardModal: FC<PokemonCardModalType> = () => {
  const { showModal, setShowModal } = useContext(PokemonCardModalContext);
  return (
    <>
      {showModal ? (
        <div className="fixed top-0 left-0 z-10 w-full h-full bg-slate-700/75 flex items-center justify-center">
          <section className=" bg-white w-1/2 h-1/2 shadow-2xl p-7 flex flex-col justify-between items-center rounded-xl">
            <article className="flex flex-col items-start">
              <div>test this is a modal</div>
            </article>
            <div className="w-40">
              <SecondaryButton onClickFunc={() => setShowModal(false)}>
                Close
              </SecondaryButton>
            </div>
          </section>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
