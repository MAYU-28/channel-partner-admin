import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PageTitle from "../../../components/PageTitle";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";

const Laboratory = () => {
  const [key, setKey] = useState("current");
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Laboratory",
            path: "/farmer/laboratory",
            active: true,
          },
        ]}
        title={"Laboratory"}
      />
      <Container>
        <Card>
          <Card.Body>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="current" title="Current Laboratory">
                <h3 className="text-info mb-3">Current Laboratory</h3>

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
                        <Link to="/farmer/laboratory-detail">
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
                        <Link to="/farmer/laboratory-detail">
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
                        <Link to="/farmer/laboratory-detail">
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
                        <Link to="/farmer/laboratory-detail">
                          <Button className="btn bg-gradient-info text-white rounded-pill w-100">
                            Contact Me
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="history" title="History">
                <h3 className="text-info mb-3">History</h3>
                <Row>
                  <Col>
                    <Card className="shadow">
                      <Card.Img
                        width="100"
                        height="250"
                        variant="top"
                        src="http://project.testproject.in/public/assets/img/photos/avatar-3.png"
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
                          Ankita Sonawane
                        </Card.Title>
                        <Card.Text>
                          <b>Advisor Experience 3 Years 2 Months</b>
                          <br />
                          Virgil Abloh’s Off-White is a streetwear-inspired
                          collection that continues to break away from the
                          conventions of mainstream fashion.
                        </Card.Text>
                        <Link to="/farmer/laboratory-detail">
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
                        src="http://project.testproject.in/public/assets/img/photos/avatar-4.png"
                      />
                      <Card.Body>
                        <Card.Title className="text-info">
                          Shreeya Jain
                        </Card.Title>
                        <Card.Text>
                          <b>Advisor Experience 2 Years 2 Months</b>
                          <br />
                          Virgil Abloh’s Off-White is a streetwear-inspired
                          collection that continues to break away from the
                          conventions of mainstream fashion.
                        </Card.Text>
                        <Link to="/farmer/laboratory-detail">
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
                          Minali Patil
                        </Card.Title>
                        <Card.Text>
                          <b>Advisor Experience 5 Years 2 Months</b>
                          <br />
                          Virgil Abloh’s Off-White is a streetwear-inspired
                          collection that continues to break away from the
                          conventions of mainstream fashion.
                        </Card.Text>
                        <Link to="/farmer/laboratory-detail">
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
                          Pritam Singh
                        </Card.Title>
                        <Card.Text>
                          <b>Advisor Experience 4 Years 2 Months</b>
                          <br />
                          Virgil Abloh’s Off-White is a streetwear-inspired
                          collection that continues to break away from the
                          conventions of mainstream fashion.
                        </Card.Text>
                        <Link to="/farmer/laboratory-detail">
                          <Button className="btn bg-gradient-info text-white rounded-pill w-100">
                            Contact Me
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Laboratory;
