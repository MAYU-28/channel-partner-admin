import React, {useState} from "react";
import { Row, Col, Card, Form, Button} from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";


const ChangePassword = () => {
 
  return (
    <>
    <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/channel" },
          {
            label: "Change Password",
            path: "/channel/change-password",
            active: true,
          },
        ]}
        title={"Change Password"}
      />
            <Row>
                <Col></Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="text-center">Change Password</h4>
                            <p className="text-center">You can change your password with your previous email address.</p>
                            <Form className="form mt-4">
                                <Form.Group as={Col} md={12} className="mb-2">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email Address" />
                                </Form.Group>
                                <Form.Group as={Col} md={12} className="mb-2">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter Password Address" />
                                </Form.Group>
                                <Form.Group as={Col} md={12} className="mb-2">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter Password Address" />
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    className="btn-bordered rounded-pill waves-effect waves-light btn m-auto mt-4 w-100"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
              
            </Row>
   
    </>
  );
};

export default ChangePassword;
