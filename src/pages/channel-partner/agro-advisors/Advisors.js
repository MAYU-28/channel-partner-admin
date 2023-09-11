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

const Advisors = () => {
  const [key, setKey] = useState("current");
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Advisors",
            path: "/farmer/advisors",
            active: true,
          },
        ]}
        title={"Advisors"}
      />
      <Container>
        <Card>
          <Card.Body>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="current" title="Current Advisors">
                <h3 className="text-info mb-3">Current Advisors</h3>

                <Row>
                  <Col>
                    <Card>
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
                          Prateek Gupta
                        </Card.Title>
                        <Card.Text>
                          <b>Advisor Experience 3 Years 2 Months</b>
                          <br />
                          Virgil Abloh’s Off-White is a streetwear-inspired
                          collection that continues to break away from the
                          conventions of mainstream fashion.
                        </Card.Text>
                        <Link to="/farmer/advisor-detail">
                          <Button className="rounded-pill bg-gradient-info btn w-100">
                            Contact Me
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
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
                          Shreeya Jain
                        </Card.Title>
                        <Card.Text>
                          <b>Advisor Experience 2 Years 2 Months</b>
                          <br />
                          Virgil Abloh’s Off-White is a streetwear-inspired
                          collection that continues to break away from the
                          conventions of mainstream fashion.
                        </Card.Text>
                        <Link to="/farmer/advisor-detail">
                          <Button className="rounded-pill bg-gradient-info btn w-100">
                            Contact Me
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
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
                          Ravi Mishra
                        </Card.Title>
                        <Card.Text>
                          <b>Advisor Experience 5 Years 2 Months</b>
                          <br />
                          Virgil Abloh’s Off-White is a streetwear-inspired
                          collection that continues to break away from the
                          conventions of mainstream fashion.
                        </Card.Text>
                        <Link to="/farmer/advisor-detail">
                          <Button className="rounded-pill bg-gradient-info btn w-100">
                            Contact Me
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
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
                          Mayuri Shimpi
                        </Card.Title>
                        <Card.Text>
                          <b>Advisor Experience 4 Years 2 Months</b>
                          <br />
                          Virgil Abloh’s Off-White is a streetwear-inspired
                          collection that continues to break away from the
                          conventions of mainstream fashion.
                        </Card.Text>
                        <Link to="/farmer/advisor-detail">
                          <Button className="rounded-pill bg-gradient-info btn w-100">
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
                        <Link to="/farmer/advisor-detail">
                          <Button className="rounded-pill bg-gradient-info btn w-100">
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
                        <Link to="/farmer/advisor-detail">
                          <Button className="rounded-pill bg-gradient-info btn w-100">
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
                        <Link to="/farmer/advisor-detail">
                          <Button className="rounded-pill bg-gradient-info btn w-100">
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
                        <Link to="/farmer/advisor-detail">
                          <Button className="rounded-pill bg-gradient-info btn w-100">
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

export default Advisors;
