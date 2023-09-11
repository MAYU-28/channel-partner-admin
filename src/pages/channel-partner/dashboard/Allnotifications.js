import React, { useState } from "react";
import { Card, Row, Col, Alert, Pagination, Tab, Tabs } from "react-bootstrap";
import CountUp from "react-countup";
import PageTitle from "../../../components/PageTitle";
import { Link } from 'react-router-dom';


function AllNotifications() {
  const [key, setKey] = useState("all");
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Notifications",
            path: "/channel/notifications",
            active: true,
          },
        ]}
        title={"Notifications"}
      />
      <Row>
        <Col>
          <Card className="p-0 bg-gradient-pink">
            <Card.Body className='p-2'>
              <h4 className="text-white">General</h4>
              <h3 className="text-white mt-1" style={{ fontSize: "25px" }}>
                <CountUp duration={1} end={200} separator="," /> +
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="p-0 bg-gradient-purple">
            <Card.Body className='p-2'>
              <h4 className="text-white">Channel Partners</h4>
              <h3 className="text-white mt-1" style={{ fontSize: "25px" }}>
                <CountUp duration={1} end={32} separator="," /> +
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="p-0 bg-gradient-orange">
            <Card.Body className='p-2'>
              <h4 className="text-white">Class</h4>
              <h3 className="text-white mt-1" style={{ fontSize: "25px" }}>
                <CountUp duration={1} end={30} separator="," /> +
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="p-0 bg-gradient-primary">
            <Card.Body className='p-2'>
              <h4 className="text-white">Teachers</h4>
              <h3 className="text-white mt-1" style={{ fontSize: "25px" }}>
                <CountUp duration={1} end={55} separator="," /> +
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="p-0 bg-gradient-danger">
            <Card.Body className='p-2'>
              <h4 className="text-white">Career Experts</h4>
              <h3 className="text-white mt-1" style={{ fontSize: "25px" }}>
                <CountUp duration={1} end={90} separator="," /> +
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="p-0 bg-gradient-secondary">
            <Card.Body className='p-2'>
              <h4 className="text-white">Students</h4>
              <h3 className="text-white mt-1" style={{ fontSize: "25px" }}>
                <CountUp duration={1} end={90} separator="," /> +
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="p-0 bg-gradient-pink">
            <Card.Body className='p-2'>
              <h4 className="text-white">School</h4>
              <h3 className="text-white mt-1" style={{ fontSize: "25px" }}>
                <CountUp duration={1} end={90} separator="," /> +
              </h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="mb-4 d-flex" >
                <h4 className="w-25">Search Notification</h4>
                <input type="text" placeholder="Search Notification" className="form-control"/>
              </div>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="all" title="All">
                  <h4 className="header-title mb-3">All Notifications</h4>
                  {["primary", "secondary"].map((color, index) => {
                    return (
                      <Alert variant={color} key={index}>
                        This is a <strong>{color}</strong> Notification
                      </Alert>
                    );
                  })}
                  <Alert variant="success">
                    <i className="mdi mdi-check-all me-2"></i>This is a{" "}
                    <strong>success</strong> Notification
                  </Alert>
                  <Alert variant="danger">
                    <i className="mdi mdi-block-helper me-2"></i> This is a{" "}
                    <strong>danger</strong> Notification
                  </Alert>
                  <Alert variant="warning">
                    <i className="mdi mdi-alert-outline me-2"></i> This is a{" "}
                    <strong>warning</strong> Notification
                  </Alert>
                  <Alert variant="info">
                    <i className="mdi mdi-alert-circle-outline me-2"></i> A
                    simple info alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="light">
                    A simple light alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="dark" className="mb-0">
                    A simple dark alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Pagination style={{ marginTop: "40px" }}>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item disabled>{10}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
                </Tab>
                <Tab eventKey="channelpartner" title="Channel Partner">
                  <h4 className="header-title mb-3">Channel Partner</h4>

                  {["primary", "secondary"].map((color, index) => {
                    return (
                      <Alert variant={color} key={index}>
                        This is a <strong>{color}</strong> Notification
                      </Alert>
                    );
                  })}
                  <Alert variant="success">
                    <i className="mdi mdi-check-all me-2"></i>This is a{" "}
                    <strong>success</strong> Notification
                  </Alert>
                  <Alert variant="danger">
                    <i className="mdi mdi-block-helper me-2"></i> This is a{" "}
                    <strong>danger</strong> Notification
                  </Alert>
                  <Alert variant="warning">
                    <i className="mdi mdi-alert-outline me-2"></i> This is a{" "}
                    <strong>warning</strong> Notification
                  </Alert>
                  <Alert variant="info">
                    <i className="mdi mdi-alert-circle-outline me-2"></i> A
                    simple info alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="light">
                    A simple light alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="dark" className="mb-0">
                    A simple dark alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Pagination style={{ marginTop: "40px" }}>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item disabled>{10}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
                </Tab>
                <Tab eventKey="class" title="Class">
                  <h4 className="header-title mb-3">
                    Class Notifications
                  </h4>

                  {["primary", "secondary"].map((color, index) => {
                    return (
                      <Alert variant={color} key={index}>
                        This is a <strong>{color}</strong> Notification
                      </Alert>
                    );
                  })}
                  <Alert variant="success">
                    <i className="mdi mdi-check-all me-2"></i>This is a{" "}
                    <strong>success</strong> Notification
                  </Alert>
                  <Alert variant="danger">
                    <i className="mdi mdi-block-helper me-2"></i> This is a{" "}
                    <strong>danger</strong> Notification
                  </Alert>
                  <Alert variant="warning">
                    <i className="mdi mdi-alert-outline me-2"></i> This is a{" "}
                    <strong>warning</strong> Notification
                  </Alert>
                  <Alert variant="info">
                    <i className="mdi mdi-alert-circle-outline me-2"></i> A
                    simple info alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="light">
                    A simple light alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="dark" className="mb-0">
                    A simple dark alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Pagination style={{ marginTop: "40px" }}>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item disabled>{10}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
                </Tab>
                <Tab eventKey="teacher" title="Teachers">
                  <h4 className="header-title mb-3">
                    Teachers Notifications
                  </h4>
                  {["primary", "secondary"].map((color, index) => {
                    return (
                      <Alert variant={color} key={index}>
                        This is a <strong>{color}</strong> Notification
                      </Alert>
                    );
                  })}
                  <Alert variant="success">
                    <i className="mdi mdi-check-all me-2"></i>This is a{" "}
                    <strong>success</strong> Notification
                  </Alert>
                  <Alert variant="danger">
                    <i className="mdi mdi-block-helper me-2"></i> This is a{" "}
                    <strong>danger</strong> Notification
                  </Alert>
                  <Alert variant="warning">
                    <i className="mdi mdi-alert-outline me-2"></i> This is a{" "}
                    <strong>warning</strong> Notification
                  </Alert>
                  <Alert variant="info">
                    <i className="mdi mdi-alert-circle-outline me-2"></i> A
                    simple info alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="light">
                    A simple light alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="dark" className="mb-0">
                    A simple dark alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Pagination style={{ marginTop: "40px" }}>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item disabled>{10}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
                </Tab>
                <Tab eventKey="careerexpert" title="Career Expert">
                  <h4 className="header-title mb-3">
                  Career Expert Notifications
                  </h4>
                  {["primary", "secondary"].map((color, index) => {
                    return (
                      <Alert variant={color} key={index}>
                        This is a <strong>{color}</strong> Notification
                      </Alert>
                    );
                  })}
                  <Alert variant="success">
                    <i className="mdi mdi-check-all me-2"></i>This is a{" "}
                    <strong>success</strong> Notification
                  </Alert>
                  <Alert variant="danger">
                    <i className="mdi mdi-block-helper me-2"></i> This is a{" "}
                    <strong>danger</strong> Notification
                  </Alert>
                  <Alert variant="warning">
                    <i className="mdi mdi-alert-outline me-2"></i> This is a{" "}
                    <strong>warning</strong> Notification
                  </Alert>
                  <Alert variant="info">
                    <i className="mdi mdi-alert-circle-outline me-2"></i> A
                    simple info alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="light">
                    A simple light alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="dark" className="mb-0">
                    A simple dark alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Pagination style={{ marginTop: "40px" }}>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item disabled>{10}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
                </Tab>
                <Tab eventKey="student" title="Student">
                  <h4 className="header-title mb-3">
                  Student Notifications
                  </h4>
                  {["primary", "secondary"].map((color, index) => {
                    return (
                      <Alert variant={color} key={index}>
                        This is a <strong>{color}</strong> Notification
                      </Alert>
                    );
                  })}
                  <Alert variant="success">
                    <i className="mdi mdi-check-all me-2"></i>This is a{" "}
                    <strong>success</strong> Notification
                  </Alert>
                  <Alert variant="danger">
                    <i className="mdi mdi-block-helper me-2"></i> This is a{" "}
                    <strong>danger</strong> Notification
                  </Alert>
                  <Alert variant="warning">
                    <i className="mdi mdi-alert-outline me-2"></i> This is a{" "}
                    <strong>warning</strong> Notification
                  </Alert>
                  <Alert variant="info">
                    <i className="mdi mdi-alert-circle-outline me-2"></i> A
                    simple info alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="light">
                    A simple light alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="dark" className="mb-0">
                    A simple dark alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Pagination style={{ marginTop: "40px" }}>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item disabled>{10}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
                </Tab>
                <Tab eventKey="school" title="school">
                  <h4 className="header-title mb-3">
                  School Notifications
                  </h4>
                  {["primary", "secondary"].map((color, index) => {
                    return (
                      <Alert variant={color} key={index}>
                        This is a <strong>{color}</strong> Notification
                      </Alert>
                    );
                  })}
                  <Alert variant="success">
                    <i className="mdi mdi-check-all me-2"></i>This is a{" "}
                    <strong>success</strong> Notification
                  </Alert>
                  <Alert variant="danger">
                    <i className="mdi mdi-block-helper me-2"></i> This is a{" "}
                    <strong>danger</strong> Notification
                  </Alert>
                  <Alert variant="warning">
                    <i className="mdi mdi-alert-outline me-2"></i> This is a{" "}
                    <strong>warning</strong> Notification
                  </Alert>
                  <Alert variant="info">
                    <i className="mdi mdi-alert-circle-outline me-2"></i> A
                    simple info alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="light">
                    A simple light alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="dark" className="mb-0">
                    A simple dark alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Pagination style={{ marginTop: "40px" }}>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item disabled>{10}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default AllNotifications;
