import React from 'react';
import { Card, Button,Row,Form, Col, Table,Pagination } from "react-bootstrap";
import CountUp from "react-countup";
import { FormInput } from '../../../components/form';
import PageTitle from "../../../components/PageTitle";

const Allusers = () => {
  return (
    <>
     <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "My Wallet",
            path: "/farmer/wallet",
            active: true,
          },
        ]}
        title={"My Wallet"}
      />
      <Row>
        <Col>
            <Card className="bg-gradient-pink ">
                <Card.Body>
                  <h4 className="text-white">Total Users</h4>
                  <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                    <CountUp duration={1} end={1300} separator="," /> +
                  </h3>
                </Card.Body>
            </Card>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row className="mb-2">
            <Col>
                <FormInput
                    type="search"
                    name="search"
                    key="search"
                    placeholder="Search here ..."
                    size="lg"
                    />
            </Col>
            <Col>
                <Form.Group>
                    <Form.Select  aria-label="Default select example" size="lg">
                        <option defaultValue="0">Select Class</option>
                        <option value="1">Class A</option>
                        <option value="2">Class B</option>
                    </Form.Select>
                </Form.Group>                  
            </Col>
            <Col>
                <Form.Group>
                    <Form.Select  aria-label="Default select example" size="lg">
                        <option defaultValue="0">Filter By</option>
                        <option value="1">Newest First</option>
                        <option value="2">Oldest First</option>
                        <option value="3">A-Z</option>
                    </Form.Select>
                </Form.Group>   
            </Col>

        </Row>
      <Card>
        <Card.Body>
          <Card.Title className="text-dark d-flex justify-content-between align-items-center font-20">
            All Registrations List
          </Card.Title>

          <div className="table-responsive my-3">
            <Table hover className="m-0">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Profile</th>
                  <th>Name</th>
                  <th>City</th>
                  <th>Class</th>
                  <th>Date</th>
                  <th>Satus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <img src='https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG.png' className='circle' height='50' width='50' />
                  </td>
                  <td>Shoaib kureshi</td>
                  <td>Pune</td>
                  <td>Class A</td>
                  <td>1 Sep 2022</td>
                  <td>
                    <div className="statusSucess">
                      <span>Paid</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <img src='https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG.png' className='circle' height='50' width='50' />
                  </td>
                  <td>Mohit Suri</td>
                  <td>Nashik</td>
                  <td>Class B</td>
                  <td>1 Sep 2022</td>
                  <td>
                    <div className="statusFailed">
                      <span>Unpaid</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <img src='https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG.png' className='circle' height='50' width='50' />
                  </td>
                  <td>Mayur Shimpi</td>
                  <td>Dhule</td>
                  <td>Class A</td>
                  <td>2 Sep 2022</td>
                  <td>
                    <div className="statusSucess">
                      <span>Paid</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <img src='https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG.png' className='circle' height='50' width='50' />
                  </td>
                  <td>Anil Prajapati</td>
                  <td>Indore</td>
                  <td>Class B</td>
                  <td>3 Sep 2022</td>
                  <td>
                    <div className="statusSucess">
                      <span>Paid</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    <img src='https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG.png' className='circle' height='50' width='50' />
                  </td>
                  <td>Soham Chaudhary</td>
                  <td>Pune</td>
                  <td>Class A</td>
                  <td>5 Sep 2022</td>
                  <td>
                    <div className="statusSucess">
                      <span>Paid</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    <img src='https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG.png' className='circle' height='50' width='50' />
                  </td>
                  <td>Gaurav Girase</td>
                  <td>Nashik</td>
                  <td>Class B</td>
                  <td>11 Sep 2022</td>
                  <td>
                    <div className="statusSucess">
                      <span>Paid</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    <img src='https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG.png' className='circle' height='50' width='50' />
                  </td>
                  <td>Yash Patil</td>
                  <td>Pune</td>
                  <td>Class A</td>
                  <td>13 Sep 2022</td>
                  <td>
                    <div className="statusSucess">
                      <span>Paid</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    <img src='https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG.png' className='circle' height='50' width='50' />
                  </td>
                  <td>Swapnil Kasar</td>
                  <td>Dhule</td>
                  <td>Class A</td>
                  <td>14 Sep 2022</td>
                  <td>
                    <div className="statusSucess">
                      <span>Paid</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>
                    <img src='https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG.png' className='circle' height='50' width='50' />
                  </td>
                  <td>Pintu Girase</td>
                  <td>Pune</td>
                  <td>Class A</td>
                  <td>17 Sep 2022</td>
                  <td>
                    <div className="statusFailed">
                      <span>Paid</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Card.Body>
      </Card>
    </>
  );
}

export default Allusers