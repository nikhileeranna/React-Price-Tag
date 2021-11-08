import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import { Row, Col } from "react-bootstrap";

export default function Card() {
  return (
    <>
      <Row className="row">
        <Col className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <Card1 />
          </div>
        </Col>
        <Col className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <Card2 />
          </div>
        </Col>
        <Col className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <Card3 />
          </div>
        </Col>
      </Row>
    </>
  );
}
