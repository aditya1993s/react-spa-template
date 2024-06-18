import React, { useState } from "react";
import {
  Button,
  Col,
  Row,
  Offcanvas,
  Navbar,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import logo from "../../assets/images/logo.jpg";
import { useWindowSize } from "@uidotdev/usehooks";
import { GiHamburgerMenu } from "react-icons/gi";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HeaderComponent = () => {
  const { width, height } = useWindowSize();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <div className="header">
      <Offcanvas
        show={show}
        onHide={handleClose}
        scroll={true}
        backdrop={false}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Content</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Col></Col>
        </Offcanvas.Body>
      </Offcanvas>

      <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container fluid>
          <GiHamburgerMenu
            onClick={toggleShow}
            style={{
              fontSize: "30px",
              cursor: "pointer",
              color: "white",
              margin: "20px 0 0 10px",
            }}
          />
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-lg-0 my-2 me-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderComponent;
