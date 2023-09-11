import React from "react";
import { Card, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserBox = () => {
  return (
    <Card className="text-center">
      <Card.Body>
        <img
          src="http://project.testproject.in/public/assets/images/FarmImg/farm-1.jpg"
          className="rounded w-100"
          alt=""
        />
        <div className="text-start mt-3">
          <h4 className="font-16 text-uppercase text-info">
            Selected crop area : 2 Acre
          </h4>
          <Link to="/farmer/schedule-stage-expenses">
            <Button
              className="w-100 btn btn-bordered rounded-pill waves-effect waves-light btn bg-gradient-info mt-1"
              style={{ border: "0px solid" }}
            >
              Expense
            </Button>
          </Link>
          <Link to="/farmer/schedule-timeline">
            <Button
              className="w-100 btn btn-bordered rounded-pill waves-effect waves-light btn bg-gradient-info mt-1"
              style={{ border: "0px solid" }}
            >
              Timeline
            </Button>
          </Link>
          <Link to="/farmer/crop-varieties">
          <Button
            className="w-100 btn btn-bordered rounded-pill waves-effect waves-light btn bg-gradient-info mt-1"
            style={{ border: "0px solid" }}
          >
            Variety
          </Button>
          </Link>
          <Link to="/farmer/required-material">
          <Button
            className="w-100 btn btn-bordered rounded-pill waves-effect waves-light btn bg-gradient-info mt-1"
            style={{ border: "0px solid" }}
          >
            Required Material
          </Button>
          </Link>
          <Link to="/farmer/damage-crop">
          <Button
            className="w-100 btn btn-bordered rounded-pill waves-effect waves-light btn bg-gradient-danger mt-1"
            style={{ border: "0px solid" }}
          >
            Damage Crop
          </Button>
          </Link>
          <h4 className="font-13 text-uppercase mb-1 mt-4">Description</h4>
          <p className="text-muted font-13 mb-3">
            Raw denim you probably haven't heard of them jean shorts Austin.
            Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
            cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
            butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
            qui irure terry richardson ex squid. Aliquip placeat salvia cillum
            iphone. Seitan aliquip quis cardigan american apparel, butcher
            voluptate nisi. Raw denim you probably haven't heard of them jean
            shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master
            cleanse. Mustache cliche tempor, williamsburg carles vegan
            helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.
            Cosby sweater eu banh mi, qui irure terry richardson ex squid.
            Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
            american apparel, butcher voluptate nisi.
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UserBox;
