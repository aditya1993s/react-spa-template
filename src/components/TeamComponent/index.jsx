import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileCard from "../ProfileCard";

const TeamComponent = () => {
  return (
    <div>
      <Container style={{ marginTop: "25px" }}>
        <Row className="justify-content-md-center">
          <Col md="auto" style={{ marginTop: "25px" }}>
            <ProfileCard />
          </Col>
          <Col md="auto" style={{ marginTop: "25px" }}>
            <ProfileCard />
          </Col>
          <Col md="auto" style={{ marginTop: "25px" }}>
            <ProfileCard />
          </Col>
          <Col md="auto" style={{ marginTop: "25px" }}>
            <ProfileCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeamComponent;
