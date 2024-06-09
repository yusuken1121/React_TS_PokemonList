import { FC, useContext } from "react";
import { SecondaryButton } from "../../atoms/button/SecondaryButton";
import { PokemonCardModalContext } from "../../../provider/getPokeContext";
import { PokemonType } from "../../../types/pokemonType";

export type PokemonCardModalType = {
  showModal: boolean;
  onClose: () => void;
};
export const PokemonCardModal: FC<PokemonCardModalType> = () => {
  const { showModal, setShowModal, contentModal } = useContext(
    PokemonCardModalContext
  );
  if (contentModal) {
    console.log(contentModal!.types);
  }

  return (
    <>
      {showModal ? (
        <div className="fixed top-0 left-0 z-10 w-full h-full bg-slate-700/75 flex items-center justify-center">
          <section className=" bg-white w-1/2 h-1/2 shadow-2xl p-7 flex flex-col justify-between items-center rounded-xl">
            <article className="flex flex-col items-start">
              <p>{contentModal!.id}</p>
              <p className="text-3xl">{contentModal!.pokeName}</p>
              <div className="w-20">
                <img className="w-full" src={contentModal!.imageGif} alt="" />
              </div>
              <div>
                {contentModal && contentModal.types ? (
                  contentModal.types.map((types: PokemonType) => {
                    return <p key={types.slot}>{types.type.name}</p>;
                  })
                ) : (
                  <></>
                )}
              </div>
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
