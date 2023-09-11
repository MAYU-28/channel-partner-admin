import React from "react";
import { Row, Col, Card, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const CropOrders = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="text-dark d-flex justify-content-between align-items-center">
            Orders Summary
            <Link to="/farmer/total-order-summary">
              <Button className="bg-gradient-info border-0 rounded-pill px-4 py-2">
                View All Summary
              </Button>
            </Link>
          </Card.Title>

          <div className="table-responsive mt-3">
            <Table hover className="m-0">
              <thead>
                <tr>
                  <th>Order Id </th>
                  <th>Crop Name </th>
                  <th>Farm Name </th>
                  <th>Customer</th>
                  <th>Due Date</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>#897656</span>
                  </td>
                  <td>Tomato</td>
                  <td>Balaji Farm </td>
                  <td>Brooklyn Zeo </td>
                  <td>12 Jul 2020 </td>
                  <td>INR 64.00 </td>
                  <td>
                    <span className="me-1 bg-success badge rounded-pill bg-primary">
                      Completed
                    </span>
                  </td>
                  <td>
                    <Link to="/farmer/total-invoices">
                      <Button className="btn rounded-pill">View Details</Button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>#897656</span>
                  </td>
                  <td>Tomato</td>
                  <td>Balaji Farm </td>
                  <td>Brooklyn Zeo </td>
                  <td>12 Jul 2020 </td>
                  <td>INR 64.00 </td>
                  <td>
                    <span className="me-1 bg-success badge rounded-pill bg-primary">
                      Completed
                    </span>
                  </td>
                  <td>
                    <Link to="/farmer/total-invoices">
                      <Button className="btn rounded-pill">View Details</Button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>#897656</span>
                  </td>
                  <td>Tomato</td>
                  <td>Balaji Farm </td>
                  <td>Brooklyn Zeo </td>
                  <td>12 Jul 2020 </td>
                  <td>INR 64.00 </td>
                  <td>
                    <span className="me-1 bg-success badge rounded-pill bg-primary">
                      Completed
                    </span>
                  </td>
                  <td>
                    <Link to="/farmer/total-invoices">
                      <Button className="btn rounded-pill">View Details</Button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>#897656</span>
                  </td>
                  <td>Tomato</td>
                  <td>Balaji Farm </td>
                  <td>Brooklyn Zeo </td>
                  <td>12 Jul 2020 </td>
                  <td>INR 64.00 </td>
                  <td>
                    <span className="me-1 bg-success badge rounded-pill bg-primary">
                      Completed
                    </span>
                  </td>
                  <td>
                    <Link to="/farmer/total-invoices">
                      <Button className="btn rounded-pill">View Details</Button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>#897656</span>
                  </td>
                  <td>Tomato</td>
                  <td>Balaji Farm </td>
                  <td>Brooklyn Zeo </td>
                  <td>12 Jul 2020 </td>
                  <td>INR 64.00 </td>
                  <td>
                    <span className="me-1 bg-success badge rounded-pill bg-primary">
                      Completed
                    </span>
                  </td>
                  <td>
                    <Link to="/farmer/total-invoices">
                      <Button className="btn rounded-pill">View Details</Button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>#897656</span>
                  </td>
                  <td>Tomato</td>
                  <td>Balaji Farm </td>
                  <td>Brooklyn Zeo </td>
                  <td>12 Jul 2020 </td>
                  <td>INR 64.00 </td>
                  <td>
                    <span className="me-1 bg-success badge rounded-pill bg-primary">
                      Completed
                    </span>
                  </td>
                  <td>
                    <Link to="/farmer/total-invoices">
                      <Button className="btn rounded-pill">View Details</Button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>#897656</span>
                  </td>
                  <td>Tomato</td>
                  <td>Balaji Farm </td>
                  <td>Brooklyn Zeo </td>
                  <td>12 Jul 2020 </td>
                  <td>INR 64.00 </td>
                  <td>
                    <span className="me-1 bg-success badge rounded-pill bg-primary">
                      Completed
                    </span>
                  </td>
                  <td>
                    <Link to="/farmer/total-invoices">
                      <Button className="btn rounded-pill">View Details</Button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>#897656</span>
                  </td>
                  <td>Tomato</td>
                  <td>Balaji Farm </td>
                  <td>Brooklyn Zeo </td>
                  <td>12 Jul 2020 </td>
                  <td>INR 64.00 </td>
                  <td>
                    <span className="me-1 bg-success badge rounded-pill bg-primary">
                      Completed
                    </span>
                  </td>
                  <td>
                    <Link to="/farmer/total-invoices">
                      <Button className="btn rounded-pill">View Details</Button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>#897656</span>
                  </td>
                  <td>Tomato</td>
                  <td>Balaji Farm </td>
                  <td>Brooklyn Zeo </td>
                  <td>12 Jul 2020 </td>
                  <td>INR 64.00 </td>
                  <td>
                    <span className="me-1 bg-success badge rounded-pill bg-primary">
                      Completed
                    </span>
                  </td>
                  <td>
                    <Link to="/farmer/total-invoices">
                      <Button className="btn rounded-pill">View Details</Button>
                    </Link>
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
