import React, { useState } from "react";
import { Card, Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserBox = () => {
  const [lgShow, setLgShow] = useState(false);
  
  return (
    <Card className="text-center">
      <Card.Body>
        <h3 className="text-primary">Class Pods</h3>
        <img
          src="https://www.squadhelp.com/story_images/visual_images/1645290715-ClassPod.jpg"
          className="rounded w-100"
          alt=""
        />
        <div className="text-start mt-3">
          <h4>Subscription Status</h4>
          <table className="table -table-bordered border">
            <tr>
              <th className="text-primary p-1">Boards</th>
              <td>1050</td>
            </tr>
            <tr>
              <th className="text-primary p-1">Medium</th>
              <td>250</td>
            </tr>
            <tr>
              <th className="text-primary p-1">Standard</th>
              <td>541</td>
            </tr>
            <tr>
              <th className="text-primary p-1"> Subjects</th>
              <td>2300</td>
            </tr>
          </table>

          <h4>Contact Info</h4>
          <table className="table -table-bordered border">
            <tr>
              <th className="text-primary p-1">Address</th>
              <td>Pune</td>
            </tr>
            <tr>
              <th className="text-primary p-1"> Location</th>
              <td>Malibu, California</td>
            </tr>
            <tr>
              <th className="text-primary p-1"> Date of Registration</th>
              <td>11 Jan 2021</td>
            </tr>
            <tr>
              <th className="text-primary p-1"> Total Commission Earned</th>
              <td>INR 6000</td>
            </tr>
          </table>
            {/* <Button
              className="btn btn-md btn-primary mb-1 rounded-pill w-100"
              onClick={() => setLgShow(true)}
            >
              View on map
            </Button> */}
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
