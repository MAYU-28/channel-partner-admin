import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";
import { Card } from "react-bootstrap";
import FileUploader from "../../../components/FileUploader";

const CropListDetails = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Crop List Details",
            path: "/farmer/crop-list-details",
            active: true,
          },
        ]}
        title={"Crop List Details"}
      />
      <Container>
        <Card className="mb-3">
          <Card.Body>
            <h3 className="text-info">Leaf</h3>
            <p>
              Virgil Abloh’s Off-White is a streetwear-inspired collection that
              continues to break away from the conventions of mainstream
              fashion. Made in Italy, these black and brown Odsy-1000 low-top
              sneakers.
            </p>
            <Row>
              <Col>
                <div>
                  <Card>
                    <Card.Body>
                      <h4 className="header-title">File upload</h4>

                      <FileUploader
                        onFileUpload={(files) => {
                          console.log("Uploaded files - ", files);
                        }}
                      />
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className="mb-3">
          <Card.Body>
            <h3 className="text-info">Soil</h3>
            <p>
              Virgil Abloh’s Off-White is a streetwear-inspired collection that
              continues to break away from the conventions of mainstream
              fashion. Made in Italy, these black and brown Odsy-1000 low-top
              sneakers.
            </p>
            <Row>
              <Col>
                <div>
                  <Card>
                    <Card.Body>
                      <h4 className="header-title">File upload</h4>

                      <FileUploader
                        onFileUpload={(files) => {
                          console.log("Uploaded files - ", files);
                        }}
                      />
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className="mb-3">
          <Card.Body>
            <h3 className="text-info">Stem</h3>
            <p>
              Virgil Abloh’s Off-White is a streetwear-inspired collection that
              continues to break away from the conventions of mainstream
              fashion. Made in Italy, these black and brown Odsy-1000 low-top
              sneakers.
            </p>
            <Row>
              <Col>
                <div>
                  <Card>
                    <Card.Body>
                      <h4 className="header-title">File upload</h4>

                      <FileUploader
                        onFileUpload={(files) => {
                          console.log("Uploaded files - ", files);
                        }}
                      />
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className="mb-3">
          <Card.Body>
            <h3 className="text-info">Root</h3>
            <p>
              Virgil Abloh’s Off-White is a streetwear-inspired collection that
              continues to break away from the conventions of mainstream
              fashion. Made in Italy, these black and brown Odsy-1000 low-top
              sneakers.
            </p>
            <Row>
              <Col>
                <div>
                  <Card>
                    <Card.Body>
                      <h4 className="header-title">File upload</h4>

                      <FileUploader
                        onFileUpload={(files) => {
                          console.log("Uploaded files - ", files);
                        }}
                      />
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default CropListDetails;
