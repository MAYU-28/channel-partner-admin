import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import PageTitle from "../../../components/PageTitle";
import { Card } from "react-bootstrap";

function FarmVastu() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Farm Vastu",
            path: "/farmer/farm-vastu",
            active: true,
          },
        ]}
        title={"Farm Vastu"}
      />
      <Container>
        <Card>
          <Card.Body className=" py-3">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first" href="#">
                        Agricultural Land
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" href="#">
                        The Slope Of The Agricultural Land
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content className="pt-0">
                    <Tab.Pane eventKey="first">
                      <Card>
                        <Card.Body className="shadow">
                          <Card.Text>Agricultural Land</Card.Text>
                          <Card.Img
                            height="400"
                            variant="top"
                            src="https://img.staticmb.com/mbcontent/images/uploads/2021/8/agricultural-land-with-a-road-on-the-south-should-be-avoided.jpg"
                          />
                          <Card.Title className="text-info">
                            Agricultural Land with a Road on the South Should be
                            Avoided
                          </Card.Title>
                          <Card.Text>
                            As per Vastu Shastra, it is advisable that
                            agricultural land accompanied by a road on the South
                            should strictly be avoided for the best results.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Card>
                        <Card.Body className="shadow">
                          <Card.Text>
                            The Slope Of The Agricultural Land
                          </Card.Text>
                          <Card.Img
                            height="400"
                            variant="top"
                            src="https://img.staticmb.com/mbcontent/images/uploads/2021/8/agricultural-land-with-a-road-on-the-south-should-be-avoided.jpg"
                          />
                          <Card.Title className="text-info">
                            The Slope Of The Agricultural Land Agricultural Land
                            with a Road on the South Should be Avoided
                          </Card.Title>
                          <Card.Text>
                            The Slope Of The Agricultural LandAs per Vastu
                            Shastra, it is advisable that agricultural land
                            accompanied by a road on the South should strictly
                            be avoided for the best results.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default FarmVastu;
