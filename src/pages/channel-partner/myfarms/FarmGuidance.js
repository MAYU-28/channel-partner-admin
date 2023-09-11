import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Guidance from "./farmGuidance/Guidance";
import Videos from "./farmGuidance/Videos";
import PricingCard from "../../../components/PricingCard";

// dummy data
import { AdvisorPricingPlans } from "../../other/data";

import PageTitle from "../../../components/PageTitle";

function FarmGuidance() {
  const [key, setKey] = useState("guidance");

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Guidance",
            path: "/farmer/farm-guidance",
            active: true,
          },
        ]}
        title={"Guidance"}
      />
      <Card>
        <Card.Body>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="guidance" title="Guidance">
              <Guidance />
            </Tab>
            <Tab eventKey="pricing" title="Pricing">
              <PricingCard
                plans={AdvisorPricingPlans}
                containerClass={"my-3"}
              />
            </Tab>
            <Tab eventKey="videos" title="Videos">
              <Videos />
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </>
  );
}

export default FarmGuidance;
