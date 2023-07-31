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
      <Generations />
      <CardContainer 
        pokemonFound = {found}
      /> 
    </div>
  );
}

export default App;
git config --global user.email "you@example.com"
git config --global user.name "Your Name"