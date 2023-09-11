import React from "react";
import Container from "react-bootstrap/Container";
import PageTitle from "../../../components/PageTitle";
import { Card, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
function Covid19() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Covid 19",
            path: "/farmer/covid19",
            active: true,
          },
        ]}
        title={"Covid 19"}
      />
      <Container>
        <Card>
          <Card.Body className="py-3">
            <Card.Title className="text-info">Symptons of Covid 19</Card.Title>
            <Row>
              <Col>
                <Card.Text>
                  As per Vastu Shastra, it is advisable that agricultural land
                  accompanied by a road on the South should strictly be avoided
                  for the best results.
                </Card.Text>
                <Card.Text>
                  As per Vastu Shastra, it is advisable that agricultural land
                  accompanied by a road on the South should strictly be avoided
                  for the best results.As per Vastu Shastra, it is advisable
                  that agricultural land accompanied by a road on the South
                  should strictly be avoided for the best results. As per Vastu
                  Shastra, it is advisable that agricultural land accompanied by
                  a road on the South should strictly be avoided for the best
                  results.As per Vastu Shastra, it is advisable that
                  agricultural land accompanied by a road on the South should
                  strictly be avoided for the best results. As per Vastu
                  Shastra, it is advisable that agricultural land accompanied by
                  a road on the South should strictly be avoided for the best
                  results.As per Vastu Shastra, it is advisable that
                  agricultural land accompanied by a road on the South should
                  strictly be avoided for the best results.
                </Card.Text>
              </Col>
              <Col>
                <Card.Img
                  height="400"
                  variant="top"
                  src="https://www.news-medical.net/images/news/ImageForNews_715073_16536513276529443.jpg"
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className="mt-4">
          <Card.Body>
            <Card.Text className="text-info">
              How to take care to Avoid covid
            </Card.Text>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Herd immunity</Accordion.Header>
                <Accordion.Body>
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                  Fusce aliquet neque et accumsan fermentum. Aliquam lobortis
                  neque in nulla tempus, molestie fermentum purus euismod.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>SARS-CoV-2</Accordion.Header>
                <Accordion.Body>
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                  Fusce aliquet neque et accumsan fermentum. Aliquam lobortis
                  neque in nulla tempus, molestie fermentum purus euismod.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>COVID-19 Myths Vs Science</Accordion.Header>
                <Accordion.Body>
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                  Fusce aliquet neque et accumsan fermentum. Aliquam lobortis
                  neque in nulla tempus, molestie fermentum purus euismod.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Reopening Schools</Accordion.Header>
                <Accordion.Body>
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                  Fusce aliquet neque et accumsan fermentum. Aliquam lobortis
                  neque in nulla tempus, molestie fermentum purus euismod.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Covid19;
