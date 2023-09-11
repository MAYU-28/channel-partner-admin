import React from "react";
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";
import Tab1 from "./tabs/Tab1";

const GarageProfile = () => {
  return (
    <>
    <Tab.Container defaultActiveKey="tab1">
        <Nav variant="pills" as="ul" className="navtab-bg">
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab1" className="ms-0">
                      2 Wheeler
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab2">
                        4 Wheeler
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab3">
                      Door Step(2 wheeler)
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab4">
                        Door Step(4 wheeler)
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab5">
                        Denting
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab6">
                        Painting
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab7">
                        Watching
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content className="border-0 px-0">
                  <Tab.Pane eventKey="tab1" className="border-0">
                    <Tab1 />
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab2"  className="border-0" >
                    <Tab1 />
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab3"  className="border-0">
                    <Tab1 />
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab4"  className="border-0" >
                    <Tab1 />
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab5"  className="border-0">
                    <Tab1 />
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab6"  className="border-0">
                    <Tab1 />
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab7"  className="border-0">
                    <Tab1 />
                  </Tab.Pane>
                </Tab.Content>
          </Tab.Container>
    </>
  );
};

export default GarageProfile;
