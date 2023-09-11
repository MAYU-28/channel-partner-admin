import React, { useState } from "react";
import { Card, Row, Col, Tab, Tabs, Button } from "react-bootstrap";
import CountUp from "react-countup";
import PageTitle from "../../../../components/PageTitle";
import Tab1 from "./shedule-stage-ex-tabs/Tab1";
import Tab2 from "./shedule-stage-ex-tabs/Tab2";
import Tab3 from "./shedule-stage-ex-tabs/Tab3";
import {Link} from 'react-router-dom';

function TotalInvoice() {
  const [key, setKey] = useState("tab1");
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Schedule Stage Expenses",
            path: "/farmer/total-expenses",
            active: true,
          },
        ]}
        title={"Schedule Stage Expenses"}
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
          <Card className="bg-gradient-pink">
            <Card.Body>
              <h4 className="text-white">Total Fertilizer Material</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={55} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-secondary">
            <Card.Body>
              <h4 className="text-white">Total Equipments</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={88} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-danger">
            <Card.Body>
              <h4 className="text-white">Total Other Expense</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={105} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-primary">
            <Card.Body>
              <h4 className="text-white ">Add New Expense</h4>
              <Link to='/farmer/add-expense'>
             <Button className="btn bg-white border-0 mt-3 w-100 text-dark">Add New</Button>
             </Link>
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
