import React from "react";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import PageTitle from "../../../components/PageTitle";
import Service1 from './services-tabs/Service1';
import Service2 from './services-tabs/Service2';
import Service3 from './services-tabs/Service3';

import {Link} from 'react-router-dom';

function ServiceDatails() {
  return (
    <>  
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Service Details",
            path: "/farmer/service-details",
            active: true,
          },
        ]}
        title={"Service Details"}
      />
      <div className="text-end mb-3">
        <Link to='/farmer/service-and-fees'><Button>Services & Fees</Button></Link>
      </div>
          <Card>
            <Card.Body>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={4}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Soil Test And Recommendations Form</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Soil Test Form</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Agrolab Services 2022</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={8}>
                    <Tab.Content className="pt-0">
                      <Tab.Pane eventKey="first">
                        <Service1 />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Service2 />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Service3 />
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Card.Body>
          </Card>
    </>
  );
}

export default ServiceDatails;
