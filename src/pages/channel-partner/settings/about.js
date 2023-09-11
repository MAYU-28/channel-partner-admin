import React, {useState} from "react";
import { Row, Col, Card, Form, Button} from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";


const Aboutus = () => {
 
  return (
    <>
        <PageTitle
            breadCrumbItems={[
            { label: "Home", path: "/channel" },
            {
                label: "About Us",
                path: "/channel/about-us",
                active: true,
            },
            ]}
            title={"About Us"}
        />
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h3 >About Us</h3>
                            <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda rerum, accusamus voluptas non culpa doloribus ipsam enim rem deserunt inventore, accusantium, eos ullam fugiat et autem quos ducimus odit quibusdam tenetur quod nam quaerat qui. Veniam quos corporis optio odit. Sapiente quo nam quia veritatis quam, deleniti numquam incidunt excepturi ullam laborum porro. Quisquam aperiam veritatis possimus laudantium optio totam doloribus, ab officia asperiores dolores amet quibusdam mollitia unde. Nostrum doloremque dolorem veniam iusto consequatur sint incidunt obcaecati? Ratione perferendis temporibus ut ipsa blanditiis maiores aspernatur beatae in eum delectus alias nesciunt distinctio eaque, reprehenderit quasi, itaque optio eos perspiciatis.
                            </p>
                            <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda rerum, accusamus voluptas non culpa doloribus ipsam enim rem deserunt inventore, accusantium, eos ullam fugiat et autem quos ducimus odit quibusdam tenetur quod nam quaerat qui. Veniam quos corporis optio odit. Sapiente quo nam quia veritatis quam, deleniti numquam incidunt excepturi ullam laborum porro. Quisquam aperiam veritatis possimus laudantium optio totam doloribus, ab officia asperiores dolores amet quibusdam mollitia unde. Nostrum doloremque dolorem veniam iusto consequatur sint incidunt obcaecati? Ratione perferendis temporibus ut ipsa blanditiis maiores aspernatur beatae in eum delectus alias nesciunt distinctio eaque, reprehenderit quasi, itaque optio eos perspiciatis.
                            </p>
                            <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda rerum, accusamus voluptas non culpa doloribus ipsam enim rem deserunt inventore, accusantium, eos ullam fugiat et autem quos ducimus odit quibusdam tenetur quod nam quaerat qui. Veniam quos corporis optio odit. Sapiente quo nam quia veritatis quam, deleniti numquam incidunt excepturi ullam laborum porro. Quisquam aperiam veritatis possimus laudantium optio totam doloribus, ab officia asperiores dolores amet quibusdam mollitia unde. Nostrum doloremque dolorem veniam iusto consequatur sint incidunt obcaecati? Ratione perferendis temporibus ut ipsa blanditiis maiores aspernatur beatae in eum delectus alias nesciunt distinctio eaque, reprehenderit quasi, itaque optio eos perspiciatis.
                            </p>
                            <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda rerum, accusamus voluptas non culpa doloribus ipsam enim rem deserunt inventore, accusantium, eos ullam fugiat et autem quos ducimus odit quibusdam tenetur quod nam quaerat qui. Veniam quos corporis optio odit. Sapiente quo nam quia veritatis quam, deleniti numquam incidunt excepturi ullam laborum porro. Quisquam aperiam veritatis possimus laudantium optio totam doloribus, ab officia asperiores dolores amet quibusdam mollitia unde. Nostrum doloremque dolorem veniam iusto consequatur sint incidunt obcaecati? Ratione perferendis temporibus ut ipsa blanditiis maiores aspernatur beatae in eum delectus alias nesciunt distinctio eaque, reprehenderit quasi, itaque optio eos perspiciatis.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    </>
  );
};

export default Aboutus;
