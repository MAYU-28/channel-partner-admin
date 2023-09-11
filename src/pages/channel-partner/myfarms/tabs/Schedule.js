import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Schedule = () => {
  return (
    <>
      <Row>
        <Col md={4}>
          <Card className="widget-bg-color-icon bg-gradient-pink">
            <Card.Body className="card-body">
              <Link to="/farmer/new-schedule">
                <div className="d-flex align-items-start">
                  <div className="avatar-md">
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-timelapse"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h4 className="mt-0 text-white">Current Schedule</h4>
                  </div>
                </div>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="widget-bg-color-icon bg-gradient-secondary">
            <Card.Body className="card-body">
              <Link to="/farmer/new-schedule">
                <div className="d-flex align-items-start">
                  <div className="avatar-md  ">
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-timelapse"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h4 className="mt-0 text-white">New Schedule</h4>
                  </div>
                </div>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="widget-bg-color-icon bg-gradient-primary">
            <Card.Body className="card-body">
              <Link to="/farmer/schedule-history">
                <div className="d-flex align-items-start">
                  <div className="avatar-md ">
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-timelapse"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h4 className="mt-0 text-white">History Schedule</h4>
                  </div>
                </div>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="widget-bg-color-icon bg-gradient-secondary">
            <Card.Body className="card-body">
              <Link to="/farmer/plant-analysis">
                <div className="d-flex align-items-start">
                  <div className="avatar-md ">
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-barley"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h4 className="mt-0 text-white">Plant Analysis</h4>
                  </div>
                </div>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="widget-bg-color-icon bg-gradient-purple">
            <Card.Body className="card-body">
              <Link to="/farmer/biological-analysis">
                <div className="d-flex align-items-start">
                  <div className="avatar-md ">
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-bird"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h4 className="mt-0 text-white">
                      Biological Soil Analysis
                    </h4>
                  </div>
                </div>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="widget-bg-color-icon bg-gradient-orange">
            <Card.Body className="card-body">
              <Link to="/farmer/water-analysis">
                <div className="d-flex align-items-start">
                  <div className="avatar-md">
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-cup"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h4 className="mt-0 text-white">Water Analysis</h4>
                  </div>
                </div>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="widget-bg-color-icon bg-gradient-primary">
            <Card.Body className="card-body">
              <Link to="/farmer/soil-analysis">
                <div className="d-flex align-items-start">
                  <div className="avatar-md ">
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-cursor-pointer"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h4 className="mt-0 text-white">Soil Analysis</h4>
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

export default Schedule;
