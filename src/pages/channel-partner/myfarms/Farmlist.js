import React from "react";
import PageTitle from "../../../components/PageTitle";
import { Row, Col, Card, ProgressBar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Farmlist = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Farm List",
            path: "/farmer/farm-list",
            active: true,
          },
        ]}
        title={"Farm List"}
      />
      <Row>
        <Card>
          <Card.Body>
            <h4>Search Farm</h4>
            <input
              type="search"
              className="form-control mb-3"
              placeholder="Search Farm by name.."
            />
          </Card.Body>
        </Card>
        <Col lg={6}>
          <Card className="mb-3">
            <Row className="g-0">
              <Col md={5}>
                <Card.Body className="pe-0">
                  <Card.Img
                    src="http://project.testproject.in/public/assets/images/FarmImg/farm-1.jpg"
                    className="img-fluid"
                  />
                  <ProgressBar
                    now={25}
                    label={"25 Acre"}
                    className="mb-0 mt-2 "
                    style={{ height: 20 }}
                  />
                </Card.Body>
              </Col>

              <Col md={7}>
                <Card.Body>
                  <Link
                    to="/farmer/farm-details"
                    className="w-100 text-white mx-2"
                  >
                    <Card.Title as="h5" className="text-info m-0">
                      Balaji Farms
                    </Card.Title>
                  </Link>
                  <Card.Text className="mb-1">
                    Balaji Farms is located in the outskirts of Nashik district
                    and is spread in 8 Acres of land
                  </Card.Text>
                  <Card.Text className="m-0 d-flex align-items-center justify-content-between">
                    <small className="text-muted">District</small>
                    <small className="text-muted">Pune</small>
                  </Card.Text>
                  <Card.Text className="m-0  d-flex align-items-center justify-content-between">
                    <small className="text-muted">Crop Type</small>
                    <small className="text-muted">Rabi Crops</small>
                  </Card.Text>
                  <div className="d-flex mt-4">
                    <Link
                      to="/farmer/farm-details"
                      className="w-100 text-white"
                    >
                      <Button
                        className="w-100 btn btn-bordered rounded-pill waves-effect waves-light btn bg-gradient-primary"
                        style={{ border: "0px solid" }}
                      >
                        View
                      </Button>
                    </Link>
                    <Link
                      to="/farmer/edit-farm"
                      className="w-100 text-white mx-2"
                    >
                      <Button
                        className="w-100 btn btn-bordered rounded-pill waves-effect waves-light btn bg-gradient-pink"
                        style={{ border: "0px solid" }}
                      >
                        Edit
                      </Button>
                    </Link>

                    <Link
                      to="/farmer/schedule-details"
                      className="w-100 text-white"
                    >
                      <Button
                        className="w-100 btn btn-bordered rounded-pill waves-effect waves-light btn bg-gradient-info"
                        style={{ border: "0px solid" }}
                      >
                        Schedule
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="mb-3">
            <Row className="g-0">
              <Col md={5}>
                <Card.Body className="pe-0">
                  <Card.Img
                    src="http://project.testproject.in/public/assets/images/FarmImg/farm-1.jpg"
                    className="img-fluid"
                  />
                  <ProgressBar
                    now={50}
                    label={"50 Acre"}
                    className="mb-0 mt-2 "
                    style={{ height: 20 }}
                  />
                </Card.Body>
              </Col>

              <Col md={7}>
                <Card.Body>
                  <Link
                    to="/farmer/farm-details"
                    className="w-100 text-white mx-2"
                  >
                    <Card.Title as="h5" className="text-info m-0">
                      Cora Farms
                    </Card.Title>
                  </Link>
                  <Card.Text className="mb-1">
                    Cora Farm is located in the outskirts of Nashik district and
                    is spread in 8 Acres of land
                  </Card.Text>
                  <Card.Text className="m-0 d-flex align-items-center justify-content-between">
                    <small className="text-muted">District</small>
                    <small className="text-muted">Pune</small>
                  </Card.Text>
                  <Card.Text className="m-0  d-flex align-items-center justify-content-between">
                    <small className="text-muted">Crop Type</small>
                    <small className="text-muted">Rabi Crops</small>
                  </Card.Text>
                  <div className="d-flex mt-4">
                    <Link
                      to="/farmer/farm-details"
                      className="w-100 text-white"
                    >
                      <Button
                        className="w-100 btn btn-bordered rounded-pill waves-effect waves-light btn bg-gradient-primary"
                        style={{ border: "0px solid" }}
                      >
                        View
                      </Button>
                    </Link>
                    <Link
                      to="/farmer/edit-farm"
                      className="w-100 text-white mx-2"
                    >
                      <Button
                        className="w-100 btn btn-bordered rounded-pill waves-effect waves-light btn bg-gradient-pink"
                        style={{ border: "0px solid" }}
                      >
                        Edit
                      </Button>
                    </Link>

                    <Link
                      to="/farmer/schedule-details"
                      className="w-100 text-white"
                    >
                      <Button
                        className="w-100 btn btn-bordered rounded-pill waves-effect waves-light btn bg-gradient-info"
                        style={{ border: "0px solid" }}
                      >
                        Schedule
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Card className="mb-3">
            <Row className="g-0">
              <Col md={5}>
                <Card.Body className="pe-0">
                  <Card.Img
                    src="http://project.testproject.in/public/assets/images/FarmImg/farm-1.jpg"
                    className="img-fluid"
                  />
                  <ProgressBar
                    now={80}
                    label={"80 Acre"}
                    className="mb-0 mt-2 "
                    style={{ height: 20 }}
                  />
                </Card.Body>
              </Col>

              <Col md={7}>
                <Card.Body>
                  <Link
                    to="/farmer/farm-details"
                    className="w-100 text-white mx-2"
                  >
                    <Card.Title as="h5" className="text-info m-0">
                      Gold Farm
                    </Card.Title>
                  </Link>
                  <Card.Text className="mb-1">
                    Gold Farm is located in the outskirts of Nashik district and
                    is spread in 8 Acres of land
                  </Card.Text>
                  <Card.Text className="m-0 d-flex align-items-center justify-content-between">
                    <small className="text-muted">District</small>
                    <small className="text-muted">Pune</small>
                  </Card.Text>
                  <Card.Text className="m-0  d-flex align-items-center justify-content-between">
                    <small className="text-muted">Crop Type</small>
                    <small className="text-muted">Rabi Crops</small>
                  </Card.Text>
                  <div className="d-flex mt-4">
                    <Link
                      to="/farmer/farm-details"
                      className="w-100 text-white"
                    >
                      <Button
                        className="w-100 btn btn-bordered rounded-pill waves-effect waves-light btn bg-gradient-primary"
                        style={{ border: "0px solid" }}
                      >
                        View
                      </Button>
                    </Link>
                    <Link
                      to="/farmer/edit-farm"
                      className="w-100 text-white mx-2"
                    >
                      <Button
                        className="w-100 btn btn-bordered rounded-pill waves-effect waves-light btn bg-gradient-pink"
                        style={{ border: "0px solid" }}
                      >
                        Edit
                      </Button>
                    </Link>

                    <Link
                      to="/farmer/schedule-details"
                      className="w-100 text-white"
                    >
                      <Button
                        className="w-100 btn btn-bordered rounded-pill waves-effect waves-light btn bg-gradient-info"
                        style={{ border: "0px solid" }}
                      >
                        Schedule
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="mb-3">
            <Row className="g-0">
              <Col md={5}>
                <Card.Body className="pe-0">
                  <Card.Img
                    src="http://project.testproject.in/public/assets/images/FarmImg/farm-1.jpg"
                    className="img-fluid"
                  />
                  <ProgressBar
                    now={25}
                    label={"25 Acre"}
                    className="mb-0 mt-2 "
                    style={{ height: 20 }}
                  />
                </Card.Body>
              </Col>

              <Col md={7}>
                <Card.Body>
                  <Link
                    to="/farmer/farm-details"
                    className="w-100 text-white mx-2"
                  >
                    <Card.Title as="h5" className="text-info m-0">
                      Balaji Farms
                    </Card.Title>
                  </Link>
                  <Card.Text className="mb-1">
                    Cora Farm is located in the outskirts of Nashik district and
                    is spread in 8 Acres of land
                  </Card.Text>
                  <Card.Text className="m-0 d-flex align-items-center justify-content-between">
                    <small className="text-muted">District</small>
                    <small className="text-muted">Pune</small>
                  </Card.Text>
                  <Card.Text className="m-0  d-flex align-items-center justify-content-between">
                    <small className="text-muted">Crop Type</small>
                    <small className="text-muted">Rabi Crops</small>
                  </Card.Text>
                  <div className="d-flex mt-4">
                    <Link
                      to="/farmer/farm-details"
                      className="w-100 text-white"
                    >
                      <Button
                        className="w-100 btn btn-bordered rounded-pill waves-effect waves-light btn bg-gradient-primary"
                        style={{ border: "0px solid" }}
                      >
                        View
                      </Button>
                    </Link>
                    <Link
                      to="/farmer/edit-farm"
                      className="w-100 text-white mx-2"
                    >
                      <Button
                        className="w-100 btn btn-bordered rounded-pill waves-effect waves-light btn bg-gradient-pink"
                        style={{ border: "0px solid" }}
                      >
                        Edit
                      </Button>
                    </Link>

                    <Link
                      to="/farmer/schedule-details"
                      className="w-100 text-white"
                    >
                      <Button
                        className="w-100 btn btn-bordered rounded-pill waves-effect waves-light btn bg-gradient-info"
                        style={{ border: "0px solid" }}
                      >
                        Schedule
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Farmlist;
