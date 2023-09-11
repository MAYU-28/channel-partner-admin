import React from 'react';
import { Table } from 'react-bootstrap';

// types
import { ProjectDetailTypes } from './data';

interface AboutProps {
    projectDetails: ProjectDetailTypes[];
}

const About = ({ projectDetails }: AboutProps) => {
    return (
        <>
            <h5 className=" text-uppercase">Certificates</h5>

            {/* timeline */}
            {/* <ul className="list-unstyled timeline-sm">
                <li className="timeline-sm-item">
                    <span className="timeline-sm-date">2015 - 19</span>
                    <h5 className="mt-0 mb-1">Lead designer / Developer</h5>
                    <p>websitename.com</p>
                    <p className="text-muted mt-2">
                        Everyone realizes why a new common language would be desirable: one could refuse to pay
                        expensive translators. To achieve this, it would be necessary to have uniform grammar,
                        pronunciation and more common words.
                    </p>
                </li>
                <li className="timeline-sm-item">
                    <span className="timeline-sm-date">2012 - 15</span>
                    <h5 className="mt-0 mb-1">Senior Graphic Designer</h5>
                    <p>Software Inc.</p>
                    <p className="text-muted mt-2">
                        If several languages coalesce, the grammar of the resulting language is more simple and regular
                        than that of the individual languages. The new common language will be more simple and regular
                        than the existing European languages.
                    </p>
                </li>
                <li className="timeline-sm-item">
                    <span className="timeline-sm-date">2010 - 12</span>
                    <h5 className="mt-0 mb-1">Graphic Designer</h5>
                    <p>Coderthemes LLP</p>
                    <p className="text-muted mt-2 mb-0">
                        The European languages are members of the same family. Their separate existence is a myth. For
                        science music sport etc, Europe uses the same vocabulary. The languages only differ in their
                        grammar their pronunciation.
                    </p>
                </li>
            </ul> */}

            <Table borderless responsive className="table-nowrap mb-0">
                <thead className="table-light">
                    <tr>
                        <th>#</th>
                        <th>Certificate Name</th>
                        <th>Start Date</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Soil expertise</td>
                        <td>01 jan 2015</td>
                        <td>10 dec 2015</td>
                        <td>
                            <span className='bg-success text-white p-1 rounded'>
                                Certified
                            </span>
                        </td>
                        <td>
                            <button className='btn rounded-pill bg-gradient-info text-white'>
                            View Certificate
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Soil expertise</td>
                        <td>01 jan 2015</td>
                        <td>10 dec 2015</td>
                        <td>
                            <span className='bg-success text-white p-1 rounded'>
                                Certified
                            </span>
                        </td>
                        <td>
                            <button className='btn rounded-pill bg-gradient-info text-white'>
                            View Certificate
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Soil expertise</td>
                        <td>01 jan 2016</td>
                        <td>10 dec 2016</td>
                        <td>
                            <span className='bg-success text-white p-1 rounded'>
                                Certified
                            </span>
                        </td>
                        <td>
                            <button className='btn rounded-pill bg-gradient-info text-white'>
                            View Certificate
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Soil expertise</td>
                        <td>01 jan 2017</td>
                        <td>10 dec 2017</td>
                        <td>
                            <span className='bg-success text-white p-1 rounded'>
                                Certified
                            </span>
                        </td>
                        <td>
                            <button className='btn rounded-pill bg-gradient-info text-white'>
                            View Certificate
                            </button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default About;
