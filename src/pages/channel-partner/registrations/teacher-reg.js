import React, {useState} from "react";
import { useForm } from "react-hook-form";

import PageTitle from "../../../components/PageTitle";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
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
            label: "Teacher Registration",
            path: "/channel/teacher-reg",
            active: true,
          },
        ]}
        title={"Teacher Registration"}
      />
      <Form onSubmit={(e) => e.preventDefault()}>
        <Row>
          <Col md={12} sm={12}>
            <Card>
              <Card.Body>
                <h4 className="header-title mb-3 text-primary">Personal Details</h4>
                  <Row>
                    <Form.Group as={Col} md={6} className="mb-2">
                      <Form.Label>CP ID</Form.Label>
                      <Form.Control type="name" placeholder="Enter CP Id" />
                    </Form.Group>
                    <Form.Group as={Col} md={6} className="mb-2">
                      <Form.Label>Upload Profile Picture</Form.Label>
                      <FormInput
                        type="file"
                        name="file"
                        register={register}
                        key="file"
                        errors={errors}
                        control={control}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md={6} className="mb-2">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter First name" />
                    </Form.Group>
                    <Form.Group as={Col} md={6} className="mb-2">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Last name" />
                    </Form.Group>
                    <Form.Group as={Col} md={6} className="mb-2">
                      <Form.Label>DOB</Form.Label>
                      <MintonDatepicker
                                  hideAddon={true}
                                  value={selectedDate1}
                                  onChange={(date) => {
                                      setSelectedDate1(date);
                                  }}
                              />
                    </Form.Group>
                    <Form.Group as={Col} md={6} className="mb-2">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter Email Address" />
                    </Form.Group>
                    <Form.Group as={Col} md={6} className="mb-2">
                      <Form.Label> Mobile Number</Form.Label>
                      <Form.Control type="text" placeholder="Enter mobile number" />
                    </Form.Group>
                    <Form.Group as={Col} md={6} className="mb-2">
                      <Form.Label> Alternate Number</Form.Label>
                      <Form.Control type="text" placeholder="Enter alternate number" />
                    </Form.Group>
                    <Form.Group as={Col} md={6} className="mb-2">
                      <Form.Label> Select Gender</Form.Label>
                      <Form.Check type="radio" id="default-radio1" name="customRadio" label="Male" />
                      <Form.Check
                          type="radio"
                          id="default-radio2"
                          name="customRadio"
                          label="Female"
                          defaultChecked={true}
                      />
                    </Form.Group>
                    
                    <Form.Group as={Col} className="mb-2" md={6}>
                      <Form.Label>State</Form.Label>
                      <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-2" md={6}>
                      <Form.Label>City</Form.Label>
                      <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md={6} className="mb-2">
                      <Form.Label>Pincode</Form.Label>
                      <Form.Control type="text" placeholder="Enter Pincode" />
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
                  <div className="text-end">
                  <Button
                    variant="primary"
                    className="btn-bordered rounded-pill waves-effect waves-light btn m-auto mt-4"
                    type="submit"
                    style={{ border: "none", width: "200px", marginTop: "20px" }}
                  >
                    Submit
                  </Button>
                  </div>
                  
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Registration;
