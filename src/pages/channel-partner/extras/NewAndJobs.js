import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PageTitle from "../../../components/PageTitle";

function NewsAndJobs() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "News And Jobs",
            path: "/farmer/news-jobs",
            active: true,
          },
        ]}
        title={"News And Jobs"}
      />
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://dummyimage.com/250/ffffff/000000"
              />
              <Card.Body>
                <Card.Title>Cabinet approves Rs 11,040 cr.</Card.Title>
                <Card.Text>
                  Cabinet approves Rs 11,040 cr National Mission on the edible
                  oils-oil palm with focus on North Eastern region
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                padding="1"
                src="https://dummyimage.com/250/ffffff/000000"
              />
              <Card.Body>
                <Card.Title>Cabinet approves Rs 11,040 cr.</Card.Title>
                <Card.Text>
                  Cabinet approves Rs 11,040 cr National Mission on the edible
                  oils-oil palm with focus on North Eastern region
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://dummyimage.com/250/ffffff/000000"
              />
              <Card.Body>
                <Card.Title>Cabinet approves Rs 11,040 cr.</Card.Title>
                <Card.Text>
                  Cabinet approves Rs 11,040 cr National Mission on the edible
                  oils-oil palm with focus on North Eastern region
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://dummyimage.com/250/ffffff/000000"
              />
              <Card.Body>
                <Card.Title>Cabinet approves Rs 11,040 cr.</Card.Title>
                <Card.Text>
                  Cabinet approves Rs 11,040 cr National Mission on the edible
                  oils-oil palm with focus on North Eastern region
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NewsAndJobs;
