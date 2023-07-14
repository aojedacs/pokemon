import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function PokemonCard({name, number}) {""
  return (
    <>
      <Card>
        {/* <Card style={{ width: "18rem" }}> */}
                    
        <Card.Img className="iron-color" variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`}  />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{number}</Card.Text>
          <Button variant="primary">Añadir</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default PokemonCard;



