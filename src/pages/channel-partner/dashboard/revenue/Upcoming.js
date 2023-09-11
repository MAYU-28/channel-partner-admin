import React from "react";
import { Card, Row, Col, Table, Pagination, Dropdown } from "react-bootstrap";
import { FormInput } from "../../../../components/form";
import CountUp from "react-countup";

function Completed() {
  return (
    <>
      <Row>
        <Col>
          <Card className="bg-gradient-info">
            <Card.Body>
              <div className="d-flex align-items-start">
                <div className="avatar-lg  p-4">
                  <i className="avatar-title display-4 m-0 text-white mdi mdi-cash-usd"></i>
                </div>
                <div className="flex-1 text-end align-self-center">
                  <h3 className="mt-0 text-white">
                    <span>
                      <CountUp duration={1} end={3000} separator="," />
                    </span>
                  </h3>
                  <p className="text-white mb-0">Expected Sale</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-info">
            <Card.Body>
              <div className="d-flex align-items-start">
                <div className="avatar-lg  p-4">
                  <i className="avatar-title display-4 m-0 text-white mdi mdi-cash-usd"></i>
                </div>
                <div className="flex-1 text-end align-self-center">
                  <h3 className="mt-0 text-white">
                    <span>
                      <CountUp duration={1} end={3500} separator="," />
                    </span>
                  </h3>
                  <p className="text-white mb-0">Advance Received</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-info">
            <Card.Body>
              <div className="d-flex align-items-start">
                <div className="avatar-lg  p-4">
                  <i className="avatar-title display-4 m-0 text-white mdi mdi-cash-usd"></i>
                </div>
                <div className="flex-1 text-end align-self-center">
                  <h3 className="mt-0 text-white">
                    <span>
                      <CountUp duration={1} end={10000} separator="," />
                    </span>
                  </h3>
                  <p className="text-white mb-0">Total Pending Amounts</p>
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
                  Total Upcoming Sales
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
                    <th>#</th>
                    <th>Sales Date</th>
                    <th>Customer Name</th>
                    <th>(₹) Grand Total</th>
                    <th>(₹) Paid Payment</th>
                    <th>Souece of sell</th>
                    <th>Balance Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>25 sep 2022</td>
                    <td>Anil Prajapati</td>
                    <td>(₹) 40,000 </td>
                    <td>(₹) 30,000 </td>
                    <td>Offline</td>
                    <td>(₹) 8,000 </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>26 sep 2022</td>
                    <td>Rajendra Patil</td>
                    <td>(₹) 80,000 </td>
                    <td>(₹) 70,000 </td>
                    <td>Online</td>
                    <td>(₹) 2,000 </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>28 sep 2022</td>
                    <td>Mayur Shimpi</td>
                    <td>(₹) 20,000 </td>
                    <td>(₹) 20,000 </td>
                    <td>Offline</td>
                    <td>(₹) 4,000 </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>01 Oct 2022</td>
                    <td>Manoj Patil</td>
                    <td>(₹) 20,000 </td>
                    <td>(₹) 20,000 </td>
                    <td>Online</td>
                    <td>(₹) 1,000 </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>02 Oct 2022</td>
                    <td>Dhanu Badgujar</td>
                    <td>(₹) 20,000 </td>
                    <td>(₹) 20,000 </td>
                    <td>Offline</td>
                    <td>(₹) 10,000 </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>25 sep 2022</td>
                    <td>Anil Prajapati</td>
                    <td>(₹) 40,000 </td>
                    <td>(₹) 30,000 </td>
                    <td>Online</td>
                    <td>(₹) 3,000 </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>26 sep 2022</td>
                    <td>Rajendra Patil</td>
                    <td>(₹) 80,000 </td>
                    <td>(₹) 70,000 </td>
                    <td>Offline</td>
                    <td>(₹) 8,000 </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>28 sep 2022</td>
                    <td>Mayur Shimpi</td>
                    <td>(₹) 20,000 </td>
                    <td>(₹) 20,000 </td>
                    <td>Offline</td>
                    <td>(₹) 2,000 </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>01 Oct 2022</td>
                    <td>Manoj Patil</td>
                    <td>(₹) 20,000 </td>
                    <td>(₹) 20,000 </td>
                    <td>Online</td>
                    <td>(₹) 0 </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>02 Oct 2022</td>
                    <td>Dhanu Badgujar</td>
                    <td>(₹) 20,000 </td>
                    <td>(₹) 20,000 </td>
                    <td>Offline</td>
                    <td>(₹) 7,000 </td>
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

export default Completed;
