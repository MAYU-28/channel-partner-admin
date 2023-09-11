import React, {useState} from "react";
import { Table, Pagination, Button } from "react-bootstrap";

const About = () => {
  return (
    <>
    <div className="d-flex align-items-center justify-content-between mb-2 mt-3">
      <div className="d-flex">
        <Button className='btn btn-sm'>
          Current
        </Button>
        <Button className='btn btn-sm ms-2'>
          History
        </Button>
      </div>
      <p>1-10 of 10 items</p>
    </div>
      <div className="table-responsive">
                <Table className='p-0 m-0'>
                  <thead>
                    <tr>
                      <th>
                        Order no.
                      </th>
                      <th>
                        Package Name
                      </th>
                      <th>
                        Amount
                      </th>
                      <th>
                        Status
                      </th>
                      <th>
                        Date
                      </th>
                      <th>
                        Payment
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        3265
                      </td>
                      <td>
                        Majority have suffered alteration	
                      </td>
                      <td>
                        $12
                      </td>
                      <td>
                        Activated
                      </td>
                      <td>
                        Jan 17,2019 at 11.30pm	
                      </td>
                      <td>
                        Completed
                      </td>
                    </tr>
                    <tr>
                      <td>
                        3265
                      </td>
                      <td>
                        Majority have suffered alteration	
                      </td>
                      <td>
                        $12
                      </td>
                      <td>
                        Activated
                      </td>
                      <td>
                        Jan 17,2019 at 11.30pm	
                      </td>
                      <td>
                        Completed
                      </td>
                    </tr>
                    <tr>
                      <td>
                        3265
                      </td>
                      <td>
                        Majority have suffered alteration	
                      </td>
                      <td>
                        $12
                      </td>
                      <td>
                        Activated
                      </td>
                      <td>
                        Jan 17,2019 at 11.30pm	
                      </td>
                      <td>
                        Completed
                      </td>
                    </tr>
                    <tr>
                      <td>
                        3265
                      </td>
                      <td>
                        Majority have suffered alteration	
                      </td>
                      <td>
                        $12
                      </td>
                      <td>
                        Activated
                      </td>
                      <td>
                        Jan 17,2019 at 11.30pm	
                      </td>
                      <td>
                        Completed
                      </td>
                    </tr>
                    <tr>
                      <td>
                        3265
                      </td>
                      <td>
                        Majority have suffered alteration	
                      </td>
                      <td>
                        $12
                      </td>
                      <td>
                        Activated
                      </td>
                      <td>
                        Jan 17,2019 at 11.30pm	
                      </td>
                      <td>
                        Completed
                      </td>
                    </tr>
                  </tbody>
                </Table>
                </div>
                <Pagination className='mt-3'>
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

export default About;
