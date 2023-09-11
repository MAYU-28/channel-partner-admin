import React from "react";
import PageTitle from "../../../../components/PageTitle";
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";

import ProfileBox from "./ProfileBox";
import Step1 from "./tabs/Step1";
import Step2 from "./tabs/Step2";
import Step3 from "./tabs/Step3";

const ScheduleDetails = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Schedule Details",
            path: "/farmer/schedule-details",
            active: true,
          },
        ]}
        title={"Schedule Details"}
      />
      <Row>
        <Col xl={4} lg={4}>
          {/* User information */}
          <ProfileBox />
        </Col>

        <Col xl={8} lg={8}>
          <Tab.Container defaultActiveKey="step1">
            <Card>
              <Card.Body>
                <h4 className="font-16 text-uppercase text-info mt-0 mb-3">
                  Sowing Stage Steps
                </h4>
                <Nav variant="pills" as="ul" className="navtab-bg">
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="step1" className="ms-0">
                      <i className="mdi mdi-arrow-right-circle me-1"></i>Step 1
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="step2" className="ms-0">
                      <i className="mdi mdi-arrow-right-circle me-1"></i>Step 2
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="step3">
                      <i className="mdi mdi-arrow-right-circle me-1"></i>Step 3
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="step1">
                    <Step1 />
                  </Tab.Pane>
                  <Tab.Pane eventKey="step2">
                    <Step2 />
                  </Tab.Pane>
                  <Tab.Pane eventKey="step3">
                    <Step3 />
                  </Tab.Pane>
                </Tab.Content>
              </Card.Body>
            </Card>
          </Tab.Container>
        </Col>
      </Row>
    </>
  );
};

export default ScheduleDetails;
