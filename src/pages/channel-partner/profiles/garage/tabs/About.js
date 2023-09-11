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
                      <Form.Control type="text" value='Sai Garage' readOnly/>
                    </Form.Group>
                    
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" value='saigarage@gmail.com' readOnly/>
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
            <Card className="mt-3">
              <Card.Body>
                    <h4 className="header-title mb-3 text-primary">Working Hours</h4>
                    <Form.Group as={Col} md={12} className="mb-2">
                        <Form.Check type="checkbox" id="Monday" label="Monday" defaultChecked={true} disabled/>
                        <div className="d-flex">
                          <Form.Select defaultValue="10:00 AM" disabled>
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>12:00 PM</option>
                            <option>01:00 PM</option>
                          </Form.Select>
                          <Form.Select defaultValue="10:00 PM" className='ms-1' disabled>
                            <option>10:00 PM</option>
                            <option>11:00 PM</option>
                            <option>12:00 AM</option>
                            <option>01:00 AM</option>
                          </Form.Select>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                        <Form.Check type="checkbox" id="Tuesday" label="Tuesday" defaultChecked={true} disabled/>
                        <div className="d-flex">
                          <Form.Select defaultValue="10:00 AM" disabled>
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>12:00 PM</option>
                            <option>01:00 PM</option>
                          </Form.Select>
                          <Form.Select defaultValue="10:00 PM" className='ms-1' disabled>
                            <option>10:00 PM</option>
                            <option>11:00 PM</option>
                            <option>12:00 AM</option>
                            <option>01:00 AM</option>
                          </Form.Select>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                        <Form.Check type="checkbox" id="Wednesday" label="Wednesday" defaultChecked={true} disabled/>
                        <div className="d-flex">
                          <Form.Select defaultValue="10:00 AM" disabled>
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>12:00 PM</option>
                            <option>01:00 PM</option>
                          </Form.Select>
                          <Form.Select defaultValue="10:00 PM" className='ms-1' disabled>
                            <option>10:00 PM</option>
                            <option>11:00 PM</option>
                            <option>12:00 AM</option>
                            <option>01:00 AM</option>
                          </Form.Select>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                        <Form.Check type="checkbox" id="Thursday" label="Thursday" defaultChecked={true} disabled/>
                        <div className="d-flex">
                          <Form.Select defaultValue="10:00 AM" disabled>
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>12:00 PM</option>
                            <option>01:00 PM</option>
                          </Form.Select>
                          <Form.Select defaultValue="10:00 PM" className='ms-1' disabled>
                            <option>10:00 PM</option>
                            <option>11:00 PM</option>
                            <option>12:00 AM</option>
                            <option>01:00 AM</option>
                          </Form.Select>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                        <Form.Check type="checkbox" id="Friday" label="Friday" defaultChecked={true} disabled/>
                        <div className="d-flex">
                          <Form.Select defaultValue="10:00 AM" disabled>
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>12:00 PM</option>
                            <option>01:00 PM</option>
                          </Form.Select>
                          <Form.Select defaultValue="10:00 PM" className='ms-1' disabled>
                            <option>10:00 PM</option>
                            <option>11:00 PM</option>
                            <option>12:00 AM</option>
                            <option>01:00 AM</option>
                          </Form.Select>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                        <Form.Check type="checkbox" id="Saturday" label="Saturday" defaultChecked={true} disabled/>
                        <div className="d-flex">
                          <Form.Select defaultValue="10:00 AM" disabled>
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>12:00 PM</option>
                            <option>01:00 PM</option>
                          </Form.Select>
                          <Form.Select defaultValue="10:00 PM" className='ms-1' disabled>
                            <option>10:00 PM</option>
                            <option>11:00 PM</option>
                            <option>12:00 AM</option>
                            <option>01:00 AM</option>
                          </Form.Select>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                        <Form.Check type="checkbox" id="Sunday" label="Sunday" disabled/>
                        <div className="d-flex">
                          <Form.Select defaultValue="10:00 AM" disabled>
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>12:00 PM</option>
                            <option>01:00 PM</option>
                          </Form.Select>
                          <Form.Select defaultValue="10:00 PM" className='ms-1' disabled>
                            <option>10:00 PM</option>
                            <option>11:00 PM</option>
                            <option>12:00 AM</option>
                            <option>01:00 AM</option>
                          </Form.Select>
                        </div>
                    </Form.Group>
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
            <Card className="mt-3">
              <Card.Body>
                <h4 className="header-title mb-3 text-primary">Payment Mode</h4>
                  <Row>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Select Payment Modes</Form.Label>
                        <Form.Check type="checkbox" id="default-checkbox1" label="Cash" defaultChecked={true} disabled/>
                        <Form.Check type="checkbox" id="default-checkbox2" label="Credit Card"  disabled/>
                        <Form.Check type="checkbox" id="default-checkbox3" label="Cheque" disabled />
                        <Form.Check type="checkbox" id="default-checkbox4" label="Debit Card"  disabled/>
                        <Form.Check type="checkbox" id="default-checkbox5" label="Online Banking" disabled />
                        <Form.Check type="checkbox" id="default-checkbox6" label="UPI Payment"  disabled/>
                    </Form.Group>
                  </Row>
                
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Body>
                <h4 className="header-title mb-3 text-primary">Select Service</h4>
                <div className="table-responsive my-3">
                <Table className='p-0 m-0'>
                  <thead>
                    <tr>
                      <th>
                        
                      </th>
                      <th>
                        TWO WHEELER	
                      </th>
                      <th>
                        FOUR WHEELER	
                      </th>
                      <th>
                        DOOR STEP
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                      GOLD
                      </td>
                      <td>
                        2500
                      </td>
                      <td>
                        2500
                      </td>
                      <td>
                        2500
                      </td>
                    </tr>
                    <tr>
                      <td>
                      SILVER
                      </td>
                      <td>
                        5000
                      </td>
                      <td>
                        5000
                      </td>
                      <td>
                        5000
                      </td>
                    </tr>
                    <tr>
                      <td>
                      PLATINUM
                      </td>
                      <td>
                        10000
                      </td>
                      <td>
                        10000
                      </td>
                      <td>
                        10000
                      </td>
                    </tr>
                  </tbody>
                </Table>
                </div>
                  <Row>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Other Services</Form.Label>
                        <Form.Check type="checkbox" id="other-service1" label="Spare Parts: INR 2500" defaultChecked={true} disabled/>
                        <Form.Check type="checkbox" id="other-service2" label="Tyre: INR 2500" disabled />
                        <Form.Check type="checkbox" id="other-service3" label="Battery: INR 2500" disabled />
                        <Form.Check type="checkbox" id="other-service4" label="Decor: INR 2500" disabled />
                        <Form.Check type="checkbox" id="other-service5" label="Oil Dealer: INR 2500" disabled />
                        <Form.Check type="checkbox" id="other-service6" label="Washing: INR 2500" disabled />
                        <Form.Check type="checkbox" id="other-service7" label="Towing: INR 2500" disabled />
                        <Form.Check type="checkbox" id="other-service8" label="Denting: INR 2500" disabled />
                        <Form.Check type="checkbox" id="other-service9" label="Puncture: INR 2500" disabled />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Informative Services</Form.Label>
                        <Form.Check type="checkbox" id="Informative-service1" label="CNG/LPG: Free" defaultChecked={true} disabled/>
                        <Form.Check type="checkbox" id="Informative-service2" label="Petrol Pumps: Free" disabled />
                        <Form.Check type="checkbox" id="Informative-service3" label="Parking: Free" disabled />
                        <Form.Check type="checkbox" id="Informative-service4" label="Key Marker: Free" disabled />
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
