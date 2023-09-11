import React, {useState} from "react";
import { Tab, Nav, Card, } from "react-bootstrap";
import TotalIncome from "./tabs/autohub";
import Classbook from "./tabs/classbook";
import PageTitle from "../../../../components/PageTitle";
 
const Mystatus = () => {
 
  return (
    <>
    <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/channel" },
          {
            label: "My Status",
            path: "/channel/my-status",
            active: true,
          },
        ]}
        title={"My Status"}
      />
    <Card>
        <Card.Body>
            <Tab.Container defaultActiveKey="tab1">
                <Nav variant="pills" as="ul" className="navtab-bg">
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab1" className="ms-0">
                      Autohub
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab2">
                      Classbook
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="tab1">
                    <TotalIncome />
                  </Tab.Pane>

                  <Tab.Pane eventKey="tab2">
                    <Classbook />
                  </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Card.Body>
    </Card>
    </>
  );
};

export default Mystatus;
