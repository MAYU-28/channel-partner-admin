import React from "react";
import {Table, Pagination} from "react-bootstrap";

const All = () => {
  return (
    <>
      <h4>Success Transactions</h4>
      <div className="table-responsive my-3">
        <Table className="p-0 m-0">
          <thead>
            <tr>
              <th>Activity Name</th>
              <th>Activity Date</th>
              <th>Payout Amount</th>
              <th>Transaction Id</th>
              <th>Transaction Date</th>
              <th>Balance</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>activity name</td>
              <td>12 May 2022</td>
              <td>10,0000</td>
              <td>Al45878</td>
              <td>4 Sep 2022</td>
              <td>40,000</td>
              <td>
                <span className="bg-success py-1 px-2 text-center text-white rounded-pill">Success</span>
              </td>
            </tr>
            <tr>
              <td>activity name</td>
              <td>12 May 2022</td>
              <td>10,0000</td>
              <td>Al45878</td>
              <td>4 Sep 2022</td>
              <td>40,000</td>
              <td>
              <span className="bg-success py-1 px-2 text-center text-white rounded-pill">Success</span>
              </td>
            </tr>
            <tr>
              <td>activity name</td>
              <td>12 May 2022</td>
              <td>10,0000</td>
              <td>Al45878</td>
              <td>4 Sep 2022</td>
              <td>40,000</td>
              <td>
                <span className="bg-success py-1 px-2 text-center text-white rounded-pill">Success</span>
              </td>
            </tr>
            <tr>
              <td>activity name</td>
              <td>12 May 2022</td>
              <td>10,0000</td>
              <td>Al45878</td>
              <td>4 Sep 2022</td>
              <td>40,000</td>
              <td>
              <span className="bg-success py-1 px-2 text-center text-white rounded-pill">Success</span>
              </td>
            </tr>
            <tr>
              <td>activity name</td>
              <td>12 May 2022</td>
              <td>10,0000</td>
              <td>Al45878</td>
              <td>4 Sep 2022</td>
              <td>40,000</td>
              <td>
              <span className="bg-success py-1 px-2 text-center text-white rounded-pill">Success</span>
              </td>
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

export default All;
