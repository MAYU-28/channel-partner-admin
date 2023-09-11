import React from "react";
import { Card, Row, Col, Table, Pagination, Dropdown } from "react-bootstrap";
import CountUp from "react-countup";
import { Link } from 'react-router-dom';
import PageTitle from "../../../components/PageTitle";

function TotalInvoice() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Total Invoices",
            path: "/farmer/total-invoices",
            active: true,
          },
        ]}
        title={"Total Invoices"}
      />
      <Row>
        <Col>
          <Card className="bg-gradient-pink">
            <Card.Body>
              <h4 className="text-white">Agro advisory</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={80} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-orange">
            <Card.Body>
              <h4 className="text-white">Laboratory</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={120} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-primary">
            <Card.Body>
              <h4 className="text-white">Contract farming</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={150} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-danger">
            <Card.Body>
              <h4 className="text-white">Others</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={30} separator="," />
              </h3>
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
                  Total Invoices
                </Card.Title>
                <div className="w-100 text-end d-flex justify-content-end">
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="crop">
                      Filter By Customer Name
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Abhijeet Chaudhary
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Anil Prajapati
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Mayur Shimpi
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="ms-2">
                    <Dropdown.Toggle variant="primary" id="crop">
                      Filter By Payment Status
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Success</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Inprogress
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Cancelled</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>

              <div className="table-responsive my-3">
                <Table striped hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Invoice Number</th>
                      <th>Sales Date</th>
                      <th>Customer Id</th>
                      <th>Customer Name</th>
                      <th>(₹) Invoice Total</th>
                      <th>(₹) Paid Payment</th>
                      <th>(₹) Due Amount</th>
                      <th>Due Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <Link to="/pages/invoice"><Link to="/pages/invoice">IN092022</Link></Link>
                      </td>
                      <td>25 sep 2022</td>
                      <td>Anil2022</td>
                      <td>Anil Prajapati</td>
                      <td>(₹) 40,000 </td>
                      <td>(₹) 30,000 </td>
                      <td>(₹) 10,000 </td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td><Link to="/pages/invoice"><Link to="/pages/invoice">IN092022</Link></Link></td>
                      <td>26 sep 2022</td>
                      <td>Rajendra2022</td>
                      <td>Rajendra Patil</td>
                      <td>(₹) 80,000 </td>
                      <td>(₹) 70,000 </td>
                      <td>(₹) 10,000 </td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td><Link to="/pages/invoice">IN092022</Link></td>
                      <td>28 sep 2022</td>
                      <td>Mayur2022</td>
                      <td>Mayur Shimpi</td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 5,000 </td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td><Link to="/pages/invoice">IN092022</Link></td>
                      <td>01 Oct 2022</td>
                      <td>Cus2022</td>
                      <td>Manoj Patil</td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 0</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td><Link to="/pages/invoice">IN092022</Link></td>
                      <td>02 Oct 2022</td>
                      <td>Cus2022</td>
                      <td>Dhanu Badgujar</td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 5,000 </td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td><Link to="/pages/invoice">IN092022</Link></td>
                      <td>25 sep 2022</td>
                      <td>Anil2022</td>
                      <td>Anil Prajapati</td>
                      <td>(₹) 40,000 </td>
                      <td>(₹) 30,000 </td>
                      <td>(₹) 10,000 </td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td><Link to="/pages/invoice"><Link to="/pages/invoice">IN092022</Link></Link></td>
                      <td>26 sep 2022</td>
                      <td>Rajendra2022</td>
                      <td>Rajendra Patil</td>
                      <td>(₹) 80,000 </td>
                      <td>(₹) 70,000 </td>
                      <td>(₹) 10,000 </td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td><Link to="/pages/invoice">IN092022</Link></td>
                      <td>28 sep 2022</td>
                      <td>Mayur2022</td>
                      <td>Mayur Shimpi</td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 5,000 </td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td><Link to="/pages/invoice">IN092022</Link></td>
                      <td>01 Oct 2022</td>
                      <td>Cus2022</td>
                      <td>Manoj Patil</td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 0</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td><Link to="/pages/invoice">IN092022</Link></td>
                      <td>02 Oct 2022</td>
                      <td>Cus2022</td>
                      <td>Dhanu Badgujar</td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 5,000 </td>
                      <td>20</td>
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

export default TotalInvoice;
