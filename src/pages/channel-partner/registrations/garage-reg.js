import React, {useState} from "react";
import { useForm } from "react-hook-form";

import PageTitle from "../../../components/PageTitle";
import { Row, Col, Card, Form, Button,Table } from "react-bootstrap";
import { FormInput } from "../../../components/form";
import MintonDatepicker from '../../../components/Datepicker';


import Select from "react-select";

const Registration = () => {
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
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/channel" },
          {
            label: "Garage Registration",
            path: "/channel/channel-partner-reg",
            active: true,
          },
        ]}
        title={"Garage Registration"}
      />
      <Form onSubmit={(e) => e.preventDefault()}>
        <Row>
          <Col md={6} sm={12}>
            <Card>
              <Card.Body>
                <h4 className="header-title mb-3 text-primary">Personal Details</h4>
                  <Row>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>CP ID</Form.Label>
                      <Form.Control type="name" placeholder="Enter CP Id" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Upload Garage Logo</Form.Label>
                      <FormInput
                        type="file"
                        name="file"
                        register={register}
                        key="file"
                        errors={errors}
                        control={control}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Garage Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Garage name" />
                    </Form.Group>
                    
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter Email Address" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Contact Person Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Contact Number</Form.Label>
                      <Form.Control type="number" placeholder="Contact Number" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Date of Establishment</Form.Label>
                      <MintonDatepicker
                                  hideAddon={true}
                                  value={selectedDate1}
                                  onChange={(date) => {
                                      setSelectedDate1(date);
                                  }}
                              />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Upload Garage Images</Form.Label>
                      <FormInput
                        type="file"
                        name="file"
                        register={register}
                        key="file"
                        errors={errors}
                        control={control}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label> Address</Form.Label>
                      <FormInput
                        type="textarea"
                        name="textarea"
                        rows={5}
                        register={register}
                        key="textarea"
                        errors={errors}
                        control={control}
                        placeholder="Enter Address Line 1"

                      />
                    </Form.Group>
                    
                  </Row>
              </Card.Body>
            </Card>
            <Card className="mt-2">
              <Card.Body>
              <h4 className="header-title mb-3 text-primary">Contact Details</h4>

                <Row>
                <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Landmark</Form.Label>
                      <FormInput
                        type="textarea"
                        name="textarea"
                        rows={5}
                        register={register}
                        key="textarea"
                        errors={errors}
                        control={control}
                        placeholder="Enter Address Line 2"
                      />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-2" md={12}>
                      <Form.Label>State</Form.Label>
                      <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-2" md={12}>
                      <Form.Label>City</Form.Label>
                      <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Pincode</Form.Label>
                      <Form.Control type="text" placeholder="Enter Pincode" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label> Mobile Number</Form.Label>
                      <Form.Control type="text" placeholder="Enter mobile number" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label> Another Number</Form.Label>
                      <Form.Control type="text" placeholder="Enter number" />
                    </Form.Group>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Body>
                    <h4 className="header-title mb-3 text-primary">Working Hours</h4>
                    <Form.Group as={Col} md={12} className="mb-2">
                        <Form.Check type="checkbox" id="Monday" label="Monday" defaultChecked={true}/>
                        <div className="d-flex">
                          <Form.Select defaultValue="10:00 AM">
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>12:00 PM</option>
                            <option>01:00 PM</option>
                          </Form.Select>
                          <Form.Select defaultValue="10:00 PM" className='ms-1'>
                            <option>10:00 PM</option>
                            <option>11:00 PM</option>
                            <option>12:00 AM</option>
                            <option>01:00 AM</option>
                          </Form.Select>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                        <Form.Check type="checkbox" id="Tuesday" label="Tuesday" defaultChecked={true}/>
                        <div className="d-flex">
                          <Form.Select defaultValue="10:00 AM">
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>12:00 PM</option>
                            <option>01:00 PM</option>
                          </Form.Select>
                          <Form.Select defaultValue="10:00 PM" className='ms-1'>
                            <option>10:00 PM</option>
                            <option>11:00 PM</option>
                            <option>12:00 AM</option>
                            <option>01:00 AM</option>
                          </Form.Select>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                        <Form.Check type="checkbox" id="Wednesday" label="Wednesday" defaultChecked={true}/>
                        <div className="d-flex">
                          <Form.Select defaultValue="10:00 AM">
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>12:00 PM</option>
                            <option>01:00 PM</option>
                          </Form.Select>
                          <Form.Select defaultValue="10:00 PM" className='ms-1'>
                            <option>10:00 PM</option>
                            <option>11:00 PM</option>
                            <option>12:00 AM</option>
                            <option>01:00 AM</option>
                          </Form.Select>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                        <Form.Check type="checkbox" id="Thursday" label="Thursday" defaultChecked={true}/>
                        <div className="d-flex">
                          <Form.Select defaultValue="10:00 AM">
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>12:00 PM</option>
                            <option>01:00 PM</option>
                          </Form.Select>
                          <Form.Select defaultValue="10:00 PM" className='ms-1'>
                            <option>10:00 PM</option>
                            <option>11:00 PM</option>
                            <option>12:00 AM</option>
                            <option>01:00 AM</option>
                          </Form.Select>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                        <Form.Check type="checkbox" id="Friday" label="Friday" defaultChecked={true}/>
                        <div className="d-flex">
                          <Form.Select defaultValue="10:00 AM">
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>12:00 PM</option>
                            <option>01:00 PM</option>
                          </Form.Select>
                          <Form.Select defaultValue="10:00 PM" className='ms-1'>
                            <option>10:00 PM</option>
                            <option>11:00 PM</option>
                            <option>12:00 AM</option>
                            <option>01:00 AM</option>
                          </Form.Select>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                        <Form.Check type="checkbox" id="Saturday" label="Saturday" defaultChecked={true}/>
                        <div className="d-flex">
                          <Form.Select defaultValue="10:00 AM">
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>12:00 PM</option>
                            <option>01:00 PM</option>
                          </Form.Select>
                          <Form.Select defaultValue="10:00 PM" className='ms-1'>
                            <option>10:00 PM</option>
                            <option>11:00 PM</option>
                            <option>12:00 AM</option>
                            <option>01:00 AM</option>
                          </Form.Select>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                        <Form.Check type="checkbox" id="Sunday" label="Sunday" />
                        <div className="d-flex">
                          <Form.Select defaultValue="10:00 AM">
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>12:00 PM</option>
                            <option>01:00 PM</option>
                          </Form.Select>
                          <Form.Select defaultValue="10:00 PM" className='ms-1'>
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
                      <Form.Control type="text" placeholder="Enter Account Holder Name" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Bank Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Bank Name" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Account Number</Form.Label>
                      <Form.Control type="number" placeholder="Enter Account Number" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="text" placeholder="Enter IFSC Code" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label> Branch Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Branch Name" />
                    </Form.Group>
                  </Row>
              </Card.Body>
            </Card>

            <Card className="mt-3">
              <Card.Body>
                <h4 className="header-title mb-3 text-primary">Documents</h4>
                  <Row>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Upload Pan Card</Form.Label>
                      <FormInput
                        type="file"
                        name="file"
                        register={register}
                        key="file"
                        errors={errors}
                        control={control}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Upload Shop License</Form.Label>
                      <FormInput
                        type="file"
                        name="file"
                        register={register}
                        key="file"
                        errors={errors}
                        control={control}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Upload Owner's Aadhar Card</Form.Label>
                      <FormInput
                        type="file"
                        name="file"
                        register={register}
                        key="file"
                        errors={errors}
                        control={control}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Upload Driving License</Form.Label>
                      <FormInput
                        type="file"
                        name="file"
                        register={register}
                        key="file"
                        errors={errors}
                        control={control}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Upload Passport</Form.Label>
                      <FormInput
                        type="file"
                        name="file"
                        register={register}
                        key="file"
                        errors={errors}
                        control={control}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Upload Voter ID</Form.Label>
                      <FormInput
                        type="file"
                        name="file"
                        register={register}
                        key="file"
                        errors={errors}
                        control={control}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Upload Electricity Bill</Form.Label>
                      <FormInput
                        type="file"
                        name="file"
                        register={register}
                        key="file"
                        errors={errors}
                        control={control}
                      />
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
                        <Form.Check type="checkbox" id="default-checkbox1" label="Cash" defaultChecked={true}/>
                        <Form.Check type="checkbox" id="default-checkbox2" label="Credit Card"  />
                        <Form.Check type="checkbox" id="default-checkbox3" label="Cheque"  />
                        <Form.Check type="checkbox" id="default-checkbox4" label="Debit Card"  />
                        <Form.Check type="checkbox" id="default-checkbox5" label="Online Banking"  />
                        <Form.Check type="checkbox" id="default-checkbox6" label="UPI Payment"  />
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
                        <Form.Check type="checkbox" id="other-service1" label="Spare Parts: INR 2500" defaultChecked={true}/>
                        <Form.Check type="checkbox" id="other-service2" label="Tyre: INR 2500"  />
                        <Form.Check type="checkbox" id="other-service3" label="Battery: INR 2500"  />
                        <Form.Check type="checkbox" id="other-service4" label="Decor: INR 2500"  />
                        <Form.Check type="checkbox" id="other-service5" label="Oil Dealer: INR 2500"  />
                        <Form.Check type="checkbox" id="other-service6" label="Washing: INR 2500"  />
                        <Form.Check type="checkbox" id="other-service7" label="Towing: INR 2500"  />
                        <Form.Check type="checkbox" id="other-service8" label="Denting: INR 2500"  />
                        <Form.Check type="checkbox" id="other-service9" label="Puncture: INR 2500"  />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Informative Services</Form.Label>
                        <Form.Check type="checkbox" id="Informative-service1" label="CNG/LPG: Free" defaultChecked={true}/>
                        <Form.Check type="checkbox" id="Informative-service2" label="Petrol Pumps: Free"  />
                        <Form.Check type="checkbox" id="Informative-service3" label="Parking: Free"  />
                        <Form.Check type="checkbox" id="Informative-service4" label="Key Marker: Free"  />
                    </Form.Group>
                  </Row>
                  <Button
                    variant="primary"
                    className="btn-bordered rounded-pill waves-effect waves-light btn w-100"
                    type="submit"
                    style={{ border: "none", width: "200px", marginTop: "20px" }}
                  >
                    Submit
                  </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Registration;
