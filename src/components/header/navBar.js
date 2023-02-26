import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { When } from "react-if";
import { FaBookReader } from "react-icons/fa";
import { SigninContext } from "../../pages/Context/signinContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function CollapsibleExample({ signinStatus, headerName }) {
  const context = useContext(SigninContext);
  const navigate = useNavigate();
  return (
    <Navbar className="navBar" collapseOnSelect fixed="top" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h3 className="headerLogo">
            <FaBookReader className="logo" />
            Book<span>Com</span>
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/categories">
              Categories
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <When condition={!signinStatus}>
              <Nav.Link as={Link} to="/signin">
                Sign in
              </Nav.Link>
            </When>
            <When condition={signinStatus}>
              <NavDropdown title={headerName} id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/cart">
                  Cart
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={(e) => context.signoutHandeler(e, navigate)}
                >
                  Sign out
                </NavDropdown.Item>
              </NavDropdown>
            </When>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
