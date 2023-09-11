import React from "react";
import {Table} from "react-bootstrap";

const Autohub = () => {
  return (
    <>
      <div className="">
        <h4 className='text-primary'>Main Services</h4>
        <Table className="table table-bordered table-striped shadow my-3">
          <thead>
            <tr>
              <th>Two Wheeler	</th>
              <td>10</td>
            </tr>
            <tr>
              <th>Four Wheeler</th>
              <td>30</td>
            </tr>
            <tr>
              <th>Door Step</th>
              <td>25</td>
            </tr>
          </thead>
        </Table>
        <h4 className='text-primary'>Other Services</h4>
        <Table className="table table-bordered table-striped shadow my-3">
          <thead>
            <tr>
              <th>Spare Parts	</th>
              <td>10</td>
            </tr>
            <tr>
              <th>Tyre</th>
              <td>30</td>
            </tr>
            <tr>
              <th>Battery</th>
              <td>25</td>
            </tr>
            <tr>
              <th>Spare Parts	</th>
              <td>10</td>
            </tr>
            <tr>
              <th>Tyre</th>
              <td>30</td>
            </tr>
            <tr>
              <th>Battery</th>
              <td>25</td>
            </tr>
            <tr>
              <th>Spare Parts	</th>
              <td>10</td>
            </tr>
            <tr>
              <th>Tyre</th>
              <td>30</td>
            </tr>
            <tr>
              <th>Battery</th>
              <td>25</td>
            </tr>
          </thead>
        </Table>
      </div>
    </>
  );
};

export default Autohub;
