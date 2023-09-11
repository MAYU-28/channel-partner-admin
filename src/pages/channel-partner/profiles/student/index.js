import React from "react";
import PageTitle from "../../../../components/PageTitle";
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";
import ProfileBox from "./ProfileBox";
import About from "./tabs/About";
import Timeline from "./tabs/Timeline";
import Payments from "./tabs/Payments";
import Subscriptions from "./tabs/Subscriptions";


const StudentProfile = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/channel" },
          {
            label: "Student Profile",
            path: "/channel/student-profile",
            active: true,
          },
        ]}
        title={"Student Profile"}
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
                    <Nav.Link href="#" eventKey="payments">
                      Payments
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="subscriptions">
                      Suscriptions
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

                  <Tab.Pane eventKey="payments"  className="rounded">
                    <Payments />
                  </Tab.Pane>

                  <Tab.Pane eventKey="subscriptions" >
                    <Subscriptions />
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

export default StudentProfile;
