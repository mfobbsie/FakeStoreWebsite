import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">FakeStoreApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/components/ProductDetails">Products</Nav.Link>
          <Nav.Link as={NavLink} to="/components/AddProductPage">Add Product</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;