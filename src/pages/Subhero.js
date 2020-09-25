import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Navbar from 'react-bootstrap/Navbar'
import  { Nav,Button,Navbar,Form,Col,Container,Row,Image } from 'react-bootstrap';

import '../assets/style.css';
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
                    <Col xs={12} md={6} style={{marginTop:"40px"}}>
                      
                      <p>
                      Learn about all the features of the Photo app
                      </p>
                    </Col>
                    <Col xs={12} md={6}>
                      <div>
                        <img src={require("../assets/images/Rectangle.png")} alt="logo" height="280" width="430" style={{marginBottom:"30px"}}/>
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
                  <Row className='snap_photo'>
                    <Col xs={12} md={6}>
                      <h2>Learn about all the features of the Photo app</h2>
                    </Col>
                    <Col xs={12} md={6}>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="wrapper_bg">
            <Col xs={12} md={12}>
              <div className="rectanglefullhw">
                <img src={require("../assets/images/Rectangle.png")} alt="logo" height="100%" width="100%" />
              </div>
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
                        <img src={require("../assets/images/Rectangle.png")} alt="logo" height="280" width="430" style={{marginBottom:"30px"}}/>
                      </div>
                    </Col>
                    <Col xs={12} md={6} style={{marginTop:"40px"}}>
                      
                      <p>
                      Learn about all the features of the Photo app
                      </p>
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
                      
                      <p>
                      Learn about all the features of the Photo app
                      </p>
                    </Col>
                    <Col xs={12} md={6}>
                      <div>
                        <img src={require("../assets/images/Rectangle.png")} alt="logo" height="280" width="430" style={{marginBottom:"30px"}}/>
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
              <div className="rectanglefullh">
                <img src={require("../assets/images/Rectangle.png")} alt="logo" height="100%" width="100%" />
              </div>
            </Col>
          </Row>
            
        </section>
</Container>

    );
  }
  
  export default  Subhero;
