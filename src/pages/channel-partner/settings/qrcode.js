import React, {useState} from "react";
import { Row, Col, Card, } from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";


const QRCode = () => {
 
  return (
    <>
    <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/channel" },
          {
            label: "QR Code",
            path: "/channel/qrCode",
            active: true,
          },
        ]}
        title={"QR Code"}
      />
    <Card>
        <Card.Body>
            <Row>
                <Col>
                    <div className='shadow p-3 border'>
                        <img src='https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png' alt='QR code' className="w-100"/>
                    </div>
                </Col>
                <Col>
                    <h4>Try To Attempts</h4>
                    <table className="table-bordered border w-100 p-2 mt-2">
                        <tr>
                            <th className="p-2 bg-light">First Item</th>
                            <th className="p-2 bg-light">Second Item</th>
                            <th className="p-2 bg-light">Third Item</th>
                        </tr>
                        <tr>
                            <td className="p-2 ">First Item</td>
                            <td className="p-2 ">Second Item</td>
                            <td className="p-2 ">Second Item</td>
                        </tr>
                        <tr>
                            <td className="p-2 ">First Item</td>
                            <td className="p-2 ">Second Item</td>
                            <td className="p-2 ">Second Item</td>
                        </tr>
                    </table>
                </Col>
            </Row>
        </Card.Body>
    </Card>
    </>
  );
};

export default QRCode;
