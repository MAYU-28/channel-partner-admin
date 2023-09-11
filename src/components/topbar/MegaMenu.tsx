import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

interface MegaMenuProps {
    subMenus: {
        id: number;
        title: string;
        menuItems: Array<string>;
    }[];
}

const MegaMenu = ({ subMenus }: MegaMenuProps) => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    /*
     * toggle megamenu-dropdown
     */
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
      <Dropdown
        show={dropdownOpen}
        onToggle={toggleDropdown}
        className="position-static"
      >
        <Dropdown.Toggle
          id="dropdown-megamenu"
          as="a"
          onClick={toggleDropdown}
          className={classNames("nav-link", "waves-effect", "waves-light", {
            show: dropdownOpen,
          })}
        >
          Quick Links <i className="mdi mdi-chevron-down"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu dropdown-megamenu">
          <div onClick={toggleDropdown}>
            <Row>
              <Col sm={12}>
                <Row>
                  <Col md={2}>
                    <h4 className=" mt-0 text-primary">Autohub</h4>
                    <ul className="list-unstyled megamenu-list">
                      <li>
                        <Link to="/channel/channel-partners">Channel Partners</Link>
                      </li>
                      <li>
                        <Link to="/channel/garages">Garages</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col md={2}>
                    <h4 className=" mt-0 text-primary">Classbook</h4>
                    <ul className="list-unstyled megamenu-list">
                      <li>
                        <Link to="/channel/students">Students</Link>
                      </li>
                      <li>
                        <Link to="/channel/classes">Classes</Link>
                      </li>
                      <li>
                        <Link to="/channel/teachers">Teachers</Link>
                      </li>
                      <li>
                        <Link to="/channel/career-experts">Career Experts</Link>
                      </li>
                      <li>
                        <Link to="/channel/schools">Schools</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col md={3}>
                    <h4 className=" mt-0 text-primary">Registration</h4>
                      <ul className="list-unstyled megamenu-list">
                        <li>
                          <Link to="/channel/channel-partner-reg">Channel Partner Registration</Link>
                        </li>
                        <li>
                          <Link to="/channel/garage-reg">Garage Registration</Link>
                        </li>
                        <li>
                          <Link to="/channel/channel-partner-reg">Student Registration</Link>
                        </li>
                        <li>
                          <Link to="/channel/class-reg">Classe Registration</Link>
                        </li>
                        <li>
                          <Link to="/channel/teacher-reg">Teacher Registration</Link>
                        </li>
                        <li>
                          <Link to="/channel/career-exp-reg">Career Expert Registration</Link>
                        </li>
                        <li>
                          <Link to="/channel/school-reg">School Registration</Link>
                        </li>
                      </ul>
                  </Col>
                  <Col md={2}>
                    <h4 className=" mt-0 text-primary">Miscellaneous</h4>
                    <ul className="list-unstyled megamenu-list">
                      <li>
                        <Link to="/channel/my-income">My Income</Link>
                      </li>
                      <li>
                        <Link to="/channel/my-status">My Status</Link>
                      </li>
                      <li>
                        <Link to="/channel/wallet">My Wallet</Link>
                      </li>
                      <li>
                        <Link to="/channel/wallet">Rewards</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col md={2}>
                    <h4 className=" mt-0 text-primary">Payments</h4>
                    <ul className="list-unstyled megamenu-list">
                      <li>
                        <Link to="/channel/my-income">My Income</Link>
                      </li>
                      <li>
                        <Link to="/channel/payouts">Payouts</Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              {/* <Col sm={4}>
                            <div className="text-center mt-3">
                                <h3 className="text-dark">Special Discount Sale!</h3>
                                <h4>Save up to 70% off.</h4>
                                <button className="btn btn-primary rounded-pill mt-3">Download Now</button>
                            </div>
                        </Col> */}
            </Row>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    );
};

export default MegaMenu;
