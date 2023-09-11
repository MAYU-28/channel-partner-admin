import React from "react";
import { Row, Col, Card, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const CropOrders = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="text-dark d-flex justify-content-between align-items-center">
            Requests
            <div className="w-100 text-end d-flex justify-content-end">
              <input
                type="text"
                placeholder="Search"
                className="form-control w-25"
              />
            </div>
          </Card.Title>

          <div className="table-responsive mt-3">
            <Table hover className="m-0">
              <thead>
                <tr>
                  <th>Request Id </th>
                  <th>Sender Name </th>
                  <th>Request for</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>#897656</span>
                  </td>
                  <td>Sanjay Sharma</td>
                  <td>Some One </td>
                  <td>
                    <span className="me-1 bg-success badge rounded-pill bg-primary">
                      Accepted
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>#897656</span>
                  </td>
                  <td>Kiran Pawar</td>
                  <td>Some One </td>
                  <td>
                    <span className="me-1 bg-danger badge rounded-pill bg-primary">
                      Rejected
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>#897656</span>
                  </td>
                  <td>Suraj Pardeshi</td>
                  <td>Some One </td>
                  <td>
                    <span className="me-1 bg-success badge rounded-pill bg-primary">
                      Accepted
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>#897656</span>
                  </td>
                  <td>Lalit Patil</td>
                  <td>Some One </td>
                  <td>
                    <span className="me-1 bg-warning badge rounded-pill bg-primary">
                      Pending
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>#897656</span>
                  </td>
                  <td>Sanjay Sharma</td>
                  <td>Some One </td>
                  <td>
                    <span className="me-1 bg-success badge rounded-pill bg-primary">
                      Accepted
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>#897656</span>
                  </td>
                  <td>Kiran Pawar</td>
                  <td>Some One </td>
                  <td>
                    <span className="me-1 bg-danger badge rounded-pill bg-primary">
                      Rejected
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>#897656</span>
                  </td>
                  <td>Suraj Pardeshi</td>
                  <td>Some One </td>
                  <td>
                    <span className="me-1 bg-success badge rounded-pill bg-primary">
                      Accepted
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>#897656</span>
                  </td>
                  <td>Lalit Patil</td>
                  <td>Some One </td>
                  <td>
                    <span className="me-1 bg-warning badge rounded-pill bg-primary">
                      Pending
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CropOrders;
