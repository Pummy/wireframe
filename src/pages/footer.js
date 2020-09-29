import React from 'react';
// import logo from './logo.svg';
import '../App.css';
// import Navbar from 'react-bootstrap/Navbar'
import  { Nav,Button,Navbar,Form,Col,Container,Row,Image } from 'react-bootstrap';
// import AppRoutes from './AppRoutes';
import { withRouter } from 'react-router-dom';
import '../assets/css/footer.css';
function Footer() {
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
                <Row className="wrapper_bg padding_wrbg">
                    <Col md={1}></Col>
                    <Col xs={12} md={11}>
                    
                        <Row>
                            <Col xs={12} md={12}>
                                <Row className='photologo'>
                                    <Col xs={12} md={5}>
                                        <h2><span></span>photo</h2>
                                    </Col>
                                    <Col xs={12} md={7}>
                                        <Row className="footermenudecora">
                                            <Col xs={6} md={3}>
                                                <h5>Mobile App</h5>
                                                <ul>
                                                    <li><a href="#">Features</a></li>
                                                    <li><a href="#">Live share</a></li>
                                                    <li><a href="#">Video record</a></li>
                                                </ul>
                                            </Col>
                                            <Col xs={6} md={3}>
                                                <h5>Community</h5>
                                                <ul>
                                                    <li><a href="#">Featured artists</a></li>
                                                    <li><a href="#">The Portal</a></li>
                                                    <li><a href="#">Live events</a></li>
                                                </ul>
                                            </Col>
                                            <Col xs={6} md={3}>
                                                <h5>Company</h5>
                                                <ul>
                                                    <li><a href="#">About us</a></li>
                                                    <li><a href="#">Contact us</a></li>
                                                    <li><a href="#">History</a></li>
                                                </ul>
                                            </Col>
                                            <Col xs={6} md={3}>
                                                <Button className="btn_register" variant="primary">Register</Button>
                                                <br />
                                                <br />
                                                <Button className="btn_login" variant="outline-primary">Login</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col xs={12} md={12}>
                                <Row className='reserve_note'>
                                    <Col xs={12} md={4}>
                                        <p>© Photo, Inc. 2019. We love our users!</p>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <ul>
                                            <li><p>Follow us:</p></li>
                                            <li><img src={require("../assets/images/Ellipse.png")} alt="logo" height="40" width="auto"/></li>
                                            <li><img src={require("../assets/images/Ellipse.png")} alt="logo" height="40" width="auto"/></li>
                                            <li><img src={require("../assets/images/Ellipse.png")} alt="logo" height="40" width="auto"/></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </section>

            <section className="wrapper">
                <Row className="wrapper_bg padding_wrbg">
                    <Col md={1}></Col>
                    <Col xs={12} md={11}>
                    
                        <Row>
                            <Col xs={12} md={12}>
                                <Row className='photologo'>
                                    <Col xs={12} md={3}>
                                        <h2><span></span>photo</h2>
                                    </Col>
                                    <Col xs={12} md={9}>
                                        <Row className="footermenudecora">
                                            <Col xs={6} md={2}>
                                                <h5>Mobile App</h5>
                                            </Col>
                                            <Col xs={6} md={2}>
                                                <h5>Community</h5>
                                            </Col>
                                            <Col xs={6} md={2}>
                                                <h5>Company</h5>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <p>© Photo, Inc. 2019. We love our users!</p>
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
                <Row className="wrapper_bg padding_wrbg">
                    <Col md={1}></Col>
                    <Col xs={12} md={11}>
                    
                        <Row>
                            <Col xs={12} md={12}>
                                <Row className='photologo'>
                                    
                                    <Col xs={12} md={5}>
                                        <Row className="footermenudecora">
                                            <Col xs={4} md={4}>
                                                <h5>Mobile App</h5>
                                            </Col>
                                            <Col xs={4} md={4}>
                                                <h5>Community</h5>
                                            </Col>
                                            <Col xs={4} md={4}>
                                                <h5>Company</h5>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <h2><span></span>photo</h2>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <Row className="footermenudecora">
                                            <Col xs={4} md={4}>
                                                <h5>Help desk</h5>
                                            </Col>
                                            <Col xs={4} md={4}>
                                                <h5>Blog</h5>
                                            </Col>
                                            <Col xs={4} md={4}>
                                                <h5>Resources</h5>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        <Row style={{marginTop:'20px'}}>
                            <Col xs={12} md={12}>
                                <Row className='reserve_note'>
                                    <Col xs={12} md={4}></Col>
                                    <Col xs={12} md={4}>
                                        <ul>
                                            <li><img src={require("../assets/images/Ellipse.png")} alt="logo" height="40" width="auto"/></li>
                                            <li><img src={require("../assets/images/Ellipse.png")} alt="logo" height="40" width="auto"/></li>
                                            <li><img src={require("../assets/images/Ellipse.png")} alt="logo" height="40" width="auto"/></li>
                                            <li><img src={require("../assets/images/Ellipse.png")} alt="logo" height="40" width="auto"/></li>
                                        </ul>
                                    </Col>
                                    <Col xs={12} md={4}></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{marginTop:'20px'}}>
                            <Col xs={12} md={12}>
                                <Row className='reserve_note'>
                                    <Col xs={12} md={4}></Col>
                                    <Col xs={12} md={4}>
                                        <p>© Photo, Inc. 2019. We love our users!</p>
                                    </Col>
                                    <Col xs={12} md={4}></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>

        </Container>

    </div>

  );
}

export default Footer;
