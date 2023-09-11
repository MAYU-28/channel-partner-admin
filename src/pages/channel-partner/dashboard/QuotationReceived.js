import React from "react";
import { Card, Row, Col, Table, Pagination, Dropdown } from "react-bootstrap";
import CountUp from "react-countup";

import PageTitle from "../../../components/PageTitle";

function QuotationReceived() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Quotation Received",
            path: "/farmer/quotation-received",
            active: true,
          },
        ]}
        title={"Quotation Received"}
      />
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="text-info">Total Expected Rate</h4>
              <h3 className="text-dark mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={15000} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
        <Col></Col>

        <Col></Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title className="text-info w-100 font-24">
                  Total Quotation Received
                </Card.Title>
                <div className="w-100 text-end d-flex justify-content-end">
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="crop">
                      Select Farm
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Balaji Farm
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Cora Farm</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Gold Farm</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="ms-2">
                    <Dropdown.Toggle variant="primary" id="crop">
                      Select Crop Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Kharib </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="ms-2">
                    <Dropdown.Toggle variant="primary" id="crop">
                      Select Crop
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Tomato </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Carrot </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Potato </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>

              <Table striped bordered hover className="mt-3">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Customer Name</th>
                    <th>Mobile</th>
                    <th>Order Qty</th>
                    <th>Order Date</th>
                    <th>Delivery Date</th>
                    <th>Expected Date</th>
                    <th>Total Amount</th>
                    <th>Request Number</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Pawan</td>
                    <td>9898718555</td>
                    <td>1500 kg </td>
                    <td>28 Aug 2022 </td>
                    <td>28 Oct 2022 </td>
                    <td>₹ 10/kg </td>
                    <td>₹ 1500 </td>
                    <td>RN1</td>
                    <td>Completd</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Pawan</td>
                    <td>9898718555</td>
                    <td>1500 kg </td>
                    <td>28 Aug 2022 </td>
                    <td>28 Oct 2022 </td>
                    <td>₹ 10/kg </td>
                    <td>₹ 1500 </td>
                    <td>RN1</td>
                    <td>Completd</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Pawan</td>
                    <td>9898718555</td>
                    <td>1500 kg </td>
                    <td>28 Aug 2022 </td>
                    <td>28 Oct 2022 </td>
                    <td>₹ 10/kg </td>
                    <td>₹ 1500 </td>
                    <td>RN1</td>
                    <td>Completd</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Pawan</td>
                    <td>9898718555</td>
                    <td>1500 kg </td>
                    <td>28 Aug 2022 </td>
                    <td>28 Oct 2022 </td>
                    <td>₹ 10/kg </td>
                    <td>₹ 1500 </td>
                    <td>RN1</td>
                    <td>Completd</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Pawan</td>
                    <td>9898718555</td>
                    <td>1500 kg </td>
                    <td>28 Aug 2022 </td>
                    <td>28 Oct 2022 </td>
                    <td>₹ 10/kg </td>
                    <td>₹ 1500 </td>
                    <td>RN1</td>
                    <td>Completd</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Pawan</td>
                    <td>9898718555</td>
                    <td>1500 kg </td>
                    <td>28 Aug 2022 </td>
                    <td>28 Oct 2022 </td>
                    <td>₹ 10/kg </td>
                    <td>₹ 1500 </td>
                    <td>RN1</td>
                    <td>Completd</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Pawan</td>
                    <td>9898718555</td>
                    <td>1500 kg </td>
                    <td>28 Aug 2022 </td>
                    <td>28 Oct 2022 </td>
                    <td>₹ 10/kg </td>
                    <td>₹ 1500 </td>
                    <td>RN1</td>
                    <td>Completd</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Pawan</td>
                    <td>9898718555</td>
                    <td>1500 kg </td>
                    <td>28 Aug 2022 </td>
                    <td>28 Oct 2022 </td>
                    <td>₹ 10/kg </td>
                    <td>₹ 1500 </td>
                    <td>RN1</td>
                    <td>Completd</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Pawan</td>
                    <td>9898718555</td>
                    <td>1500 kg </td>
                    <td>28 Aug 2022 </td>
                    <td>28 Oct 2022 </td>
                    <td>₹ 10/kg </td>
                    <td>₹ 1500 </td>
                    <td>RN1</td>
                    <td>Completd</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Pawan</td>
                    <td>9898718555</td>
                    <td>1500 kg </td>
                    <td>28 Aug 2022 </td>
                    <td>28 Oct 2022 </td>
                    <td>₹ 10/kg </td>
                    <td>₹ 1500 </td>
                    <td>RN1</td>
                    <td>Completd</td>
                  </tr>
                </tbody>
              </Table>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default QuotationReceived;
