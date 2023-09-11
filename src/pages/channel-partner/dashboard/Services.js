import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";
import {Link} from 'react-router-dom'

function AboutCompany() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Services",
            path: "/farmer/services",
            active: true,
          },
        ]}
        title={"Services"}
      />
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="mb-0">Agrola Services</h3>
        <Link to='/farmer/request-advisory'>
          <Button className="btn btn-primary rounded-pill">Request Advisory</Button>
        </Link>
      </div>
      <Row>
        <Col md={3}>
          <Card>
            <Card.Body>
              <div className="d-flex">
                <div class="avatar-sm p-2 pt-4">
                  <i class="avatar-title display-4 m-0 text-success mdi mdi-check-decagram"></i>
                </div>
                <div className="ps-3">
                  <h4 className="text-dark">Soil Test Analysis</h4>
                  <p>Basic Soil Fertility (BSF) Soil pH (1:1), Buffer pH, Or...</p>
                </div>
              </div>
              <Link to='/farmer/service-details'>
                <Button className="btn btn-primary rounded-pill mt-3 w-100">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <div className="d-flex">
                <div class="avatar-sm p-2 pt-4">
                  <i class="avatar-title display-4 m-0 text-success mdi mdi-check-decagram"></i>
                </div>
                <div className="ps-3">
                  <h4 className="text-dark">Lawn and Turf Analysis</h4>
                  <p>Basic Soil Fertility (BSF) Soil pH (1:1), Buffer pH, Or...</p>
                </div>
              </div>
              <Link to='/farmer/service-details'>
                <Button className="btn btn-primary rounded-pill mt-3 w-100">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <div className="d-flex">
                <div class="avatar-sm p-2 pt-4">
                  <i class="avatar-title display-4 m-0 text-success mdi mdi-check-decagram"></i>
                </div>
                <div className="ps-3">
                  <h4 className="text-dark">Soil Test Analysis</h4>
                  <p>Complete Turf CSF with sufficiency graph and recommendati...</p>
                </div>
              </div>
              <Link to='/farmer/service-details'>
                <Button className="btn btn-primary rounded-pill mt-3 w-100">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <div className="d-flex">
                <div class="avatar-sm p-2 pt-4">
                  <i class="avatar-title display-4 m-0 text-success mdi mdi-check-decagram"></i>
                </div>
                <div className="ps-3">
                  <h4 className="text-dark">Lawn and Turf Analysis</h4>
                  <p>(data provided on a dry basis and sufficiency levels based.</p>
                </div>
              </div>
              <Link to='/farmer/service-details'>
                <Button className="btn btn-primary rounded-pill mt-3 w-100">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <div className="d-flex">
                <div class="avatar-sm p-2 pt-4">
                  <i class="avatar-title display-4 m-0 text-success mdi mdi-check-decagram"></i>
                </div>
                <div className="ps-3">
                  <h4 className="text-dark">Heavy Metal Analysis</h4>
                  <p>Digestion EPA method: 3051A   Element by EPA...</p>
                </div>
              </div>
              <Link to='/farmer/service-details'>
                <Button className="btn btn-primary rounded-pill mt-3 w-100">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <div className="d-flex">
                <div class="avatar-sm p-2 pt-4">
                  <i class="avatar-title display-4 m-0 text-success mdi mdi-check-decagram"></i>
                </div>
                <div className="ps-3">
                  <h4 className="text-dark">Feed Analysis</h4>
                  <p>Standard NIR Digestibility with minerals % Moisture, % ...</p>
                </div>
              </div>
              <Link to='/farmer/service-details'>
                <Button className="btn btn-primary rounded-pill mt-3 w-100">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <div className="d-flex">
                <div class="avatar-sm p-2 pt-4">
                  <i class="avatar-title display-4 m-0 text-success mdi mdi-check-decagram"></i>
                </div>
                <div className="ps-3">
                  <h4 className="text-dark">Manure & Slurry Analysis</h4>
                  <p>(data provided on a dry basis and sufficiency levels based.</p>
                </div>
              </div>
              <Link to='/farmer/service-details'>
                <Button className="btn btn-primary rounded-pill mt-3 w-100">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <div className="d-flex">
                <div class="avatar-sm p-2 pt-4">
                  <i class="avatar-title display-4 m-0 text-success mdi mdi-check-decagram"></i>
                </div>
                <div className="ps-3">
                  <h4 className="text-dark">Compost Analysis</h4>
                  <p>Standard Compost pH, % Organic N, % Ammonium N, % Nitrate N...</p>
                </div>
              </div>
              <Link to='/farmer/service-details'>
                <Button className="btn btn-primary rounded-pill mt-3 w-100">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default AboutCompany;
