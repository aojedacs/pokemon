import GenerationButton from "./GenerationButton";
import { Row, Col } from "react-bootstrap";

function Generations({setFound}) {
  return (
    <>
      <Row className="justify-content-md-center generation-button" >
        <Col md={4}>
          <GenerationButton name={"Gen I"} setFound={setFound}/>
        </Col>
        <Col md={4}>
          <GenerationButton name={"Gen II"} />
        </Col>
        <Col md={4}>
          <GenerationButton name={"Gen III"} />
        </Col>
      </Row>
      <Row className="justify-content-md-center generation-button">
        <Col md={4}>
          <GenerationButton name={"Gen IV"} />
        </Col>
        <Col md={4}>
          <GenerationButton name={"Gen V"} />
        </Col>
        <Col md={4}>
          <GenerationButton name={"Gen VI"} />
        </Col>
      </Row>
      <Row className="justify-content-md-center generation-button">
        <Col md={4}>
          <GenerationButton name={"Gen VII"} />
        </Col>
        <Col md={4}>
          <GenerationButton name={"Gen VIII"} />
        </Col>
        <Col md={4}>
          <GenerationButton name={"Gen IX"} />
        </Col>
      </Row>

      
    </>
  );
}

export default Generations;
