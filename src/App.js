import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Navbar from 'react-bootstrap/Navbar'
import  { Nav,Button,Navbar,Form,Col,Container,Row,Image } from 'react-bootstrap';
import AppRoutes from './AppRoutes';
import { withRouter } from 'react-router-dom';
import './assets/css/testinomial.css';
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
        <section className="wrapper">
          <Row className="wrapper_bg">
            <Col md={1}></Col>
            <Col xs={12} md={11}>
              
              <Row>
                <Col xs={12} md={12}>
                  <Row className='snap_photo text_cen'>
                    <Col xs={12} md={12}>
                      <h2>You’re in good company</h2>
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
                  <Row className='super_col_1 martopbox'>
                    <Col xs={4} md={2}>
                      <div>
                        <img src={require("./assets/images/Rectangle.png")} alt="logo" height="70" width="100%"/>
                      </div>
                    </Col>
                    <Col xs={4} md={2}>
                      <div>
                        <img src={require("./assets/images/Rectangle.png")} alt="logo" height="70" width="100%"/>
                      </div>
                    </Col>
                    <Col xs={4} md={2}>
                      <div>
                        <img src={require("./assets/images/Rectangle.png")} alt="logo" height="70" width="100%"/>
                      </div>
                    </Col>
                    <Col xs={4} md={2}>
                      <div>
                        <img src={require("./assets/images/Rectangle.png")} alt="logo" height="70" width="100%"/>
                      </div>
                    </Col>
                    <Col xs={4} md={2}>
                      <div>
                        <img src={require("./assets/images/Rectangle.png")} alt="logo" height="70" width="100%"/>
                      </div>
                    </Col>
                    <Col xs={4} md={2}>
                      <div>
                        <img src={require("./assets/images/Rectangle.png")} alt="logo" height="70" width="100%"/>
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
                <Col xs={12} md={6}>
                  <Row className='snap_photo'>
                    <Col xs={12} md={12}>
                      <h2>You’re in good company</h2>
                    </Col>
                    <Col xs={12} md={12}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore
                      </p>
                    </Col>
                    <Col xs={12} md={12}>
                      <Row className='super_col_1 martopbox'>
                        <Col xs={6} md={4}>
                          <div>
                            <img src={require("./assets/images/Rectangle.png")} alt="logo" height="70" width="100%"/>
                          </div>
                        </Col>
                        <Col xs={6} md={4}>
                          <div>
                            <img src={require("./assets/images/Rectangle.png")} alt="logo" height="70" width="100%"/>
                          </div>
                        </Col>
                        <Col xs={6} md={4}>
                          <div>
                            <img src={require("./assets/images/Rectangle.png")} alt="logo" height="70" width="100%"/>
                          </div>
                        </Col>
                        <Col xs={6} md={4}>
                          <div>
                            <img src={require("./assets/images/Rectangle.png")} alt="logo" height="70" width="100%"/>
                          </div>
                        </Col>
                        <Col xs={6} md={4}>
                          <div>
                            <img src={require("./assets/images/Rectangle.png")} alt="logo" height="70" width="100%"/>
                          </div>
                        </Col>
                        <Col xs={6} md={4}>
                          <div>
                            <img src={require("./assets/images/Rectangle.png")} alt="logo" height="70" width="100%"/>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>

                <Col xs={12} md={6}>
                  <Row>
                    <Col xs={12} md={12}>
                      <Row className='super_col_1'>
                        <Col xs={12} md={12}>
                          <div>
                            <img src={require("./assets/images/Rectangle.png")} alt="logo" height="300" width="100%"/>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12} md={12}>
                      <Row className='super_col_bor'>
                        <Col xs={12} md={12}>
                          <div className="border_solid">
                            <h5>Lorem ipsum dolor</h5>
                            <p>
                              Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                              et dolore magna aliqua.
                            </p>
                          </div>
                        </Col>
                      </Row>
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
                  <Row className='.super_col_bor text_cen'>
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
                  <Row className='super_col_1 martopbox text_cen'>
                    <Col xs={4} md={4}>
                    </Col>
                    <Col xs={4} md={4}>
                      <div>
                        <img src={require("./assets/images/Ellipse.png")} alt="logo" height="40" width="40"/>
                      </div>
                    </Col>
                    <Col xs={4} md={4}>
                    </Col>

                    <Col xs={4} md={4}>
                    </Col>
                    <Col xs={4} md={4}>
                      <p>
                        Nemo enim ipsam
                      </p>
                    </Col>
                    <Col xs={4} md={4}>
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
                  <Row className='snap_photo text_cen'>
                    <Col xs={12} md={12}>
                      <h2>You’re in good company</h2>
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
                  <Row className='super_col_1 martopbox'>
                    <Col md={2}>
                    </Col>
                    <Col xs={6} md={2}>
                      <div>
                        <img src={require("./assets/images/Rectangle.png")} alt="logo" height="70" width="100%"/>
                      </div>
                    </Col>
                    <Col xs={6} md={2}>
                      <div>
                        <img src={require("./assets/images/Rectangle.png")} alt="logo" height="70" width="100%"/>
                      </div>
                    </Col>
                    <Col xs={6} md={2}>
                      <div>
                        <img src={require("./assets/images/Rectangle.png")} alt="logo" height="70" width="100%"/>
                      </div>
                    </Col>
                    <Col xs={6} md={2}>
                      <div>
                        <img src={require("./assets/images/Rectangle.png")} alt="logo" height="70" width="100%"/>
                      </div>
                    </Col>
                    <Col md={2}>
                    </Col>
                  </Row>

                  <Row className='super_col_1 martopbox'>
                    <Col md={2}>
                    </Col>
                    <Col xs={6} md={2}>
                      <div>
                        <img src={require("./assets/images/Rectangle.png")} alt="logo" height="70" width="100%"/>
                      </div>
                    </Col>
                    <Col xs={6} md={2}>
                      <div>
                        <img src={require("./assets/images/Rectangle.png")} alt="logo" height="70" width="100%"/>
                      </div>
                    </Col>
                    <Col xs={6} md={2}>
                      <div>
                        <img src={require("./assets/images/Rectangle.png")} alt="logo" height="70" width="100%"/>
                      </div>
                    </Col>
                    <Col xs={6} md={2}>
                      <div>
                        <img src={require("./assets/images/Rectangle.png")} alt="logo" height="70" width="100%"/>
                      </div>
                    </Col>
                    <Col md={2}>
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
                <Col xs={12} md={7}>
                  <Row className='snap_photo'>
                    <Col xs={12} md={12}>
                      <p className="lh_p_fs">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore
                      </p>
                    </Col>
                    <Col xs={12} md={12}>
                      <Row className='martopbox'>
                        <Col xs={4} md={2}>
                          <div>
                            <img src={require("./assets/images/Ellipse.png")} alt="logo" height="40" width="40"/>
                          </div>
                        </Col>
                        <Col xs={8} md={10}>
                          <p className="">
                            Nemo enim ipsam
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>

                <Col xs={12} md={5}>
                  <div>
                    <img src={require("./assets/images/Rectangle.png")} alt="logo" height="300" width="100%"/>
                  </div>
                
                </Col>
              </Row>
               
            </Col>
          </Row>
        </section>
        
      </Container>

    </div>

  );
}

export default  App;
