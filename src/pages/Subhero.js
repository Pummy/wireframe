import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Navbar from 'react-bootstrap/Navbar'
import  { Nav,Button,Navbar,Form,Col,Container,Row,Image } from 'react-bootstrap';

import '../assets/css/subhero.css';
function Subhero() {
  return (

    <Container className="full_page_bck">
      <section className="wrapper">
        <Row className="wrapper_bg">
          <Col md={1}></Col>
          <Col xs={12} md={11}>
            <Row>
              <Col xs={12} md={12}>
                <Row className='super_col_1'>
                  <Col xs={12} md={6} style={{marginTop:"80px"}}>
                    <h5>Learn about all the features of the Photo app</h5>
                  </Col>
                  <Col xs={12} md={6}>
                    <div>
                      <img src={require("../assets/images/Rectangle.png")} alt="logo" height="280" width="100%" style={{marginBottom:"30px"}}/>
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
                  <Col xs={12} md={6} style={{marginTop:"40px"}}>
                    <h5>Learn about all the features of the Photo app</h5>
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
          <Col md={1}></Col>
          <Col xs={12} md={11}>
            <Row>
              <Col xs={12} md={12}>
                <Row className='super_col_1'>
                  <Col xs={12} md={6}>
                    <div>
                      <img src={require("../assets/images/Rectangle.png")} alt="logo" height="380" width="100%" style={{marginBottom:"30px"}}/>
                    </div>
                  </Col>
                  <Col xs={12} md={6} style={{marginTop:"80px"}}>
                    <h5>Learn about all the features of the Photo app</h5>
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
                  <Col xs={12} md={6} style={{marginTop:"80px"}}>
                    <h5>Learn about all the features of the Photo app</h5>
                  </Col>
                  <Col xs={12} md={6}>
                    <div>
                      <div className="polygon_ellipse">
                        <img src={require("../assets/images/Polygon.png")} alt="logo" height="40" width="40"/>
                      </div>
                      <img src={require("../assets/images/Rectangle.png")} alt="logo" height="280" width="100%" style={{marginBottom:"30px"}}/>
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
          <Col xs={12} md={12}>
            <div className='super_col_1'>
                <div className="lernpawdth" style={{marginTop:"55px",position:"absolute",zIndex:"1"}}>
                  <h5>Learn about all the features of the Photo app</h5>
                </div>
            </div>
            <div className="rectangleshflim">
              <img src={require("../assets/images/Rectangle.png")} alt="logo" height="280" width="100%"/>
            </div>
          </Col>
        </Row>
      </section>

    </Container>

  );
}
  
  export default  Subhero;
