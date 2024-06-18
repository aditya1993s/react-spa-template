import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import person from "../../assets/images/person.jpg";

export default function ProfileCard() {
  return (
    <>
      <Container>
        <Row>
          <Col md="auto">
            <Image
              width={150}
              style={{ height: "150px" }}
              src={person}
              roundedCircle
            />
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
