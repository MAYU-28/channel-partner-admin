import React, { useState } from "react";
import { Card, Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserBox = () => {
  const [lgShow, setLgShow] = useState(false);
  
  return (
    <Card className="text-center">
      <Card.Body>
        <h3 className="text-primary">Sai Garage </h3>
        <img
          src="https://media.istockphoto.com/vectors/auto-service-logo-car-repair-icon-vector-vector-id1036660912?k=20&m=1036660912&s=612x612&w=0&h=L2LW7fhqCPWDQvKnoqaqb83xITYoNDjSZFwv07olLPw="
          className="rounded w-100"
          alt=""
        />
        <div className="text-start mt-3">
          <h4>Subscription Status</h4>
          <table className="table -table-bordered border">
            <tr>
              <th className="text-primary p-1">Two Wheelers</th>
              <td>10/50</td>
            </tr>
            <tr>
              <th className="text-primary p-1">Four Wheelers</th>
              <td>26/50</td>
            </tr>
            <tr>
              <th className="text-primary p-1">Door Step</th>
              <td>54/100</td>
            </tr>
            <tr>
              <th className="text-primary p-1">Denting</th>
              <td>2 Dec 2021</td>
            </tr>
            <tr>
              <th className="text-primary p-1">Paintings</th>
              <td>5 Sep 2022</td>
            </tr>
          </table>

          <h4>About Me</h4>
          <div className="card p-2">
            <h5>Location</h5>
            <table className="table -table-bordered border">
            <tr>
              <th className="text-primary p-1">Longitude</th>
              <td>100</td>
            </tr>
            <tr>
              <th className="text-primary p-1">Latitude</th>
              <td>50</td>
            </tr>
          </table>
            <Button
              className="btn btn-md btn-primary mb-1 rounded-pill w-100"
              onClick={() => setLgShow(true)}
            >
              View on map
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
              Map
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe className="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style={{width: '100%'}} height='500' src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
  );
};

export default UserBox;
