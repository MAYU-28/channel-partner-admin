import React from "react";
import {
  Row,
  Col,
  Card,
  Table,
  Button,
  ProgressBar,
  Dropdown,
  Pagination
} from "react-bootstrap";
import { Link } from "react-router-dom";

// components
import PageTitle from "../../../components/PageTitle";

//dummy data
import { records as data } from "./data";

const CropSchedule = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Farm Details", path: "/farmer/farm-details" },
          {
            label: "Crop Schedule",
            path: "farmer/new-schedule",
            active: true,
          },
        ]}
        title={"Crop Schedule"}
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
              <div className='d-flex align-items-center justify-content-between'>
                <h4 className="header-title text-info w-25">Schedule Current</h4>
                <input type="text" className="form-control  w-25" placeholder="Search"/>
              </div>
              <div className="table-responsive my-3">
                <Table>
                  <thead>
                    <tr>
                      <th>Sr.no</th>
                      <th>Crop Image</th>
                      <th>Crop Name</th>
                      <th style={{ width: "200px" }}>Schedule Date</th>
                      <th style={{ width: "300px" }}>Remaining Days</th>
                      <th style={{ width: "200px" }}>End Date</th>
                      <th style={{ width: "200px" }}>Status</th>
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
                        
                          <td>{item.date}</td>
                          <td>
                            {item.days} Days
                            <ProgressBar
                              now={item.days}
                              label={item.days + " Days"}
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
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </Card.Body>
          </Card>
        </Col>

      </Row>
      <Row>
        <Col>
            <Card className="bg-gradient-pink">
                <Card.Body>
                    <h2 className="text-white">5</h2>
                    <h5 className="text-white">Total Scheduled Crops</h5>
                </Card.Body>
            </Card>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>

      </Row>
        <Card>
            <Card.Body>
            <div className='d-flex align-items-center justify-content-between'>
                <h4 className="header-title text-info ">Total Scheduled Crops</h4>
              </div>
            <div className="table-responsive my-3">
                <Table className='p-0 m-0'>
                  <tbody>
                    <tr>
                        <th>Tomato</th>
                        <td>12 Days	</td>
                        <td>33%	</td>
                    </tr>
                    <tr>
                        <th>Carrot</th>
                        <td>13 Days	</td>
                        <td>35%	</td>
                    </tr>
                    <tr>
                        <th>Cabbage</th>
                        <td>18 Days	</td>
                        <td>40%	</td>
                    </tr>
                    <tr>
                        <th>Ginger</th>
                        <td>17 Days	</td>
                        <td>43%	</td>
                    </tr>
                    <tr>
                        <th>Onion</th>
                        <td>62 Days	</td>
                        <td>90%	</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
        </Card>
       
    </>
  );
};

export default CropSchedule;
