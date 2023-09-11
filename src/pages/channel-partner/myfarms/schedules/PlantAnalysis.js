import React, { useState } from "react";
import { Card, Row, Col, Tab, Tabs } from "react-bootstrap";
import PageTitle from "../../../../components/PageTitle";
import { RequestForm } from "./plantanalysis/RequestForm";
import Tab1 from "./plantanalysis/Inprogress";
import Tab2 from "./plantanalysis/History";
import Tab3 from "./plantanalysis/RequestReceived";

function PlantAnalysis() {
  const [key, setKey] = useState("tab1");
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Farm Details", path: "/farmer/farm-details" },
          {
            label: "Plant Analysis",
            path: "farmer/plant-analysis",
            active: true,
          },
        ]}
        title={"Plant Analysis"}
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

export default PlantAnalysis;
