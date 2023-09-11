import React from "react";
import PageTitle from "../../../components/PageTitle";
import { Row, Col, Card, ProgressBar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Farmlist = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Ongoing Crops",
            path: "/farmer/ongoing-crops",
            active: true,
          },
        ]}
        title={"Ongoing Crops"}
      />
      <Row>
        <Col lg={6}>
          <Card className="mb-3">
            <Row className="g-0">
              <Col md={5}>
                <Card.Body className="pe-0">
                  <Link to="/farmer/farm-details"
                      className="w-100 text-dark">
                  <Card.Img
                    src="http://project.testproject.in/public/assets/images/FarmImg/tomatoes-min.jpg"
                    className="img-fluid"
                    style={{ height: "200px" }}
                  />
                  </Link>
                </Card.Body>
              </Col>

              <Col md={7} className="bg-gradient-info">
                <Card.Body>
                  <Link
                      to="/farmer/farm-details"
                      className="w-100 text-dark"
                    >
                  <Card.Title as="h3" className="text-white">
                    Tomato
                  </Card.Title>
                  </Link>

                  <Card.Text className="m-0 d-flex align-items-center justify-content-between">
                    <small className="text-white font-15"><i className="mdi mdi-chevron-right-circle font-20 me-1"></i>Balaji Farm</small>
                    <small className="text-white font-16">2 Acre</small>
                  </Card.Text>
                  <Card.Text className="m-0  d-flex align-items-center justify-content-between">
                    <small className="text-white font-15"><i className="mdi mdi-chevron-right-circle font-20 me-1"></i>Projected Sale</small>
                    <small className="text-white font-16">₹ 4.75 Lakhs</small>
                  </Card.Text>
                  <Card.Text className="m-0 d-flex align-items-center justify-content-between">
                    <small className="text-white font-15"><i className="mdi mdi-chevron-right-circle font-20 me-1"></i>Total Crop Stage Days</small>
                    <small className="text-white font-16">90 Days</small>
                  </Card.Text>
                  <Card.Text className="m-0  d-flex align-items-center justify-content-between">
                    <small className="text-white font-15"><i className="mdi mdi-chevron-right-circle font-20 me-1"></i>Projected Expenses </small>
                    <small className="text-white font-16">₹ 1,15,000</small>
                  </Card.Text>
                  <Card.Text className="m-0 d-flex align-items-center justify-content-between">
                    <small className="text-white font-15"><i className="mdi mdi-chevron-right-circle font-20 me-1"></i>Current Expenses</small>
                    <small className="text-white font-16">₹ 80,000</small>
                  </Card.Text>
                  <Card.Text className="m-0  d-flex align-items-center justify-content-between">
                    <small className="text-white font-15">
                    <i className="mdi mdi-chevron-right-circle font-20 me-1"></i>
                      Projected Profit / Loss{" "}
                    </small>
                    <small className="text-white font-16">INR 50,000/-</small>
                  </Card.Text>
                  
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={6} >
          <Card className="mb-3">
            <Row className="g-0">
              <Col md={5}>
                <Card.Body className="pe-0">
                <Link to="/farmer/farm-details"
                      className="w-100 text-dark">
                  <Card.Img
                    src="http://project.testproject.in/public/assets/images/FarmImg/potato.jpg"
                    className="img-fluid"
                    style={{ height: "200px" }}
                  />
                  </Link>
                </Card.Body>
              </Col>

              <Col md={7} className="bg-gradient-info">
              <Card.Body>
                  <Link to="/farmer/farm-details"
                      className="w-100 text-dark">
                    <Card.Title as="h3" className="text-white">
                      Potato
                    </Card.Title>
                  </Link>

                  <Card.Text className="m-0 d-flex align-items-center justify-content-between">
                    <small className="text-white font-15"><i className="mdi mdi-chevron-right-circle font-20 me-1"></i>Balaji Farm</small>
                    <small className="text-white font-16">2 Acre</small>
                  </Card.Text>
                  <Card.Text className="m-0  d-flex align-items-center justify-content-between">
                    <small className="text-white font-15"><i className="mdi mdi-chevron-right-circle font-20 me-1"></i>Projected Sale</small>
                    <small className="text-white font-16">₹ 4.75 Lakhs</small>
                  </Card.Text>
                  <Card.Text className="m-0 d-flex align-items-center justify-content-between">
                    <small className="text-white font-15"><i className="mdi mdi-chevron-right-circle font-20 me-1"></i>Total Crop Stage Days</small>
                    <small className="text-white font-16">90 Days</small>
                  </Card.Text>
                  <Card.Text className="m-0  d-flex align-items-center justify-content-between">
                    <small className="text-white font-15"><i className="mdi mdi-chevron-right-circle font-20 me-1"></i>Projected Expenses </small>
                    <small className="text-white font-16">₹ 1,15,000</small>
                  </Card.Text>
                  <Card.Text className="m-0 d-flex align-items-center justify-content-between">
                    <small className="text-white font-15"><i className="mdi mdi-chevron-right-circle font-20 me-1"></i>Current Expenses</small>
                    <small className="text-white font-16">₹ 80,000</small>
                  </Card.Text>
                  <Card.Text className="m-0  d-flex align-items-center justify-content-between">
                    <small className="text-white font-15">
                    <i className="mdi mdi-chevron-right-circle font-20 me-1"></i>
                      Projected Profit / Loss{" "}
                    </small>
                    <small className="text-white font-16">INR 50,000/-</small>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Card className="mb-3">
            <Row className="g-0">
              <Col md={5}>
                <Card.Body className="pe-0">
                <Link to="/farmer/farm-details"
                      className="w-100 text-dark">
                  <Card.Img
                    src="http://project.testproject.in/public/assets/images/FarmImg/Cabbage.jpg"
                    className="img-fluid"
                    style={{ height: "200px" }}
                  />
                  </Link>
                </Card.Body>
              </Col>

              <Col md={7} className="bg-gradient-info">
              <Card.Body>
                  <Link to="/farmer/farm-details"
                      className="w-100 text-dark">
                    <Card.Title as="h3" className="text-white">
                     Cabbage
                    </Card.Title>
                  </Link>

                  <Card.Text className="m-0 d-flex align-items-center justify-content-between">
                    <small className="text-white font-15"><i className="mdi mdi-chevron-right-circle font-20 me-1"></i>Balaji Farm</small>
                    <small className="text-white font-16">2 Acre</small>
                  </Card.Text>
                  <Card.Text className="m-0  d-flex align-items-center justify-content-between">
                    <small className="text-white font-15"><i className="mdi mdi-chevron-right-circle font-20 me-1"></i>Projected Sale</small>
                    <small className="text-white font-16">₹ 4.75 Lakhs</small>
                  </Card.Text>
                  <Card.Text className="m-0 d-flex align-items-center justify-content-between">
                    <small className="text-white font-15"><i className="mdi mdi-chevron-right-circle font-20 me-1"></i>Total Crop Stage Days</small>
                    <small className="text-white font-16">90 Days</small>
                  </Card.Text>
                  <Card.Text className="m-0  d-flex align-items-center justify-content-between">
                    <small className="text-white font-15"><i className="mdi mdi-chevron-right-circle font-20 me-1"></i>Projected Expenses </small>
                    <small className="text-white font-16">₹ 1,15,000</small>
                  </Card.Text>
                  <Card.Text className="m-0 d-flex align-items-center justify-content-between">
                    <small className="text-white font-15"><i className="mdi mdi-chevron-right-circle font-20 me-1"></i>Current Expenses</small>
                    <small className="text-white font-16">₹ 80,000</small>
                  </Card.Text>
                  <Card.Text className="m-0  d-flex align-items-center justify-content-between">
                    <small className="text-white font-15">
                    <i className="mdi mdi-chevron-right-circle font-20 me-1"></i>
                      Projected Profit / Loss{" "}
                    </small>
                    <small className="text-white font-16">INR 50,000/-</small>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="mb-3">
            <Row className="g-0">
              <Col md={5}>
                <Card.Body className="pe-0">
                <Link to="/farmer/farm-details"
                      className="w-100 text-dark">
                  <Card.Img
                    src="http://project.testproject.in/public/assets/images/FarmImg/carrots.jpg"
                    className="img-fluid"
                    style={{ height: "200px" }}
                  />
                  </Link>
                </Card.Body>
              </Col>

              <Col md={7} className="bg-gradient-info">
              <Card.Body>
                  <Link to="/farmer/farm-details"
                      className="w-100 text-dark">
                    <Card.Title as="h3" className="text-white">
                      Carrot
                    </Card.Title>
                  </Link>
                  <Card.Text className="m-0 d-flex align-items-center justify-content-between">
                    <small className="text-white font-15"><i className="mdi mdi-chevron-right-circle font-20 me-1"></i>Balaji Farm</small>
                    <small className="text-white font-16">2 Acre</small>
                  </Card.Text>
                  <Card.Text className="m-0  d-flex align-items-center justify-content-between">
                    <small className="text-white font-15"><i className="mdi mdi-chevron-right-circle font-20 me-1"></i>Projected Sale</small>
                    <small className="text-white font-16">₹ 4.75 Lakhs</small>
                  </Card.Text>
                  <Card.Text className="m-0 d-flex align-items-center justify-content-between">
                    <small className="text-white font-15"><i className="mdi mdi-chevron-right-circle font-20 me-1"></i>Total Crop Stage Days</small>
                    <small className="text-white font-16">90 Days</small>
                  </Card.Text>
                  <Card.Text className="m-0  d-flex align-items-center justify-content-between">
                    <small className="text-white font-15"><i className="mdi mdi-chevron-right-circle font-20 me-1"></i>Projected Expenses </small>
                    <small className="text-white font-16">₹ 1,15,000</small>
                  </Card.Text>
                  <Card.Text className="m-0 d-flex align-items-center justify-content-between">
                    <small className="text-white font-15"><i className="mdi mdi-chevron-right-circle font-20 me-1"></i>Current Expenses</small>
                    <small className="text-white font-16">₹ 80,000</small>
                  </Card.Text>
                  <Card.Text className="m-0  d-flex align-items-center justify-content-between">
                    <small className="text-white font-15">
                    <i className="mdi mdi-chevron-right-circle font-20 me-1"></i>
                      Projected Profit / Loss{" "}
                    </small>
                    <small className="text-white font-16">INR 50,000/-</small>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Farmlist;
