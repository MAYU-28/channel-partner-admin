import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Card, Form, Button,Table } from "react-bootstrap";
import { FormInput } from "../../../../components/form";
import MintonDatepicker from '../../../../components/Datepicker';
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
          <Col md={6} sm={12}>
            <Card>
              <Card.Body>
                <h4 className="header-title mb-3 text-primary">Personal Details</h4>
                  <Row>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>CP ID</Form.Label>
                      <Form.Control type="name" value='1536894' readOnly/>
                    </Form.Group>

                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Garage Name</Form.Label>
                      <Form.Control type="text" value='All In One' readOnly/>
                    </Form.Group>
                    
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" value='allinone@gmail.com' readOnly/>
                    </Form.Group>

                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Contact Person Name</Form.Label>
                      <Form.Control type="text" value='Suraj Pardesi' readOnly/>
                    </Form.Group>

                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Contact Number</Form.Label>
                      <Form.Control type="number" value='8975300224' readOnly/>
                    </Form.Group>

                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Date of Establishment</Form.Label>
                      <Form.Control type="text" value='09/04/2022' readOnly/>
                    </Form.Group>
                    
                  </Row>
              </Card.Body>
            </Card>
            <Card className="mt-2">
              <Card.Body>
                <h4 className="header-title mb-3 text-primary">Contact Details</h4>
                <Row>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label> Address</Form.Label>
                      <FormInput
                        type="textarea"
                        name="textarea"
                        rows={4}
                        key="textarea"
                        value=' Tilak Road, Lokmanya Bal Gangadhar Tilak Rd, Pune, Maharashtra 411002'
                        readOnly
                      />
                    </Form.Group>
                    
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Landmark</Form.Label>
                      <Form.Control type="text" value='Kondwa' readOnly/>
                    </Form.Group>

                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" value='Pune' readOnly/>
                    </Form.Group>

                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" value='Maharashtra' readOnly/>
                    </Form.Group>

                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Landline Number</Form.Label>
                      <Form.Control type="number" value='0223366558' readOnly/>
                    </Form.Group>
                </Row>
              </Card.Body>
            </Card>
           
          </Col>
          <Col  md={6} sm={12}>
            <Card>
              <Card.Body>
                <h4 className="header-title mb-3 text-primary">Bank Details</h4>
                  <Row>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Account Holder Name</Form.Label>
                      <Form.Control type="text" value="Suraj Pardesi" readOnly/>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Bank Name</Form.Label>
                      <Form.Control type="text" value='State Bank' readOnly/>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Account Number</Form.Label>
                      <Form.Control type="number" value='32536848621' readOnly/>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>IFSC Code</Form.Label>
                      <Form.Control type="number" value='SBIN256565' readOnly/>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label> Branch Name</Form.Label>
                      <Form.Control type="text" value='Pune' readOnly />
                    </Form.Group>
                  </Row>
              </Card.Body>
            </Card>

            <Card className="mt-3">
              <Card.Body>
                <h4 className="header-title mb-3 text-primary">Documents</h4>
                  <Row>
                    <Form.Group as={Col} md={12} className="mb-2 d-flex justify-content-between">
                      <Form.Label>Upload Pan Card</Form.Label>
                      <Button>View</Button>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2 d-flex justify-content-between">
                      <Form.Label>Upload Shop License</Form.Label>
                      <Button>View</Button>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2 d-flex justify-content-between">
                      <Form.Label>Upload Owner's Aadhar Card</Form.Label>
                      <Button>View</Button>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2 d-flex justify-content-between">
                      <Form.Label>Upload Driving License</Form.Label>
                      <Button >View</Button>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2 d-flex justify-content-between">
                      <Form.Label>Upload Passport</Form.Label>
                      <Button>View</Button>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2 d-flex justify-content-between">
                      <Form.Label>Upload Voter ID</Form.Label>
                      <Button>View</Button>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2 d-flex justify-content-between">
                      <Form.Label>Upload Electricity Bill</Form.Label>
                      <Button>View</Button>
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
