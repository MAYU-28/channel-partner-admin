import React from "react";
import Container from "react-bootstrap/Container";
import PageTitle from "../../../components/PageTitle";
import AdvisorProfile from "./Profile/index";
import ReviewsTabs from "./Tabs";
import Casestudies from "./Casestudies";

const AdvisorDetails = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Advisor Detail",
            path: "/farmer/advisor-detail",
            active: true,
          },
        ]}
        title={"Advisor Detail"}
      />
      <Container>
        <AdvisorProfile />
        <ReviewsTabs />
        <Casestudies />
      </Container>
    </>
  );
};

export default AdvisorDetails;
