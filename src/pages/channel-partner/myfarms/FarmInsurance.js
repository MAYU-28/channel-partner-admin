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

function FarmInsurance() {
  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title className="text-info w-100">
                  Farm Insurance
                </Card.Title>
                <div className="w-100 text-end d-flex justify-content-end">
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="crop">
                      Select Crop
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Crop 1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Crop 2</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Crop 3</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="ms-2">
                    <Dropdown.Toggle variant="primary" id="Range">
                      Range (Kms )
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        10 - 50 Kms
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        50 - 100 Kms
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        100 - 150 Kms
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <Table striped bordered hover className="mt-3">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Crop Name</th>
                    <th>Date</th>
                    <th>Insurance Company Name</th>
                    <th>Date Of Insurance</th>
                    <th>Crop Value to be covered</th>
                    <th>End Date Of Insurance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Potato </td>
                    <td>09/11/2021 </td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Potato </td>
                    <td>09/11/2021 </td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Potato </td>
                    <td>09/11/2021 </td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Potato </td>
                    <td>09/11/2021 </td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Potato </td>
                    <td>09/11/2021 </td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Potato </td>
                    <td>09/11/2021 </td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Potato </td>
                    <td>09/11/2021 </td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Potato </td>
                    <td>09/11/2021 </td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Potato </td>
                    <td>09/11/2021 </td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Potato </td>
                    <td>09/11/2021 </td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null </td>
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

export default FarmInsurance;
