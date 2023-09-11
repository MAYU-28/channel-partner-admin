import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";
import { Card } from "react-bootstrap";

const CropDoctor = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "CropDoctor",
            path: "/farmer/crop-doctor",
            active: true,
          },
        ]}
        title={"CropDoctor"}
      />
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <img
                  src="http://project.testproject.in/public/assets/images/FarmImg/tomatoes-min.jpg"
                  className="w-100"
                  height="150"
                />
                <h4 className="text-info">Tomato</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link to="/farmer/crop-list-details">
                  <button className="btn btn-primary w-100 rounded-pill bg-gradient-info">
                    Read More
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <img
                  src="http://project.testproject.in/public/assets/images/FarmImg/eggplants2.jpg"
                  className="w-100"
                  height="150"
                />
                <h4 className="text-info">Eggplant</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link to="/farmer/crop-list-details">
                  <button className="btn btn-primary w-100 rounded-pill bg-gradient-info">
                    Read More
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <img
                  src="http://project.testproject.in/public/assets/images/FarmImg/Cabbage.jpg"
                  className="w-100"
                  height="150"
                />
                <h4 className="text-info">Cabbage</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link to="/farmer/crop-list-details">
                  <button className="btn btn-primary w-100 rounded-pill bg-gradient-info">
                    Read More
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <img
                  src="http://project.testproject.in/public/assets/images/FarmImg/tomatoes-min.jpg"
                  className="w-100"
                  height="150"
                />
                <h4 className="text-info">Tomato</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link to="/farmer/crop-list-details">
                  <button className="btn btn-primary w-100 rounded-pill bg-gradient-info">
                    Read More
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CropDoctor;
