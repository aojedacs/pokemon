import logo from "./logo.svg";
import "./App.css";
import Finder from "./Finder";
import CardContainer from "./CardContainer";
import PokedexContainer from "./PokedexContainer";
import Generations from "./Generations";
import { useState } from "react";

function App() {
  const [found, setFound] = useState();

  return (
    <div className="App">
      <PokedexContainer /> 
      <Finder 
        setFound={setFound}
      /> 
      <Generations 
        setFound={setFound}
      />

      <CardContainer 
        pokemonFound = {found}
      /> 
    </div>
  );
}

export default App;