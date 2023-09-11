import React from "react";
import { Card, Row, Col, Table, Pagination, Dropdown } from "react-bootstrap";
import { FormInput } from "../../../../components/form";
import CountUp from "react-countup";

function Tab2() {
  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title className="text-info w-100 font-24">
                  Expenses on Machinery / Equipments
                </Card.Title>
                <div className="w-100 text-end d-flex justify-content-end">
                  <div className="me-2">
                    <FormInput type="date" name="date" key="date" />
                  </div>
                  <div className="me-2">
                    <FormInput type="date" name="date" key="date" />
                  </div>
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="crop">
                      Select Farm
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Balaji Farm
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Cora Farm</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Gold Farm</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="ms-2">
                    <Dropdown.Toggle variant="primary" id="crop">
                      Select Crop Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Rabi Crops
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Kharif Crops
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Other Crops
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="ms-2">
                    <Dropdown.Toggle variant="primary" id="crop">
                      Select Crop
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Tomato</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Potato</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Carrot</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>

              <Table striped bordered hover className="mt-3">
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Company Name</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Date</th>
                    <th>View Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#OS-000354</td>
                    <td>Gaspur Antunes</td>
                    <td>Fullfilled</td>
                    <td>(₹) 485.20 </td>
                    <td>June 10, 2020</td>
                    <td>
                      <button className="btn btn-primary btn-sm">View</button>
                      <button className="btn btn-danger btn-sm ms-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>#OS-000354</td>
                    <td>Gaspur Antunes</td>
                    <td>Fullfilled</td>
                    <td>(₹) 485.20 </td>
                    <td>June 10, 2020</td>
                    <td>
                      <button className="btn btn-primary btn-sm">View</button>
                      <button className="btn btn-danger btn-sm ms-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>#OS-000354</td>
                    <td>Gaspur Antunes</td>
                    <td>Fullfilled</td>
                    <td>(₹) 485.20 </td>
                    <td>June 10, 2020</td>
                    <td>
                      <button className="btn btn-primary btn-sm">View</button>
                      <button className="btn btn-danger btn-sm ms-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>#OS-000354</td>
                    <td>Gaspur Antunes</td>
                    <td>Fullfilled</td>
                    <td>(₹) 485.20 </td>
                    <td>June 10, 2020</td>
                    <td>
                      <button className="btn btn-primary btn-sm">View</button>
                      <button className="btn btn-danger btn-sm ms-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>#OS-000354</td>
                    <td>Gaspur Antunes</td>
                    <td>Fullfilled</td>
                    <td>(₹) 485.20 </td>
                    <td>June 10, 2020</td>
                    <td>
                      <button className="btn btn-primary btn-sm">View</button>
                      <button className="btn btn-danger btn-sm ms-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>#OS-000354</td>
                    <td>Gaspur Antunes</td>
                    <td>Fullfilled</td>
                    <td>(₹) 485.20 </td>
                    <td>June 10, 2020</td>
                    <td>
                      <button className="btn btn-primary btn-sm">View</button>
                      <button className="btn btn-danger btn-sm ms-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>#OS-000354</td>
                    <td>Gaspur Antunes</td>
                    <td>Fullfilled</td>
                    <td>(₹) 485.20 </td>
                    <td>June 10, 2020</td>
                    <td>
                      <button className="btn btn-primary btn-sm">View</button>
                      <button className="btn btn-danger btn-sm ms-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>#OS-000354</td>
                    <td>Gaspur Antunes</td>
                    <td>Fullfilled</td>
                    <td>(₹) 485.20 </td>
                    <td>June 10, 2020</td>
                    <td>
                      <button className="btn btn-primary btn-sm">View</button>
                      <button className="btn btn-danger btn-sm ms-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>#OS-000354</td>
                    <td>Gaspur Antunes</td>
                    <td>Fullfilled</td>
                    <td>(₹) 485.20 </td>
                    <td>June 10, 2020</td>
                    <td>
                      <button className="btn btn-primary btn-sm">View</button>
                      <button className="btn btn-danger btn-sm ms-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>#OS-000354</td>
                    <td>Gaspur Antunes</td>
                    <td>Fullfilled</td>
                    <td>(₹) 485.20 </td>
                    <td>June 10, 2020</td>
                    <td>
                      <button className="btn btn-primary btn-sm">View</button>
                      <button className="btn btn-danger btn-sm ms-2">
                        Delete
                      </button>
                    </td>
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

export default Tab2;
