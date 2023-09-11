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

function History() {
  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title className="text-info font-26 w-100">
                  History
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
              <div className="table-responsive mb-3">
                <Table striped hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Date Of Report</th>
                      <th>Farm Name</th>
                      <th>Acre</th>
                      <th>Soil Type</th>
                      <th>Report</th>
                      <th>Download</th>
                      <th>Laboratory</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>25th August 2021 </td>
                      <td>Balaji Farm </td>
                      <td>10</td>
                      <td>Brownish Soil </td>
                      <td>₹ 12,000 </td>
                      <td>
                        <Button className="btn btn-primary">Download</Button>
                      </td>
                      <td>Tata AgroLab </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>25th August 2021 </td>
                      <td>Balaji Farm </td>
                      <td>10</td>
                      <td>Brownish Soil </td>
                      <td>₹ 12,000 </td>
                      <td>
                        <Button className="btn btn-primary">Download</Button>
                      </td>
                      <td>Tata AgroLab </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>25th August 2021 </td>
                      <td>Balaji Farm </td>
                      <td>10</td>
                      <td>Brownish Soil </td>
                      <td>₹ 12,000 </td>
                      <td>
                        <Button className="btn btn-primary">Download</Button>
                      </td>
                      <td>Tata AgroLab </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>25th August 2021 </td>
                      <td>Balaji Farm </td>
                      <td>10</td>
                      <td>Brownish Soil </td>
                      <td>₹ 12,000 </td>
                      <td>
                        <Button className="btn btn-primary">Download</Button>
                      </td>
                      <td>Tata AgroLab </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>25th August 2021 </td>
                      <td>Balaji Farm </td>
                      <td>10</td>
                      <td>Brownish Soil </td>
                      <td>₹ 12,000 </td>
                      <td>
                        <Button className="btn btn-primary">Download</Button>
                      </td>
                      <td>Tata AgroLab </td>
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

export default History;
