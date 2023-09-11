import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Details = () => {
  return (
    <>
      <Row>
        <Col md={4}>
          <Card className="widget-bg-color-icon bg-gradient-primary">
            <Card.Body className="card-body">
              <Link to="/apps/chat">
                <div className="d-flex align-items-start">
                  <div className="avatar-md ">
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-barley"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h4 className="mt-0 text-white">Discussion Farm</h4>
                  </div>
                </div>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="widget-bg-color-icon bg-gradient-secondary">
            <Card.Body className="card-body">
              <Link to="/farmer/farm-insurance">
                <div className="d-flex align-items-start">
                  <div className="avatar-md ">
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-ambulance"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h4 className="mt-0 text-white">Farm Insurance</h4>
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

export default Details;
