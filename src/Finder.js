import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

function Finder({setFound}) {

  const [pokeName, setPokeName] = useState();
  const [pokemonData, setPokemonData] = useState();

  const onSearch = () =>{

    let pokeArray = [];

    if(pokeName){
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => response.json())
      .then(pokemonData => {
        setPokemonData(pokemonData)
        pokeArray.push(pokemonData)
        setFound(pokeArray)
         console.log(pokeArray)
      }).catch((err)=>console.log(`El nombre del pokemon ${pokeName} es invalido. Error:`+err))
    }
    else{
      console.log("no se introdujo el nombre de ningun pokemon")
    }

 

  }

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <InputGroup className="mb-3">
              <h1>{pokeName}</h1>
              <Form.Control
                placeholder="Nombre del pokemon"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e)=>setPokeName(e.target.value)}
              />
              <Button variant="outline-primary" id="button-addon2" onClick={(e)=>onSearch()}>
                Buscar
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Finder;
