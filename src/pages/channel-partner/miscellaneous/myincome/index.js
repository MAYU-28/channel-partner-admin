import React from "react";
import PageTitle from "../../../../components/PageTitle";
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";
import TotalIncome from "./tabs/TotalIncome";
import IndivisualIncome from "./tabs/IndivisualIncome";

const Myincome = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/channel" },
          {
            label: "My Income",
            path: "/channel/my-income",
            active: true,
          },
        ]}
        title={"My Income"}
      />
      <Row>
        <Col xl={12} lg={12}>
          <Tab.Container defaultActiveKey="tab1">
            <Card>
              <Card.Body>
                <Nav variant="pills" as="ul" className="navtab-bg">
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab1" className="ms-0">
                      Total Income
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab2">
                      Indivisual Income
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="tab1">
                    <TotalIncome />
                  </Tab.Pane>

                  <Tab.Pane eventKey="tab2">
                    <IndivisualIncome />
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

export default Myincome;
