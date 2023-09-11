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
            label: "Total Top Crops",
            path: "/farmer/crop-orders",
            active: true,
          },
        ]}
        title={"Total Top Crops"}
      />
      <Row>
        <Col>
          <Card className="bg-gradient-pink">
            <Card.Body>
              <h4 className="text-white">Completed Earning</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={50000000} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-primary">
            <Card.Body>
              <h4 className="text-white">Expected Earnings</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={20000000} separator="," />
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
                  Total Top Crops
                </Card.Title>
                <div className="w-100 text-end d-flex justify-content-end">
                  <input
                    type="text"
                    placeholder="Search"
                    className="form-control w-25"
                  />
                </div>
                <Link
                  to="/pages/invoice"
                  style={{ width: "200px", marginLeft: "10px" }}
                >
                  <Button
                    className="btn btn-primary py-2"
                    style={{ width: "200px"}}
                  >
                    View Sales
                  </Button>
                </Link>
              </div>

              <div className="table-responsive my-3">
                <Table striped hover className="mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Tomato</td>
                      <td>53 Locations</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Potatao</td>
                      <td>93 Locations</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Cabbage</td>
                      <td>153 Locations</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Ginger</td>
                      <td>43 Locations</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Capsicum</td>
                      <td>53 Locations</td>
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
