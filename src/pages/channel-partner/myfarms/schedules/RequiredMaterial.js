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
import PageTitle from "../../../../components/PageTitle";

function RequiredMaterial() {
  return (
    <>
     <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Required Material",
            path: "/farmer/farm-register",
            active: true,
          },
        ]}
        title={"Required Material"}
      />
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title className="text-info w-100">Required Materials</Card.Title>
                <div className="w-100 text-end d-flex justify-content-end">
                  <Button className="mx-1">Copy</Button>
                  <Button className="mx-1">Excel</Button>
                  <Button className="mx-1">PDF</Button>
                  <Button className="mx-1">Column visibility</Button>
                  <input type="text" className="form-control w-25" placeholder="Search"/>
                </div>
              </div>
              <div className="table-responsive my-3">
                <Table striped hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Material List</th>
                      <th>Qty Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Material 1 </td>
                      <td>500 kg</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Material 2</td>
                      <td>1000 kg</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Material 3 </td>
                      <td>500 kg</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Material 4 </td>
                      <td>800 kg</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Material5 </td>
                      <td>500 kg</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Material 6 </td>
                      <td>1000 kg</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Material 7 </td>
                      <td>500 kg</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Material 8 </td>
                      <td>500 kg</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Material 9 </td>
                      <td>500 kg</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Material 10 </td>
                      <td>1000 kg</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>

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

export default RequiredMaterial;
