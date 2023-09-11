import React from "react";
import { Row, Col, Card, Table, Form } from "react-bootstrap";
const Activity = () => {
  
  return (
    <>
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
                <option>Standard</option>
                <option value="1">Standard 1st</option>
                <option value="2">Standard 2nd</option>
                <option value="2">Standard 3rd</option>
                <option value="2">Standard 4th</option>
                <option value="2">Standard 5th</option>
                <option value="2">Standard 7th</option>
                <option value="2">Standard 8th</option>
                <option value="2">Standard 9th</option>
                <option value="2">Standard 10th</option>

            </Form.Select>  
        </Col>
          <Col md={12} sm={12} >
            <Card style={{marginTop: '20px'}}>
              <Card.Body>
                <div className="table-responsive">
                    <Table>
                        <thead>
                            <tr>
                                <th>Sr.</th>
                                <th>Transaction Id</th>
                                <th>Class Standard</th>
                                <th>Date of payment</th>
                                <th>Amount paid</th>
                                <th>Commission earned</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>14528</td>
                                <td>5th</td>
                                <td>10 March 2020</td>
                                <td>INR 100	</td>
                                <td>INR 100</td>
                               <td>
                                <span className='py-1 px-2 bg-success text-white rounded-pill'>Active</span>
                               </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>14528</td>
                                <td>6th</td>
                                <td>10 March 2020</td>
                                <td>INR 100	</td>
                                <td>INR 100</td>
                                <td><span className='py-1 px-2 bg-danger text-white rounded-pill'>Inactive</span></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>14528</td>
                                <td>5th</td>
                                <td>10 March 2020</td>
                                <td>INR 100	</td>
                                <td>INR 100</td>
                                <td><span className='py-1 px-2 bg-danger text-white rounded-pill'>Inactive</span></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>14528</td>
                                <td>10th</td>
                                <td>10 March 2020</td>
                                <td>INR 100	</td>
                                <td>INR 100</td>
                                <td>
                                <span className='py-1 px-2 bg-success text-white rounded-pill'>Active</span>
                               </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>14528</td>
                                <td>7th</td>
                                <td>10 March 2020</td>
                                <td>INR 100	</td>
                                <td>INR 100</td>
                                <td>
                                <span className='py-1 px-2 bg-success text-white rounded-pill'>Active</span>
                               </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>14528</td>
                                <td>5th</td>
                                <td>10 March 2020</td>
                                <td>INR 100	</td>
                                <td>INR 100</td>
                                <td>
                                <span className='py-1 px-2 bg-success text-white rounded-pill'>Active</span>
                               </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>14528</td>
                                <td>9th</td>
                                <td>10 March 2020</td>
                                <td>INR 100	</td>
                                <td>INR 100</td>
                                <td><span className='py-1 px-2 bg-danger text-white rounded-pill'>Inactive</span></td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
         
        </Row>
    </>
  );
};

export default Activity;
