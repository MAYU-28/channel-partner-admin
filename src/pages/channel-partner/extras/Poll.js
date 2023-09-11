import React from "react";
import Container from "react-bootstrap/Container";
import PageTitle from "../../../components/PageTitle";
import { Card, Form } from "react-bootstrap";

function Poll() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Poll",
            path: "/farmer/poll",
            active: true,
          },
        ]}
        title={"Poll"}
      />
      <Container>
        <Card>
          <Card.Body>
            <Card.Title className="text-info">Poll</Card.Title>
            <h4 className="mt-4 mb-3 text-dark">
              Q- Where is farmers dashboard?
            </h4>
            <Form.Check
              type="radio"
              id="option1"
              name="customRadio1"
              label="Option 1"
              defaultChecked={true}
            />
            <Form.Check
              type="radio"
              id="option2"
              name="customRadio1"
              label="Option 2"
            />
            <Form.Check
              type="radio"
              id="option3"
              name="customRadio1"
              label="Option 3"
            />
            <Form.Check
              type="radio"
              id="option4"
              name="customRadio1"
              label="Option 4"
            />

            <h4 className="mt-4 mb-3 text-dark">Q- Where is sales list?</h4>
            <Form.Check
              type="radio"
              id="option11"
              name="customRadio2"
              label="Option 1"
              defaultChecked={true}
            />
            <Form.Check
              type="radio"
              id="option22"
              name="customRadio2"
              label="Option 2"
            />
            <Form.Check
              type="radio"
              id="option33"
              name="customRadio2"
              label="Option 3"
            />
            <Form.Check
              type="radio"
              id="option44"
              name="customRadio2"
              label="Option 4"
            />

            <h4 className="mt-4 mb-3 text-dark">Q- Where is Customers?</h4>
            <Form.Check
              type="radio"
              id="option111"
              name="customRadio3"
              label="Option 1"
              defaultChecked={true}
            />
            <Form.Check
              type="radio"
              id="option222"
              name="customRadio3"
              label="Option 2"
            />
            <Form.Check
              type="radio"
              id="option333"
              name="customRadio3"
              label="Option 3"
            />
            <Form.Check
              type="radio"
              id="option444"
              name="customRadio3"
              label="Option 4"
            />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Poll;
