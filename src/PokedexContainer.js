import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PokemonCard from './PokemonCard';

function PokedexContainer() {
  
  return (
    <>
    <Container className="justify-content-md-center">
      <Row>
        <Col className="justify-content-md-center" md={4}><PokemonCard /></Col>
        <Col className="justify-content-md-center" md={4}><PokemonCard /></Col>
        <Col className="justify-content-md-center" md={4}><PokemonCard /></Col>
      </Row>
      <Row>
        <Col className="justify-content-md-center" md={4}><PokemonCard /></Col>
        <Col className="justify-content-md-center" md={4}><PokemonCard /></Col>
        <Col className="justify-content-md-center" md={4}><PokemonCard /></Col>
      </Row>
    </Container>
    </>
  );
}

export default PokedexContainer;
