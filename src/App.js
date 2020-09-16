import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Navbar from 'react-bootstrap/Navbar'
import  { Nav,Button,Navbar,Form,Col,Container,Row } from 'react-bootstrap';
import AppRoutes from './AppRoutes';
import { withRouter } from 'react-router-dom';
import './assets/style.css';
function App() {
  return (
    <div className="App">
       {/* <AppRoutes/> */}
     {/* <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Photo</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Features</Nav.Link>
      <Nav.Link href="#link">Pricing</Nav.Link>
      <Nav.Link href="#link">Community</Nav.Link>
      <Nav.Link href="/Signup">Support</Nav.Link>
     
    </Nav>
    <Nav>
    <Button variant="outline-primary">Login</Button>
    <Button variant="primary">Register</Button>
    </Nav>
    
      
    
  </Navbar.Collapse>
</Navbar> */}

<Container className="full_page_bck">

  <Row>
    <Col><h4>Ready to take a free trial ?</h4></Col>
  </Row>

  <Row className="sub_heading">
    <Col>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Col>
  </Row>

  <Form className="sub_heading">
  <h5 className="left_margin">Sign up for a free account</h5>
  <Form.Row className="sub_heading">

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="text" placeholder="First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="text" placeholder="Last Name" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Control type="email" placeholder="Email Address" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Control type="password" placeholder="Create Password" />
  </Form.Group>


  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
    <Button variant="primary" type="submit">
    Register
  </Button>
    </Col>
  </Form.Group>
</Form>
</Container>

    </div>

  );
}

export default  App;
