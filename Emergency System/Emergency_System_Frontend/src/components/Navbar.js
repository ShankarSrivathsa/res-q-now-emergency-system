import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Form, FormControl } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#ff4c4c' }} variant="dark">
      <Container>
        {/* Just the brand name, no icon */}
        <Navbar.Brand as={Link} to="/" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          ResQNow
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-between">

          {/* Center Search Bar */}
          <Form className="mx-auto" style={{ width: "50%" }}>
            <FormControl
              type="search"
              placeholder="Search hospitals..."
              className="me-2"
              aria-label="Search"
            />
          </Form>

          {/* Right Links */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/register" style={{ color: 'white' }}>Register</Nav.Link>
            <Nav.Link as={Link} to="/profile" style={{ color: 'white' }}>My Profile</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
