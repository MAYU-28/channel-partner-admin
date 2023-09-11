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
            label: "Channel Partner Registration",
            path: "/channel/channel-partner-reg",
            active: true,
          },
        ]}
        title={"Channel Partner Registration"}
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
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter First name" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Last name" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>DOB</Form.Label>
                      <MintonDatepicker
                                  hideAddon={true}
                                  value={selectedDate1}
                                  onChange={(date) => {
                                      setSelectedDate1(date);
                                  }}
                              />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter Email Address" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label> Mobile Number</Form.Label>
                      <Form.Control type="text" placeholder="Enter mobile number" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label> Landline Number</Form.Label>
                      <Form.Control type="text" placeholder="Enter landline number" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
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
                      <Form.Label>Upload Aadhar Card</Form.Label>
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
                      <Form.Label>Voter ID</Form.Label>
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
