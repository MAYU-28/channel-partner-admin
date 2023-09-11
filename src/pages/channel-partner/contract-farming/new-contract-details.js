import React from "react";
import Container from "react-bootstrap/Container";
import PageTitle from "../../../components/PageTitle";
import AdvisorProfile from "./Profile/index";
// import ReviewsTabs from "./Tabs";
// import Casestudies from "./Casestudies";

const NweContractDetails = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "New Contracts Details",
            path: "/farmer/new-contract-details",
            active: true,
          },
        ]}
        title={"New Contracts Details"}
      />
      <Container>
        <AdvisorProfile />
        {/* <ReviewsTabs /> */}
        {/* <Casestudies /> */}
      </Container>
    </>
  );
};

export default NweContractDetails;
