import React from "react";
import { Row, Col, Card, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Tab1 = () => {
  return (
    <>
        <h5 className="text-dark d-flex justify-content-between align-items-center font-24">
            Emails
          </h5>
        <div className="table-responsive mt-3">
            <Table hover className="m-0">
              <thead>
                <tr>
                  <th>Sr.no</th>
                  <th>Notifications Title </th>
                  <th>Notifications Date </th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Vanessa</td>
                  <td>01 Sep 2022</td>
                  <td>Delivered</td>
                  <td>
                    <Button className="btn-sm rounded-pill px-4">View</Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Vanessa</td>
                  <td>01 Sep 2022</td>
                  <td>Delivered</td>
                  <td>
                    <Button className="btn-sm rounded-pill px-4">View</Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Vanessa</td>
                  <td>01 Sep 2022</td>
                  <td>Delivered</td>
                  <td>
                    <Button className="btn-sm rounded-pill px-4">View</Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Vanessa</td>
                  <td>01 Sep 2022</td>
                  <td>Delivered</td>
                  <td>
                    <Button className="btn-sm rounded-pill px-4">View</Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Vanessa</td>
                  <td>01 Sep 2022</td>
                  <td>Delivered</td>
                  <td>
                    <Button className="btn-sm rounded-pill px-4">View</Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Vanessa</td>
                  <td>01 Sep 2022</td>
                  <td>Delivered</td>
                  <td>
                    <Button className="btn-sm rounded-pill px-4">View</Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Vanessa</td>
                  <td>01 Sep 2022</td>
                  <td>Delivered</td>
                  <td>
                    <Button className="btn-sm rounded-pill px-4">View</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
        </div>
    </>
  );
};

export default Tab1;
