import React, { useState } from "react";
import { Card, Row, Col, Tab, Tabs } from "react-bootstrap";
import PageTitle from "../../../../components/PageTitle";
import { RequestForm } from "./biologicalanalysis/RequestForm";
import Tab1 from "./biologicalanalysis/Inprogress";
import Tab2 from "./biologicalanalysis/History";
import Tab3 from "./biologicalanalysis/RequestReceived";

function BiologicalAnalysis() {
  const [key, setKey] = useState("tab1");
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Farm Details", path: "/farmer/farm-details" },
          {
            label: "Biological Analysis",
            path: "farmer/schedule-history",
            active: true,
          },
        ]}
        title={"Biological Analysis"}
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

export default BiologicalAnalysis;
