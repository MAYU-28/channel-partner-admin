import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Tab1 from "./tabs/Tab1";
import PageTitle from "../../../components/PageTitle";

const Videos = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Videos",
            path: "/farmer/videos",
            active: true,
          },
        ]}
        title={"Videos"}
      />
      <Container>
        <Card className=" p-2">
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Home">
              <Tab1 />
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <Tab1 />
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
              <Tab1 />
            </Tab>
          </Tabs>
        </Card>
      </Container>
    </>
  );
};

export default Videos;
