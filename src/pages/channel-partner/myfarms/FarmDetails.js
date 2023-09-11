import React from "react";
import PageTitle from "../../../components/PageTitle";
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";

import ProfileBox from "./ProfileBox";
import About from "./tabs/About";
import Schedule from "./tabs/Schedule";
import Products from "./tabs/Products";
import Extras from "./tabs/Extras";
import Details from "./tabs/Details";
import Gallery from "./tabs/Gallery";
import Timeline from "./tabs/Timeline";

const FarmDetails = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Farm Details",
            path: "/farmer/farm-details",
            active: true,
          },
        ]}
        title={"Farm Details"}
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
                      <i className="mdi mdi-barley me-1"></i>About
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="schedule" className="ms-0">
                      <i className="mdi mdi-clock me-1"></i>Schedule
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="products">
                      <i className="mdi mdi-cart me-1"></i>Products
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="extras">
                      <i className="mdi mdi-star me-1"></i>Extras
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="details">
                      <i className="mdi mdi-bookmark-plus me-1"></i>Details
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="gallery">
                      <i className="mdi mdi-image-multiple-outline me-1"></i>
                      Gallery
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="timeline">
                      <i className="mdi mdi-image-multiple-outline me-1"></i>
                      Timeline
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="about">
                    <About />
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="schedule"
                    className="bg-light py-3 px-3 rounded"
                  >
                    <Schedule />
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="products"
                    className="bg-light py-3 px-3 rounded"
                  >
                    <Products />
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="extras"
                    className="bg-light py-3 px-3 rounded"
                  >
                    <Extras />
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="details"
                    className="bg-light py-3 px-3 rounded"
                  >
                    <Details />
                  </Tab.Pane>
                  <Tab.Pane eventKey="gallery" className="bg-light p-2 rounded">
                    <Gallery />
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="timeline"
                    className="bg-light p-2 rounded"
                  >
                    <Timeline />
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

export default FarmDetails;
