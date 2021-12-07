
import logo from './logo.svg';
import './App.css';
import {Button,Navbar,Container,Nav,NavDropdown,Form,FormControl} from "react-bootstrap";

function App() {
  return (
    // NavBar scroll
  <div>

    <div>
    <Navbar bg="light"  variant = "light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: "#1147a7"}} >  Navbar </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                    navbarScroll
                      >
                        <Nav.Link href="#action1">Home</Nav.Link>
                          <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                  <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                      Something else here
                                  </NavDropdown.Item>
                                </NavDropdown>
                              <Nav.Link href="#" disabled>
                            Link
                          </Nav.Link>
                        </Nav>
                      <Form className="d-flex">
                    <FormControl
                  type="search"
                placeholder="Search"
              className="me-2"
            aria-label="Search"
          />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>

<div class =" title">
  <h2> wlecome dear client </h2>
  <p> because you priceless for us, you can sign up for the free trial down below </p>
  <p> Promise You won't regret it! </p>
</div>

<div class ="form-edit">
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remeber me" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
</div>



);
}

export default App;
