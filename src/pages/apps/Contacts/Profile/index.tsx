import React from 'react';
import { Row, Col, Card, Tab, Nav } from 'react-bootstrap';

// components
import PageTitle from '../../../../components/PageTitle';

import UserBox from './UserBox';
import Skills from './Skills';
import About from './About';
import Settings from './Settings';

// dummy data
import { projectDetails, skills } from './data';

const Profile = () => {
    return (
      <>
        <PageTitle
          breadCrumbItems={[
            { label: "Contacts", path: "/apps/contacts/profile" },
            { label: "Profile", path: "/apps/contacts/profile", active: true },
          ]}
          title={"Profile"}
        />
        <Row>
          <Col xl={4} lg={4}>
            {/* User information */}
            <UserBox />

            {/* User's skills */}
            {/* <Skills skills={skills} /> */}
          </Col>

          <Col xl={8} lg={8}>
            <Tab.Container defaultActiveKey="about-me">
              <Card>
                <Card.Body>
                  <Nav variant="pills" as="ul" className="navtab-bg">
                    <Nav.Item as="li" className="nav-item">
                      <Nav.Link href="#" eventKey="about-me" className="ms-0">
                        <i className="mdi mdi-face-profile me-1"></i>About Me
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="nav-item">
                      <Nav.Link href="#" eventKey="settings">
                        <i className="mdi mdi-cog me-1"></i>Edit Profile
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="nav-item">
                      <Nav.Link href="#" eventKey="changepassword">
                        <i className="mdi mdi-cog me-1"></i>Change Password
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="about-me">
                      {/* <About projectDetails={projectDetails} /> */}
                      <h4>About Me</h4>
                      <p>
                        About Me Raw denim you probably haven't heard of them
                        jean shorts Austin. Nesciunt tofu stumptown aliqua,
                        retro synth master cleanse. Mustache cliche tempor,
                        williamsburg carles vegan helvetica. Reprehenderit
                        butcher retro keffiyeh dreamcatcher synth. Biography Nam
                        libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat
                        facere possimus, omnis voluptas assumenda est, omnis
                        dolor repellendus because it is pleasure, but because
                        those who do not know how to pursue pleasure rationally
                        encounter consequences that are extremely painful. Nor
                        again is there anyone who loves or pursues or desires to
                        obtain pain of itself, because it is pain, but because
                        occasionally circumstances occur in which toil and pain
                        can procure him some great pleasure.
                      </p>
                      <p>
                        About Me Raw denim you probably haven't heard of them
                        jean shorts Austin. Nesciunt tofu stumptown aliqua,
                        retro synth master cleanse. Mustache cliche tempor,
                        williamsburg carles vegan helvetica. Reprehenderit
                        butcher retro keffiyeh dreamcatcher synth. Biography Nam
                        libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat
                        facere possimus, omnis voluptas assumenda est, omnis
                        dolor repellendus because it is pleasure, but because
                        those who do not know how to pursue pleasure rationally
                        encounter consequences that are extremely painful. Nor
                        again is there anyone who loves or pursues or desires to
                        obtain pain of itself, because it is pain, but because
                        occasionally circumstances occur in which toil and pain
                        can procure him some great pleasure.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="settings">
                      <Settings />
                    </Tab.Pane>
                    <Tab.Pane eventKey="changepassword">
                        <form>
                            <div className='form-group'>
                                <label>Email:</label>
                                <input type="email" placeholder='Enter Email Address' className='form-control'/>                
                            </div>
                            <div className='form-group'>
                                <button className='btn btn-primary rounded-pill mt-3'>Submit</button>          
                            </div>
                        </form>
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
