import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import { FormInput } from "../../../../components/form";
import MintonDatepicker from '../../../../components/Datepicker';
import Select from "react-select";
import PageTitle from "../../../../components/PageTitle";

function AddExpense() {
    const [selectedDate1, setSelectedDate1] = useState(new Date());
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
            label: "Add Expense",
            path: "/farmer/add-expense",
            active: true,
          },
        ]}
        title={"Add Expense"}
      />
       <Card>
        <Card.Body>
          <h4 className="header-title mb-3 text-info">Add Expense</h4>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Row>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Farm Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Crop Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Crop name" />
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Reference No.</Form.Label>
                <Form.Control type="text" placeholder="Enter Reference No." />
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Category*</Form.Label>
                <Form.Control type="text" placeholder="Enter Category" />
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Amount*</Form.Label>
                <Form.Control type="text" placeholder="Enter Amount" />
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Expenses For*</Form.Label>
                <Select
                  className="react-select react-select-container"
                  classNamePrefix="react-select"
                  options={[
                    { value: "officevehical1", label: "Office Vehical 1" },
                    { value: "officevehical2", label: "Office Vehical 2" },
                    { value: "officevehical3", label: "Office Vehical 3" },
                  ]}
                ></Select>
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Expenses Date*</Form.Label>
                <MintonDatepicker
                                hideAddon={true}
                                value={selectedDate1}
                                onChange={(date) => {
                                    setSelectedDate1(date);
                                }}
                            />
              </Form.Group>
             
              <Form.Group as={Col} md={12} className="mb-2">
                <Form.Label>Note</Form.Label>
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
              variant="primary"
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
}

export default AddExpense;
