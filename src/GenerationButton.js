function GenerationButton({ name }) {
  const onGetGenerationData = () => {
    // const name = this.name;
    generationData(name);
  };

  const generationData = (name) => {
    switch (name) {
      case "Gen I":
        //0-151
        getPokemonData("generation-i")
        break;
      case "Gen II":
        //152-300
        getPokemonData("generation-ii")
        break;
      default:
        console.log("opcion invalida")
        break;
    }
  };


  const getPokemonData = (gen) =>  {
    fetch(`https://pokeapi.co/api/v2/generation/${gen}`)
    // fetch(`https://pokeapi.co/api/v2/pokemon-species/?offset=${}&limit=${}`)
      .then((response) => response.json())
      .then((genData) => {
        console.log(genData.pokemon_species);
        localStorage.setItem(gen,genData.pokemon_species )
      });
  }


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
