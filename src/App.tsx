import { useState } from "react";
import "./App.css";
import { PrimaryButton } from "./components/atoms/primaryButton";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const onClickInsertPokemon = () => {};

  return (
    <div>
      <PrimaryButton onClickInsertPokemon={onClickInsertPokemon}>
        Next 10 Pokemons
      </PrimaryButton>
    </div>
  );
}

export default App;
