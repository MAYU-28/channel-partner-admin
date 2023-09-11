import { Card, Row, Col } from "react-bootstrap";

function Guidance() {
  return (
    <>
      <Row>
        <Col>
          <Card>
            <video width="400" height="300" controls>
              <source src="https://youtu.be/l0bpy857deM" type="video/ogg" />
            </video>
          </Card>
        </Col>
        <Col>
          <Card>
            <video width="400" height="300" controls>
              <source src="https://youtu.be/l0bpy857deM" type="video/ogg" />
            </video>
          </Card>
        </Col>
        <Col>
          <Card>
            <video width="400" height="300" controls>
              <source src="https://youtu.be/l0bpy857deM" type="video/ogg" />
            </video>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Guidance;
