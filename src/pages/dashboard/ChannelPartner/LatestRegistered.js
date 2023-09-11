import React from 'react';
import { Card, Button, Table } from "react-bootstrap";
import {Link} from 'react-router-dom';

const Allusers = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="text-dark d-flex justify-content-between align-items-center font-20">
            Latest Registrations List
            <Link to="/channel/all-users">
              <Button className="bg-gradient-pink border-0 rounded-pill px-4 py-2">
                View All
              </Button>
            </Link>
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
        </Card.Body>
      </Card>
    </>
  );
}

export default Allusers