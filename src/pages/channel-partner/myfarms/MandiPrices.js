import React from "react";
import PageTitle from "../../../components/PageTitle";
import Cities from "./mandiprice/Cities";
import MandiTable from "./mandiprice/MandiTable";
import MandiTableSearch from "./mandiprice/MandiTableSearch";

function MandiPrice() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Mandi Prices",
            path: "/farmer/farm-tips",
            active: true,
          },
        ]}
        title={"Mandi Prices"}
      />
      <Cities />
      <MandiTable />
      <MandiTableSearch />
    </>
  );
}

export default MandiPrice;
