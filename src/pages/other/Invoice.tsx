import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';

// images
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';

// dummy data
import { invoiceData } from './data';

// invoice component
const Invoice = () => {
    return (
      <React.Fragment>
        <PageTitle
          breadCrumbItems={[
            { label: "Extra Pages", path: "/pages/invoice" },
            { label: "Invoice", path: "/pages/invoice", active: true },
          ]}
          title={"Invoice"}
        />

        <Row>
          <Col>
            <Card>
              <Card.Body>
                <div className="clearfix">
                  <div className="float-start">
                    <div className="auth-logo">
                      <h2>Agrola</h2>
                      {/* <div className="logo logo-dark">
                                            <span className="logo-lg">
                                                <img src={logoDark} alt="" height="22" />
                                            </span>
                                        </div>
                                        <div className="logo logo-light">
                                            <span className="logo-lg">
                                                <img src={logoLight} alt="" height="22" />
                                            </span>
                                        </div> */}
                    </div>
                  </div>
                  <div className="float-end">
                    <h4 className="m-0 d-print-none">Invoice</h4>
                  </div>
                </div>

                <Row>
                  <Col md={6}>
                    <div className="mt-3">
                      <p>
                        <b>Hello, {invoiceData.customer}</b>
                      </p>
                      <p className="text-muted">{invoiceData.notes}</p>
                    </div>
                  </Col>

                  <Col md={{ span: 4, offset: 2 }}>
                    <div className="mt-3 float-end">
                      <p>
                        <strong>Order Date : </strong>{" "}
                        <span className="float-end">
                          {" "}
                          &nbsp;&nbsp;&nbsp; {invoiceData.order_date}{" "}
                        </span>
                      </p>
                      <p>
                        <strong>Order Status : </strong>{" "}
                        <span className="float-end">
                          {" "}
                          <span className="badge bg-danger">
                            {invoiceData.order_status}
                          </span>
                        </span>
                      </p>
                      <p>
                        <strong>Order No. : </strong>
                        <span className="float-end">
                          {" "}
                          <span className="float-end">
                            {invoiceData.invoice_id}
                          </span>
                        </span>
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col sm={6}>
                    <h5>Billing Address</h5>
                    <address>
                      {invoiceData.address.owner}
                      <br />
                      {invoiceData.address.line_1}
                      <br />
                      {invoiceData.address.city}, {invoiceData.address.state}{" "}
                      {invoiceData.address.zip}
                      <br />
                      <abbr title="Phone">P:</abbr> {invoiceData.address.phone}
                    </address>
                  </Col>
                  <Col sm={6}>
                    <h5>Shipping Address</h5>
                    <address>
                      {invoiceData.address.owner}
                      <br />
                      {invoiceData.address.line_1}
                      <br />
                      {invoiceData.address.city}, {invoiceData.address.state}{" "}
                      {invoiceData.address.zip}
                      <br />
                      <abbr title="Phone">P:</abbr> {invoiceData.address.phone}
                    </address>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <div className="table-responsive push pt-2">
                      <table className="table table-bordered table-hover mb-0">
                        <thead className="bg-primary">
                          <tr className=" ">
                            <th
                              className="text-center "
                              style={{ width: "1%" }}
                            >
                              S.No.
                            </th>
                            <th>Description</th>
                            <th className="text-left">Unit Price</th>
                            <th className="text-left">Qty</th>
                            <th className="text-left">Net Amount</th>
                            <th className="text-left">Tax Rate</th>
                            <th className="text-left">Tax Type</th>
                            <th className="text-left">Tax Amount</th>
                            <th className="text-left">Total Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center">1</td>
                            <td>
                              <div className="text-muted">
                                <div className="text-muted">
                                  Balaji Fertilizer - 400 kg
                                </div>
                              </div>
                            </td>
                            <td className="text-left">₹1099.00</td>
                            <td className="text-left">1</td>
                            <td className="text-left">₹1099.00</td>
                            <td className="text-left">18%</td>
                            <td className="text-left">IGST</td>
                            <td className="text-left">₹100.00</td>
                            <td className="text-left">₹1199.00</td>
                          </tr>
                          <tr>
                            <td className="text-center">2</td>
                            <td>
                              <div className="text-muted">
                                <div className="text-muted">
                                  Balaji Fertilizer - 800 kg
                                </div>
                              </div>
                            </td>
                            <td className="text-left">₹1099.00</td>
                            <td className="text-left">1</td>
                            <td className="text-left">₹1099.00</td>
                            <td className="text-left">18%</td>
                            <td className="text-left">IGST</td>
                            <td className="text-left">₹100.00</td>
                            <td className="text-left">₹1199.00</td>
                          </tr>
                          <tr>
                            <td className="text-center">3</td>
                            <td>
                              <div className="text-muted">
                                <div className="text-muted">
                                  Balaji Fertilizer - 1000 kg
                                </div>
                              </div>
                            </td>
                            <td className="text-left">₹1099.00</td>
                            <td className="text-left">1</td>
                            <td className="text-left">₹1099.00</td>
                            <td className="text-left">18%</td>
                            <td className="text-left">IGST</td>
                            <td className="text-left">₹100.00</td>
                            <td className="text-left">₹1199.00</td>
                          </tr>
                          <tr>
                            <td className="text-left" colSpan={7}>
                              <b>Total:</b>
                            </td>
                            <td className="text-left ">
                              <b>₹100.00</b>
                            </td>
                            <td className="text-left ">
                              <b>₹1199.00</b>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-left" colSpan={9}>
                              <b>
                                Amount In Words:
                                <br /> one thousand, one hundred ninety-nine
                              </b>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-right" colSpan={9}>
                              <b>
                                For Appario Retail Priveate Limited:
                                <br />
                                Authorized Signatory
                              </b>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col sm={6}>
                    <div className="clearfix pt-5">
                      <h6 className="text-muted">Notes:</h6>
                      <small className="text-muted">
                        All accounts are to be paid within 7 days from receipt
                        of invoice. To be paid by cheque or credit card or
                        direct payment online. If account is not paid within 7
                        days the credits details supplied as confirmation of
                        work undertaken will be charged the agreed quoted fee
                        noted above.
                      </small>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="float-end">
                      <p>
                        <b>Sub-total:</b>{" "}
                        <span className="float-end">
                          ₹{invoiceData.sub_total}
                        </span>
                      </p>
                      <p>
                        <b>Discount (10%):</b>{" "}
                        <span className="float-end">
                          {" "}
                          &nbsp;&nbsp;&nbsp; ₹{invoiceData.discount}
                        </span>
                      </p>
                      <h3>₹{invoiceData.total} Rupees</h3>
                    </div>
                    <div className="clearfix"></div>
                  </Col>
                </Row>

                <div className="mt-4 mb-1">
                  <div className="text-end d-print-none">
                    <button
                      className="btn btn-primary waves-effect waves-light me-1"
                      onClick={(e: any) => {
                        window.print();
                      }}
                    >
                      <i className="mdi mdi-printer me-1"></i> Print
                    </button>
                    <button className="btn btn-success waves-effect waves-light">
                      Submit
                    </button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
};

export default Invoice;
