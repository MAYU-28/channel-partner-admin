import React from "react";
import Container from "react-bootstrap/Container";
import PageTitle from "../../../components/PageTitle";
import { Card } from "react-bootstrap";

function MyAstro() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "My Astro",
            path: "/farmer/my-astro",
            active: true,
          },
        ]}
        title={"My Astro"}
      />
      <Container>
        <Card>
          <Card.Body className="text-center py-5">
            <Card.Title>My Astro</Card.Title>
            <h2 className="mt-4 mb-3 text-info ">We are Coming Soon!</h2>
            <Card.Text>We are currently working hard on this page.</Card.Text>
            <Card.Text>
              Subscribe our newsletter to get update when it'll be live.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default MyAstro;
