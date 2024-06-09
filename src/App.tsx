import "./App.css";
import { useAllPokemons } from "./hooks/useAllPokemons";
import { Header } from "./components/organisms/Header";
import { Main } from "./components/organisms/Main";

function App() {
  const { loading, error, getPokemons } = useAllPokemons();
  const onClickInsertPokemon = () => getPokemons();
  return (
    <>
      <Header onClickFunc={onClickInsertPokemon} />
      <Main loading={loading} error={error} />
    </>
  );
}

export default App;
