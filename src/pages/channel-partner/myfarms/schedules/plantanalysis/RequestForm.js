import React from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import Select from "react-select";

export const RequestForm = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title mb-4 text-info">
            REQUEST FOR PLANT ANALYSIS
          </h4>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Row>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Select Farm Name</Form.Label>
                <Select
                  options={[
                    { value: "balaji", label: "Balaji Farm" },
                    { value: "cora", label: "Cora Farm" },
                    { value: "gold", label: "Gold Farm" },
                    { value: "sang", label: "Sang Farm" },
                  ]}
                  className="react-select react-select-container"
                  classNamePrefix="react-select"
                ></Select>
              </Form.Group>

              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Select Acre/ HA</Form.Label>
                <Select
                  isMulti={true}
                  options={[
                    { value: "1", label: "1" },
                    { value: "2", label: "2" },
                    { value: "3", label: "3" },
                    { value: "4", label: "4" },
                  ]}
                  className="react-select react-select-container"
                  classNamePrefix="react-select"
                ></Select>
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Select Crop</Form.Label>
                <Select
                  isMulti={true}
                  options={[
                    { value: "tomato", label: "Tomato" },
                    { value: "potato", label: "Potatao" },
                    { value: "cabbage", label: "Cabbage" },
                    { value: "bellpaper", label: "Bell Paper" },
                  ]}
                  className="react-select react-select-container"
                  classNamePrefix="react-select"
                ></Select>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Select Soil Type</Form.Label>
                <Select
                  options={[
                    { value: "soiltype1", label: "Soil Type 1" },
                    { value: "soiltype2", label: "Soil Type 2" },
                    { value: "soiltype3", label: "Soil Type 3" },
                    { value: "soiltype4", label: "Soil Type 4" },
                  ]}
                  className="react-select react-select-container"
                  classNamePrefix="react-select"
                ></Select>
              </Form.Group>

              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Select Laboratory</Form.Label>
                <Select
                  isMulti={true}
                  options={[
                    { value: "Laboratory1", label: "Laboratory 1" },
                    { value: "Laboratory2", label: "Laboratory 2" },
                    { value: "Laboratory3", label: "Laboratory 3" },
                    { value: "Laboratory4", label: "Laboratory 4" },
                  ]}
                  className="react-select react-select-container"
                  classNamePrefix="react-select"
                ></Select>
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Owner Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Owner Name" />
              </Form.Group>
            </Row>

            <Button
              variant="primary"
              className=" btn btn-bordered rounded-pill waves-effect waves-light btn bg-gradient-info"
              style={{ width: "200px", marginTop: "20px" }}
              type="submit"
            >
              Submit Request
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
