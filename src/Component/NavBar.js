import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
function NavBar() {
    const cartProducts=useSelector(state=>state.cart)
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="#home">Redux Toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>
              Products
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link to="/cart" as={Link}>
              Cart {cartProducts.length}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
