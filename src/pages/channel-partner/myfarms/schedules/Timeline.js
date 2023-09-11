import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Modal,
  Table,
  Collapse,
} from "react-bootstrap";
import CountUp from "react-countup";
import PageTitle from "../../../../components/PageTitle";
import { Link } from 'react-router-dom';

function Timeline() {
// modal
const [show, setShow] = useState(false);    
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
// collapse
    
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);
const [isOpen2, setIsOpen2] = useState(false);
const toggle2 = () => setIsOpen2(!isOpen2); 
    
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Timeline",
            path: "/farmer/timeline",
            active: true,
          },
        ]}
        title={"Timeline"}
      />
      <Row className="justify-content-center">
        <Col xs={12}>
          <div className="timeline">
            <article className="timeline-item">
              <h2 className="m-0 d-none">&nbsp;</h2>
              <div className="time-show mt-0">
                <Link to="#" className="btn btn-primary width-lg">
                  1st Aug 21 - 5th Aug 2021
                </Link>
              </div>
            </article>

            <article className="timeline-item timeline-item-left">
              <div className="timeline-desk">
                <div className="timeline-box">
                  <span className="arrow-alt"></span>
                  <span className="timeline-icon">
                    <i className="mdi mdi-adjust"></i>
                  </span>
                  <h4 className="mt-0 font-16">Step 1 Sowing Stage</h4>
                  <p className="text-muted">
                    <small>08:25 am</small>
                  </p>
                  <p className="mb-0">
                    First step will be to do the sowing of the farm and then
                    after that do the watering in a small quantity Lorem Ipsum
                    is simply dummy text of the printing and typesetting
                    industry.
                  </p>
                  <div className="d-flex align-items-center mt-3">
                    <Button className="rounded-pill" onClick={handleShow}>
                      Required Material
                    </Button>
                    <Button className="rounded-pill ms-2" onClick={toggle}>
                      Show Details
                    </Button>
                  </div>
                  <Collapse in={isOpen} className="mt-3 shadow">
                    <div>
                      <Card>
                        <Card.Body>
                          <h4>Details</h4>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Nihil anim
                          keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident.
                        </Card.Body>
                      </Card>
                    </div>
                  </Collapse>
                </div>
              </div>
            </article>

            <article className="timeline-item">
              <div className="timeline-desk">
                <div className="timeline-box">
                  <span className="arrow"></span>
                  <span className="timeline-icon">
                    <i className="mdi mdi-adjust"></i>
                  </span>
                  <h4 className="mt-0 font-16">2 hours ago</h4>
                  <p className=" text-muted">
                    <small>08:25 am</small>
                  </p>
                  <p className="mb-0">
                    consectetur adipisicing elit. Iusto, optio, dolorum{" "}
                    <Link to="#">John deon</Link> provident rerum aut hic quasi
                    placeat iure tempora laudantium
                  </p>
                  <div className="d-flex align-items-center mt-3">
                    <Button className="rounded-pill" onClick={handleShow}>
                      Required Material
                    </Button>
                    <Button className="rounded-pill ms-2" onClick={toggle2}>
                      Show Details
                    </Button>
                  </div>
                  <Collapse in={isOpen2} className="mt-3 shadow">
                    <div>
                      <Card>
                        <Card.Body>
                          <h4>Details</h4>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Nihil anim
                          keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident.
                        </Card.Body>
                      </Card>
                    </div>
                  </Collapse>
                </div>
              </div>
            </article>

            <article className="timeline-item timeline-item-left">
              <div className="timeline-desk">
                <div className="timeline-box">
                  <span className="arrow-alt"></span>
                  <span className="timeline-icon">
                    <i className="mdi mdi-adjust"></i>
                  </span>
                  <h4 className="mt-0 font-16">10 hours ago</h4>
                  <p className="text-muted">
                    <small>08:25 am</small>
                  </p>
                  <p>3 new photo Uploaded on facebook fan page</p>
                  <div className="d-flex align-items-center mt-3">
                    <Button className="rounded-pill" onClick={handleShow}>
                      Required Material
                    </Button>
                    <Button className="rounded-pill ms-2" onClick={toggle}>
                      Show Details
                    </Button>
                  </div>
                  <Collapse in={isOpen} className="mt-3 shadow">
                    <div>
                      <Card>
                        <Card.Body>
                          <h4>Details</h4>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Nihil anim
                          keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident.
                        </Card.Body>
                      </Card>
                    </div>
                  </Collapse>
                </div>
              </div>
            </article>

            <article className="timeline-item">
              <div className="timeline-desk">
                <div className="timeline-box">
                  <span className="arrow"></span>
                  <span className="timeline-icon">
                    <i className="mdi mdi-adjust"></i>
                  </span>
                  <h4 className="mt-0 font-16">14 hours ago</h4>
                  <p className="text-muted">
                    <small>08:25 am</small>
                  </p>
                  <p className="mb-0">
                    Outdoor visit at California State Route 85 with John Boltana
                    & Harry Piterson regarding to setup a new show room.
                  </p>
                  <div className="d-flex align-items-center mt-3">
                    <Button className="rounded-pill" onClick={handleShow}>
                      Required Material
                    </Button>
                    <Button className="rounded-pill ms-2" onClick={toggle2}>
                      Show Details
                    </Button>
                  </div>
                  <Collapse in={isOpen2} className="mt-3 shadow">
                    <div>
                      <Card>
                        <Card.Body>
                          <h4>Details</h4>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Nihil anim
                          keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident.
                        </Card.Body>
                      </Card>
                    </div>
                  </Collapse>
                </div>
              </div>
            </article>

            <article className="timeline-item  timeline-item-left">
              <div className="timeline-desk">
                <div className="panel">
                  <div className="timeline-box">
                    <span className="arrow-alt"></span>
                    <span className="timeline-icon">
                      <i className="mdi mdi-adjust"></i>
                    </span>
                    <h4 className="mt-0 font-16">19 hours ago</h4>
                    <p className="text-muted">
                      <small>08:25 am</small>
                    </p>
                    <p className="mb-0">
                      Jonatha Smith added new milestone{" "}
                      <span>
                        <Link to="#">Pathek</Link>
                      </span>{" "}
                      Lorem ipsum dolor sit amet consiquest dio
                    </p>
                    <div className="d-flex align-items-center mt-3">
                      <Button className="rounded-pill" onClick={handleShow}>
                        Required Material
                      </Button>
                      <Button className="rounded-pill ms-2" onClick={toggle2}>
                        Show Details
                      </Button>
                    </div>
                    <Collapse in={isOpen2} className="mt-3 shadow">
                      <div>
                        <Card>
                          <Card.Body>
                            <h4>Details</h4>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. Nihil
                            anim keffiyeh helvetica, craft beer labore wes
                            anderson cred nesciunt sapiente ea proident.
                          </Card.Body>
                        </Card>
                      </div>
                    </Collapse>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </Col>
      </Row>
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Required Material List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="table-responsive">
            <Table className="mb-0">
              <thead>
                <tr>
                  <th>Material List</th>
                  <th>Qty Required</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Material 1</td>
                  <td>500 kg</td>
                </tr>
                <tr>
                  <td>Material 2</td>
                  <td>500 kg</td>
                </tr>
                <tr>
                  <td>Material 3</td>
                  <td>800 kg</td>
                </tr>
                <tr>
                  <td>Material 4</td>
                  <td>100 kg</td>
                </tr>
                <tr>
                  <td>Material 5</td>
                  <td>100 kg</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Timeline;
