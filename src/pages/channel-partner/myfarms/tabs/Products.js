import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <Row>
        <Col md={4}>
          <Card className="widget-bg-color-icon bg-gradient-primary">
            <Card.Body className="card-body">
              <Link to="/farmer/buy-products">
                <div className="d-flex align-items-start">
                  <div className="avatar-md ">
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-cart-arrow-down"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h4 className="mt-0 text-white">Buy Products</h4>
                  </div>
                </div>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="widget-bg-color-icon bg-gradient-orange">
            <Card.Body className="card-body">
              <Link to="/farmer/sell-products">
                <div className="d-flex align-items-start">
                  <div className="avatar-md ">
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-cart-arrow-up"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h4 className="mt-0 text-white">Sell Products</h4>
                  </div>
                </div>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="widget-bg-color-icon bg-gradient-secondary">
            <Card.Body className="card-body">
              <Link to="/farmer/mandi-prices">
                <div className="d-flex align-items-start">
                  <div className="avatar-md ">
                    <i className="avatar-title display-4 m-0 text-white mdi mdi-cards-club"></i>
                  </div>
                  <div className="flex-1 text-end align-self-center">
                    <h4 className="mt-0 text-white">Mandi Prices</h4>
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

export default Products;
