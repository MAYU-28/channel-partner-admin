import React, {useState} from "react";
import { Table, Pagination, Button } from "react-bootstrap";

const Activity = () => {
  return (
    <>
   
      <div className="table-responsive">
                <Table className='p-0 m-0'>
                  <thead>
                    <tr>
                      <th>
                        Sr no.
                      </th>
                      <th>
                        User Type
                      </th>
                      <th>
                       Direct
                      </th>
                      <th>
                      Indirect
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        1
                      </td>
                      <td>
                        Channel Partners	
                      </td>
                      <td>
                        100
                      </td>
                      <td>
                        100
                      </td>
                    </tr>
                    <tr>
                      <td>
                        2
                      </td>
                      <td>
                        Garages
                      </td>
                      <td>
                        100
                      </td>
                      <td>
                        100
                      </td>
                    </tr>
                    <tr>
                      <td>
                        3
                      </td>
                      <td>
                        Classes
                      </td>
                      <td>
                        100
                      </td>
                      <td>
                        100
                      </td>
                    </tr>
                    <tr>
                      <td>
                        4
                      </td>
                      <td>
                      Teachers
                      </td>
                      <td>
                        100
                      </td>
                      <td>
                        100
                      </td>
                    </tr>
                    <tr>
                      <td>
                        5
                      </td>
                      <td>
                        Career Experts	
                      </td>
                      <td>
                        100
                      </td>
                      <td>
                        100
                      </td>
                    </tr>
                    <tr>
                      <td>
                        6
                      </td>
                      <td>
                      Students
                      </td>
                      <td>
                        100
                      </td>
                      <td>
                        100
                      </td>
                    </tr>
                    <tr>
                      <td>
                        7
                      </td>
                      <td>
                      School
                      </td>
                      <td>
                        100
                      </td>
                      <td>
                        100
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

export default Activity;
