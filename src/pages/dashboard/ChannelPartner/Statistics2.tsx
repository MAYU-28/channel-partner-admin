import React from 'react';
import { Row, Col,Card, Button } from 'react-bootstrap';
import CountUp from 'react-countup';
import {Link} from 'react-router-dom';


const Statistic2 = () => {
    return (
      <>
        <Row>
          <Col md={6} xl={3}>
            <Card className="rounded">
              <Card.Body className="ps-0 py-0 ">
                <div className="d-flex align-items-start">
                  <div
                    className="avatar-lg  bg-gradient-secondary rounded"
                    style={{ padding: "50px" }}
                  >
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-cash-usd"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h3 className="mt-0">
                      <span>
                        <CountUp duration={1} end={53330} separator="," />
                      </span>
                    </h3>
                    <p className="text-muted mb-0">Monthly income accumulated</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={3}>
            <Card className="rounded">
              <Card.Body className="ps-0 py-0">
                <div className="d-flex align-items-start">
                  <div
                    className="avatar-lg  bg-gradient-secondary rounded"
                    style={{ padding: "50px" }}
                  >
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-cash-refund"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h3 className="mt-0">
                      <span>
                        <CountUp duration={1} end={34980} separator="," />
                      </span>
                    </h3>
                    <p className="text-muted mb-0">Balance in Wallet</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={3}>
            <Card className="rounded">
              <Card.Body className="ps-0 py-0">
                <div className="d-flex align-items-start">
                  <div
                    className="avatar-lg  bg-gradient-secondary rounded"
                    style={{ padding: "50px" }}
                  >
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-account-group-outline"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h3 className="mt-0">
                      <span>
                        <CountUp duration={1} end={700} separator="," />
                      </span>
                    </h3>
                    <p className="text-muted mb-0">Total Direct Channel Partners</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={3}>
            <Card className="rounded">
              <Card.Body className="ps-0 py-0">
                <div className="d-flex align-items-start">
                  <div
                    className="avatar-lg  bg-gradient-secondary rounded"
                    style={{ padding: "50px" }}
                  >
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-account-group"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h3 className="mt-0">
                      <span>
                        <CountUp duration={1} end={9980} separator="," />
                      </span>
                    </h3>
                    <p className="text-muted mb-0">Total Indirect Channel Partners</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={3}>
            <Card className="rounded">
              <Card.Body className="ps-0 py-0 ">
                <div className="d-flex align-items-start">
                  <div
                    className="avatar-lg  bg-gradient-primary rounded"
                    style={{ padding: "50px" }}
                  >
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-car-cog"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h3 className="mt-0">
                      <span>
                        <CountUp duration={1} end={330} separator="," />
                      </span>
                    </h3>
                    <p className="text-muted mb-0">Total Direct Garages</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={3}>
            <Card className="rounded">
              <Card.Body className="ps-0 py-0">
                <div className="d-flex align-items-start">
                  <div
                    className="avatar-lg  bg-gradient-primary rounded"
                    style={{ padding: "50px" }}
                  >
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-car-cog"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h3 className="mt-0">
                      <span>
                        <CountUp duration={1} end={900} separator="," />
                      </span>
                    </h3>
                    <p className="text-muted mb-0">
                    Total Indirect Garages
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={3}>
            <Card className="rounded">
              <Card.Body className="ps-0 py-0">
                <div className="d-flex align-items-start">
                  <div
                    className="avatar-lg  bg-gradient-primary rounded"
                    style={{ padding: "50px" }}
                  >
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-assistant"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h3 className="mt-0">
                      <span>
                        <CountUp duration={1} end={580} separator="," />
                      </span>
                    </h3>
                    <p className="text-muted mb-0">Total Direct Students</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={3}>
            <Card className="rounded">
              <Card.Body className="ps-0 py-0">
                <div className="d-flex align-items-start">
                  <div
                    className="avatar-lg  bg-gradient-primary rounded"
                    style={{ padding: "50px" }}
                  >
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-basket"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h3 className="mt-0">
                      <span>
                        <CountUp duration={1} end={180} separator="," />
                      </span>
                    </h3>
                    <p className="text-muted mb-0">Total Indirect Students</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={3}>
            <Card className="rounded">
              <Card.Body className="ps-0 py-0 ">
                <div className="d-flex align-items-start">
                  <div
                    className="avatar-lg  bg-gradient-pink rounded"
                    style={{ padding: "50px" }}
                  >
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-book-open-page-variant"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h3 className="mt-0">
                      <span>
                        <CountUp duration={1} end={930} separator="," />
                      </span>
                    </h3>
                    <p className="text-muted mb-0">Total Direct Classes</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={3}>
            <Card className="rounded">
              <Card.Body className="ps-0 py-0">
                <div className="d-flex align-items-start">
                  <div
                    className="avatar-lg  bg-gradient-pink rounded"
                    style={{ padding: "50px" }}
                  >
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-book-open-page-variant"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h3 className="mt-0">
                      <span>
                        <CountUp duration={1} end={500} separator="," />
                      </span>
                    </h3>
                    <p className="text-muted mb-0">
                    Total Indirect Classes
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={3}>
            <Card className="rounded">
              <Card.Body className="ps-0 py-0">
                <div className="d-flex align-items-start">
                  <div
                    className="avatar-lg  bg-gradient-pink rounded"
                    style={{ padding: "50px" }}
                  >
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-book-open-page-variant"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h3 className="mt-0">
                      <span>
                        <CountUp duration={1} end={480} separator="," />
                      </span>
                    </h3>
                    <p className="text-muted mb-0">Total Direct Teachers</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={3}>
            <Card className="rounded">
              <Card.Body className="ps-0 py-0">
                <div className="d-flex align-items-start">
                  <div
                    className="avatar-lg  bg-gradient-pink rounded"
                    style={{ padding: "50px" }}
                  >
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-book-open-page-variant"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h3 className="mt-0">
                      <span>
                        <CountUp duration={1} end={480} separator="," />
                      </span>
                    </h3>
                    <p className="text-muted mb-0">Total Indirect Teachers</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={3}>
            <Card className="rounded">
              <Card.Body className="ps-0 py-0 ">
                <div className="d-flex align-items-start">
                  <div
                    className="avatar-lg  bg-gradient-orange rounded"
                    style={{ padding: "50px" }}
                  >
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-gamepad-circle"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h3 className="mt-0">
                      <span>
                        <CountUp duration={1} end={930} separator="," />
                      </span>
                    </h3>
                    <p className="text-muted mb-0">Total Direct Career Experts</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={3}>
            <Card className="rounded">
              <Card.Body className="ps-0 py-0">
                <div className="d-flex align-items-start">
                  <div
                    className="avatar-lg  bg-gradient-orange rounded"
                    style={{ padding: "50px" }}
                  >
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-gamepad-circle-outline"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h3 className="mt-0">
                      <span>
                        <CountUp duration={1} end={500} separator="," />
                      </span>
                    </h3>
                    <p className="text-muted mb-0">
                    Total Indirect Career Experts
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={3}>
            <Card className="rounded">
              <Card.Body className="ps-0 py-0">
                <div className="d-flex align-items-start">
                  <div
                    className="avatar-lg  bg-gradient-orange rounded"
                    style={{ padding: "50px" }}
                  >
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-school"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h3 className="mt-0">
                      <span>
                        <CountUp duration={1} end={480} separator="," />
                      </span>
                    </h3>
                    <p className="text-muted mb-0">Total Direct Schools</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={3}>
            <Card className="rounded">
              <Card.Body className="ps-0 py-0">
                <div className="d-flex align-items-start">
                  <div
                    className="avatar-lg  bg-gradient-orange rounded"
                    style={{ padding: "50px" }}
                  >
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-school-outline"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h3 className="mt-0">
                      <span>
                        <CountUp duration={1} end={480} separator="," />
                      </span>
                    </h3>
                    <p className="text-muted mb-0">Total Indirect Schools</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
};

export default Statistic2;
