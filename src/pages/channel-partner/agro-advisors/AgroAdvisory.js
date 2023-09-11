import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PageTitle from "../../../components/PageTitle";
import { Link } from "react-router-dom";

const AgroAdvisory = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Agro Advisory",
            path: "/farmer/crop-insurance",
            active: true,
          },
        ]}
        title={"Agro Advisory"}
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
                style={{
                  borderRadius: "50%",
                  height: "150px",
                  width: "150px",
                  margin: "auto",
                  marginTop: "30px",
                }}
              />
              <Card.Body>
                <Card.Title className="text-info">Prateek Gupta</Card.Title>
                <Card.Text>
                  <b>Advisor Experience 3 Years 2 Months</b>
                  <br />
                  Virgil Abloh’s Off-White is a streetwear-inspired collection
                  that continues to break away from the conventions of
                  mainstream fashion.
                </Card.Text>
                <Link to="/farmer/advisor-detail">
                  <Button className="btn rounded-pill bg-gradient-info btn w-100">
                    Contact Me
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                width="100"
                height="250"
                variant="top"
                style={{
                  borderRadius: "50%",
                  height: "150px",
                  width: "150px",
                  margin: "auto",
                  marginTop: "30px",
                }}
                src="http://project.testproject.in/public/assets/img/photos/avatar-2.png"
              />
              <Card.Body>
                <Card.Title className="text-info">Shreeya Jain</Card.Title>
                <Card.Text>
                  <b>Advisor Experience 2 Years 2 Months</b>
                  <br />
                  Virgil Abloh’s Off-White is a streetwear-inspired collection
                  that continues to break away from the conventions of
                  mainstream fashion.
                </Card.Text>
                <Link to="/farmer/advisor-detail">
                  <Button className="btn rounded-pill bg-gradient-info btn w-100">
                    Contact Me
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                width="100"
                height="250"
                variant="top"
                src="http://project.testproject.in/public/assets/img/photos/avatar-3.png"
                style={{
                  borderRadius: "50%",
                  height: "150px",
                  width: "150px",
                  margin: "auto",
                  marginTop: "30px",
                }}
              />
              <Card.Body>
                <Card.Title className="text-info">Minali Patil</Card.Title>
                <Card.Text>
                  <b>Advisor Experience 5 Years 2 Months</b>
                  <br />
                  Virgil Abloh’s Off-White is a streetwear-inspired collection
                  that continues to break away from the conventions of
                  mainstream fashion.
                </Card.Text>
                <Link to="/farmer/advisor-detail">
                  <Button className="btn rounded-pill bg-gradient-info btn w-100">
                    Contact Me
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                width="100"
                height="250"
                variant="top"
                src="http://project.testproject.in/public/assets/img/photos/avatar-4.png"
                style={{
                  borderRadius: "50%",
                  height: "150px",
                  width: "150px",
                  margin: "auto",
                  marginTop: "30px",
                }}
              />
              <Card.Body>
                <Card.Title className="text-info">Pritam Singh</Card.Title>
                <Card.Text>
                  <b>Advisor Experience 4 Years 2 Months</b>
                  <br />
                  Virgil Abloh’s Off-White is a streetwear-inspired collection
                  that continues to break away from the conventions of
                  mainstream fashion.
                </Card.Text>
                <Link to="/farmer/advisor-detail">
                  <Button className="btn rounded-pill bg-gradient-info btn w-100">
                    Contact Me
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AgroAdvisory;
