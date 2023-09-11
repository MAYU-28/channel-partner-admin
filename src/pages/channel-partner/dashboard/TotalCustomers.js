import React from "react";
import { Card, Row, Col, Table, Pagination, Dropdown } from "react-bootstrap";
import CountUp from "react-countup";

import PageTitle from "../../../components/PageTitle";

function TotalCustomers() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Total Customers",
            path: "/farmer/total-customers",
            active: true,
          },
        ]}
        title={"Total Customers"}
      />
      <Row>
        <Col>
          <Card className="bg-gradient-pink">
            <Card.Body>
              <div className="d-flex align-items-start">
                <div className="avatar-lg  p-4">
                  <i className="avatar-title display-4 m-0 text-white mdi mdi-account-group"></i>
                </div>
                <div className="flex-1 text-end align-self-center">
                  <h3 className="mt-0 text-white">
                    <span>
                      <CountUp duration={1} end={180} separator="," />
                    </span>
                  </h3>
                  <p className="text-white mb-0">Total Customers</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-purple">
            <Card.Body>
              <div className="d-flex align-items-start">
                <div className="avatar-lg  p-4">
                  <i className="avatar-title display-4 m-0 text-white mdi mdi-cash-usd"></i>
                </div>
                <div className="flex-1 text-end align-self-center">
                  <h3 className="mt-0 text-white">
                    <span>
                      <CountUp duration={1} end={2000} separator="," />
                    </span>
                  </h3>
                  <p className="text-white mb-0">Advanced Paid</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-primary">
            <Card.Body>
              <div className="d-flex align-items-start">
                <div className="avatar-lg  p-4">
                  <i className="avatar-title display-4 m-0 text-white mdi mdi-cash-usd"></i>
                </div>
                <div className="flex-1 text-end align-self-center">
                  <h3 className="mt-0 text-white">
                    <span>
                      <CountUp duration={1} end={8000} separator="," />
                    </span>
                  </h3>
                  <p className="text-white mb-0">Total Amount</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="bg-gradient-primary">
            <Card.Body>
              <div className="d-flex align-items-start">
                <div className="avatar-lg  p-4">
                  <i className="avatar-title display-4 m-0 text-white mdi mdi-timer-sand-full"></i>
                </div>
                <div className="flex-1 text-end align-self-center">
                  <h3 className="mt-0 text-white">
                    <span>
                      <CountUp duration={1} end={4000} separator="," />
                    </span>
                  </h3>
                  <p className="text-white mb-0">Pending Amount</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-secondary">
            <Card.Body>
              <div className="d-flex align-items-start">
                <div className="avatar-lg  p-4">
                  <i className="avatar-title display-4 m-0 text-white mdi mdi-timer-sand-full"></i>
                </div>
                <div className="flex-1 text-end align-self-center">
                  <h3 className="mt-0 text-white">
                    <span>
                      <CountUp duration={1} end={45000} separator="," />
                    </span>
                  </h3>
                  <p className="text-white mb-0">Pending Paid</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-danger">
            <Card.Body>
              <div className="d-flex align-items-start">
                <div className="avatar-lg  p-4">
                  <i className="avatar-title display-4 m-0 text-white mdi mdi-cancel"></i>
                </div>
                <div className="flex-1 text-end align-self-center">
                  <h3 className="mt-0 text-white">
                    <span>
                      <CountUp duration={1} end={45} separator="," />
                    </span>
                  </h3>
                  <p className="text-white mb-0">Cancelled Order</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title className="text-info w-100 font-24">
                  Total Cutomers
                </Card.Title>
                <div className="w-100 text-end d-flex justify-content-end">
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="crop">
                      Filter By
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Newest</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Oldest</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">A - Z</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>

              <div className="table-responsive my-3">
                <Table striped hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Customer Name</th>
                      <th>Mobile</th>
                      <th>Email</th>
                      <th>Total Paid</th>
                      <th>Sales Due</th>
                      <th>Sales Return Due</th>
                      <th>Advanced Paid</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Santosh Girase</td>
                      <td>+91 9977124563</td>
                      <td>santosh123@gmail.com</td>
                      <td>(₹) 40,000</td>
                      <td>(₹) 10,000 </td>
                      <td>(₹) 2,000 </td>
                      <td>(₹) 4,000 </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Rahul Patil</td>
                      <td>+91 9934124553</td>
                      <td>rahulpatil@gmail.com</td>
                      <td>(₹) 80,000</td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 6,000 </td>
                      <td>(₹) 2,000 </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Raju Padvi</td>
                      <td>+91 9922123543</td>
                      <td>raju@gmail.com</td>
                      <td>(₹) 40,000</td>
                      <td>(₹) 10,000 </td>
                      <td>(₹) 2,000 </td>
                      <td>(₹) 4,000 </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Shrikant Desale</td>
                      <td>+91 9722124522</td>
                      <td>santosh123@gmail.com</td>
                      <td>(₹) 50,000</td>
                      <td>(₹) 30,000 </td>
                      <td>(₹) 6,000 </td>
                      <td>(₹) 1,000 </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Santosh Girase</td>
                      <td>+91 9977124563</td>
                      <td>santosh123@gmail.com</td>
                      <td>(₹) 40,000</td>
                      <td>(₹) 10,000 </td>
                      <td>(₹) 2,000 </td>
                      <td>(₹) 4,000 </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Rahul Patil</td>
                      <td>+91 9934124553</td>
                      <td>rahulpatil@gmail.com</td>
                      <td>(₹) 80,000</td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 6,000 </td>
                      <td>(₹) 2,000 </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Raju Padvi</td>
                      <td>+91 9922123543</td>
                      <td>raju@gmail.com</td>
                      <td>(₹) 40,000</td>
                      <td>(₹) 10,000 </td>
                      <td>(₹) 2,000 </td>
                      <td>(₹) 4,000 </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Shrikant Desale</td>
                      <td>+91 9722124522</td>
                      <td>santosh123@gmail.com</td>
                      <td>(₹) 50,000</td>
                      <td>(₹) 30,000 </td>
                      <td>(₹) 6,000 </td>
                      <td>(₹) 1,000 </td>
                    </tr>
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
    </>
  );
}

export default TotalCustomers;
