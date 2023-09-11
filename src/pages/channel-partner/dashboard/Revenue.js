import React, { useState } from "react";
import { Card, Row, Col, Tab, Tabs, Button } from "react-bootstrap";
import CountUp from "react-countup";

import PageTitle from "../../../components/PageTitle";
import Completed from "./revenue/Completed";
import Upcoming from "./revenue/Upcoming";
import Projected from "./revenue/Projected";

import { Link } from "react-router-dom";
function TotalInvoice() {
  const [key, setKey] = useState("completed");
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Revenue",
            path: "/farmer/revenue",
            active: true,
          },
        ]}
        title={"Revenue"}
      />
      <Row>
        <Col>
          <Card className="bg-gradient-pink">
            <Card.Body>
              <h4 className="text-white">Total Invoices</h4>
              <div className="d-flex align-items-center justify-content-between">
                <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                  <CountUp duration={1} end={700} separator="," />
                </h3>
                <Link to="/farmer/total-invoices">
                  <Button className="btn btn-white bordered rounded-pill bg-gradient-pink px-4 text-white">
                    View
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-purple">
            <Card.Body>
              <h4 className="text-white">Total Received Amount</h4>
              <div className="d-flex align-items-center justify-content-between">
                <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                  <CountUp duration={1} end={300} separator="," />
                </h3>
                <Link to="/farmer/total-received-amount">
                  <Button className="btn btn-white bordered rounded-pill bg-gradient-purple px-4 text-white">
                    View
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-orange">
            <Card.Body>
              <h4 className="text-white">Total Sales</h4>
              <div className="d-flex align-items-center justify-content-between">
                <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                  <CountUp duration={1} end={500} separator="," />
                </h3>
                <Link to="/farmer/total-sales">
                  <Button className="btn btn-white bordered rounded-pill bg-gradient-orange px-4 text-white">
                    View
                  </Button>
                </Link>
              </div>
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
                <Tab eventKey="completed" title="Completed">
                  <Completed />
                </Tab>
                <Tab eventKey="upcoming" title="Upcoming">
                  <Upcoming />
                </Tab>
                <Tab eventKey="sales" title="Projected Sales">
                  <Projected />
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
