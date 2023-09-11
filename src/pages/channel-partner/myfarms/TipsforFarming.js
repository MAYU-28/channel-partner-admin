import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Tip1 from "./tipstabs/Tip1";
import Tip2 from "./tipstabs/Tip2";
import Tip3 from "./tipstabs/Tip3";

import PageTitle from "../../../components/PageTitle";

function Tips() {
  const [key, setKey] = useState("tip1");

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Tips For Farming",
            path: "/farmer/farm-tips",
            active: true,
          },
        ]}
        title={"Tips For Farming"}
      />
      <Card>
        <Card.Body>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="tip1" title="Tip 1">
              <Tip1 />
            </Tab>
            <Tab eventKey="tip2" title="Tip 2">
              <Tip2 />
            </Tab>
            <Tab eventKey="tip3" title="Tip 3">
              <Tip3 />
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </>
  );
}

export default Tips;
