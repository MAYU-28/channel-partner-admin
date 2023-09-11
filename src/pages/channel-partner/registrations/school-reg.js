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
            label: "School Registration",
            path: "/channel/school-reg",
            active: true,
          },
        ]}
        title={"School Registration"}
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
                      <Form.Label>Upload Class Images</Form.Label>
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
                      <Form.Label>Class Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Class Name" />
                    </Form.Group>
                   
                    <Form.Group as={Col} md={6} className="mb-2">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter Email Address" />
                    </Form.Group>

                    <Form.Group as={Col} md={6} className="mb-2">
                      <Form.Label> Contact Number</Form.Label>
                      <Form.Control type="text" placeholder="Enter Contact number" />
                    </Form.Group>

                    <Form.Group as={Col} md={6} className="mb-2">
                      <Form.Label>Alternate Contact Number</Form.Label>
                      <Form.Control type="text" placeholder="Enter Contact number" />
                    </Form.Group>
                    
                    <Form.Group as={Col} md={6} className="mb-2">
                      <Form.Label>Date of Establishment</Form.Label>
                      <MintonDatepicker
                                  hideAddon={true}
                                  value={selectedDate1}
                                  onChange={(date) => {
                                      setSelectedDate1(date);
                                  }}
                              />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-2" md={6}>
                      <Form.Label>Teaching Experience </Form.Label>
                      <Form.Select defaultValue="Select Year">
                        <option>Select Year</option>
                        <option>...</option>
                      </Form.Select>
                      <Form.Select defaultValue="Select Month" className="mt-1">
                        <option>Select Month</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-2" md={6}>
                      <Form.Label>School Registration Number</Form.Label>
                      <Form.Control type="text" placeholder="Enter Registration Number" />
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
