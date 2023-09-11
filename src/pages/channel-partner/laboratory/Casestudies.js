import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Casestudies() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-info mb-3">Casestudies</Card.Title>

        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <Row>
              <Col>
                <img
                  className="d-block w-100"
                  src="http://project.testproject.in/public/assets/images/FarmImg/farm-1.jpg"
                  alt="First slide"
                />
                <Card.Text>
                  <h4 className="text-info ">Farm Soil</h4>
                  <p className="m-0">Expertise : Soil Expertise</p>
                  <h6>Pune</h6>
                </Card.Text>
              </Col>
              <Col>
                <img
                  className="d-block w-100"
                  src="http://project.testproject.in/public/assets/images/FarmImg/farm-1.jpg"
                  alt="First slide"
                />
                <Card.Text>
                  <h4 className="text-info ">Tomato Crop</h4>
                  <p className="m-0">Expertise : Soil Expertise</p>
                  <h6>Mumbai</h6>
                </Card.Text>
              </Col>
              <Col>
                <img
                  className="d-block w-100"
                  src="http://project.testproject.in/public/assets/images/FarmImg/farm-1.jpg"
                  alt="First slide"
                />
                <Card.Text>
                  <h4 className="text-info ">Rebis Crops</h4>
                  <p className="m-0">Expertise : Soil Expertise</p>
                  <h6>Nashik</h6>
                </Card.Text>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col>
                <img
                  className="d-block w-100"
                  src="http://project.testproject.in/public/assets/images/FarmImg/farm-1.jpg"
                  alt="First slide"
                />
                <Card.Text>
                  <h4 className="text-info ">Farm Soil</h4>
                  <p className="m-0">Expertise : Soil Expertise</p>
                  <h6>Pune</h6>
                </Card.Text>
              </Col>
              <Col>
                <img
                  className="d-block w-100"
                  src="http://project.testproject.in/public/assets/images/FarmImg/farm-1.jpg"
                  alt="First slide"
                />
                <Card.Text>
                  <h4 className="text-info ">Farm Soil</h4>
                  <p className="m-0">Expertise : Soil Expertise</p>
                  <h6>Pune</h6>
                </Card.Text>
              </Col>
              <Col>
                <img
                  className="d-block w-100"
                  src="http://project.testproject.in/public/assets/images/FarmImg/farm-1.jpg"
                  alt="First slide"
                />
                <Card.Text>
                  <h4 className="text-info ">Rebis Crops</h4>
                  <p className="m-0">Expertise : Soil Expertise</p>
                  <h6>Nashik</h6>
                </Card.Text>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col>
                <img
                  className="d-block w-100"
                  src="http://project.testproject.in/public/assets/images/FarmImg/farm-1.jpg"
                  alt="First slide"
                />
                <Card.Text>
                  <h4 className="text-info ">Farm Soil</h4>
                  <p className="m-0">Expertise : Soil Expertise</p>
                  <h6>Pune</h6>
                </Card.Text>
              </Col>
              <Col>
                <img
                  className="d-block w-100"
                  src="http://project.testproject.in/public/assets/images/FarmImg/farm-1.jpg"
                  alt="First slide"
                />
                <Card.Text>
                  <h4 className="text-info ">Farm Soil</h4>
                  <p className="m-0">Expertise : Soil Expertise</p>
                  <h6>Pune</h6>
                </Card.Text>
              </Col>
              <Col>
                <img
                  className="d-block w-100"
                  src="http://project.testproject.in/public/assets/images/FarmImg/farm-1.jpg"
                  alt="First slide"
                />
                <Card.Text>
                  <h4 className="text-info ">Farm Soil</h4>
                  <p className="m-0">Expertise : Soil Expertise</p>
                  <h6>Pune</h6>
                </Card.Text>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Card.Body>
    </Card>
  );
}
export default Casestudies;
