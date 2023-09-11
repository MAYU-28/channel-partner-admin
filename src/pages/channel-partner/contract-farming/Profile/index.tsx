import React from 'react';
import { Row, Col, Card, Tab, Nav } from 'react-bootstrap';

// components

import UserBox from './UserBox';
import About from './About';
import Contracts from './tabs/contracts';
import Photos from './tabs/photos';
import Timeline from './tabs/timeline';


import Settings from './Settings';


const Profile = () => {
    return (
        <>
            <Row>
                <Col xl={4} lg={4}>
                    {/* User information */}
                    <UserBox />
                </Col>

                <Col xl={8} lg={8}>
                    <Tab.Container defaultActiveKey="about">
                        <Card>
                            <Card.Body>
                                <Nav variant="pills" as="ul" className="navtab-bg">
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="about" className="ms-0">
                                            About Me
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="contracts" className="ms-0">
                                            Contracts
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="photos">
                                             Photos
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="timeline">
                                             Timeline
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="more">
                                             More
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content>
                                    <Tab.Pane eventKey="about">
                                        <About />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="contracts">
                                        <Contracts />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="photos">
                                        <Photos />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="timeline">
                                        <Timeline />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="more">
                                        <Card>
                                            <Card.Body>
                                                <p>
                                                Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.

                                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus

                                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus

                                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus

                                                because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
                                                </p>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </Card>
                    </Tab.Container>
                </Col>
            </Row>
        </>
    );
};

export default Profile;
