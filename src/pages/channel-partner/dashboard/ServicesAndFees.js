import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import PageTitle from "../../../components/PageTitle";


function ServiceAndFees() {
  return (
    <>  
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Service And Fees",
            path: "/farmer/service-details",
            active: true,
          },
        ]}
        title={"Service And Fees"}
      />
          <Card>
            <Card.Body>
              <h4>GENERAL INFORMATION</h4>
              <p>AgroLab, Inc. is an independent agronomy laboratory serving professional crop advisors, agricultural support businesses, farmers, golf courses, lawn care companies, soil - compost manufactures and more</p>
            </Card.Body>
            <div className="px-4">
              <Row>
                <Col>
                  <div>
                    <h5>TURNAROUND TIME</h5>
                    <ul className='ps-2 mt-3 mb-4'>
                      <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"</li>
                      <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"</li>
                    </ul>
                  </div>
                  <div>
                    <h5>SHIPPING SERVICES</h5>
                    <ul className='ps-2 mt-3 mb-4'>
                      <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"</li>
                      <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"</li>
                    </ul>
                  </div>
                </Col>
                <Col>
                <div>
                    <h5>REPORTING FORMAT</h5>
                    <ul className='ps-2 mt-3 mb-4'>
                      <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"</li>
                      <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"</li>
                    </ul>
                  </div>
                  <div>
                    <h5>ACCOUNT SETUP</h5>
                    <ul className='ps-2 mt-3 mb-4'>
                      <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"</li>
                      <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"</li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>
                    <h5>BILLING</h5>
                    <ul className='ps-2 mt-3 mb-4'>
                      <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"</li>
                      <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"</li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div>
                    <h5>ONLINE SERVICES</h5>
                    <ul className='ps-2 mt-3 mb-4'>
                      <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"</li>
                      <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
            
          </Card>
          <Card>
            <Card.Body>
              <h4>SOIL TEST ANALYSIS</h4>
              <div className="px-4 mt-4">
                <Row>
                  <Col md={3} sm={12}>
                    <h5>Basic Soil Fertility (BSF)</h5>
                  </Col>
                  <Col md={7} sm={12}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                  </Col>
                  <Col md={2} sm={12}>
                    <h5>
                      ₹ 10.00
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col md={3} sm={12}>
                    <h5>Basic Soil Fertility (BSF)</h5>
                  </Col>
                  <Col md={7} sm={12}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                  </Col>
                  <Col md={2} sm={12}>
                    <h5>
                      ₹ 10.00
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col md={3} sm={12}>
                    <h5>Basic Soil Fertility (BSF)</h5>
                  </Col>
                  <Col md={7} sm={12}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                  </Col>
                  <Col md={2} sm={12}>
                    <h5>
                      ₹ 10.00
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col md={3} sm={12}>
                    <h5>Basic Soil Fertility (BSF)</h5>
                  </Col>
                  <Col md={7} sm={12}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                  </Col>
                  <Col md={2} sm={12}>
                    <h5>
                      ₹ 10.00
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col md={3} sm={12}>
                    <h5>Basic Soil Fertility (BSF)</h5>
                  </Col>
                  <Col md={7} sm={12}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                  </Col>
                  <Col md={2} sm={12}>
                    <h5>
                      ₹ 10.00
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col md={3} sm={12}>
                    <h5>Basic Soil Fertility (BSF)</h5>
                  </Col>
                  <Col md={7} sm={12}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                  </Col>
                  <Col md={2} sm={12}>
                    <h5>
                      ₹ 10.00
                    </h5>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h4>LAWN AND TURF ANALYSIS</h4>
              <div className="px-4 mt-4">
                <Row>
                  <Col md={3} sm={12}>
                    <h5>Basic Soil Fertility (BSF)</h5>
                  </Col>
                  <Col md={7} sm={12}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                  </Col>
                  <Col md={2} sm={12}>
                    <h5>
                      ₹ 10.00
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col md={3} sm={12}>
                    <h5>Basic Soil Fertility (BSF)</h5>
                  </Col>
                  <Col md={7} sm={12}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                  </Col>
                  <Col md={2} sm={12}>
                    <h5>
                      ₹ 10.00
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col md={3} sm={12}>
                    <h5>Basic Soil Fertility (BSF)</h5>
                  </Col>
                  <Col md={7} sm={12}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                  </Col>
                  <Col md={2} sm={12}>
                    <h5>
                      ₹ 10.00
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col md={3} sm={12}>
                    <h5>Basic Soil Fertility (BSF)</h5>
                  </Col>
                  <Col md={7} sm={12}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                  </Col>
                  <Col md={2} sm={12}>
                    <h5>
                      ₹ 10.00
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col md={3} sm={12}>
                    <h5>Basic Soil Fertility (BSF)</h5>
                  </Col>
                  <Col md={7} sm={12}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                  </Col>
                  <Col md={2} sm={12}>
                    <h5>
                      ₹ 10.00
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col md={3} sm={12}>
                    <h5>Basic Soil Fertility (BSF)</h5>
                  </Col>
                  <Col md={7} sm={12}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                  </Col>
                  <Col md={2} sm={12}>
                    <h5>
                      ₹ 10.00
                    </h5>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
    </>
  );
}

export default ServiceAndFees;
