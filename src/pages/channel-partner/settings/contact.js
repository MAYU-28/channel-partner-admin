import React, {useState} from "react";
import { Row, Col, Card, Form, Button} from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";
import { FormInput } from "../../../components/form";


const Contactus = () => {
 
  return (
    <>
    <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/channel" },
          {
            label: "Contact Us",
            path: "/channel/contact-us",
            active: true,
          },
        ]}
        title={"Contact Us"}
      />
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h3>Contact Us</h3>
                            <Form className="form mt-4">
                                <Form.Group as={Col} md={12} className="mb-2">
                                    <Form.Label>Query Type</Form.Label>
                                    <Form.Select defaultValue="Query 1">
                                        <option>Query 1</option>
                                        <option>Query 2</option>
                                        <option>Query 3</option>
                                        <option>Query 4</option>
                                        <option>Query 5</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} md={12} className="mb-2">
                                    <Form.Label>Address</Form.Label>
                                    <FormInput
                                        type="textarea"
                                        name="textarea"
                                        rows={5}
                                        key="textarea"
                                        placeholder="Enter Address Line 1"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md={12} className="mb-2">
                                    <FormInput
                                        type="textarea"
                                        name="textarea"
                                        rows={5}
                                        key="textarea"
                                        placeholder="Enter Address Line 2"
                                    />
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    className="btn-bordered rounded-pill waves-effect waves-light btn m-auto mt-4 w-25"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Form className="form ">
                                <Form.Group as={Col} md={12} className="mb-2">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email Address" />
                                </Form.Group>
                                <Form.Group as={Col} md={12} className="mb-2">
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Contact Number" />
                                </Form.Group>
                                <Form.Group as={Col} md={12} className="mb-2">
                                    <Form.Label>Address</Form.Label>
                                    <FormInput
                                        type="textarea"
                                        name="textarea"
                                        rows={7}
                                        key="textarea"
                                        placeholder="Enter Address Line 1"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md={12} className="mb-2">
                                    <Form.Label>Website Url</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Website Url" />
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    className="btn-bordered rounded-pill waves-effect waves-light btn m-auto mt-4 w-25"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
              
            </Row>
   
    </>
  );
};

export default Contactus;
