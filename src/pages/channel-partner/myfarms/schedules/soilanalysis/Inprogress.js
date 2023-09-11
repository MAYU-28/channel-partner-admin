import React from "react";
import {
  Card,
  Row,
  Col,
  Table,
  Button,
  Pagination,
  Dropdown,
} from "react-bootstrap";

function Inprogress() {
  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title className="font-26 text-info w-100">
                  Inprogress
                </Card.Title>
                <div className="w-100 text-end d-flex justify-content-end">
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="crop">
                      Filter By
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Newest First
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Oldest First
                      </Dropdown.Item>
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
                      <th>Payment</th>
                      <th>Date Of Request</th>
                      <th>Farm Name</th>
                      <th>Acre</th>
                      <th>Soil Type</th>
                      <th>Amount</th>
                      <th>Payment Status</th>
                      <th>Laboratory</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <Button className="rounded-pill waves-effect waves-light btn bg-gradient-info">
                          Pay Now
                        </Button>{" "}
                      </td>
                      <td>25th Sep 2022</td>
                      <td>Balaji Farm</td>
                      <td>10</td>
                      <td>Brownish Soil </td>
                      <td>₹ 12,000 </td>
                      <td>UnPaid </td>
                      <td>Tata AgroLab</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <Button className="rounded-pill waves-effect waves-light btn bg-gradient-info">
                          Pay Now
                        </Button>{" "}
                      </td>
                      <td>27th Sep 2022</td>
                      <td>Cora Farm</td>
                      <td>6</td>
                      <td>Brownish Soil </td>
                      <td>₹ 20,000 </td>
                      <td>UnPaid </td>
                      <td>Tata AgroLab</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <Button className="rounded-pill waves-effect waves-light btn bg-gradient-info">
                          Pay Now
                        </Button>{" "}
                      </td>
                      <td>30th Sep 2022</td>
                      <td>Balaji Farm</td>
                      <td>13</td>
                      <td>Brownish Soil </td>
                      <td>₹ 18,000 </td>
                      <td>UnPaid </td>
                      <td>Tata AgroLab</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <Button className="rounded-pill waves-effect waves-light btn bg-gradient-info">
                          Pay Now
                        </Button>{" "}
                      </td>
                      <td>25th Sep 2022</td>
                      <td>Balaji Farm</td>
                      <td>10</td>
                      <td>Brownish Soil </td>
                      <td>₹ 12,000 </td>
                      <td>UnPaid </td>
                      <td>Tata AgroLab</td>
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

export default Inprogress;
