import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="nav">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:5173">
              <b>Home</b>
            </Nav.Link>
            <Nav.Link href="http://localhost:5173/products/add-product">
              <b>Add New Product</b>
            </Nav.Link>
            <Nav.Link href="http://localhost:5173/products">
              <b>Products</b>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
