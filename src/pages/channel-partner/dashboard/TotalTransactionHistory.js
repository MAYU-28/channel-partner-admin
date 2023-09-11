import React from "react";
import { Card, Row, Col, Table, Pagination, Button } from "react-bootstrap";
import CountUp from "react-countup";
import PageTitle from "../../../components/PageTitle";
import { Link } from 'react-router-dom';


function TotalTopCrops() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Total Transactions History",
            path: "/farmer/crop-orders",
            active: true,
          },
        ]}
        title={"Total Transactions History"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title className="text-info w-100 font-24">
                  Total Transactions History
                </Card.Title>
                <div className="w-100 text-end d-flex justify-content-end">
                  <input
                    type="text"
                    placeholder="Search"
                    className="form-control w-25"
                  />
                </div>
              </div>
              <div className="table-responsive my-3">
                <Table hover className="m-0">
                  <thead>
                    <tr>
                      <th>Customer Name </th>
                      <th>Crop Name </th>
                      <th>Transaction Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Abhijeet Chaudhary</td>
                      <td>Tomato</td>
                      <td>10th Oct 2022</td>
                      <td>₹ 10,000</td>
                      <td>
                        <span className="me-1 bg-success badge rounded-pill bg-primary">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Aadesh Patil</td>
                      <td>Tomato</td>
                      <td>10th Oct 2022</td>
                      <td>₹ 10,000</td>
                      <td>
                        <span className="me-1 bg-success badge rounded-pill bg-primary">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Pritam Gosavi</td>
                      <td>Tomato</td>
                      <td>10th Oct 2022</td>
                      <td>₹ 10,000</td>
                      <td>
                        <span className="me-1 bg-success badge rounded-pill bg-primary">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Abhijeet Chaudhary</td>
                      <td>Tomato</td>
                      <td>10th Oct 2022</td>
                      <td>₹ 10,000</td>
                      <td>
                        <span className="me-1 bg-success badge rounded-pill bg-primary">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Aadesh Patil</td>
                      <td>Tomato</td>
                      <td>10th Oct 2022</td>
                      <td>₹ 10,000</td>
                      <td>
                        <span className="me-1 bg-success badge rounded-pill bg-primary">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Pritam Gosavi</td>
                      <td>Tomato</td>
                      <td>10th Oct 2022</td>
                      <td>₹ 10,000</td>
                      <td>
                        <span className="me-1 bg-success badge rounded-pill bg-primary">
                          Completed
                        </span>
                      </td>
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

export default TotalTopCrops;
