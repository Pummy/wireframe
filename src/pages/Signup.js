import React from 'react';
import '../assets/css/signup.css';

// import Navbar from 'react-bootstrap/Navbar'
import  { Nav,Button,Navbar,Form,Col,Container,Row } from 'react-bootstrap';

function Signup() {
  return (
    <Container className="full_page_bck">
      <section className="wrapper">
        <Row className="wrapper_bg">
          <Col md={1}></Col>
          <Col xs={12} md={11}>
            
            <Row>
              <Col xs={12} md={12}>
                <Row className='snap_photo text_cen'>
                  <Col xs={12} md={12}>
                    <h2>Ready to take a free trial?</h2>
                  </Col>
                  <Col xs={12} md={12}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <Row className='super_col_1 text_cen'>
                  <Col md={3}></Col>
                  <Col xs={12} md={6}>
                    <div className="hero_s8_register_form">
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
                          <Col sm={{ span: 1}} className="sign_s2_learn_more">
                              <Button variant="primary" type="submit">Register</Button>
                          </Col>
                        </Form.Group>
                      </Form>
                    </div>
                  </Col>
                  <Col md={3}></Col>
                </Row>
              </Col>
            </Row>
              
          </Col>
        </Row>
      </section>

      <section className="wrapper">
        <Row className="wrapper_bg">
          <Col md={1}></Col>
          <Col xs={12} md={11}>
            <Row>
              <Col xs={12} md={12}>
                <Row className='super_col_1'>
                  <Col xs={12} md={6}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore
                    </p>
                  </Col>
                  <Col xs={12} md={6}>
                    <div style={{textAlign:"center"}} className="sign_s2_learn_more">
                      <Button variant="primary" type="submit">Join Today</Button>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
              
          </Col>
        </Row>
      </section>

      <section className="wrapper">
        <Row className="wrapper_bg">
          <Col md={1}></Col>
          <Col xs={12} md={11}>
            <Row>
              <Col xs={12} md={12}>
                <Row className='super_col_1'>
                  <Col xs={12} md={6}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore
                    </p>
                  </Col>
                  <Col xs={12} md={6}>
                    <span style={{textAlign:"center",display:"inherit"}}>
                      <span className="sign_s2_learn_more">
                        <Button variant="primary" type="submit">Join Today</Button>
                      </span>
                      <span className="sign_s3_learn_more_b">
                        <Button variant="outline-primary" type="submit">Contact Us</Button>
                      </span>
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
              
          </Col>
        </Row>
      </section>

    </Container>
    
  );
}

export default Signup;
