import React from "react";
import { Card, Row, Col, Table, Pagination, Dropdown } from "react-bootstrap";
import CountUp from "react-countup";

import PageTitle from "../../../components/PageTitle";

function RejectedOrders() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Rejected Orders",
            path: "/farmer/rejected-orders",
            active: true,
          },
        ]}
        title={"Rejected Orders"}
      />
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="text-info">Total Rejected Orders</h4>
              <h3 className="text-dark mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={100} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title className="text-info w-100 font-24">
                  Rejected Orders
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

              <Table striped bordered hover className="mt-3">
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

export default RejectedOrders;
