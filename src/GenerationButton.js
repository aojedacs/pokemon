function GenerationButton({ name, setFound }) {
  const onGetGenerationData = () => {
    // const name = this.name;
    generationData(name);
  };

  const generationData = (name) => {
    switch (name) {
      case "Gen I":
        //0-151
        getPokemonData("generation-i");
        break;
      case "Gen II":
        //152-251
        getPokemonData("generation-ii");
        break;
      case "Gen III":
        //252-386
        getPokemonData("generation-iii");
        break;
      case "Gen IV":
        //387-493
        getPokemonData("generation-iv");
        break;
      case "Gen V":
        //494-649
        getPokemonData("generation-v");
        break;
      case "Gen VI":
        //650-721
        getPokemonData("generation-vi");
        break;
      case "Gen VII":
        //722-809
        getPokemonData("generation-vii");
        break;
      case "Gen VIII":
        //810-905
        getPokemonData("generation-viii");
        break;
      case "Gen IX":
        //906-1010
        getPokemonData("generation-ix");
        break;
      default:
        console.log("opcion invalida");
        break;
    }
  };

  const getPokemonData = (gen) => {
    fetch(`https://pokeapi.co/api/v2/generation/${gen}`)
      // fetch(`https://pokeapi.co/api/v2/pokemon-species/?offset=${}&limit=${}`)
      .then((response) => response.json())
      .then((genData) => {
        console.log(genData.pokemon_species);
        localStorage.setItem(gen, genData.pokemon_species);
      
      });
  };

  return (
    <>
      <h1>{name}</h1>
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={onGetGenerationData}
      >
        Buscar
      </button>
      <br />
    </>
  );
}

export default GenerationButton;
