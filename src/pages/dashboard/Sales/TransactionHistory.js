import React from "react";
import { Row, Col, Card, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const CropOrders = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="text-dark d-flex justify-content-between align-items-center">
            Latest Transaction History
            <Link to="/farmer/total-transactions-history">
              <Button className="bg-gradient-info border-0 rounded-pill px-4 py-2">
                View All Transactions
              </Button>
            </Link>
          </Card.Title>

          <div className="table-responsive mt-3">
            <Table hover className="m-0">
              <thead>
                <tr>
                  <th>Customer Name </th>
                  <th>Crop Name </th>
                  <th>Transaction Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Abhijeet Chaudhary</td>
                  <td>Tomato</td>
                  <td>10th Oct 2022</td>
                  <td>₹ 10,000</td>
                  <td>
                    <span className="me-1 bg-success badge rounded-pill bg-primary">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Aadesh Patil</td>
                  <td>Tomato</td>
                  <td>10th Oct 2022</td>
                  <td>₹ 10,000</td>
                  <td>
                    <span className="me-1 bg-success badge rounded-pill bg-primary">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Pritam Gosavi</td>
                  <td>Tomato</td>
                  <td>10th Oct 2022</td>
                  <td>₹ 10,000</td>
                  <td>
                    <span className="me-1 bg-success badge rounded-pill bg-primary">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Abhijeet Chaudhary</td>
                  <td>Tomato</td>
                  <td>10th Oct 2022</td>
                  <td>₹ 10,000</td>
                  <td>
                    <span className="me-1 bg-success badge rounded-pill bg-primary">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Aadesh Patil</td>
                  <td>Tomato</td>
                  <td>10th Oct 2022</td>
                  <td>₹ 10,000</td>
                  <td>
                    <span className="me-1 bg-success badge rounded-pill bg-primary">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Pritam Gosavi</td>
                  <td>Tomato</td>
                  <td>10th Oct 2022</td>
                  <td>₹ 10,000</td>
                  <td>
                    <span className="me-1 bg-success badge rounded-pill bg-primary">
                      Completed
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
