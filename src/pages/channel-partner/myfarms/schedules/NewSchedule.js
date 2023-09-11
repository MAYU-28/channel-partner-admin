import React from "react";
import {
  Row,
  Col,
  Card,
  Table,
  Button,
  ProgressBar,
  Dropdown,
  ButtonGroup,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";

// components
import PageTitle from "../../../../components/PageTitle";

//dummy data
import { records as data } from "./data";

const NewSchedule = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Farm Details", path: "/farmer/farm-details" },
          {
            label: "Current Schedule",
            path: "farmer/new-schedule",
            active: true,
          },
        ]}
        title={"Current Schedule"}
      />
      <Row style={{ marginBottom: "20px" }}>
        <Col md={6}></Col>
        <Col md={6} className="d-flex justify-content-end">
          <Dropdown className="mt-2">
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              className="bg-gradient-info text-white "
            >
              Select Schedule <i className="mdi mdi-chevron-down"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mx-2">
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              className="bg-gradient-info text-white "
            >
              Select Farm <i className="mdi mdi-chevron-down"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2">
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              className="bg-gradient-info text-white "
            >
              Select Name <i className="mdi mdi-chevron-down"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title text-info">Schedule Current</h4>
              <div className="table-responsive mt-3">
                <Table>
                  <thead>
                    <tr>
                      <th>Sr.no</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th style={{ width: "300px" }}>Acre</th>
                      <th style={{ width: "200px" }}>Schedule Date</th>
                      <th style={{ width: "200px" }}>Status</th>
                      <th style={{ width: "200px" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.id}</td>
                          <td>
                            <img
                              src={item.img_url}
                              className="rounded-circle"
                              width="50"
                              height="50"
                            />
                          </td>
                          <td>{item.name}</td>
                          <td>
                            {item.acre}{" "}
                            <ProgressBar
                              now={item.acre}
                              label={item.acre + " Acre"}
                              className="mb-0 mt-2 "
                              style={{ height: 15 }}
                            />
                          </td>
                          <td>{item.date}</td>
                          <td>
                            {item.status === "Start" ? (
                              <span className="bg-success text-white p-1 rounded">
                                {item.status + " Schedule"}
                              </span>
                            ) : null}
                            {item.status === "Inprogress" ? (
                              <span className="bg-primary text-white p-1 rounded">
                                {item.status + " Schedule"}
                              </span>
                            ) : null}
                            {item.status === "Upcoming" ? (
                              <span className="bg-warning text-white p-1 rounded">
                                {item.status + " Schedule"}
                              </span>
                            ) : null}
                            {item.status === "Cancelled" ? (
                              <span className="bg-danger text-white p-1 rounded">
                                {item.status + " Schedule"}
                              </span>
                            ) : null}
                          </td>
                          <td>
                            <Link to="/farmer/schedule-details">
                              <Button
                                className="w-100 btn btn-bordered rounded-pill waves-effect waves-light btn bg-gradient-pink"
                                style={{ border: "0px solid" }}
                              >
                                View Schedule
                              </Button>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default NewSchedule;
