import React from "react";
import { Row, Col, Card, Table, Form } from "react-bootstrap";
const Introducer = () => {
  
  return (
    <>
      <Row>
          <Col md={12} sm={12} >
            <Card style={{marginTop: '20px'}}>
              <Card.Body>
                <div className="table-responsive">
                    <Table>
                        <thead>
                            <tr>
                                <th>Sr.</th>
                                <th>Introducer Name</th>
                                <th>Introducer Number</th>
                                <th>Introducer Mail Id</th>
                                <th>Introducer CP Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mayur</td>
                                <td>8975300224</td>
                                <td>mayurshimpi602@gmail.com</td>
                                <td>125895478</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Anil</td>
                                <td>874393032</td>
                                <td>Anil@gmail.com</td>
                                <td>242435433</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Abhijeet</td>
                                <td>2345464664</td>
                                <td>abhijit@gmail.com</td>
                                <td>13212333</td>
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

export default Introducer;
