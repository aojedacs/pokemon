import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PokemonCard from "./PokemonCard";


function CardContainer({pokemonFound}) {

    const [pokemonList, setPokemonList] = useState([]);

  // fetch("https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=151")
  //   .then(response => response.json())
  //   .then(allPokemon => {
  //     // console.log(allPokemon)
  //     setPokemonList(allPokemon.results)
  //   })


  return (
    <>
      <Container className="justify-content-md-center">
        <Row>
          {pokemonFound?pokemonFound.map((pokemon) => {

            console.log("ESTE SE ENCONTRO ", pokemon.name)

            return (
              <Col className="justify-content-md-center" md={2}>
                <PokemonCard
                  name={
                     pokemon?pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1):null                
                  }
                  number={pokemon.id}
                />
              </Col>
            );
          }):null}
        </Row>
      </Container>
    </>
  );
}

export default CardContainer;
