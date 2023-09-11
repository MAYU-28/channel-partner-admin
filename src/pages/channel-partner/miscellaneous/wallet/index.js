import React from "react";
import { Card, Row, Col, Form, Table} from "react-bootstrap";
import CountUp from "react-countup";
import PageTitle from "../../../../components/PageTitle";

function Wallet() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/channel" },
          {
            label: "My Wallet",
            path: "/channel/wallet",
            active: true,
          },
        ]}
        title={"My Wallet"}
      />
<Row>
        <Col>
            <Form.Select aria-label="slelect year">
                <option>Select Year</option>
                <option value="1">2020</option>
                <option value="2">2021</option>
                <option value="3">2022</option>
            </Form.Select>  
        </Col>
        <Col>
            <Form.Select aria-label="slelect month">
                <option>Select Month</option>
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">March</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
            </Form.Select>  
        </Col>
        <Col>
            <Form.Select aria-label="usertype">
                <option>User Type</option>
                <option value="1">Teacher Courses</option>
                <option value="2">Career Experts</option>
            </Form.Select>  
        </Col>
          <Col md={12} sm={12} >
            <Card style={{marginTop: '20px'}}>
              <Card.Body>
                <h4>Withdrawal transactions</h4>
                <div className="table-responsive">
                    <Table>
                        <thead>
                            <tr>
                                <th>Sr.</th>
                                <th>Transaction Id</th>
                                <th>Date of payment</th>
                                <th>Amount paid</th>
                                <th>Commission earned</th>
                                <th>Balance before package users</th>
                                <th>Balance after package renewal </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>14528</td>
                                <td>10 March 2020</td>
                                <td>INR 100	</td>
                                <td>INR 100</td>
                                <td>INR 1000</td>
                                <td>INR 2000</td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>14528</td>
                                <td>10 March 2020</td>
                                <td>INR 100	</td>
                                <td>INR 100</td>
                                <td>INR 1000</td>
                                <td>INR 2000</td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>14528</td>
                                <td>10 March 2020</td>
                                <td>INR 100	</td>
                                <td>INR 100</td>
                                <td>INR 1000</td>
                                <td>INR 2000</td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>14528</td>
                                <td>10 March 2020</td>
                                <td>INR 100	</td>
                                <td>INR 100</td>
                                <td>INR 1000</td>
                                <td>INR 2000</td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>14528</td>
                                <td>10 March 2020</td>
                                <td>INR 100	</td>
                                <td>INR 100</td>
                                <td>INR 1000</td>
                                <td>INR 2000</td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>14528</td>
                                <td>10 March 2020</td>
                                <td>INR 100	</td>
                                <td>INR 100</td>
                                <td>INR 1000</td>
                                <td>INR 2000</td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>14528</td>
                                <td>10 March 2020</td>
                                <td>INR 100	</td>
                                <td>INR 100</td>
                                <td>INR 1000</td>
                                <td>INR 2000</td>

                            </tr>

                        </tbody>
                    </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      {/* <Row className="mt-5">
        <Col></Col>
        <Col>
          <div className="card-pricing ribbon-box card">
            <div className="ribbon-two ribbon-two-info">
              <span>Wallet</span>
            </div>
            <div className="text-center card-body">
              <Card className="bg-gradient-pink mt-5">
                <Card.Body>
                  <h4 className="text-white">Total Wallet Balance</h4>
                  <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                    ₹ <CountUp duration={1} end={45000} separator="," />
                  </h3>
                </Card.Body>
              </Card>
              <div className="d-flex justify-content-between">
                <h4>Wallet name -</h4>
                <h4>Abhijeet Chaudhary</h4>
              </div>
              <div className="d-flex justify-content-between">
                <h4>Location -</h4>
                <h4>Pune</h4>
              </div>
              <div className="d-flex justify-content-between">
                <h4>Bank -</h4>
                <h4>HDFC</h4>
              </div>
              <div className="d-flex justify-content-between">
                <h4>Bank number-</h4>
                <h4>27 837 42347 432433</h4>
              </div>
              <div className="d-grid">
                <button className="btn waves-effect waves-light mt-4 rounded-pill btn-info bg-gradient-pink border-0">
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row> */}
    </>
  );
}

export default Wallet;
