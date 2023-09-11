import React, { useState } from "react";
import { Card, Row, Col, Tab, Tabs } from "react-bootstrap";
import CountUp from "react-countup";
import PageTitle from "../../../components/PageTitle";
import Tab1 from "./total-expenses/Tab1";
import Tab2 from "./total-expenses/Tab2";
import Tab3 from "./total-expenses/Tab3";

function TotalInvoice() {
  const [key, setKey] = useState("tab1");
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Total Expenses",
            path: "/farmer/total-expenses",
            active: true,
          },
        ]}
        title={"Total Expenses"}
      />
      <Row>
        <Col>
          <Card className="bg-gradient-purple">
            <Card.Body>
              <h4 className="text-white">Expenses Total Amount</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={10000} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-primary">
            <Card.Body>
              <h4 className="text-white">Fertilizers Material</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={2220} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-orange">
            <Card.Body>
              <h4 className="text-white">Machinery / Equipments</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={1250} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-pink">
            <Card.Body>
              <h4 className="text-white">Other Expense</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={1150} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="tab1" title="Fertilizer Material">
                  <Tab1 />
                </Tab>
                <Tab eventKey="tab2" title="Machinery / Equipments">
                  <Tab2 />
                </Tab>
                <Tab eventKey="tab3" title="Other Expenses">
                  <Tab3 />
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default TotalInvoice;
