import React from "react";
import PageTitle from "../../../components/PageTitle";
import CropCareList from "./cropcare/CropCareList";

function Cropcare() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Crop Care",
            path: "/farmer/crop-care",
            active: true,
          },
        ]}
        title={"Crop Care"}
      />
      <CropCareList />
    </>
  );
}

export default Cropcare;
