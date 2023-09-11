import React from 'react';
import { Row, Col, Card, Button, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

const CropOrders = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="text-dark d-flex justify-content-between align-items-center">
            Crop Orders
            <Link to="/farmer/crop-orders">
              <Button className="bg-gradient-pink border-0 rounded-pill px-4 py-2">
                View More
              </Button>
            </Link>
          </Card.Title>

          <div className="table-responsive mt-3">
            <Table hover className="m-0">
              <tbody>
                <tr>
                  <th className="bg-gradient-pink ">Tomato</th>
                  <td>53 Locations</td>
                </tr>
                <tr>
                  <th className="bg-gradient-pink ">Potato</th>
                  <td>180 Locations</td>
                </tr>
                <tr>
                  <th className="bg-gradient-pink ">Cabbage</th>
                  <td>30 Locations</td>
                </tr>
                <tr>
                  <th className="bg-gradient-pink ">Ginger</th>
                  <td>153 Locations</td>
                </tr>
                <tr>
                  <th className="bg-gradient-pink ">Capsicum</th>
                  <td>253 Locations</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CropOrders