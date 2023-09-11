import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Card, Form, Button,Table } from "react-bootstrap";
import { FormInput } from "../../../../../components/form";
const About = () => {
  const [selectedDate1, setSelectedDate1] = useState(new Date());

  const methods = useForm({
    defaultValues: {
      textInput: "Some Text Value...",
      password: "12345",
      statictext: "email@example.com",
      color: "#f60e5b",
    },
  });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;
  return (
    <>
      <Row>
          <Col md={12} sm={12}>
            <Card>
              <Card.Body>
                <h4 className="header-title mb-3 text-primary">Personal Details</h4>
                  <Row>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>CP ID</Form.Label>
                      <Form.Control type="name" value='1536894' readOnly/>
                    </Form.Group>

                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>First Name:</Form.Label>
                      <Form.Control type="text" value='Krishna' readOnly/>
                    </Form.Group>

                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Last Name:</Form.Label>
                      <Form.Control type="text" value='Bagul' readOnly/>
                    </Form.Group>

                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Date:</Form.Label>
                      <Form.Control type="text" value='27 Jan 2021' readOnly/>
                    </Form.Group>

                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Gender:</Form.Label>
                      <Form.Control type="text" value='Male' readOnly/>
                    </Form.Group>

                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Address:</Form.Label>
                      <Form.Control type="text" value='Pune' readOnly/>
                    </Form.Group>

                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Landmark:</Form.Label>
                      <Form.Control type="text" value='Kondwa' readOnly/>
                    </Form.Group>

                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>City:</Form.Label>
                      <Form.Control type="text" value='Pune' readOnly/>
                    </Form.Group>

                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>State:</Form.Label>
                      <Form.Control type="text" value='Maharashtra' readOnly/>
                    </Form.Group>

                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Pincode:</Form.Label>
                      <Form.Control type="text" value='412527' readOnly/>
                    </Form.Group>

                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control type="email" value='allinone@gmail.com' readOnly/>
                    </Form.Group>

                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Landline Number:</Form.Label>
                      <Form.Control type="text" value='022356586' readOnly/>
                    </Form.Group>

                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Mobile Number:</Form.Label>
                      <Form.Control type="number" value='8975300224' readOnly/>
                    </Form.Group>
                    
                  </Row>
              </Card.Body>
            </Card>
          </Col>
         
        </Row>
    </>
  );
};

export default About;
