import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// components
import PageTitle from "../../../components/PageTitle";
import Table from "../../../components/Table";
// import { records as data } from "./data";

const columns = [
  {
    Header: "Date",
    accessor: "date",
    sort: true,
  },
  {
    Header: "Details",
    accessor: "details",
    sort: false,
  },
];
const data = [
  {
    date: "01 Aug 2022",
    details:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla",
    sort: true,
  },
  {
    date: "02 Aug 2022",
    details:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla",
    sort: true,
  },
  {
    date: "03 Aug 2022",
    details:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla",
    sort: true,
  },
  {
    date: "04 Aug 2022",
    details:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla",
    sort: true,
  },
  {
    date: "05 Aug 2022",
    details:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla",
    sort: true,
  },
  {
    date: "06 Aug 2022",
    details:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla",
    sort: true,
  },
  {
    date: "07 Aug 2022",
    details:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla",
    sort: true,
  },
  {
    date: "08 Aug 2022",
    details:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla",
    sort: true,
  },
  {
    date: "09 Aug 2022",
    details:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla",
    sort: true,
  },
  {
    date: "10 Aug 2022",
    details:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla",
    sort: true,
  },
];

const sizePerPageList = [
  {
    text: "5",
    value: 5,
  },
  {
    text: "10",
    value: 10,
  },
  {
    text: "25",
    value: 25,
  },
  {
    text: "All",
    value: data.length,
  },
];

function TipOfDay() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Tip of the day",
            path: "/farmer/tip-of-the-day",
            active: true,
          },
        ]}
        title={"Tip of the day"}
      />
      <Container>
        <Card>
          <Row>
            <Col xs={12} md={3}>
              <Card.Img
                variant="top"
                src="https://dummyimage.com/250/ffffff/000000"
              />
            </Col>
            <Col xs={12} md={9}>
              <Card.Body>
                <Card.Title>3 Aug 2022 , Friday</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Card.Text>
                <Button className="btn btn-primary bg-gradient-info px-5 rounded-pill">
                  View Details
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <h4 className="header-title">Histroy - Tip of the Day</h4>
                <Table
                  columns={columns}
                  data={data}
                  pageSize={5}
                  sizePerPageList={sizePerPageList}
                  isSortable={true}
                  pagination={true}
                  isSearchable={true}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TipOfDay;
