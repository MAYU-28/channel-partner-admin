import React, {useState} from "react";
import { Row, Col, Card,Form, Button,Table } from "react-bootstrap";
import { FormInput } from '../../../../components/form';
import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';
import Modal from 'react-bootstrap/Modal';


const Renewal = () => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(true);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleStatus = () => {
    setStatus(false)
    setTimeout(() => {
      setShow(false)
    }, 100);
  };

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
                        <option defaultValue="0">Bulk Action</option>
                        <option value="1">Delete</option>
                        <option value="2">Activate</option>
                        <option value="3">Delete</option>
                    </Form.Select>
                </Form.Group>                  
            </Col>
            <Col>
                <Form.Group>
                    <Form.Select  aria-label="Default select example" size="lg">
                        <option defaultValue="0">All Dates</option>
                        <option value="1">2019 January</option>
                        <option value="2">2019 December</option>
                    </Form.Select>
                </Form.Group>                  
            </Col>
            <Col>
                <Button className="btn w-100 btn-warning">
                  Renewal / Upgrade
                </Button>   
            </Col>
            <Col >
                <Button className="btn w-100 btn-warning">
                 History
                </Button>   
            </Col>
            <Col>
              <Link to='/channel/add-service'>
                <Button className="btn w-100 ">
                 Add Service
                </Button>
              </Link>  
            </Col>
            <Col>
                <Button className="btn w-100 btn-warning">
                 Apply
                </Button>   
            </Col>
        </Row>
      <div className="table-responsive mb-4">
        <Table>
          <thead>
            <tr>
              <th>
                  <Form.Group >
                    <Form.Check type="checkbox" id="all-select" label="All"/>
                  </Form.Group>
              </th>
              <th>Garage Name</th>
              <th>Address</th>
              <th>Package Name</th>
              <th>Mobile</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                  <Form.Group >
                    <Form.Check type="checkbox" id="select-0" label=""/>
                  </Form.Group>
              </td>
              <td>All in on Garage</td>
              <td>2 Wheeler</td>
              <td>Wadgoasheri</td>
              <td>8975300224</td>
              <td>05 Sep 2022</td>
              <td>45,000</td>
              <td>
                {
                  status ? 
                  <span className="bg-success px-2 py-1 text-white rounded-pill">Approved </span>
                  :
                  <span className="bg-danger px-2 py-1 text-white rounded-pill">Rejected</span>
                }
              </td>
              <td>
                <Link to='/channel/payouts'><Button className='btn-sm ms-1 btn-success'>Accept</Button></Link>
                <Button className='btn-sm ms-1 btn-danger' onClick={handleShow}>Reject</Button>
                <Button className='btn-sm ms-1'>Renewal / Upgrade</Button>
              </td>
            </tr>
            <tr>
              <td>
                  <Form.Group >
                    <Form.Check type="checkbox" id="select-0" label=""/>
                  </Form.Group>
              </td>
              <td>All in on Garage</td>
              <td>2 Wheeler</td>
              <td>Wadgoasheri</td>
              <td>8975300224</td>
              <td>05 Sep 2022</td>
              <td>45,000</td>
              <td>
                {
                  status ? 
                  <span className="bg-success px-2 py-1 text-white rounded-pill">Approved </span>
                  :
                  <span className="bg-danger px-2 py-1 text-white rounded-pill">Rejected</span>
                }
              </td>
              <td>
                <Link to='/channel/payouts'><Button className='btn-sm ms-1 btn-success'>Accept</Button></Link>
                <Button className='btn-sm ms-1 btn-danger' onClick={handleShow}>Reject</Button>
                <Button className='btn-sm ms-1'>Renewal / Upgrade</Button>
              </td>
            </tr>
            <tr>
              <td>
                  <Form.Group >
                    <Form.Check type="checkbox" id="select-0" label=""/>
                  </Form.Group>
              </td>
              <td>All in on Garage</td>
              <td>2 Wheeler</td>
              <td>Wadgoasheri</td>
              <td>8975300224</td>
              <td>05 Sep 2022</td>
              <td>45,000</td>
              <td>
                {
                  status ? 
                  <span className="bg-success px-2 py-1 text-white rounded-pill">Approved </span>
                  :
                  <span className="bg-danger px-2 py-1 text-white rounded-pill">Rejected</span>
                }
              </td>
              <td>
                <Link to='/channel/payouts'><Button className='btn-sm ms-1 btn-success'>Accept</Button></Link>
                <Button className='btn-sm ms-1 btn-danger' onClick={handleShow}>Reject</Button>
                <Button className='btn-sm ms-1'>Renewal / Upgrade</Button>
              </td>
            </tr>
            <tr>
              <td>
                  <Form.Group >
                    <Form.Check type="checkbox" id="select-0" label=""/>
                  </Form.Group>
              </td>
              <td>All in on Garage</td>
              <td>2 Wheeler</td>
              <td>Wadgoasheri</td>
              <td>8975300224</td>
              <td>05 Sep 2022</td>
              <td>45,000</td>
              <td>
                {
                  status ? 
                  <span className="bg-success px-2 py-1 text-white rounded-pill">Approved </span>
                  :
                  <span className="bg-danger px-2 py-1 text-white rounded-pill">Rejected</span>
                }
              </td>
              <td>
                <Link to='/channel/payouts'><Button className='btn-sm ms-1 btn-success'>Accept</Button></Link>
                <Button className='btn-sm ms-1 btn-danger' onClick={handleShow}>Reject</Button>
                <Button className='btn-sm ms-1'>Renewal / Upgrade</Button>
              </td>
            </tr>
            <tr>
              <td>
                  <Form.Group >
                    <Form.Check type="checkbox" id="select-0" label=""/>
                  </Form.Group>
              </td>
              <td>All in on Garage</td>
              <td>2 Wheeler</td>
              <td>Wadgoasheri</td>
              <td>8975300224</td>
              <td>05 Sep 2022</td>
              <td>45,000</td>
              <td>
                {
                  status ? 
                  <span className="bg-success px-2 py-1 text-white rounded-pill">Approved </span>
                  :
                  <span className="bg-danger px-2 py-1 text-white rounded-pill">Rejected</span>
                }
              </td>
              <td>
                <Link to='/channel/payouts'><Button className='btn-sm ms-1 btn-success'>Accept</Button></Link>
                <Button className='btn-sm ms-1 btn-danger' onClick={handleShow}>Reject</Button>
                <Button className='btn-sm ms-1'>Renewal / Upgrade</Button>
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
        <Pagination.Item Approved >{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Package Reject</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <div class="avatar-lg text-center rounded-circle bg-primary m-auto my-3" style={{width: '100px', height: '100px'}}>
              <i class="avatar-title display-4 m-0 text-white mdi mdi-alert-circle m-auto"></i>
            </div>
            <h3 className='text-danger'>Are you sure you want reject of this package ? </h3>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleStatus}>
            Reject
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Renewal;
