import React from "react";
import Container from "react-bootstrap/Container";
import PageTitle from "../../../components/PageTitle";
import { Row, Col, Card } from "react-bootstrap";

function Campaign() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Campaign",
            path: "/farmer/campaign",
            active: true,
          },
        ]}
        title={"Campaign"}
      />
      <Container>
        <Card className="border shadow">
          <Row>
            <Col xs={12} md={3} className="p-3">
              <Card.Img
                width="100"
                height="250"
                variant="top"
                src="http://project.testproject.in/public/assets/img/photos/avatar-1.png"
              />
            </Col>
            <Col xs={12} md={8} className="p-3">
              <Card.Title>Dr.Alok Lathi</Card.Title>
              <h3 className="text-info">
                Karandeep Singh Kapany joins Duolingo as country marketing
                manager
              </h3>
              <Card.Text>
                It is a long established fact that a reader will be distracted
                by the readable content. It is a long established fact that a
                reader will be distracted by the readable content It is a long
                established fact that a reader will be distracted by the
                readable content It is a long established fact that a reader
                will be distracted by the readable content It is a long
                established fact that a reader will be distracted by the
                readable contentIt is a long established fact that a reader will
                be distracted by the readable contentIt is a long established
                fact that a reader will be distracted by the readable contentIt
                is a long established fact that a reader will be distracted by
                the readable contentIt is a long established fact that a reader
                will be distracted by the readable content
              </Card.Text>
            </Col>
          </Row>
        </Card>
        <Card className="border shadow mt-2">
          <Row>
            <Col xs={12} md={3} className="p-3">
              <Card.Img
                width="100"
                height="250"
                variant="top"
                src="http://project.testproject.in/public/assets/img/photos/avatar-1.png"
              />
            </Col>
            <Col xs={12} md={8} className="p-3">
              <Card.Title>Dr.Alok Lathi</Card.Title>
              <h3 className="text-info">
                Karandeep Singh Kapany joins Duolingo as country marketing
                manager
              </h3>
              <Card.Text>
                It is a long established fact that a reader will be distracted
                by the readable content. It is a long established fact that a
                reader will be distracted by the readable content It is a long
                established fact that a reader will be distracted by the
                readable content It is a long established fact that a reader
                will be distracted by the readable content It is a long
                established fact that a reader will be distracted by the
                readable contentIt is a long established fact that a reader will
                be distracted by the readable contentIt is a long established
                fact that a reader will be distracted by the readable contentIt
                is a long established fact that a reader will be distracted by
                the readable contentIt is a long established fact that a reader
                will be distracted by the readable content
              </Card.Text>
            </Col>
          </Row>
        </Card>
        <Card className="border shadow mt-2">
          <Row>
            <Col xs={12} md={3} className="p-3">
              <Card.Img
                width="100"
                height="250"
                variant="top"
                src="http://project.testproject.in/public/assets/img/photos/avatar-1.png"
              />
            </Col>
            <Col xs={12} md={8} className="p-3">
              <Card.Title>Dr.Alok Lathi</Card.Title>
              <h3 className="text-info">
                Karandeep Singh Kapany joins Duolingo as country marketing
                manager
              </h3>
              <Card.Text>
                It is a long established fact that a reader will be distracted
                by the readable content. It is a long established fact that a
                reader will be distracted by the readable content It is a long
                established fact that a reader will be distracted by the
                readable content It is a long established fact that a reader
                will be distracted by the readable content It is a long
                established fact that a reader will be distracted by the
                readable contentIt is a long established fact that a reader will
                be distracted by the readable contentIt is a long established
                fact that a reader will be distracted by the readable contentIt
                is a long established fact that a reader will be distracted by
                the readable contentIt is a long established fact that a reader
                will be distracted by the readable content
              </Card.Text>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}

export default Campaign;
