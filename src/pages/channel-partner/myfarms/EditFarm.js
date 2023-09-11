import React from "react";
import { useForm } from "react-hook-form";

import PageTitle from "../../../components/PageTitle";
import {
  Row,
  Col,
  Card,
  Form,
  FloatingLabel,
  InputGroup,
  Button,
  Dropdown,
} from "react-bootstrap";
import { FormInput } from "../../../components/form";

import Select from "react-select";
import { Typeahead } from "react-bootstrap-typeahead";

const EditFarm = () => {
  const methods = useForm({
    defaultValues: {
      textInput: "Some Text Value...",
      password: "12345",
      statictext: "email@example.com",
      color: "#3bafda",
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
          { label: "Home", path: "/farmer" },
          {
            label: "Farm Edit",
            path: "/farmer/farm-edit",
            active: true,
          },
        ]}
        title={"Farm Edit"}
      />
      <Card>
        <Card.Body>
          <h4 className="header-title mb-3 text-info">FARM EDIT</h4>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Row>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Farm Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" />
              </Form.Group>

              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Owner Name</Form.Label>
                <Form.Control type="text" placeholder="Enter owner name" />
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Owner Mobile Number</Form.Label>
                <Form.Control type="text" placeholder="Enter mobile number" />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Select Farm Size </Form.Label>
                <Select
                  className="react-select react-select-container"
                  classNamePrefix="react-select"
                  options={[
                    { value: "farmsize1", label: "Farm size 1" },
                    { value: "farmsize2", label: "Farm size 2" },
                    { value: "farmsize3", label: "Farm size 3" },
                  ]}
                ></Select>
              </Form.Group>

              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Select Soil Type </Form.Label>
                <Select
                  isMulti={true}
                  className="react-select react-select-container"
                  classNamePrefix="react-select"
                  options={[
                    { value: "soiltype1", label: "Soil Type 1" },
                    { value: "soiltype2", label: "Soil Type 2" },
                    { value: "soiltype3", label: "Soil Type 3" },
                  ]}
                ></Select>
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Select Ownership </Form.Label>
                <Select
                  isMulti={true}
                  className="react-select react-select-container"
                  classNamePrefix="react-select"
                  options={[
                    { value: "owned", label: "Owned" },
                    { value: "rented", label: "Rented" },
                  ]}
                ></Select>
              </Form.Group>
              <Form.Group as={Col} md={12} className="mb-2">
                <Form.Label>Owner Address</Form.Label>
                <FormInput
                  type="textarea"
                  name="textarea"
                  rows={5}
                  register={register}
                  key="textarea"
                  errors={errors}
                  control={control}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} className="mb-2" md={4}>
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} className="mb-2" md={4}>
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter city" />
              </Form.Group>

              <Form.Group as={Col} className="mb-2" md={4}>
                <Form.Label>District </Form.Label>
                <Form.Control type="text" placeholder="Enter District " />
              </Form.Group>

              <Form.Group as={Col} className="mb-2" md={4}>
                <Form.Label>Village </Form.Label>
                <Form.Control type="text" placeholder="Enter Village " />
              </Form.Group>

              <Form.Group as={Col} className="mb-2" md={4}>
                <Form.Label>Pincode</Form.Label>
                <Form.Control type="text" placeholder="Enter Pincode " />
              </Form.Group>

              <Form.Group as={Col} className="mb-2" md={4}>
                <Form.Label>Farm Latitude</Form.Label>
                <Form.Control type="text" placeholder="Enter Farm Latitude " />
              </Form.Group>

              <Form.Group as={Col} className="mb-2" md={4}>
                <Form.Label>Farm Longitude</Form.Label>
                <Form.Control type="text" placeholder="Enter Farm Longitude " />
              </Form.Group>

              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Owner Email id</Form.Label>
                <Form.Control type="text" placeholder="Enter Owner Email id" />
              </Form.Group>

              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Select Irrigation Source </Form.Label>
                <Select
                  isMulti={true}
                  className="react-select react-select-container"
                  classNamePrefix="react-select"
                  options={[
                    { value: "1", label: "1" },
                    { value: "2", label: "2" },
                    { value: "3", label: "3" },
                  ]}
                ></Select>
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Select Crop Area </Form.Label>
                <Select
                  className="react-select react-select-container"
                  classNamePrefix="react-select"
                  options={[
                    { value: "acre", label: "Acre" },
                    { value: "hectare", label: "Hecatare" },
                    { value: "sqmtr", label: "Sq. Mtr" },
                    { value: "sqft", label: "Sq. Ft" },
                    { value: "bigha", label: "Bigha" },
                  ]}
                ></Select>
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Select Machinery available for farming </Form.Label>
                <Select
                  isMulti={true}
                  className="react-select react-select-container"
                  classNamePrefix="react-select"
                  options={[
                    { value: "1", label: "1" },
                    { value: "2", label: "2" },
                    { value: "3", label: "3" },
                  ]}
                ></Select>
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Upload Farm Image</Form.Label>
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
                <Form.Label>Farm Details</Form.Label>
                <FormInput
                  type="textarea"
                  name="textarea"
                  rows={5}
                  register={register}
                  key="textarea"
                  errors={errors}
                  control={control}
                />
              </Form.Group>
            </Row>

            <Button
              className="btn-bordered rounded-pill waves-effect waves-light btn bg-gradient-info"
              type="submit"
              style={{ border: "none", width: "200px", marginTop: "20px" }}
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default EditFarm;
