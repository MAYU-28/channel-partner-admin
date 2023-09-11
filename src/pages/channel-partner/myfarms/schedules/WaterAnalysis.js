import React, { useState } from "react";
import { Card, Row, Col, Tab, Tabs } from "react-bootstrap";
import PageTitle from "../../../../components/PageTitle";
import { RequestForm } from "./wateranalysis/RequestForm";
import Tab1 from "./wateranalysis/Inprogress";
import Tab2 from "./wateranalysis/History";
import Tab3 from "./wateranalysis/RequestReceived";

function WaterAnalysis() {
  const [key, setKey] = useState("tab1");
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Farm Details", path: "/farmer/farm-details" },
          {
            label: "Water Analysis",
            path: "farmer/water-analysis",
            active: true,
          },
        ]}
        title={"Water Analysis"}
      />
      <RequestForm />
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
              >
                <Tab eventKey="tab1" title="Inprogress">
                  <Tab1 />
                </Tab>
                <Tab eventKey="tab2" title="History">
                  <Tab2 />
                </Tab>
                <Tab eventKey="tab3" title="Request Received">
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

export default WaterAnalysis;
