import React from "react";
import {
  Card,
  Row,
  Col,
  Table,
  Button,
  Pagination,
  Dropdown,
} from "react-bootstrap";

function CropCareList() {
  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title className="text-info w-100">
                  Crop Care List
                </Card.Title>
                <div className="w-100 text-end d-flex justify-content-end">
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="crop">
                      Select Crop Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Rabi Crop{" "}
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Kharif Crop{" "}
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Other Crop{" "}
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>

              <div className="table-responsive my-3">
                <Table striped hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Crop Name</th>
                      <th style={{ width: "800px" }}>Details</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Tomato</td>
                      <td>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </td>
                      <td className="text-center">
                        <Button className="btn btn-primary btn-sm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Cabaze</td>
                      <td>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </td>
                      <td className="text-center">
                        <Button className="btn btn-primary btn-sm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Eggplant</td>
                      <td>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </td>
                      <td className="text-center">
                        <Button className="btn btn-primary btn-sm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Tomato</td>
                      <td>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </td>
                      <td className="text-center">
                        <Button className="btn btn-primary btn-sm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Cabaze</td>
                      <td>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </td>
                      <td className="text-center">
                        <Button className="btn btn-primary btn-sm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Eggplant</td>
                      <td>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </td>
                      <td className="text-center">
                        <Button className="btn btn-primary btn-sm">
                          View Details
                        </Button>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default CropCareList;
