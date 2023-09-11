import React from "react";
import PageTitle from "../../../components/PageTitle";
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";
import Renewal from "./tabs/Renewal";
import AddService from "./tabs/AddService";
import History from "./tabs/History";


const AutohubPackageRequest = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/channel" },
          {
            label: "Autohub Package Request",
            path: "/channel/garage-profile",
            active: true,
          },
        ]}
        title={"Autohub Package Request"}
      />
      <Row>
        <Col xl={12} lg={12}>
          <Tab.Container defaultActiveKey="tab1">
            <Card>
              <Card.Body>
                <Nav variant="pills" as="ul" className="navtab-bg">
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab1" className="ms-0">
                      Renewal/ Upgrade
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab2">
                      Add Service
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab3">
                      History
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="tab1">
                    <Renewal />
                  </Tab.Pane>

                  <Tab.Pane eventKey="tab2">
                    <AddService />
                  </Tab.Pane>

                  <Tab.Pane eventKey="tab3">
                    <History />
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

export default AutohubPackageRequest;
