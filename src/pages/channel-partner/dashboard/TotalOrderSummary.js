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
            label: "Total Order Summary",
            path: "/farmer/crop-orders",
            active: true,
          },
        ]}
        title={"Total Order Summary"}
      />
    
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title className="text-info w-100 font-24">
                  Total Order Summary
                </Card.Title>
                <div className="w-100 text-end d-flex justify-content-end">
                  <input
                    type="text"
                    placeholder="Search"
                    className="form-control w-25"
                  />
                </div>
              </div>
              <div className="table-responsive mt-3">
                <Table hover className="m-0">
                  <thead>
                    <tr>
                      <th>Order Id </th>
                      <th>Crop Name </th>
                      <th>Farm Name </th>
                      <th>Customer</th>
                      <th>Due Date</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span>#897656</span>
                      </td>
                      <td>Tomato</td>
                      <td>Balaji Farm </td>
                      <td>Brooklyn Zeo </td>
                      <td>12 Jul 2020 </td>
                      <td>INR 64.00 </td>
                      <td>
                        <span className="me-1 bg-success badge rounded-pill bg-primary">
                          Completed
                        </span>
                      </td>
                      <td>
                        <Link to="/farmer/total-invoices">
                          <Button>View Details</Button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>#897656</span>
                      </td>
                      <td>Tomato</td>
                      <td>Balaji Farm </td>
                      <td>Brooklyn Zeo </td>
                      <td>12 Jul 2020 </td>
                      <td>INR 64.00 </td>
                      <td>
                        <span className="me-1 bg-success badge rounded-pill bg-primary">
                          Completed
                        </span>
                      </td>
                      <td>
                        <Link to="/farmer/total-invoices">
                          <Button>View Details</Button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>#897656</span>
                      </td>
                      <td>Tomato</td>
                      <td>Balaji Farm </td>
                      <td>Brooklyn Zeo </td>
                      <td>12 Jul 2020 </td>
                      <td>INR 64.00 </td>
                      <td>
                        <span className="me-1 bg-success badge rounded-pill bg-primary">
                          Completed
                        </span>
                      </td>
                      <td>
                        <Link to="/farmer/total-invoices">
                          <Button>View Details</Button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>#897656</span>
                      </td>
                      <td>Tomato</td>
                      <td>Balaji Farm </td>
                      <td>Brooklyn Zeo </td>
                      <td>12 Jul 2020 </td>
                      <td>INR 64.00 </td>
                      <td>
                        <span className="me-1 bg-success badge rounded-pill bg-primary">
                          Completed
                        </span>
                      </td>
                      <td>
                        <Link to="/farmer/total-invoices">
                          <Button>View Details</Button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>#897656</span>
                      </td>
                      <td>Tomato</td>
                      <td>Balaji Farm </td>
                      <td>Brooklyn Zeo </td>
                      <td>12 Jul 2020 </td>
                      <td>INR 64.00 </td>
                      <td>
                        <span className="me-1 bg-success badge rounded-pill bg-primary">
                          Completed
                        </span>
                      </td>
                      <td>
                        <Link to="/farmer/total-invoices">
                          <Button>View Details</Button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>#897656</span>
                      </td>
                      <td>Tomato</td>
                      <td>Balaji Farm </td>
                      <td>Brooklyn Zeo </td>
                      <td>12 Jul 2020 </td>
                      <td>INR 64.00 </td>
                      <td>
                        <span className="me-1 bg-success badge rounded-pill bg-primary">
                          Completed
                        </span>
                      </td>
                      <td>
                        <Link to="/farmer/total-invoices">
                          <Button>View Details</Button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>#897656</span>
                      </td>
                      <td>Tomato</td>
                      <td>Balaji Farm </td>
                      <td>Brooklyn Zeo </td>
                      <td>12 Jul 2020 </td>
                      <td>INR 64.00 </td>
                      <td>
                        <span className="me-1 bg-success badge rounded-pill bg-primary">
                          Completed
                        </span>
                      </td>
                      <td>
                        <Link to="/farmer/total-invoices">
                          <Button>View Details</Button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>#897656</span>
                      </td>
                      <td>Tomato</td>
                      <td>Balaji Farm </td>
                      <td>Brooklyn Zeo </td>
                      <td>12 Jul 2020 </td>
                      <td>INR 64.00 </td>
                      <td>
                        <span className="me-1 bg-success badge rounded-pill bg-primary">
                          Completed
                        </span>
                      </td>
                      <td>
                        <Link to="/farmer/total-invoices">
                          <Button>View Details</Button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>#897656</span>
                      </td>
                      <td>Tomato</td>
                      <td>Balaji Farm </td>
                      <td>Brooklyn Zeo </td>
                      <td>12 Jul 2020 </td>
                      <td>INR 64.00 </td>
                      <td>
                        <span className="me-1 bg-success badge rounded-pill bg-primary">
                          Completed
                        </span>
                      </td>
                      <td>
                        <Link to="/farmer/total-invoices">
                          <Button>View Details</Button>
                        </Link>
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
