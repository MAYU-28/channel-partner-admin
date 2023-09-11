import React from 'react';
import { Card, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import profileImg from '../../../../assets/images/users/avatar-1.jpg';

const UserBox = () => {
    return (
        <Card className="text-center">
            <Card.Body>
                <img src={profileImg} className="rounded-circle avatar-xl img-thumbnail" alt="" />
                <h4 className="mt-3 mb-0">Nik G. Patel</h4>
                <p className="text-muted">3 Years 2 Months <br/>Advisor Experience</p>
                <Link to='/farmer/advisory-products'>
                    <Button variant="info" className="btn-sm waves-effect mb-2 waves-light rounded-pill me-1" style={{width:'100px'}}>
                        Products
                    </Button>
                </Link>
                
                <Button variant="success" className="btn-sm waves-effect mb-2 waves-light rounded-pill" style={{width:'100px'}}>
                    Call
                </Button>{' '}
                <Button variant="danger" className="btn-sm waves-effect mb-2 waves-light rounded-pill" style={{width:'100px'}}>
                    Message
                </Button>
                <div className="text-start mt-3">
                    <h4 className="font-13 text-uppercase">About Me :</h4>
                    <p className="text-muted font-13 mb-3">
                        Hi I'm JNik G. Patel,has been the Advisor Experience
Qualification standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type.
                    </p>

                    <Table size="sm">
                        <tbody>
                            <tr>
                                <th scope="row">Full Name :</th>
                                <td className="text-muted">Nik G. Patel</td>
                            </tr>
                            <tr>
                                <th scope="row">Mobile :</th>
                                <td className="text-muted">(+91)972 123 1234</td>
                            </tr>
                            <tr>
                                <th scope="row">Email :</th>
                                <td className="text-muted">nik@email.domain</td>
                            </tr>
                            <tr>
                                <th scope="row">Location :</th>
                                <td className="text-muted">Pune</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <ul className="social-list list-inline mb-0">
                    <li className="list-inline-item">
                        <Link to="#" className="social-list-item border-purple text-purple">
                            <i className="mdi mdi-facebook"></i>
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="#" className="social-list-item border-danger text-danger">
                            <i className="mdi mdi-google"></i>
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="#" className="social-list-item border-info text-info">
                            <i className="mdi mdi-twitter"></i>
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="#" className="social-list-item border-secondary text-secondary">
                            <i className="mdi mdi-github"></i>
                        </Link>
                    </li>
                </ul>
            </Card.Body>
        </Card>
    );
};

export default UserBox;
