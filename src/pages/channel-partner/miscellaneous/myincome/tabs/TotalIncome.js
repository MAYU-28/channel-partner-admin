import React, {useState} from "react";
import { Row, Col, Card,Form, Button,Table ,Modal} from "react-bootstrap";
import { FormInput } from '../../../../../components/form';
import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';

const TotalIncome = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Row className="mb-4">
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
                        <option defaultValue="0">Select Year</option>
                        <option value="1">2020</option>
                        <option value="2">2021</option>
                        <option value="3">2022</option>
                    </Form.Select>
                </Form.Group>                  
            </Col>
            <Col>
                <Form.Group>
                    <Form.Select  aria-label="Default select example" size="lg">
                        <option defaultValue="0">Select Month</option>
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">Mar</option>
                        <option value="4">Apr</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="2">Jul</option>
                        <option value="2">Sep</option>
                        <option value="2">Oct</option>
                        <option value="2">Nov</option>
                        <option value="2">Dec</option>
                    </Form.Select>
                </Form.Group>                  
            </Col>
            <Col>
                
            </Col>
            <Col >
               
            </Col>
            <Col>
                
            </Col>
            <Col>
              <Button className="btn w-100">
                  Search
                </Button>  
            </Col>
        </Row>
      <div className="table-responsive mb-4">
        <Table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Income</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jan</td>
              <td>1000</td>
              <td><Button className='btn-sm' onClick={handleShow}>View</Button></td>
            </tr>
            <tr>
              <td>Jan</td>
              <td>1000</td>
              <td><Button className='btn-sm' onClick={handleShow}>View</Button></td>
            </tr>
            <tr>
              <td>Jan</td>
              <td>1000</td>
              <td><Button className='btn-sm' onClick={handleShow}>View</Button></td>
            </tr>
            <tr>
              <td>Jan</td>
              <td>1000</td>
              <td><Button className='btn-sm' onClick={handleShow}>View</Button></td>
            </tr>
            <tr>
              <td>Jan</td>
              <td>1000</td>
              <td><Button className='btn-sm' onClick={handleShow}>View</Button></td>
            </tr>
            <tr>
              <td>Jan</td>
              <td>1000</td>
              <td><Button className='btn-sm' onClick={handleShow}>View</Button></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>January 2021</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="table-responsivew">
            <Table>
              <thead>
                <tr>
                  <th>Level Difference Income</th>
                  <td>INR 5000</td>
                </tr>
                <tr>
                  <th>Residual Income	</th>
                  <td>INR 8000</td>
                </tr>
                <tr>
                  <th>Royalty Income</th>
                  <td>INR 2000</td>
                </tr>
                <tr>
                  <th>Total Income	</th>
                  <td>INR 15000</td>
                </tr>
                <tr>
                  <th>TDS @ 18%	</th>
                  <td>INR 2000</td>
                </tr>
                <tr>
                  <th>Net Income	</th>
                  <td>18000</td>
                </tr>
              </thead>
            </Table>
          </div>
        </Modal.Body>
      </Modal>
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
    </>
  );
};

export default TotalIncome;
