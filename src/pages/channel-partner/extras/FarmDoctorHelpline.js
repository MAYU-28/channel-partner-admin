import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PageTitle from "../../../components/PageTitle";

function FarmDoctorHelpline() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Farm Doctor Helpline",
            path: "/farmer/news-jobs",
            active: true,
          },
        ]}
        title={"Farm Doctor Helpline"}
      />
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Img
                width="100"
                height="250"
                variant="top"
                src="http://project.testproject.in/public/assets/img/photos/avatar-1.png"
              />
              <Card.Body>
                <Card.Title>Dr.Alok Lathi</Card.Title>
                <Card.Text>
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </Card.Text>
                <Button className="btn btn-primary bg-gradient-info w-100 rounded-pill">
                  Contact Me
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                width="100"
                height="250"
                padding="1"
                src="http://project.testproject.in/public/assets/img/photos/avatar-2.png"
              />
              <Card.Body>
                <Card.Title>Dr.Ralph L. Alva</Card.Title>
                <Card.Text>
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </Card.Text>
                <Button className="btn btn-primary bg-gradient-info w-100 rounded-pill">
                  Contact Me
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                width="100"
                height="250"
                src="http://project.testproject.in/public/assets/img/photos/avatar-1.png"
              />
              <Card.Body>
                <Card.Title>Dr.Alok Lathi</Card.Title>
                <Card.Text>
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </Card.Text>
                <Button className="btn btn-primary bg-gradient-info w-100 rounded-pill">
                  Contact Me
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                width="100"
                height="250"
                padding="1"
                src="http://project.testproject.in/public/assets/img/photos/avatar-4.png"
              />
              <Card.Body>
                <Card.Title>Dr.Ralph L. Alva</Card.Title>
                <Card.Text>
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </Card.Text>
                <Button className="btn btn-primary bg-gradient-info w-100 rounded-pill">
                  Contact Me
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FarmDoctorHelpline;
