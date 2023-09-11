import React from "react";
import { Row, Col, Card, Form, Container,Button, Pagination } from 'react-bootstrap';
import PageTitle from "../../../components/PageTitle";
import CountUp from "react-countup";
import { FormInput } from '../../../components/form';
import { Link } from "react-router-dom";

const Garages = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Garages",
            path: "/channel/garages",
            active: true,
          },
        ]}
        title={"Garages"}
      />
      <Container>
      <Row>
            <Col>
                <Card className="bg-gradient-pink">
                    <Card.Body>
                    <h4 className="text-white">Total Garages</h4>
                    <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                        <CountUp duration={1} end={580} separator="," />
                    </h3>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="bg-gradient-orange">
                    <Card.Body>
                    <h4 className="text-white">Total Direct</h4>
                    <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                        <CountUp duration={1} end={120} separator="," />
                    </h3>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="bg-gradient-primary">
                    <Card.Body>
                    <h4 className="text-white">Total Indirect</h4>
                    <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                        <CountUp duration={1} end={150} separator="," />
                    </h3>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Link to='/channel/channel-partner-profile'>
                    <Card className="bg-gradient-secondary">
                        <Card.Body>
                            <h4 className="text-white">Introducer</h4>
                            <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                            Shrikant Pawar
                            </h3>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
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
                        <option defaultValue="0">Select Souce</option>
                        <option value="1">Direct</option>
                        <option value="2">Indirect</option>
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
        <Row>
            <Col md={3} sm={12}>
            <Card className='shadow'>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <Card.Img
                    variant="top"
                    src="https://media.istockphoto.com/vectors/auto-service-logo-car-repair-icon-vector-vector-id1036660912?k=20&m=1036660912&s=612x612&w=0&h=L2LW7fhqCPWDQvKnoqaqb83xITYoNDjSZFwv07olLPw="
                    style={{
                    borderRadius: "50%",
                    height: "80px",
                    width: "80px",
                    }}
                />
                <Link to="/channel/garage-profile" >
                  <Button className="btn rounded-pill btn-sm d-flex align-items-center">
                  <i class="font-20 text-primary text-white   ri-settings-3-fill me-1"></i> View
                  </Button>
                </Link>
              </div>
              <Card.Body className='bg-gradient-grey'>
                <div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Name :
                        </h5>
                        <h5 className='mb-0 '>Sai Garage</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Address :
                        </h5>
                        <h5 className='mb-0 '>Pune</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Mobile No. :
                        </h5>
                        <h5 className='mb-0 '>+918975300224</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Date :
                        </h5>
                        <h5 className='mb-0 '>03 Sep 2022</h5>
                    </div>
                     <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Commission Earned :
                        </h5>
                        <h5 className='mb-0 '>INR 22,000</h5>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card className='shadow'>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <Card.Img
                    variant="top"
                    src="https://media.istockphoto.com/vectors/auto-service-logo-car-repair-icon-vector-vector-id1036660912?k=20&m=1036660912&s=612x612&w=0&h=L2LW7fhqCPWDQvKnoqaqb83xITYoNDjSZFwv07olLPw="
                    style={{
                    borderRadius: "50%",
                    height: "80px",
                    width: "80px",
                    }}
                />
                <Link to="/channel/garage-profile" >
                  <Button className="btn rounded-pill btn-sm d-flex align-items-center">
                  <i class="font-20 text-primary text-white   ri-settings-3-fill me-1"></i> View
                  </Button>
                </Link>
              </div>
              <Card.Body className='bg-gradient-grey'>
                <div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Name :
                        </h5>
                        <h5 className='mb-0 '>Sai Garage</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Address :
                        </h5>
                        <h5 className='mb-0 '>Pune</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Mobile No. :
                        </h5>
                        <h5 className='mb-0 '>+918975300224</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Date :
                        </h5>
                        <h5 className='mb-0 '>03 Sep 2022</h5>
                    </div>
                     <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Commission Earned :
                        </h5>
                        <h5 className='mb-0 '>INR 22,000</h5>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card className='shadow'>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <Card.Img
                    variant="top"
                    src="https://media.istockphoto.com/vectors/auto-service-logo-car-repair-icon-vector-vector-id1036660912?k=20&m=1036660912&s=612x612&w=0&h=L2LW7fhqCPWDQvKnoqaqb83xITYoNDjSZFwv07olLPw="
                    style={{
                    borderRadius: "50%",
                    height: "80px",
                    width: "80px",
                    }}
                />
                <Link to="/channel/garage-profile" >
                  <Button className="btn rounded-pill btn-sm d-flex align-items-center">
                  <i class="font-20 text-primary text-white   ri-settings-3-fill me-1"></i> View
                  </Button>
                </Link>
              </div>
              <Card.Body className='bg-gradient-grey'>
                <div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Name :
                        </h5>
                        <h5 className='mb-0 '>Sai Garage</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Address :
                        </h5>
                        <h5 className='mb-0 '>Pune</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Mobile No. :
                        </h5>
                        <h5 className='mb-0 '>+918975300224</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Date :
                        </h5>
                        <h5 className='mb-0 '>03 Sep 2022</h5>
                    </div>
                     <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Commission Earned :
                        </h5>
                        <h5 className='mb-0 '>INR 22,000</h5>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card className='shadow'>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <Card.Img
                    variant="top"
                    src="https://media.istockphoto.com/vectors/auto-service-logo-car-repair-icon-vector-vector-id1036660912?k=20&m=1036660912&s=612x612&w=0&h=L2LW7fhqCPWDQvKnoqaqb83xITYoNDjSZFwv07olLPw="
                    style={{
                    borderRadius: "50%",
                    height: "80px",
                    width: "80px",
                    }}
                />
                <Link to="/channel/garage-profile" >
                  <Button className="btn rounded-pill btn-sm d-flex align-items-center">
                  <i class="font-20 text-primary text-white   ri-settings-3-fill me-1"></i> View
                  </Button>
                </Link>
              </div>
              <Card.Body className='bg-gradient-grey'>
                <div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Name :
                        </h5>
                        <h5 className='mb-0 '>Sai Garage</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Address :
                        </h5>
                        <h5 className='mb-0 '>Pune</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Mobile No. :
                        </h5>
                        <h5 className='mb-0 '>+918975300224</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Date :
                        </h5>
                        <h5 className='mb-0 '>03 Sep 2022</h5>
                    </div>
                     <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Commission Earned :
                        </h5>
                        <h5 className='mb-0 '>INR 22,000</h5>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card className='shadow'>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <Card.Img
                    variant="top"
                    src="https://media.istockphoto.com/vectors/auto-service-logo-car-repair-icon-vector-vector-id1036660912?k=20&m=1036660912&s=612x612&w=0&h=L2LW7fhqCPWDQvKnoqaqb83xITYoNDjSZFwv07olLPw="
                    style={{
                    borderRadius: "50%",
                    height: "80px",
                    width: "80px",
                    }}
                />
                <Link to="/channel/garage-profile" >
                  <Button className="btn rounded-pill btn-sm d-flex align-items-center">
                  <i class="font-20 text-primary text-white   ri-settings-3-fill me-1"></i> View
                  </Button>
                </Link>
              </div>
              <Card.Body className='bg-gradient-grey'>
                <div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Name :
                        </h5>
                        <h5 className='mb-0 '>Sai Garage</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Address :
                        </h5>
                        <h5 className='mb-0 '>Pune</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Mobile No. :
                        </h5>
                        <h5 className='mb-0 '>+918975300224</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Date :
                        </h5>
                        <h5 className='mb-0 '>03 Sep 2022</h5>
                    </div>
                     <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Commission Earned :
                        </h5>
                        <h5 className='mb-0 '>INR 22,000</h5>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card className='shadow'>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <Card.Img
                    variant="top"
                    src="https://media.istockphoto.com/vectors/auto-service-logo-car-repair-icon-vector-vector-id1036660912?k=20&m=1036660912&s=612x612&w=0&h=L2LW7fhqCPWDQvKnoqaqb83xITYoNDjSZFwv07olLPw="
                    style={{
                    borderRadius: "50%",
                    height: "80px",
                    width: "80px",
                    }}
                />
                <Link to="/channel/garage-profile" >
                  <Button className="btn rounded-pill btn-sm d-flex align-items-center">
                  <i class="font-20 text-primary text-white   ri-settings-3-fill me-1"></i> View
                  </Button>
                </Link>
              </div>
              <Card.Body className='bg-gradient-grey'>
                <div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Name :
                        </h5>
                        <h5 className='mb-0 '>Sai Garage</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Address :
                        </h5>
                        <h5 className='mb-0 '>Pune</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Mobile No. :
                        </h5>
                        <h5 className='mb-0 '>+918975300224</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Date :
                        </h5>
                        <h5 className='mb-0 '>03 Sep 2022</h5>
                    </div>
                     <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Commission Earned :
                        </h5>
                        <h5 className='mb-0 '>INR 22,000</h5>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card className='shadow'>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <Card.Img
                    variant="top"
                    src="https://media.istockphoto.com/vectors/auto-service-logo-car-repair-icon-vector-vector-id1036660912?k=20&m=1036660912&s=612x612&w=0&h=L2LW7fhqCPWDQvKnoqaqb83xITYoNDjSZFwv07olLPw="
                    style={{
                    borderRadius: "50%",
                    height: "80px",
                    width: "80px",
                    }}
                />
                <Link to="/channel/garage-profile" >
                  <Button className="btn rounded-pill btn-sm d-flex align-items-center">
                  <i class="font-20 text-primary text-white   ri-settings-3-fill me-1"></i> View
                  </Button>
                </Link>
              </div>
              <Card.Body className='bg-gradient-grey'>
                <div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Name :
                        </h5>
                        <h5 className='mb-0 '>Sai Garage</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Address :
                        </h5>
                        <h5 className='mb-0 '>Pune</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Mobile No. :
                        </h5>
                        <h5 className='mb-0 '>+918975300224</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Date :
                        </h5>
                        <h5 className='mb-0 '>03 Sep 2022</h5>
                    </div>
                     <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Commission Earned :
                        </h5>
                        <h5 className='mb-0 '>INR 22,000</h5>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card className='shadow'>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <Card.Img
                    variant="top"
                    src="https://media.istockphoto.com/vectors/auto-service-logo-car-repair-icon-vector-vector-id1036660912?k=20&m=1036660912&s=612x612&w=0&h=L2LW7fhqCPWDQvKnoqaqb83xITYoNDjSZFwv07olLPw="
                    style={{
                    borderRadius: "50%",
                    height: "80px",
                    width: "80px",
                    }}
                />
                <Link to="/channel/garage-profile" >
                  <Button className="btn rounded-pill btn-sm d-flex align-items-center">
                  <i class="font-20 text-primary text-white   ri-settings-3-fill me-1"></i> View
                  </Button>
                </Link>
              </div>
              <Card.Body className='bg-gradient-grey'>
                <div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Name :
                        </h5>
                        <h5 className='mb-0 '>Sai Garage</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Address :
                        </h5>
                        <h5 className='mb-0 '>Pune</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Mobile No. :
                        </h5>
                        <h5 className='mb-0 '>+918975300224</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Date :
                        </h5>
                        <h5 className='mb-0 '>03 Sep 2022</h5>
                    </div>
                     <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Commission Earned :
                        </h5>
                        <h5 className='mb-0 '>INR 22,000</h5>
                    </div>
                    
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
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
      </Container>
      
    </>
  );
};

export default Garages;
