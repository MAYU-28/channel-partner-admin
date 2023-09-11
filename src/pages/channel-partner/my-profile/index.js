import React from "react";
import PageTitle from "../../../components/PageTitle";
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";
import ProfileBox from "./ProfileBox";
import About from "./tabs/About";
import Timeline from "./tabs/Timeline";
import Activity from "./tabs/Activity";
import Income from "./tabs/Income";

const GarageProfile = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "My Profile",
            path: "/channel/my-profile",
            active: true,
          },
        ]}
        title={"My Profile"}
      />
      <Row>
        <Col xl={4} lg={4}>
          {/* User information */}
          <ProfileBox />
        </Col>

        <Col xl={8} lg={8}>
          <Tab.Container defaultActiveKey="about">
            <Card>
              <Card.Body>
                <Nav variant="pills" as="ul" className="navtab-bg">
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="about" className="ms-0">
                      Profile
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="timeline">
                      Timeline
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="activity">
                      Activity
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="income">
                      Income
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="about">
                    <About />
                  </Tab.Pane>

                  <Tab.Pane eventKey="timeline">
                    <Timeline />
                  </Tab.Pane>

                  <Tab.Pane eventKey="activity" >
                    <Activity />
                  </Tab.Pane>

                  <Tab.Pane eventKey="income">
                    <Income />
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

export default GarageProfile;
