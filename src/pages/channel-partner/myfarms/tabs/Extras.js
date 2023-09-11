import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Extras = () => {
  return (
    <>
      <Row>
        <Col md={4}>
          <Card className="widget-bg-color-icon bg-gradient-primary">
            <Card.Body className="card-body">
              <Link to="/farmer/crop-insurance">
                <div className="d-flex align-items-start">
                  <div className="avatar-md ">
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-barley"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h4 className="mt-0 text-white">Crop Care</h4>
                  </div>
                </div>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="widget-bg-color-icon bg-gradient-secondary">
            <Card.Body className="card-body">
              <Link to="/farmer/farm-guidance">
                <div className="d-flex align-items-start">
                  <div className="avatar-md ">
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-barley"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h4 className="mt-0 text-white">Farm Guidance</h4>
                  </div>
                </div>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="widget-bg-color-icon bg-gradient-pink">
            <Card.Body className="card-body">
              <Link to="/farmer/farm-tips">
                <div className="d-flex align-items-start">
                  <div className="avatar-md ">
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-barley"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h4 className="mt-0 text-white">Tips For Farming</h4>
                  </div>
                </div>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="widget-bg-color-icon bg-gradient-orange">
            <Card.Body className="card-body">
              <Link to="/farmer/weather-forcast">
                <div className="d-flex align-items-start">
                  <div className="avatar-md ">
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-weather-hail"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h4 className="mt-0 text-white">Weather Forcast</h4>
                  </div>
                </div>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Extras;
