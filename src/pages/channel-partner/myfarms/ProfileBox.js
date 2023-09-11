import React, { useState } from "react";
import { Card, Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserBox = () => {
  const [lgShow, setLgShow] = useState(false);
   const [lgShow2, setLgShow2] = useState(false);
  
  return (
    <Card className="text-center">
      <Card.Body>
        <img
          src="http://project.testproject.in/public/assets/images/FarmImg/farm-1.jpg"
          className="rounded w-100"
          alt=""
        />
        <div className="text-start mt-3">
          <h4 className="font-13 text-uppercase">About Farm :</h4>
          <p className="text-muted font-13 mb-3">
            Balaji Farms is located in the outskirts of Nashik district and is
            spread in 8 Acres of land Balaji Farms is located in the outskirts
            of Nashik district and is spread in 8 Acres of land
          </p>
          <div className="d-flex">
            <Button
              className="btn btn-md btn-primary mb-3 rounded-pill w-50"
              onClick={() => setLgShow(true)}
            >
              Read more
            </Button>
            <Button
              className="btn btn-md btn-warning mb-3 ms-2 rounded-pill w-50"
              onClick={() => setLgShow2(true)}
              style={{ whiteSpace: "nowrap" }}
            >
              Machinery Available
            </Button>
          </div>
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="text-left w-100">Farm Size - </h5>
            <h5 className="text-left w-100 text-muted">10 Acre</h5>
          </div>
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="text-left w-100">Soil Type - </h5>
            <h5 className="text-left w-100 text-muted">Black Soil</h5>
          </div>
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="text-left w-100">Ownership - </h5>
            <h5 className="text-left w-100 text-muted">Owned by Self</h5>
          </div>
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="text-left w-100">Name - </h5>
            <h5 className="text-left w-100 text-muted">Ramesh Patil</h5>
          </div>
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="text-left w-100">Mobile Number - </h5>
            <h5 className="text-left w-100 text-muted">+91 9639639630</h5>
          </div>
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="text-left w-100">Address - </h5>
            <h5 className="text-left w-100 text-muted">
              Suvery no 112, Near shivajinagar
            </h5>
          </div>
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="text-left w-100">State - </h5>
            <h5 className="text-left w-100 text-muted">Maharashtra</h5>
          </div>
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="text-left w-100">City - </h5>
            <h5 className="text-left w-100 text-muted">Pune</h5>
          </div>
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="text-left w-100">District - </h5>
            <h5 className="text-left w-100 text-muted">Pune</h5>
          </div>
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="text-left w-100">Village - </h5>
            <h5 className="text-left w-100 text-muted">Pune</h5>
          </div>
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="text-left w-100">Pin code - </h5>
            <h5 className="text-left w-100 text-muted">411008</h5>
          </div>
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="text-left w-100">Latitude - </h5>
            <h5 className="text-left w-100 text-muted">50.00</h5>
          </div>
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="text-left w-100">Longitude - </h5>
            <h5 className="text-left w-100 text-muted">60.00</h5>
          </div>
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="text-left w-100">Email id - </h5>
            <h5 className="text-left w-100 text-muted">rampat@gmail.com</h5>
          </div>
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="text-left w-100">Total Crop Area - </h5>
            <h5 className="text-left w-100 text-muted">9.5 Acre</h5>
          </div>
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="text-left w-100">
              Machinery available for farming -{" "}
            </h5>
            <h5 className="text-left w-100 text-muted">
              Tractor , Cart, Tools for Digging
            </h5>
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
              About Balaji Farm
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 className="text-info">Farm Description</h4>
            <p>
              Balaji Farms is located in the outskirts of Nashik district and is
              spread in 8 Acres of land Balaji Farms is located in the outskirts
              of Nashik district and is spread in 8 Acres of land
            </p>
            <p>
              Balaji Farms is located in the outskirts of Nashik district and is
              spread in 8 Acres of land Balaji Farms is located in the outskirts
              of Nashik district and is spread in 8 Acres of land Balaji Farms
              is located in the outskirts of Nashik district and is spread in 8
              Acres of land Balaji Farms is located in the outskirts of Nashik
              district and is spread in 8 Acres of land Balaji Farms is located
              in the outskirts of Nashik district and is spread in 8 Acres of
              land Balaji Farms is located in the outskirts of Nashik district
              and is spread in 8 Acres of land Balaji Farms is located in the
              outskirts of Nashik district and is spread in 8 Acres of land
              Balaji Farms is located in the outskirts of Nashik district and is
              spread in 8 Acres of land
            </p>
            <p>
              Balaji Farms is located in the outskirts of Nashik district and is
              spread in 8 Acres of land Balaji Farms is located in the outskirts
              of Nashik district and is spread in 8 Acres of land
            </p>
            <h4 className="text-info">Farm Area</h4>
            <p>
              Balaji Farms is located in the outskirts of Nashik district and is
              spread in 8 Acres of land Balaji Farms is located in the outskirts
              of Nashik district and is spread in 8 Acres of land
            </p>
            <p>
              Balaji Farms is located in the outskirts of Nashik district and is
              spread in 8 Acres of land Balaji Farms is located in the outskirts
              of Nashik district and is spread in 8 Acres of land Balaji Farms
              is located in the outskirts of Nashik district and is spread in 8
              Acres of land Balaji Farms is located in the outskirts of Nashik
              district and is spread in 8 Acres of land Balaji Farms is located
              in the outskirts of Nashik district and is spread in 8 Acres of
              land Balaji Farms is located in the outskirts of Nashik district
              and is spread in 8 Acres of land Balaji Farms is located in the
              outskirts of Nashik district and is spread in 8 Acres of land
              Balaji Farms is located in the outskirts of Nashik district and is
              spread in 8 Acres of land
            </p>
            <p>
              Balaji Farms is located in the outskirts of Nashik district and is
              spread in 8 Acres of land Balaji Farms is located in the outskirts
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
            <Modal.Title id="example-modal-sizes-title-lg ">
              Machinery available for farming
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 className="text-info">Machinery List</h4>
            <div className="table-responsive my-4">
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Machinery Name</th>
                    <th>Machinery details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Tractor</td>
                    <td>
                      This machine available for your farm, helpul for damage
                      crops
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Cart</td>
                    <td>
                      This machine available for your farm, helpul for damage
                      crops
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Tools for Digging</td>
                    <td>
                      This machine available for your farm, helpul for damage
                      crops
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Cutter</td>
                    <td>
                      This machine available for your farm, helpul for damage
                      crops
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Tractor</td>
                    <td>
                      This machine available for your farm, helpul for damage
                      crops
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
  );
};

export default UserBox;
