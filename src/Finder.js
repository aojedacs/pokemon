import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Finder() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Nombre del pokemon"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-primary" id="button-addon2">
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
