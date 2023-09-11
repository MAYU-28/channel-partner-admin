import React from "react";
import { Row, Col, Card, ProgressBar, Button } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from "react-router-dom";

const Contracts = () => {
  return (
    <>
      <Row>
        <Col lg={12}>
          <Card className='shadow'>
            <Card.Body className='p-2'>
                <div className='d-flex justify-content-between align-items-center'>
                    <Link
                        to="/farmer/farm-details"
                        className="w-100 text-white "
                    >
                        <Card.Title as="h4" className="text-info m-0">
                        Balaji Farms
                        </Card.Title>
                    </Link>
                    <DropdownButton id="dropdown-basic-button" title="Details" className='btn-sm'>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>View Contracts</Link></Dropdown.Item>
                        <Dropdown.Item><Link to='/farmer/new-contract-details'>Timeline</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Payments</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Expenses</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Documents</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Contract Details</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Products</Link></Dropdown.Item>
                    </DropdownButton>
                </div>
                 
                  <Card.Text className="mb-1 mt-1">
                    Balaji Farms is located in the outskirts of Nashik district
                    and is spread in 8 Acres of land
                  </Card.Text>
                  <div className="m-0 d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Location</h6>
                    <h6 className="text-muted mb-1">Pune</h6>
                  </div>
                  <div className="m-0  d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Requirements</h6>
                    <h6 className="text-muted mb-1">Rabi</h6>
                  </div>
                  <div className="m-0  d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Quantity</h6>
                    <h6 className="text-muted mb-1">50 Quintal</h6>
                  </div>
                  <div className="m-0  d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Price Range </h6>
                    <h6 className="text-muted mb-1">16/KG</h6>
                  </div>
                  <div className="m-0  d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Expected Delivery Date</h6>
                    <h6 className="text-muted mb-1">31 Dec 2022</h6>
                  </div>
                  <ProgressBar
                    now={25}
                    label={"25%"}
                    className="mb-0 mt-2 "
                    style={{ height: 15 }}
                  />
                 
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card className='shadow'>
            <Card.Body className='p-2'>
                <div className='d-flex justify-content-between align-items-center'>
                    <Link
                        to="/farmer/farm-details"
                        className="w-100 text-white "
                    >
                        <Card.Title as="h4" className="text-info m-0">
                        Balaji Farms
                        </Card.Title>
                    </Link>
                    <DropdownButton id="dropdown-basic-button" title="Details" className='btn-sm'>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>View Contracts</Link></Dropdown.Item>
                        <Dropdown.Item><Link to='/farmer/new-contract-details'>Timeline</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Payments</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Expenses</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Documents</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Contract Details</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Products</Link></Dropdown.Item>
                    </DropdownButton>
                </div>
                 
                  <Card.Text className="mb-1 mt-1">
                    Balaji Farms is located in the outskirts of Nashik district
                    and is spread in 8 Acres of land
                  </Card.Text>
                  <div className="m-0 d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Location</h6>
                    <h6 className="text-muted mb-1">Pune</h6>
                  </div>
                  <div className="m-0  d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Requirements</h6>
                    <h6 className="text-muted mb-1">Rabi</h6>
                  </div>
                  <div className="m-0  d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Quantity</h6>
                    <h6 className="text-muted mb-1">50 Quintal</h6>
                  </div>
                  <div className="m-0  d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Price Range </h6>
                    <h6 className="text-muted mb-1">16/KG</h6>
                  </div>
                  <div className="m-0  d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Expected Delivery Date</h6>
                    <h6 className="text-muted mb-1">31 Dec 2022</h6>
                  </div>
                  <ProgressBar
                    now={25}
                    label={"25%"}
                    className="mb-0 mt-2 "
                    style={{ height: 15 }}
                  />
                 
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card className='shadow'>
            <Card.Body className='p-2'>
                <div className='d-flex justify-content-between align-items-center'>
                    <Link
                        to="/farmer/farm-details"
                        className="w-100 text-white "
                    >
                        <Card.Title as="h4" className="text-info m-0">
                        Balaji Farms
                        </Card.Title>
                    </Link>
                    <DropdownButton id="dropdown-basic-button" title="Details" className='btn-sm'>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>View Contracts</Link></Dropdown.Item>
                        <Dropdown.Item><Link to='/farmer/new-contract-details'>Timeline</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Payments</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Expenses</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Documents</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Contract Details</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Products</Link></Dropdown.Item>
                    </DropdownButton>
                </div>
                 
                  <Card.Text className="mb-1 mt-1">
                    Balaji Farms is located in the outskirts of Nashik district
                    and is spread in 8 Acres of land
                  </Card.Text>
                  <div className="m-0 d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Location</h6>
                    <h6 className="text-muted mb-1">Pune</h6>
                  </div>
                  <div className="m-0  d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Requirements</h6>
                    <h6 className="text-muted mb-1">Rabi</h6>
                  </div>
                  <div className="m-0  d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Quantity</h6>
                    <h6 className="text-muted mb-1">50 Quintal</h6>
                  </div>
                  <div className="m-0  d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Price Range </h6>
                    <h6 className="text-muted mb-1">16/KG</h6>
                  </div>
                  <div className="m-0  d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Expected Delivery Date</h6>
                    <h6 className="text-muted mb-1">31 Dec 2022</h6>
                  </div>
                  <ProgressBar
                    now={25}
                    label={"25%"}
                    className="mb-0 mt-2 "
                    style={{ height: 15 }}
                  />
                 
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card className='shadow'>
            <Card.Body className='p-2'>
                <div className='d-flex justify-content-between align-items-center'>
                    <Link
                        to="/farmer/farm-details"
                        className="w-100 text-white "
                    >
                        <Card.Title as="h4" className="text-info m-0">
                        Balaji Farms
                        </Card.Title>
                    </Link>
                    <DropdownButton id="dropdown-basic-button" title="Details" className='btn-sm'>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>View Contracts</Link></Dropdown.Item>
                        <Dropdown.Item><Link to='/farmer/new-contract-details'>Timeline</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Payments</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Expenses</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Documents</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Contract Details</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Products</Link></Dropdown.Item>
                    </DropdownButton>
                </div>
                 
                  <Card.Text className="mb-1 mt-1">
                    Balaji Farms is located in the outskirts of Nashik district
                    and is spread in 8 Acres of land
                  </Card.Text>
                  <div className="m-0 d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Location</h6>
                    <h6 className="text-muted mb-1">Pune</h6>
                  </div>
                  <div className="m-0  d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Requirements</h6>
                    <h6 className="text-muted mb-1">Rabi</h6>
                  </div>
                  <div className="m-0  d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Quantity</h6>
                    <h6 className="text-muted mb-1">50 Quintal</h6>
                  </div>
                  <div className="m-0  d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Price Range </h6>
                    <h6 className="text-muted mb-1">16/KG</h6>
                  </div>
                  <div className="m-0  d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Expected Delivery Date</h6>
                    <h6 className="text-muted mb-1">31 Dec 2022</h6>
                  </div>
                  <ProgressBar
                    now={25}
                    label={"25%"}
                    className="mb-0 mt-2 "
                    style={{ height: 15 }}
                  />
                 
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card className='shadow'>
            <Card.Body className='p-2'>
                <div className='d-flex justify-content-between align-items-center'>
                    <Link
                        to="/farmer/farm-details"
                        className="w-100 text-white "
                    >
                        <Card.Title as="h4" className="text-info m-0">
                        Balaji Farms
                        </Card.Title>
                    </Link>
                    <DropdownButton id="dropdown-basic-button" title="Details" className='btn-sm'>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>View Contracts</Link></Dropdown.Item>
                        <Dropdown.Item><Link to='/farmer/new-contract-details'>Timeline</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Payments</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Expenses</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Documents</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Contract Details</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to='/farmer/new-contract-details'>Products</Link></Dropdown.Item>
                    </DropdownButton>
                </div>
                 
                  <Card.Text className="mb-1 mt-1">
                    Balaji Farms is located in the outskirts of Nashik district
                    and is spread in 8 Acres of land
                  </Card.Text>
                  <div className="m-0 d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Location</h6>
                    <h6 className="text-muted mb-1">Pune</h6>
                  </div>
                  <div className="m-0  d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Requirements</h6>
                    <h6 className="text-muted mb-1">Rabi</h6>
                  </div>
                  <div className="m-0  d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Quantity</h6>
                    <h6 className="text-muted mb-1">50 Quintal</h6>
                  </div>
                  <div className="m-0  d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Price Range </h6>
                    <h6 className="text-muted mb-1">16/KG</h6>
                  </div>
                  <div className="m-0  d-flex align-items-center justify-content-between">
                    <h6 className="text-dark mb-1">Expected Delivery Date</h6>
                    <h6 className="text-muted mb-1">31 Dec 2022</h6>
                  </div>
                  <ProgressBar
                    now={25}
                    label={"25%"}
                    className="mb-0 mt-2 "
                    style={{ height: 15 }}
                  />
                 
            </Card.Body>
          </Card>
        </Col>
      </Row>
     
    </>
  );
};

export default Contracts;
