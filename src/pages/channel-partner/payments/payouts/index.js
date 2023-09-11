import React, {useState} from "react";
import { Tab, Nav, Card, } from "react-bootstrap";
import PageTitle from "../../../../components/PageTitle";
//  tabs
import All from "./tabs/all";
import Success from "./tabs/success";
import Failed from "./tabs/failed";


const Payouts = () => {
 
  return (
    <>
    <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/channel" },
          {
            label: "Payouts",
            path: "/channel/payouts",
            active: true,
          },
        ]}
        title={"Payouts"}
      />
    <Card>
        <Card.Body>
            <Tab.Container defaultActiveKey="tab1">
                <Nav variant="pills" as="ul" className="navtab-bg">
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab1" className="ms-0">
                      All
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab2">
                      Succeed
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab3">
                      Failed
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="tab1">
                    <All />
                  </Tab.Pane>

                  <Tab.Pane eventKey="tab2">
                    <Success />
                  </Tab.Pane>

                  <Tab.Pane eventKey="tab3">
                    <Failed />
                  </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Card.Body>
    </Card>
    </>
  );
};

export default Payouts;
