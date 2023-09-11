import React from 'react';
import { Row, Col, Card, Tab, Nav } from 'react-bootstrap';

// components

import UserBox from './UserBox';
import About from './About';
import Settings from './Settings';
import PricingCard from '../../../../components/PricingCard';

// dummy data
import { AdvisorPricingPlans } from '../../../other/data';

// dummy data
import { projectDetails } from './data';

const Profile = () => {
    return (
        <>
            <Row>
                <Col xl={4} lg={4}>
                    {/* User information */}
                    <UserBox />
                </Col>

                <Col xl={8} lg={8}>
                    <Tab.Container defaultActiveKey="plans">
                        <Card>
                            <Card.Body>
                                <Nav variant="pills" as="ul" className="navtab-bg">
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="plans" className="ms-0">
                                        ₹ Plans
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="about-me" className="ms-0">
                                            <i className="mdi mdi-face-profile me-1"></i>Certificate
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="settings">
                                            <i className="mdi mdi-cog me-1"></i>Book Now
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content>
                                    <Tab.Pane eventKey="plans">
                                        <PricingCard plans={AdvisorPricingPlans} containerClass={'my-3'} />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="about-me">
                                        <About projectDetails={projectDetails} />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="settings">
                                        <Settings />
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
