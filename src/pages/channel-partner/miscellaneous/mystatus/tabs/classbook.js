import React from "react";
import { Table} from "react-bootstrap";

const Classbook = () => {

  return (
    <>
      <div className="">
        <h4 className='text-primary'>Total Income</h4>
        <Table  className="table table-bordered table-striped shadow my-3">
          <thead>
            <tr>
              <th>Student</th>
              <td>130</td>
            </tr>
            <tr>
              <th>Teacher</th>
              <td>40</td>
            </tr>
            <tr>
              <th>Class</th>
              <td>10</td>
            </tr>
            <tr>
              <th>Career Experts	</th>
              <td>10</td>
            </tr>
          </thead>
        </Table>
      </div>
    </>
  );
};

export default Classbook;
