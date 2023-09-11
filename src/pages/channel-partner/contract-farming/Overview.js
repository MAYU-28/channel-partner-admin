import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";
import { Card } from "react-bootstrap";

const Overview = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Contract Farming Overview",
            path: "/farmer/contract-farming",
            active: true,
          },
        ]}
        title={"Contract Farming Overview"}
      />
      <Container>
        
        <Row>
          <Col>
            <Card className="bg-gradient-pink">
              <Card.Body>
                <h4 className="text-white">1 Crop Contract</h4>
                <p className="text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link to="/farmer/contract-details" className="text-white">
                  <button className="btn border text-white w-100 rounded-pill">
                    View Contract
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-gradient-orange">
              <Card.Body>
                <h4 className="text-white">2 Crop Contract</h4>
                <p className="text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link to="/farmer/contract-details" className="text-white">
                  <button className="btn border text-white w-100 rounded-pill">
                    View Contract
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-gradient-info">
              <Card.Body>
                <h4 className="text-white">3 Crop Contract</h4>
                <p className="text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link to="/farmer/contract-details" className="text-white">
                  <button className="btn border text-white w-100 rounded-pill">
                    View Contract
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-gradient-purple">
              <Card.Body>
                <h4 className="text-white">4 Crop Contract</h4>
                <p className="text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link to="/farmer/contract-details" className="text-white">
                  <button className="btn border text-white w-100 rounded-pill">
                    View Contract
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h4>Modules</h4>
        <Row>
          <Col md={3} sm={12}>
            <Card className="bg-gradient-primary">
              <Card.Body>
                <div class="d-flex align-items-start">
                  <div class="avatar-lg  p-4">
                    <i class="avatar-title display-4 m-0 text-white mdi mdi-bookmark-check"></i>
                  </div>
                  <div class="flex-1 text-end align-self-center">
                    <h4 class="text-white mb-0 font-24">Planning</h4>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card className="bg-gradient-info">
              <Card.Body>
                <div class="d-flex align-items-start">
                  <div class="avatar-lg  p-4">
                    <i class="avatar-title display-4 m-0 text-white mdi mdi-basket-plus"></i>
                  </div>
                  <div class="flex-1 text-end align-self-center">
                    <h4 class="text-white mb-0 font-24">Contract farming</h4>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card className="bg-gradient-primary">
              <Card.Body>
                <div class="d-flex align-items-start">
                  <div class="avatar-lg  p-4">
                    <i class="avatar-title display-4 m-0 text-white mdi mdi-auto-fix"></i>
                  </div>
                  <div class="flex-1 text-end align-self-center">
                    <h4 class="text-white mb-0 font-24">Production</h4>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card className="bg-gradient-info">
              <Card.Body>
                <div class="d-flex align-items-start">
                  <div class="avatar-lg  p-4">
                    <i class="avatar-title display-4 m-0 text-white mdi mdi-account-box"></i>
                  </div>
                  <div class="flex-1 text-end align-self-center">
                    <h4 class="text-white mb-0 font-24">Human Resources</h4>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card className="bg-gradient-info">
              <Card.Body>
                <div class="d-flex align-items-start">
                  <div class="avatar-lg  p-4">
                    <i class="avatar-title display-4 m-0 text-white mdi mdi-sale"></i>
                  </div>
                  <div class="flex-1 text-end align-self-center">
                    <h4 class="text-white mb-0 font-24">Purchase</h4>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card className="bg-gradient-primary">
              <Card.Body>
                <div class="d-flex align-items-start">
                  <div class="avatar-lg  p-4">
                    <i class="avatar-title display-4 m-0 text-white mdi mdi-seal"></i>
                  </div>
                  <div class="flex-1 text-end align-self-center">
                    <h4 class="text-white mb-0 font-24">Inventory</h4>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card className="bg-gradient-info">
              <Card.Body>
                <div class="d-flex align-items-start">
                  <div class="avatar-lg  p-4">
                    <i class="avatar-title display-4 m-0 text-white mdi mdi-rhombus-split"></i>
                  </div>
                  <div class="flex-1 text-end align-self-center">
                    <h4 class="text-white mb-0 font-24">Post production</h4>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card className="bg-gradient-primary">
              <Card.Body>
                <div class="d-flex align-items-start">
                  <div class="avatar-lg  p-4">
                    <i class="avatar-title display-4 m-0 text-white mdi mdi-sale"></i>
                  </div>
                  <div class="flex-1 text-end align-self-center">
                    <h4 class="text-white mb-0 font-24">Sales</h4>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <h4 className="text-info">Contract Farming Overview</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry.Lorem Ipsum is
                  simply dummy text of the printing and typesetting
                  industry.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry.Lorem Ipsum is
                  simply dummy text of the printing and typesetting
                  industry.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
                <h4 className="text-info">Contract Farming Overview Listing</h4>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet</p>

                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Overview;
