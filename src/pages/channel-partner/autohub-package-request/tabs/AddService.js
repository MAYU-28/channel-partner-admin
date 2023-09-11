import React, {useState} from "react";
import { Row, Col, Card,Form, Button,Table } from "react-bootstrap";
import { FormInput } from '../../../../components/form';
import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';

const AddService = () => {
 
  return (
    <>
    <Row className="mb-4">
            <Col>
                <FormInput
                    type="search"
                    name="search"
                    key="search"
                    placeholder="Search here ..."
                    size="lg"
                    />
            </Col>
            <Col>
                <Form.Group>
                    <Form.Select  aria-label="Default select example" size="lg">
                        <option defaultValue="0">Bulk Action</option>
                        <option value="1">Delete</option>
                        <option value="2">Activate</option>
                        <option value="3">Delete</option>
                    </Form.Select>
                </Form.Group>                  
            </Col>
            <Col>
                <Form.Group>
                    <Form.Select  aria-label="Default select example" size="lg">
                        <option defaultValue="0">All Dates</option>
                        <option value="1">2019 January</option>
                        <option value="2">2019 December</option>
                    </Form.Select>
                </Form.Group>                  
            </Col>
            <Col>
                
            </Col>
            <Col >
                <Button className="btn w-100 btn-warning">
                 History
                </Button>   
            </Col>
            <Col>
              <Link to='/channel/add-service'>
                <Button className="btn w-100 ">
                 Add Service
                </Button>
              </Link>   
            </Col>
            <Col>
                <Button className="btn w-100 btn-warning">
                 Apply
                </Button>   
            </Col>
        </Row>
      <div className="table-responsive mb-4">
        <Table>
          <thead>
            <tr>
              <th>
                  <Form.Group >
                    <Form.Check type="checkbox" id="all-select" label="All"/>
                  </Form.Group>
              </th>
              <th>Name</th>
              <th>Description</th>
              <th>Price per add</th>
              <th>Duration</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                  <Form.Group >
                    <Form.Check type="checkbox" id="select-0" label=""/>
                  </Form.Group>
              </td>
              <td>30 days For Free</td>
              <td>30 days For Free	</td>
              <td>0</td>
              <td>15 days	</td>
              <td><span className="bg-warning px-2 py-1 text-white rounded-pill">Inactive</span></td>
            </tr>
            <tr>
              <td>
                  <Form.Group >
                    <Form.Check type="checkbox" id="select-0" label=""/>
                  </Form.Group>
              </td>
              <td>30 days For Free</td>
              <td>30 days For Free	</td>
              <td>0</td>
              <td>15 days	</td>
              <td><span className="bg-success px-2 py-1 text-white rounded-pill">Active</span></td>
            </tr>
            <tr>
              <td>
                  <Form.Group >
                    <Form.Check type="checkbox" id="select-0" label=""/>
                  </Form.Group>
              </td>
              <td>30 days For Free</td>
              <td>30 days For Free	</td>
              <td>0</td>
              <td>15 days	</td>
              <td><span className="bg-warning px-2 py-1 text-white rounded-pill">Inactive</span></td>
            </tr>
            <tr>
              <td>
                  <Form.Group >
                    <Form.Check type="checkbox" id="select-0" label=""/>
                  </Form.Group>
              </td>
              <td>30 days For Free</td>
              <td>30 days For Free	</td>
              <td>0</td>
              <td>15 days	</td>
              <td><span className="bg-warning px-2 py-1 text-white rounded-pill">Inactive</span></td>
            </tr>
            <tr>
              <td>
                  <Form.Group >
                    <Form.Check type="checkbox" id="select-0" label=""/>
                  </Form.Group>
              </td>
              <td>30 days For Free</td>
              <td>30 days For Free	</td>
              <td>0</td>
              <td>15 days	</td>
              <td><span className="bg-success px-2 py-1 text-white rounded-pill">Active</span></td>
            </tr>
            <tr>
              <td>
                  <Form.Group >
                    <Form.Check type="checkbox" id="select-0" label=""/>
                  </Form.Group>
              </td>
              <td>30 days For Free</td>
              <td>30 days For Free	</td>
              <td>0</td>
              <td>15 days	</td>
              <td><span className="bg-warning px-2 py-1 text-white rounded-pill">Inactive</span></td>
            </tr>
            <tr>
              <td>
                  <Form.Group >
                    <Form.Check type="checkbox" id="select-0" label=""/>
                  </Form.Group>
              </td>
              <td>30 days For Free</td>
              <td>30 days For Free	</td>
              <td>0</td>
              <td>15 days	</td>
              <td><span className="bg-warning px-2 py-1 text-white rounded-pill">Inactive</span></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </>
  );
};

export default AddService;
