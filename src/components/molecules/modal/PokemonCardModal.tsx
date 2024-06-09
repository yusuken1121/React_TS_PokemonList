import { FC, useContext } from "react";
import { SecondaryButton } from "../../atoms/button/SecondaryButton";
import { PokemonCardModalContext } from "../../../provider/getPokeContext";
import { PokemonType } from "../../../types/pokemonType";

export const PokemonCardModal: FC = () => {
  const { showModal, setShowModal, contentModal } = useContext(
    PokemonCardModalContext
  );

  return (
    <>
      {showModal ? (
        <div className="fixed top-0 left-0 z-10 w-full h-full bg-slate-700/75 flex items-center justify-center">
          <section className=" bg-white w-1/2 h-1/2 shadow-2xl p-7 flex flex-col justify-between items-center rounded-xl">
            <article className="flex flex-col items-center w-1/2">
              <div className="w-auto h-48 object-cover flex items-center justify-center">
                <img
                  className="w-auto h-44 object-contain"
                  src={contentModal!.imageGif}
                  alt=""
                />
              </div>
              <table className="w-full ">
                <tbody>
                  <tr className="tr-base"></tr>
                  <tr className="tr-base">
                    <th className="th-base">ID:</th>
                    <td className="td-base">{contentModal!.id}</td>
                  </tr>
                  <tr className="tr-base">
                    <th className="th-base">Name:</th>
                    <td className="td-base">{contentModal!.pokeName}</td>
                  </tr>

                  {contentModal && contentModal.types ? (
                    contentModal.types.map((types: PokemonType) => {
                      return (
                        <tr className="tr-base flex" key={types.slot}>
                          <th className="th-base">Types{types.slot}:</th>
                          <td className="td-base">{types.type.name}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </tbody>
              </table>
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
