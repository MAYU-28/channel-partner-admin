import React from 'react';
import { Row, Col, Card, Button, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Topcrops = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="text-dark d-flex justify-content-between align-items-center">
            Top Crops
            <Link to="/farmer/total-top-crops">
              <Button className="bg-gradient-pink border-0 rounded-pill px-4 py-2">
                View Details
              </Button>
            </Link>
          </Card.Title>

          <div className="table-responsive mt-3">
            <Table hover className="m-0">
              <tbody>
                <tr>
                  <th className="bg-gradient-pink ">Tomato</th>
                  <td>
                    <span className="me-1 bg-primary badge rounded-pill bg-primary font-14">
                      ₹ 25,000
                    </span>
                  </td>
                </tr>
                <tr>
                  <th className="bg-gradient-pink ">Potato</th>
                  <td>
                    <span className="me-1 bg-primary badge rounded-pill bg-danger font-14">
                      ₹ 45,000
                    </span>
                  </td>
                </tr>
                <tr>
                  <th className="bg-gradient-pink ">Cabbage</th>
                  <td>
                    <span className="me-1 bg-primary badge rounded-pill bg-primary font-14">
                      ₹ 65,000
                    </span>
                  </td>
                </tr>
                <tr>
                  <th className="bg-gradient-pink ">Ginger</th>
                  <td>
                    <span className="me-1 bg-primary badge rounded-pill bg-primary font-14">
                      ₹ 25,000
                    </span>
                  </td>
                </tr>
                <tr>
                  <th className="bg-gradient-pink ">Capsicum</th>
                  <td>
                    <span className="me-1 bg-primary badge rounded-pill bg-success font-14">
                      ₹ 55,000
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
}

export default Topcrops