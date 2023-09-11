import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";
import { Card } from "react-bootstrap";

const SearchBuyer = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Search Buyer (Contractor)",
            path: "/farmer/search-buyer",
            active: true,
          },
        ]}
        title={"Search Buyer (Contractor)"}
      />
      <Container>
        <Row>
          <Col md={4} sm={12}>
            <Card className="bg-gradient-info">
              <Card.Body>
                <h4 className="text-white">New Contract Request</h4>
                <div className="d-flex align-items-center justify-content-between align-items-center mb-2">
                  <p className="m-0 text-white">Crop Name</p>
                  <p className="m-0 text-white">Tomato</p>
                </div>
                <div className="d-flex align-items-center justify-content-between align-items-center mb-2">
                  <p className="m-0 text-white">Contract Value </p>
                  <p className="m-0 text-white">INR 5 Lakhs</p>
                </div>
                <div className="d-flex align-items-center justify-content-between align-items-center mb-2">
                  <p className="m-0 text-white">Area</p>
                  <p className="m-0 text-white">2 Acre</p>
                </div>
                <div className="d-flex align-items-center justify-content-between align-items-center mb-2">
                  <p className="m-0 text-white">Expected harvest Date</p>
                  <p className="m-0 text-white">15th January 2022</p>
                </div>

                <Link to="/farmer/contracts-list">
                  <button className="btn btn-white bg-white w-100 bordered rounded-pill  mt-2">
                    View Contract
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card className="bg-gradient-primary">
              <Card.Body>
                <h4 className="text-white">On-Going Contract</h4>
                <div className="d-flex align-items-center justify-content-between align-items-center mb-2">
                  <p className="m-0 text-white">Crop Name</p>
                  <p className="m-0 text-white">Tomato</p>
                </div>
                <div className="d-flex align-items-center justify-content-between align-items-center mb-2">
                  <p className="m-0 text-white">Contract Value </p>
                  <p className="m-0 text-white">INR 5 Lakhs</p>
                </div>
                <div className="d-flex align-items-center justify-content-between align-items-center mb-2">
                  <p className="m-0 text-white">Area</p>
                  <p className="m-0 text-white">2 Acre</p>
                </div>
                <div className="d-flex align-items-center justify-content-between align-items-center mb-2">
                  <p className="m-0 text-white">Expected harvest Date</p>
                  <p className="m-0 text-white">15th January 2022</p>
                </div>

                <Link to="/farmer/contracts-list">
                  <button className="btn btn-white bg-white w-100 bordered rounded-pill  mt-2">
                    View Contract
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card className="bg-gradient-pink">
              <Card.Body>
                <h4 className="text-white">Upcoming Contract</h4>
                <div className="d-flex align-items-center justify-content-between align-items-center mb-2">
                  <p className="m-0 text-white">Crop Name</p>
                  <p className="m-0 text-white">Tomato</p>
                </div>
                <div className="d-flex align-items-center justify-content-between align-items-center mb-2">
                  <p className="m-0 text-white">Contract Value </p>
                  <p className="m-0 text-white">INR 5 Lakhs</p>
                </div>
                <div className="d-flex align-items-center justify-content-between align-items-center mb-2">
                  <p className="m-0 text-white">Area</p>
                  <p className="m-0 text-white">2 Acre</p>
                </div>
                <div className="d-flex align-items-center justify-content-between align-items-center mb-2">
                  <p className="m-0 text-white">Expected harvest Date</p>
                  <p className="m-0 text-white">15th January 2022</p>
                </div>

                <Link to="/farmer/contracts-list">
                  <button className="btn btn-white bg-white w-100 bordered rounded-pill  mt-2">
                    View Contract
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card className="bg-gradient-pink">
              <Card.Body>
                <h4 className="text-white">Completed Request</h4>
                <div className="d-flex align-items-center justify-content-between align-items-center mb-2">
                  <p className="m-0 text-white">Crop Name</p>
                  <p className="m-0 text-white">Tomato</p>
                </div>
                <div className="d-flex align-items-center justify-content-between align-items-center mb-2">
                  <p className="m-0 text-white">Contract Value </p>
                  <p className="m-0 text-white">INR 5 Lakhs</p>
                </div>
                <div className="d-flex align-items-center justify-content-between align-items-center mb-2">
                  <p className="m-0 text-white">Area</p>
                  <p className="m-0 text-white">2 Acre</p>
                </div>
                <div className="d-flex align-items-center justify-content-between align-items-center mb-2">
                  <p className="m-0 text-white">Expected harvest Date</p>
                  <p className="m-0 text-white">15th January 2022</p>
                </div>

                <Link to="/farmer/contracts-list">
                  <button className="btn btn-white bg-white w-100 bordered rounded-pill  mt-2">
                    View Contract
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card className="bg-gradient-purple">
              <Card.Body>
                <h4 className="text-white">Cancelled Contract</h4>
                <div className="d-flex align-items-center justify-content-between align-items-center mb-2">
                  <p className="m-0 text-white">Crop Name</p>
                  <p className="m-0 text-white">Tomato</p>
                </div>
                <div className="d-flex align-items-center justify-content-between align-items-center mb-2">
                  <p className="m-0 text-white">Contract Value </p>
                  <p className="m-0 text-white">INR 5 Lakhs</p>
                </div>
                <div className="d-flex align-items-center justify-content-between align-items-center mb-2">
                  <p className="m-0 text-white">Area</p>
                  <p className="m-0 text-white">2 Acre</p>
                </div>
                <div className="d-flex align-items-center justify-content-between align-items-center mb-2">
                  <p className="m-0 text-white">Expected harvest Date</p>
                  <p className="m-0 text-white">15th January 2022</p>
                </div>

                <Link to="/farmer/contracts-list">
                  <button className="btn btn-white bg-white w-100 bordered rounded-pill  mt-2">
                    View Contract
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row>
                  <Col>
                    <Card className="shadow">
                      <Card.Img
                        width="100"
                        height="250"
                        variant="top"
                        src="http://project.testproject.in/public/assets/img/photos/avatar-1.png"
                        style={{
                          borderRadius: "50%",
                          height: "150px",
                          width: "150px",
                          margin: "auto",
                          marginTop: "30px",
                        }}
                      />
                      <Card.Body>
                        <Card.Title className="text-info">
                          Rakesh Basod - Many Sees Pvt. Ltd
                        </Card.Title>
                        <Card.Title className="text-info"></Card.Title>
                        <Card.Text>
                          <b>42 reviews</b>
                          <br />
                          Virgil Abloh’s Off-White is a streetwear-inspired
                          collection that continues to break away from the
                          conventions of mainstream fashion. Made in Italy,
                          these black and brown Odsy-1000 low-top sneakers.
                        </Card.Text>
                        <Link to="/farmer/new-contract-details">
                          <Button className="btn bg-gradient-info text-white rounded-pill w-100">
                            Contact Me
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="shadow">
                      <Card.Img
                        width="100"
                        height="250"
                        variant="top"
                        style={{
                          borderRadius: "50%",
                          height: "150px",
                          width: "150px",
                          margin: "auto",
                          marginTop: "30px",
                        }}
                        src="http://project.testproject.in/public/assets/img/photos/avatar-3.png"
                      />
                      <Card.Body>
                        <Card.Title className="text-info">
                          Asmina Kanji - Food Seeds Pvt. Ltd
                        </Card.Title>
                        <Card.Text>
                          <b>142 reviews</b>
                          <br />
                          Virgil Abloh’s Off-White is a streetwear-inspired
                          collection that continues to break away from the
                          conventions of mainstream fashion. Made in Italy,
                          these black and brown Odsy-1000 low-top sneakers
                        </Card.Text>
                        <Link to="/farmer/new-contract-details">
                          <Button className="btn bg-gradient-info text-white rounded-pill w-100">
                            Contact Me
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="shadow">
                      <Card.Img
                        width="100"
                        height="250"
                        variant="top"
                        src="http://project.testproject.in/public/assets/img/photos/avatar-4.png"
                        style={{
                          borderRadius: "50%",
                          height: "150px",
                          width: "150px",
                          margin: "auto",
                          marginTop: "30px",
                        }}
                      />
                      <Card.Body>
                        <Card.Title className="text-info">
                          Sita Gupta - Kissan Traders
                        </Card.Title>
                        <Card.Text>
                          <b>142 Reviews</b>
                          <br />
                          Virgil Abloh’s Off-White is a streetwear-inspired
                          collection that continues to break away from the
                          conventions of mainstream fashion. Made in Italy,
                          these black and brown Odsy-1000 low-top sneakers.
                        </Card.Text>
                        <Link to="/farmer/new-contract-details">
                          <Button className="btn bg-gradient-info text-white rounded-pill w-100">
                            Contact Me
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="shadow">
                      <Card.Img
                        width="100"
                        height="250"
                        variant="top"
                        src="http://project.testproject.in/public/assets/img/photos/avatar-2.png"
                        style={{
                          borderRadius: "50%",
                          height: "150px",
                          width: "150px",
                          margin: "auto",
                          marginTop: "30px",
                        }}
                      />
                      <Card.Body>
                        <Card.Title className="text-info">
                          Gopal Bagdi - Banana Traders
                        </Card.Title>
                        <Card.Text>
                          <b>142 Reviews</b>
                          <br />
                          Virgil Abloh’s Off-White is a streetwear-inspired
                          collection that continues to break away from the
                          conventions of mainstream fashion. Made in Italy,
                          these black and brown Odsy-1000 low-top sneakers.
                        </Card.Text>
                        <Link to="/farmer/new-contract-details">
                          <Button className="btn bg-gradient-info text-white rounded-pill w-100">
                            Contact Me
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
      </Container>
    </>
  );
};

export default SearchBuyer;
