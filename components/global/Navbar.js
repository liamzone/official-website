import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import Container from "react-bootstrap/Container";

export default function NavbarComponent() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">LIAMZONE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100">
            <NavDropdown title="Zones" id="basic-nav-dropdown">
              <NavDropdown.Item href="#printing">3D Printing</NavDropdown.Item>
              <NavDropdown.Item href="#media">Creative Media</NavDropdown.Item>
              <NavDropdown.Item href="#development">
                Web Development
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
