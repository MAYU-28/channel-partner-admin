import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const Products = () => {
  return (
    <>
      <Row>
        <Col md={12}>
          <div className="d-flex justify-content-between">
            <h4 className="text-info">Gallery</h4>
            <Button className="btn btn-primary mb-2">
              {" "}
              <i className=" mdi mdi-plus"></i> Upload Image
            </Button>
          </div>
        </Col>
        <Col md={4}>
          <Card className="widget-bg-color-icon">
            <Card.Body className="card-body p-1 rounded">
              <img
                src="http://project.testproject.in/public/assets/images/FarmImg/farm-1.jpg"
                className="w-100"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="widget-bg-color-icon">
            <Card.Body className="card-body p-1 rounded">
              <img
                src="http://project.testproject.in/public/assets/images/FarmImg/farm-1.jpg"
                className="w-100"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="widget-bg-color-icon">
            <Card.Body className="card-body p-1 rounded">
              <img
                src="http://project.testproject.in/public/assets/images/FarmImg/farm-1.jpg"
                className="w-100"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="widget-bg-color-icon">
            <Card.Body className="card-body p-1 rounded">
              <img
                src="http://project.testproject.in/public/assets/images/FarmImg/farm-1.jpg"
                className="w-100"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="widget-bg-color-icon">
            <Card.Body className="card-body p-1 rounded">
              <img
                src="http://project.testproject.in/public/assets/images/FarmImg/farm-1.jpg"
                className="w-100"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="widget-bg-color-icon">
            <Card.Body className="card-body p-1 rounded">
              <img
                src="http://project.testproject.in/public/assets/images/FarmImg/farm-1.jpg"
                className="w-100"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Products;
