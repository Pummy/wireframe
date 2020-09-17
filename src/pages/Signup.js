import React from 'react';
import '../assets/style.css';

// import Navbar from 'react-bootstrap/Navbar'
import  { Nav,Button,Navbar,Form,Col,Container,Row } from 'react-bootstrap';

function Signup() {
  return (
  
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
    <Col sm={{ span: 1}}>
        <Button variant="primary" type="submit">Register</Button>
    </Col>
  </Form.Group>
  </Form>

  <Row>
    <Col>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </Col>
    <Col> 
        <Button variant="primary" type="submit">Join Today</Button>
    </Col>
  </Row>
  <br></br>
  <Row>
    <Col>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </Col>
    <Col> 
        <Button variant="primary" type="submit">Join Today</Button>
        <Button variant="outline-primary" type="submit">Contact Us</Button>
  </Col>
  </Row>
</Container>
    
  );
}

export default Signup;
