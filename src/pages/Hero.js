import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Navbar from 'react-bootstrap/Navbar'
import  { Nav,Button,Navbar,Form,Col,Container,Row,Image } from 'react-bootstrap';

import '../assets/css/hero.css';
function Hero() {
  return (

    <Container className="full_page_bck">
      <section className="wrapper">
        <Row className="wrapper_bg">
          <Col xs={12} md={6}>
            <div className='super_col_1'>
              <div style={{marginTop:"100px"}}>
                <h5>The largest community of photo enthusiasts</h5>
                <p className="learn_more"><Button variant="primary">Join Today</Button></p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="hero_rectanglefullv">
              <img src={require("../assets/images/Rectangle.png")} alt="logo" height="100%" width="100%" />
            </div>
          </Col>
        </Row>
      </section>
        
      <section className="wrapper">
        <Row className="wrapper_bg">
          <Col xs={12} md={6}>
            <div className="rectanglefullv">
              <img src={require("../assets/images/Rectangle.png")} alt="logo" height="100%" width="100%" />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className='super_col_1'>
              <div style={{marginTop:"100px"}}>
                <h5>The largest community of photo enthusiasts</h5>
                <p className="learn_more"><Button variant="primary">Join Today</Button></p>
              </div>
            </div>
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
                  <Col xs={12} md={6} style={{marginTop:"100px"}}>
                    <h5>The largest community of photo enthusiasts</h5>
                    <p className="learn_more"><Button variant="primary">Join Today</Button></p>
                  </Col>
                  <Col xs={12} md={6}>
                    
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <Row className="super_col_1">
                  <div className="rectangleshfl">
                    <img src={require("../assets/images/Rectangle.png")} alt="logo" height="280" width="100%"/>
                  </div>
                </Row>
              </Col>
            </Row>
              
          </Col>
        </Row>
      </section>

      <section className="wrapper">
        <Row className="wrapper_bg">
          <Col xs={12} md={12}>
            <div className='super_col_1'>
                <div className="lernpawdth" style={{marginTop:"80px",position:"absolute",zIndex:"1"}}>
                  <h5>The largest community of photo enthusiasts</h5>
                  <p className="learn_more"><Button variant="primary">Join Today</Button></p>
                </div>
            </div>
            <div className="rectangleshflim">
              <img src={require("../assets/images/Rectangle.png")} alt="logo" height="380" width="100%"/>
            </div>
          </Col>
        </Row>
      </section>
      
      <section className="wrapper">
        <Row className="wrapper_bg">
          <Col xs={12} md={12}>
            <div className='super_col_1'>
              
              <div className="hero_lernpawdth" style={{marginTop:"95px",position:"absolute",zIndex:"1"}}>
                <span className="hero_polygon_ellipse">
                  <img src={require("../assets/images/Polygon.png")} alt="logo" height="40" width="40"/>
                </span>
                <h5 style={{margin:"20px 0"}}>The largest community of photo enthusiasts</h5>
                <Button variant="primary">Join Today</Button>
                {/* <span className="learn_more"></span> */}
              </div>
            </div>
            <div className="rectangleshflim">
              <img src={require("../assets/images/Rectangle.png")} alt="logo" height="380" width="100%"/>
            </div>
          </Col>
        </Row>
      </section>

      <section className="wrapper">
        <Row className="wrapper_bg">
          <Col xs={12} md={6}>
            <div className='super_col_1'>
              <div style={{marginTop:"100px"}}>
                <h5>The largest community of photo enthusiasts</h5>
                <p className="learn_more"><Button variant="primary">Join Today</Button></p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <span className="hero_s6_polygon_ellipse" style={{position:"absolute",zIndex:"1"}}>
              <img src={require("../assets/images/Polygon.png")} alt="logo" height="40" width="40"/>
            </span>
            <div className="hero_s6_rectanglefullv">
              <img src={require("../assets/images/Rectangle.png")} alt="logo" height="100%" width="100%" />
            </div>
          </Col>
        </Row>
      </section>
      
      <section className="wrapper">
        <Row className="wrapper_bg">
          <Col xs={12} md={12}>
            <div className='super_col_1'>
                <div className="lernpawdth" style={{marginTop:"80px",position:"absolute",zIndex:"1"}}>
                  <h5>The largest community of photo enthusiasts</h5>
                  <p className="learn_more"><Button variant="primary">Join Today</Button></p>
                  <span className="hero_s7_reac_polgon">
                    <span className="hero_s7_polygon_ellipse">
                      <img src={require("../assets/images/Polygon.png")} alt="logo" height="30" width="30"/>
                    </span>
                  </span>
                  <img src={require("../assets/images/Rectangle.png")} alt="logo" height="120" width="80%" style={{marginBottom:"30px"}}/>
                </div>
            </div>
            <div className="rectangleshflim">
              <img src={require("../assets/images/Rectangle.png")} alt="logo" height="380" width="100%"/>
            </div>
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
                  <Col xs={12} md={6} style={{marginTop:"80px"}}>
                    <h5>The largest community of photo enthusiasts</h5>
                  </Col>
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
                          <Col sm={{ span: 1}}>
                              <Button variant="primary" type="submit">Register</Button>
                          </Col>
                        </Form.Group>
                      </Form>
                    </div>
                  
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
  
export default  Hero;
