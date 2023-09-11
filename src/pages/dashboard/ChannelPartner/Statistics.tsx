import React from 'react';
import { Row, Col,Card, Button } from 'react-bootstrap';
import CountUp from 'react-countup';
import {Link} from 'react-router-dom';

// components
import StatisticsChartWidget from '../../../components/StatisticsChartWidget';

const Statistics = () => {
    return (
      <>
        {/* <Row>
          <Col md={6} xl={3}>
            <Card className="rounded">
              <Card.Body className="ps-0 py-0 ">
                <div className="d-flex align-items-start">
                  <div
                    className="avatar-lg  bg-gradient-secondary rounded"
                    style={{ padding: "50px" }}
                  >
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-form-select"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h3 className="mt-0">
                      <span>
                        <CountUp duration={1} end={530} separator="," />
                      </span>
                    </h3>
                    <p className="text-muted mb-0">Total Purchase Due</p>
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
                    className="avatar-lg  bg-gradient-danger rounded"
                    style={{ padding: "50px" }}
                  >
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-sale"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h3 className="mt-0">
                      <span>
                        <CountUp duration={1} end={700} separator="," />
                      </span>
                    </h3>
                    <p className="text-muted mb-0">Total Sales Due</p>
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
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-assistant"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h3 className="mt-0">
                      <span>
                        <CountUp duration={1} end={980} separator="," />
                      </span>
                    </h3>
                    <p className="text-muted mb-0">Total Sales Amount</p>
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
                    <p className="text-muted mb-0">Total Expense Amount</p>
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
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-form-select"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h3 className="mt-0">
                      <span>
                        <CountUp duration={1} end={330} separator="," />
                      </span>
                    </h3>
                    <p className="text-muted mb-0">Todays Total Purchase</p>
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
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-cash-usd-outline"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h3 className="mt-0">
                      <span>
                        <CountUp duration={1} end={900} separator="," />
                      </span>
                    </h3>
                    <p className="text-muted mb-0">
                      Total Payment Received(Sales)
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
                    className="avatar-lg  bg-gradient-purple rounded"
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
                    <p className="text-muted mb-0">Todays Total Sales</p>
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
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-basket"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h3 className="mt-0">
                      <span>
                        <CountUp duration={1} end={180} separator="," />
                      </span>
                    </h3>
                    <p className="text-muted mb-0">Today Total Expense</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
        <Row>
          <Col>
            <Card className="widget-bg-color-icon bg-gradient-primary">
              <Card.Body className="card-body">
                <Link to="/channel/channel-partners">
                  <div className="d-flex align-items-start">
                    <div className="avatar-lg  p-4">
                      <i className="avatar-title display-4 m-0 text-white mdi mdi-account-heart"></i>
                    </div>
                    <div className="flex-1 text-end align-self-center">
                      <h3 className="mt-0 text-white ">
                        <span>
                          <CountUp duration={1} end={11280} separator="," />
                        </span>
                      </h3>
                      <p className="text-white mb-0">Total Channel Partners</p>
                    </div>
                  </div>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="widget-bg-color-icon bg-gradient-primary">
              <Card.Body className="card-body">
                <Link to="/channel/garages">
                  <div className="d-flex align-items-start">
                    <div className="avatar-lg  p-4">
                      <i className="avatar-title display-4 m-0 text-white mdi mdi-star-plus"></i>
                    </div>
                    <div className="flex-1 text-end align-self-center">
                      <h3 className="mt-0 text-white">
                        <span>
                          <CountUp duration={1} end={33330} separator="," />
                        </span>
                      </h3>
                      <p className="text-white mb-0">Total Garages</p>
                    </div>
                  </div>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="widget-bg-color-icon bg-gradient-primary">
              <Card.Body className="card-body">
                <Link to="/channel/students">
                  <div className="d-flex align-items-start">
                    <div className="avatar-lg  p-4">
                      <i className="avatar-title display-4 m-0 text-white mdi mdi-account-group"></i>
                    </div>
                    <div className="flex-1 text-end align-self-center">
                      <h3 className="mt-0 text-white">
                        <span>
                          <CountUp duration={1} end={44400} separator="," />
                        </span>
                      </h3>
                      <p className="text-white mb-0">Total Students</p>
                    </div>
                  </div>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="widget-bg-color-icon bg-gradient-primary">
              <Card.Body className="card-body">
                <Link to="/channel/classes">
                  <div className="d-flex align-items-start">
                    <div className="avatar-lg  p-4">
                      <i className="avatar-title display-4 m-0 text-white mdi mdi-align-vertical-bottom"></i>
                    </div>
                    <div className="flex-1 text-end align-self-center">
                      <h3 className="mt-0 text-white">
                        <span>
                          <CountUp duration={1} end={22276} separator="," />
                        </span>
                      </h3>
                      <p className="text-white mb-0">Total Classes</p>
                    </div>
                  </div>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="widget-bg-color-icon bg-gradient-pink">
              <Card.Body className="card-body">
                <Link to="/channel/teachers">
                  <div className="d-flex align-items-start">
                    <div className="avatar-lg  p-4">
                      <i className="avatar-title display-4 m-0 text-white mdi mdi-account-child"></i>
                    </div>
                    <div className="flex-1 text-end align-self-center">
                      <h3 className="mt-0 text-white ">
                        <span>
                          <CountUp duration={1} end={14580} separator="," />
                        </span>
                      </h3>
                      <p className="text-white mb-0">Total Teachers</p>
                    </div>
                  </div>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="widget-bg-color-icon bg-gradient-pink">
              <Card.Body className="card-body">
                <Link to="/channel/career-experts">
                  <div className="d-flex align-items-start">
                    <div className="avatar-lg  p-4">
                      <i className="avatar-title display-4 m-0 text-white mdi mdi-account-box-multiple"></i>
                    </div>
                    <div className="flex-1 text-end align-self-center">
                      <h3 className="mt-0 text-white">
                        <span>
                          <CountUp duration={1} end={78260} separator="," />
                        </span>
                      </h3>
                      <p className="text-white mb-0">Total Career Experts</p>
                    </div>
                  </div>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="widget-bg-color-icon bg-gradient-pink">
              <Card.Body className="card-body">
                <Link to="/channel/garages">
                  <div className="d-flex align-items-start">
                    <div className="avatar-lg  p-4">
                      <i className="avatar-title display-4 m-0 text-white mdi mdi-car-cog"></i>
                    </div>
                    <div className="flex-1 text-end align-self-center">
                      <h3 className="mt-0 text-white">
                        <span>
                          <CountUp duration={1} end={11150} separator="," />
                        </span>
                      </h3>
                      <p className="text-white mb-0">Total Garages</p>
                    </div>
                  </div>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="widget-bg-color-icon bg-gradient-pink">
              <Card.Body className="card-body">
                <Link to="/farmer/total-sales">
                  <div className="d-flex align-items-start">
                    <div className="avatar-lg  p-4">
                      <i className="avatar-title display-4 m-0 text-white mdi mdi-cash-usd"></i>
                    </div>
                    <div className="flex-1 text-end align-self-center">
                      <h3 className="mt-0 text-white">
                        <span>
                          <CountUp duration={1} end={22236} separator="," />
                        </span>
                      </h3>
                      <p className="text-white mb-0">Total Earned</p>
                    </div>
                  </div>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* <h3 className="text-dark mb-3">Ongoing Crops</h3>
        <Row>
          <Col>
            <Card className="widget-bg-color-icon">
              <Card.Body className="card-body">
                <div className="">
                  <div className="d-flex justify-content-between">
                    <div className="avatar-lg rounded-circle bg-gradient-pink">
                      <i className="font-24 avatar-title mdi mdi-barley"></i>
                    </div>
                    <h3 className="mt-3 text-gradient-pink">Tomato</h3>
                  </div>

                  <div className="flex-1 align-self-center mt-3">
                    <ul className="text-start">
                      <li>Farm Name</li>
                      <li>Area</li>
                      <li>Days old:50</li>
                    </ul>
                    <Link to="/farmer/ongoing-crops">
                      <Button
                        className="btn-bordered rounded-pill waves-effect waves-light btn w-100 bg-gradient-pink"
                        style={{ border: "none" }}
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="widget-bg-color-icon">
              <Card.Body className="card-body">
                <div className="">
                  <div className="d-flex justify-content-between">
                    <div className="avatar-lg rounded-circle bg-gradient-info">
                      <i className="font-24 avatar-title mdi mdi-barley"></i>
                    </div>
                    <h3 className="mt-3 text-gradient-info">Potato</h3>
                  </div>

                  <div className="flex-1 align-self-center mt-3">
                    <ul className="text-start">
                      <li>Farm Name</li>
                      <li>Area</li>
                      <li>Days old:50</li>
                    </ul>
                    <Link to="/farmer/ongoing-crops">
                      <Button
                        className="btn-bordered rounded-pill waves-effect waves-light btn w-100 bg-gradient-info"
                        style={{ border: "none" }}
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="widget-bg-color-icon">
              <Card.Body className="card-body">
                <div className="">
                  <div className="d-flex justify-content-between">
                    <div className="avatar-lg rounded-circle bg-gradient-primary">
                      <i className="font-24 avatar-title mdi mdi-barley"></i>
                    </div>
                    <h3 className="mt-3 text-gradient-primary">Cabbage</h3>
                  </div>

                  <div className="flex-1 align-self-center mt-3">
                    <ul className="text-start">
                      <li>Farm Name</li>
                      <li>Area</li>
                      <li>Days old:50</li>
                    </ul>
                    <Link to="/farmer/ongoing-crops">
                      <Button
                        className="btn-bordered rounded-pill waves-effect waves-light btn w-100 bg-gradient-primary"
                        style={{ border: "none" }}
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h3 className="text-dark mb-3">View More</h3>
        <Row>
          <Col>
            <Card className="widget-bg-color-icon bg-gradient-orange">
              <Card.Body className="card-body">
                <Link to="/farmer/farm-list">
                  <div className="d-flex align-items-start">
                    <div className="avatar-lg  p-4">
                      <i className="avatar-title display-4 m-0 text-white mdi mdi-cart"></i>
                    </div>
                    <div className="flex-1 text-end align-self-center">
                      <h3 className="mt-0 text-white">
                        <span>
                          <CountUp duration={1} end={200} separator="," />
                        </span>
                      </h3>
                      <p className="text-white mb-0">Total Farms</p>
                    </div>
                  </div>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="widget-bg-color-icon bg-gradient-info">
              <Card.Body className="card-body">
                <Link to="/farmer/weather-forcast">
                  <div className="d-flex align-items-start">
                    <div className="avatar-lg  p-4">
                      <i className="avatar-title display-4 m-0 text-white mdi mdi-cart"></i>
                    </div>
                    <div className="flex-1 text-end align-self-center">
                      <h3 className="mt-0 text-white">
                        <span>
                          <CountUp duration={1} end={200} separator="," />
                        </span>
                      </h3>
                      <p className="text-white mb-0">Weather Forecast</p>
                    </div>
                  </div>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="widget-bg-color-icon bg-gradient-secondary">
              <Card.Body className="card-body">
                <Link to="/farmer/mandi-prices">
                  <div className="d-flex align-items-start">
                    <div className="avatar-lg  p-4">
                      <i className="avatar-title display-4 m-0 text-white mdi mdi-barley"></i>
                    </div>
                    <div className="flex-1 text-end align-self-center">
                      <h3 className="mt-0 text-white">
                        <span>
                          <CountUp duration={1} end={200} separator="," />
                        </span>
                      </h3>
                      <p className="text-white mb-0">Mandi Price</p>
                    </div>
                  </div>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="widget-bg-color-icon bg-gradient-pink">
              <Card.Body className="card-body">
                <Link to="/farmer/contract-farming">
                  <div className="d-flex align-items-start">
                    <div className="avatar-lg  p-4">
                      <i className="avatar-title display-4 m-0 text-white mdi mdi-diamond"></i>
                    </div>
                    <div className="flex-1 text-end align-self-center">
                      <h3 className="mt-0 text-white">
                        <span>
                          <CountUp duration={1} end={270} separator="," />
                        </span>
                      </h3>
                      <p className="text-white mb-0">Total Contracts</p>
                    </div>
                  </div>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
      </>
    );
};

export default Statistics;
