import React, { useState } from "react";
import { Card, Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserBox = () => {
  const [lgShow, setLgShow] = useState(false);
   const [lgShow2, setLgShow2] = useState(false);
  
  return (
    <Card className="text-center">
      <Card.Body>
        <h3 className="text-primary">Channel Partner</h3>
        <img
          src="https://media.istockphoto.com/vectors/auto-service-logo-car-repair-icon-vector-vector-id1036660912?k=20&m=1036660912&s=612x612&w=0&h=L2LW7fhqCPWDQvKnoqaqb83xITYoNDjSZFwv07olLPw="
          className="rounded w-100"
          alt=""
        />
        <div className="text-start mt-3">
          <h4 className="text-primary">About Garage :</h4>
          <p className="text-muted font-13 mb-3">
            All in one Garages is located in the outskirts of Nashik district and is
            spread in 8 Acres of land All in one Garages is located in the outskirts
            of Nashik district and is spread in 8 Acres of land
          </p>
          <div className="d-flex">
            <Button
              className="btn btn-md btn-primary mb-3 rounded-pill w-50"
              onClick={() => setLgShow(true)}
            >
              About Me
            </Button>
            <Button
              className="btn btn-md btn-warning mb-3 ms-2 rounded-pill w-50"
              onClick={() => setLgShow2(true)}
              style={{ whiteSpace: "nowrap" }}
            >
              Subscription Status
            </Button>
          </div>
        </div>
        <ul className="social-list list-inline mb-0">
          <li className="list-inline-item">
            <Link to="#" className="social-list-item border-purple text-purple">
              <i className="mdi mdi-facebook"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="social-list-item border-danger text-danger">
              <i className="mdi mdi-google"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="social-list-item border-info text-info">
              <i className="mdi mdi-twitter"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link
              to="#"
              className="social-list-item border-secondary text-secondary"
            >
              <i className="mdi mdi-github"></i>
            </Link>
          </li>
        </ul>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg ">
              About All in one Garage
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 className="text-info">Garage Description</h4>
            <p>
              All in one Garages is located in the outskirts of Nashik district and is
              spread in 8 Acres of land All in one Garages is located in the outskirts
              of Nashik district and is spread in 8 Acres of land
            </p>
            <p>
              All in one Garages is located in the outskirts of Nashik district and is
              spread in 8 Acres of land All in one Garages is located in the outskirts
              of Nashik district and is spread in 8 Acres of land All in one Garages
              is located in the outskirts of Nashik district and is spread in 8
              Acres of land All in one Garages is located in the outskirts of Nashik
              district and is spread in 8 Acres of land All in one Garages is located
              in the outskirts of Nashik district and is spread in 8 Acres of
              land All in one Garages is located in the outskirts of Nashik district
              and is spread in 8 Acres of land All in one Garages is located in the
              outskirts of Nashik district and is spread in 8 Acres of land
              All in one Garages is located in the outskirts of Nashik district and is
              spread in 8 Acres of land
            </p>
            <p>
              All in one Garages is located in the outskirts of Nashik district and is
              spread in 8 Acres of land All in one Garages is located in the outskirts
              of Nashik district and is spread in 8 Acres of land
            </p>
            <h4 className="text-info">Garage Area</h4>
            <p>
              All in one Garages is located in the outskirts of Nashik district and is
              spread in 8 Acres of land All in one Garages is located in the outskirts
              of Nashik district and is spread in 8 Acres of land
            </p>
            <p>
              All in one Garages is located in the outskirts of Nashik district and is
              spread in 8 Acres of land All in one Garages is located in the outskirts
              of Nashik district and is spread in 8 Acres of land All in one Garages
              is located in the outskirts of Nashik district and is spread in 8
              Acres of land All in one Garages is located in the outskirts of Nashik
              district and is spread in 8 Acres of land All in one Garages is located
              in the outskirts of Nashik district and is spread in 8 Acres of
              land All in one Garages is located in the outskirts of Nashik district
              and is spread in 8 Acres of land All in one Garages is located in the
              outskirts of Nashik district and is spread in 8 Acres of land
              All in one Garages is located in the outskirts of Nashik district and is
              spread in 8 Acres of land
            </p>
            <p>
              All in one Garages is located in the outskirts of Nashik district and is
              spread in 8 Acres of land All in one Garages is located in the outskirts
              of Nashik district and is spread in 8 Acres of land
            </p>
          </Modal.Body>
        </Modal>
        <Modal
          size="lg"
          show={lgShow2}
          onHide={() => setLgShow2(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg " className='text-primary'>
              Subscription Status
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="p-2">
              <div className="d-flex justify-content-between align-items-start">
                <h5 className="text-left w-100 text-primary">Subscription Name</h5>
                <h5 className="text-left w-100 text-primary">Subscription Status</h5>
              </div>
              <div className="d-flex justify-content-between align-items-start">
                <h5 className="text-left w-100">Two Wheelers - </h5>
                <h5 className="text-left w-100">10 / 50</h5>
              </div>
              <div className="d-flex justify-content-between align-items-start">
                <h5 className="text-left w-100">Four Wheelers - </h5>
                <h5 className="text-left w-100">26 / 50</h5>
              </div>
              <div className="d-flex justify-content-between align-items-start">
                <h5 className="text-left w-100">Door Step - </h5>
                <h5 className="text-left w-100">54 / 100</h5>
              </div>
              <div className="d-flex justify-content-between align-items-start">
                <h5 className="text-left w-100">Denting - </h5>
                <h5 className="text-left w-100">1 March 2021</h5>
              </div>
              <div className="d-flex justify-content-between align-items-start">
                <h5 className="text-left w-100">Paintings - </h5>
                <h5 className="text-left w-100">1 December 2021</h5>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
  );
};

export default UserBox;
