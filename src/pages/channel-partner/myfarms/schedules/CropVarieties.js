import React, { useState } from "react";
import { Card, Row, Col, Tab, Tabs, Button ,Nav, Table} from "react-bootstrap";
import PageTitle from "../../../../components/PageTitle";
import {Link} from 'react-router-dom';

function TotalInvoice() {
  const [key, setKey] = useState("tab1");
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Schedule Stage Expenses",
            path: "/farmer/total-expenses",
            active: true,
          },
        ]}
        title={"Schedule Stage Expenses"}
      />
     <Card>
        <Card.Body>
            <Card.Title>Seed Provider Company Names</Card.Title>
            <div className="table-responsive mb-0">
            <Table className="pb-0 mb-0">
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Company Names</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Kaveri Seed Company Ltd</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Krishidhan Seeds Pvt Ltd</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>National Seeds Corporation Ltd</td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </Card.Body>
     </Card>
      <Row>
        <Col>
          <Card>
            <Card.Body>
            <h4 className="my-3">Crop Varieties -</h4>
            <Tab.Container id="left-tabs-example" defaultActiveKey="variety1" className="p-0">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        <Nav.Link eventKey="variety1">Crop Variety 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="variety2">Crop Variety 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content className='p-0'>
                        <Tab.Pane eventKey="variety1">
                        <h4 className="mb-3">Variety 1</h4>

                            <div className="table-responsive mb-0">
                                <Table className="pb-0 mb-0">
                                    <thead>
                                        <tr>
                                            <th>Yield per acre</th>
                                            <td>00KG/ Acre – 120KG/ Acre</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Size of tomato</th>
                                            <td>20gm to 25gm</td>
                                        </tr>
                                        <tr>
                                            <th>Size of tomato</th>
                                            <td>20gm to 25gm</td>
                                        </tr>
                                        <tr>
                                            <th>Disease resistance	</th>
                                            <td>
                                                    a. List of Diseases 
                                                <br/>b. List of Paste
                                                <br/>c. List of Nutrition Deficiency
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Duration of Crop Cultivation</th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th>Projected Cost per Acre	</th>
                                            <td>INR 80k</td>
                                        </tr>
                                        <tr>
                                            <th>Total collection after selling (Project)</th>
                                            <td>INR 120k – 125k</td>
                                        </tr>
                                        <tr>
                                            <th>Projected profit per Acre	</th>
                                            <td>INR 40k to INR 45k <br/> (considering the schedule start date in the next 10 days)</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <h4 className="my-3">Harvest</h4>
                            <div className="table-responsive ">
                                <Table className="pb-0 mb-0">
                                    <tbody>
                                        <tr>
                                            <th>First Harvest</th>
                                            <td>1 Acre	</td>
                                            <td>Approximate 120KG</td>
                                            <td>90 days after start of sowing (DAS)	</td>
                                        </tr>
                                        <tr>
                                            <th>First Harvest</th>
                                            <td>1 Acre	</td>
                                            <td>Approximate 80KG</td>
                                            <td>190 days after start of sowing (DAS)	</td>
                                        </tr>
                                        <tr>
                                            <th>First Harvest</th>
                                            <td>1 Acre	</td>
                                            <td>Approximate 50KG</td>
                                            <td>80 days after start of sowing (DAS)	</td>
                                        </tr>
                                        <tr>
                                            <th>First Harvest</th>
                                            <td>1 Acre	</td>
                                            <td>Approximate 120KG</td>
                                            <td>70 days after start of sowing (DAS)	</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <h4 className="my-3">Suitable for Region</h4>
                            <Row>
                                <Col>
                                    <Card className="bg-gradient-info">
                                        <Card.Body>
                                            <h4 className="text-white">Variety 1</h4>
                                            <p className="text-white">Suggested for you</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="bg-gradient-pink">
                                        <Card.Body>
                                            <h4 className="text-white">Variety 2</h4>
                                            <p className="text-white">Suggested for you</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="bg-gradient-info">
                                        <Card.Body>
                                            <h4 className="text-white">Variety 3</h4>
                                            <p className="text-white">Suggested for you</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="variety2">
                        <h4 className="mb-3">Variety 2</h4>
                        <div className="table-responsive mb-0">
                                <Table className="pb-0 mb-0">
                                    <thead>
                                        <tr>
                                            <th>Yield per acre</th>
                                            <td>00KG/ Acre – 120KG/ Acre</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Size of tomato</th>
                                            <td>20gm to 25gm</td>
                                        </tr>
                                        <tr>
                                            <th>Size of tomato</th>
                                            <td>20gm to 25gm</td>
                                        </tr>
                                        <tr>
                                            <th>Disease resistance	</th>
                                            <td>
                                                    a. List of Diseases 
                                                <br/>b. List of Paste
                                                <br/>c. List of Nutrition Deficiency
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Duration of Crop Cultivation</th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th>Projected Cost per Acre	</th>
                                            <td>INR 80k</td>
                                        </tr>
                                        <tr>
                                            <th>Total collection after selling (Project)</th>
                                            <td>INR 120k – 125k</td>
                                        </tr>
                                        <tr>
                                            <th>Projected profit per Acre	</th>
                                            <td>INR 40k to INR 45k <br/> (considering the schedule start date in the next 10 days)</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <h4 className="my-3">Harvest</h4>
                            <div className="table-responsive ">
                                <Table className="pb-0 mb-0">
                                    <tbody>
                                        <tr>
                                            <th>First Harvest</th>
                                            <td>1 Acre	</td>
                                            <td>Approximate 120KG</td>
                                            <td>90 days after start of sowing (DAS)	</td>
                                        </tr>
                                        <tr>
                                            <th>First Harvest</th>
                                            <td>1 Acre	</td>
                                            <td>Approximate 80KG</td>
                                            <td>190 days after start of sowing (DAS)	</td>
                                        </tr>
                                        <tr>
                                            <th>First Harvest</th>
                                            <td>1 Acre	</td>
                                            <td>Approximate 50KG</td>
                                            <td>80 days after start of sowing (DAS)	</td>
                                        </tr>
                                        <tr>
                                            <th>First Harvest</th>
                                            <td>1 Acre	</td>
                                            <td>Approximate 120KG</td>
                                            <td>70 days after start of sowing (DAS)	</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <h4 className="my-3">Suitable for Region</h4>
                            <Row>
                                <Col>
                                    <Card className="bg-gradient-info">
                                        <Card.Body>
                                            <h4 className="text-white">Variety 1</h4>
                                            <p className="text-white">Suggested for you</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="bg-gradient-pink">
                                        <Card.Body>
                                            <h4 className="text-white">Variety 2</h4>
                                            <p className="text-white">Suggested for you</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="bg-gradient-info">
                                        <Card.Body>
                                            <h4 className="text-white">Variety 3</h4>
                                            <p className="text-white">Suggested for you</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default TotalInvoice;
