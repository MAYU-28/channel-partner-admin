import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PageTitle from "../../../components/PageTitle";
import { Card } from "react-bootstrap";

const ContractDetails = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Contract Details",
            path: "/farmer/contract-details",
            active: true,
          },
        ]}
        title={"Contract Details"}
      />
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <h4 className="text-info">1 Crop Contract</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <button className="btn btn-primary w-100">View Contract</button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <h4 className="text-info">2 Farm Contract</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <button className="btn btn-primary w-100">View Contract</button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <h4 className="text-info">3 Product Contract</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <button className="btn btn-primary w-100">View Contract</button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <h4 className="text-info">4 Maintenance Contract</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <button className="btn btn-primary w-100">View Contract</button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <h4 className="text-info">Contract Details</h4>
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
                <Row>
                  <Col>
                    <ul>
                      <li>Planning</li>
                      <li>Contract farming</li>
                      <li>Production</li>
                      <li>Human Resources</li>
                      <li>Purchase</li>
                      <li>Inventory</li>
                      <li>Post production</li>
                      <li>Sales</li>
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContractDetails;
