import React from "react";
import PageTitle from "../../../../components/PageTitle";
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";
import ProfileBox from "./ProfileBox";
import About from "./tabs/About";
import Timeline from "./tabs/Timeline";
import Activity from "./tabs/Activity";
import Income from "./tabs/Income";
import Introducer from "./tabs/Introducer";
import Feedback from "./tabs/Feedback";


const TeacheProfile = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/channel" },
          {
            label: "Teacher Profile",
            path: "/channel/teacher-profile",
            active: true,
          },
        ]}
        title={"Teacher Profile"}
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
                    <Nav.Link href="#" eventKey="Activity">
                      Activity
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="Income">
                      Income
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="Introducer">
                      Introducer
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="Feedback">
                    Feedback
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="about">
                    <About />
                  </Tab.Pane>

                  <Tab.Pane
                    eventKey="timeline"
                  >
                    <Timeline />
                  </Tab.Pane>

                  <Tab.Pane
                    eventKey="Activity"
                    className="rounded"
                  >
                    <Activity />
                  </Tab.Pane>

                  <Tab.Pane eventKey="Income" >
                    <Income />
                  </Tab.Pane>
                  
                  <Tab.Pane eventKey="Introducer" >
                    <Introducer />
                  </Tab.Pane>

                  <Tab.Pane eventKey="Feedback" >
                    <Feedback />
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

export default TeacheProfile;
