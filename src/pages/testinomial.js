import React from 'react';
// import logo from './logo.svg';
import '../App.css';
// import Navbar from 'react-bootstrap/Navbar'
import  { Nav,Button,Navbar,Form,Col,Container,Row,Image } from 'react-bootstrap';
import AppRoutes from './AppRoutes';
import { withRouter } from 'react-router-dom';
import '../assets/style.css';
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
                  <Row className='snap_photo'>
                    <Col xs={12} md={6}>
                      <h2>Snap photos and share like never before</h2>
                    </Col>
                    <Col xs={12} md={6}>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <Row className='super_col_1'>
                    <Col xs={12} md={6}>
                      <h5>Sed ut perspiciatis</h5>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                      </p>
                    </Col>
                    <Col xs={12} md={6}>
                      <h5>Lorem ipsum dolor</h5>
                      <p>
                        Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} md={12}>
                  <Row className='super_col_1'>
                    <Col xs={12} md={6}>
                      <h5>Nemo enim ipsam</h5>
                      <p>
                        Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
                        quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
                      </p>
                    </Col>
                    <Col xs={12} md={6}>
                      <h5>Tempor incididunt</h5>
                      <p>
                        Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia 
                        dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.
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
                  <Row className='snap_photo'>
                    <Col xs={12} md={6}>
                      <h2>Snap photos and share like never before</h2>
                    </Col>
                    <Col xs={12} md={6}>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <Row className='super_col_1'>
                    <Col xs={12} md={6}>
                      <h5>Sed ut perspiciatis</h5>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                      </p>
                      <p className="learn_more_b"><Button variant="primary">Learn more</Button></p>
                    </Col>
                    <Col xs={12} md={6}>
                      <h5>Lorem ipsum dolor</h5>
                      <p>
                        Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                      </p>
                      <p className="learn_more_b"><Button variant="primary">Learn more</Button></p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} md={12}>
                  <Row className='super_col_1'>
                    <Col xs={12} md={6}>
                      <h5>Nemo enim ipsam</h5>
                      <p>
                        Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
                        quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
                      </p>
                      <p className="learn_more_b"><Button variant="primary">Learn more</Button></p>
                    </Col>
                    <Col xs={12} md={6}>
                      <h5>Tempor incididunt</h5>
                      <p>
                        Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia 
                        dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.
                      </p>
                      <p className="learn_more_b"><Button variant="primary">Learn more</Button></p>
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
                      <h2>Snap photos and share like never before</h2>
                    </Col>
                    <Col xs={12} md={6}>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <Row className='super_col_1'>
                    <Col xs={12} md={6}>
                      <h5>Sed ut perspiciatis</h5>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                      </p>
                      <p className="learn_more"><Button variant="primary">Learn more</Button></p>
                    </Col>
                    <Col xs={12} md={6}>
                      <h5>Lorem ipsum dolor</h5>
                      <p>
                        Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                      </p>
                      <p className="learn_more"><Button variant="primary">Learn more</Button></p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} md={12}>
                  <Row className='super_col_1'>
                    <Col xs={12} md={6}>
                      <h5>Nemo enim ipsam</h5>
                      <p>
                        Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
                        quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
                      </p>
                      <p className="learn_more"><Button variant="primary">Learn more</Button></p>
                    </Col>
                    <Col xs={12} md={6}>
                      <h5>Tempor incididunt</h5>
                      <p>
                        Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia 
                        dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.
                      </p>
                      <p className="learn_more"><Button variant="primary">Learn more</Button></p>
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
                      <h2>Snap photos and share like never before</h2>
                    </Col>
                    <Col xs={12} md={6}>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <Row className='super_col_1'>
                    <Col xs={12} md={6}>
                      <div>
                        <img src={require("./assets/images/Ellipse.png")} alt="logo" height="20%" width="auto"/>
                      </div>
                    </Col>
                    <Col xs={12} md={6}>
                      <div>
                        <img src={require("./assets/images/Ellipse.png")} alt="logo" height="20%" width="auto"/>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} md={12}>
                  <Row className='super_col_1'>
                    <Col xs={12} md={6}>
                      <h5>Sed ut perspiciatis</h5>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                      </p>
                      <p className="learn_more"><Button variant="primary">Learn more</Button></p>
                    </Col>
                    <Col xs={12} md={6}>
                      <h5>Lorem ipsum dolor</h5>
                      <p>
                        Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                      </p>
                      <p className="learn_more"><Button variant="primary">Learn more</Button></p>
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
                      <div>
                        <img src={require("./assets/images/Rectangle.png")} alt="logo" height="280" width="430" style={{marginBottom:"30px"}}/>
                      </div>
                    </Col>
                    <Col xs={12} md={6} style={{marginTop:"40px"}}>
                      <h5>Sed ut perspiciatis unde omnis</h5>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
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
                      <h5>Sed ut perspiciatis unde omnis</h5>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                      </p>
                    </Col>
                    <Col xs={12} md={6}>
                      <div>
                        <img src={require("./assets/images/Rectangle.png")} alt="logo" height="280" width="430" style={{marginBottom:"30px"}}/>
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
            <Col xs={12} md={6}>
              <div className="rectanglefullv">
                <img src={require("./assets/images/Rectangle.png")} alt="logo" height="100%" width="100%" />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className='super_col_1'>
                <div style={{marginTop:"50px"}}>
                  <h5>Sed ut perspiciatis unde omnis</h5>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                  </p>
                  <hr />
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </section>
        
        <section className="wrapper">
          <Row className="wrapper_bg">
            <Col xs={12} md={6}>
              <div className="rectanglefullv">
                <img src={require("./assets/images/Rectangle.png")} alt="logo" height="100%" width="100%" />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Row className='super_col_1'>
                <div style={{marginTop:"50px"}}>
                  <h5>Sed ut perspiciatis unde omnis</h5>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                  </p>
                </div>
              </Row>
              <Row>
                  <Col xs={12} md={2} className="ellip_sed">
                    <Row>
                      <img src={require("./assets/images/Ellipse.png")} alt="logo" height="20%" width="auto"/>
                    </Row>
                    <Row>
                      <img src={require("./assets/images/Ellipse.png")} alt="logo" height="20%" width="auto"/>
                    </Row>
                    <Row>
                      <img src={require("./assets/images/Ellipse.png")} alt="logo" height="20%" width="auto"/>
                    </Row>
                    
                  </Col>
                  <Col xs={12} md={10} className="ellip_sed">
                    <Row>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptate
                      </p>
                    </Row>
                    <Row>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptate
                      </p>
                    </Row>
                    <Row>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptate
                      </p>
                    </Row>
                    
                  </Col>
      {/*             
                  <Col xs={12} md={2} className="ellip_sed">
                    <img src={require("./assets/images/Ellipse.png")} alt="logo" height="20%" width="auto"/>
                  </Col>
                  <Col xs={12} md={10} className="ellip_sed">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptate
                    </p>
                  </Col> */}
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
                      <h2>Snap photos and share like never before</h2>
                    </Col>
                    <Col xs={12} md={6}>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <Row className='super_col_1'>
                    <Col xs={12} md={4}>
                      <div>
                        <img src={require("./assets/images/Ellipse.png")} alt="logo" height="100" width="auto"/>
                      </div>
                    </Col>
                    <Col xs={12} md={4}>
                      <div>
                        <img src={require("./assets/images/Ellipse.png")} alt="logo" height="100" width="auto"/>
                      </div>
                    </Col>
                    <Col xs={12} md={4}>
                      <div>
                        <img src={require("./assets/images/Ellipse.png")} alt="logo" height="100" width="auto"/>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} md={12}>
                  <Row className='super_col_1'>
                    <Col xs={12} md={4}>
                      <h5>Sed ut perspiciatis</h5>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                        sed quia consequuntur magni dolores eos qui ratione voluptatem.
                      </p>
                      <p className="learn_more"><a variant="primary">Learn more</a></p>
                    </Col>
                    <Col xs={12} md={4}>
                      <h5>Lorem ipsum dolor</h5>
                      <p>
                        Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis.
                      </p>
                      <p className="learn_more"><a variant="primary">Learn more</a></p>
                    </Col>
                    <Col xs={12} md={4}>
                      <h5>Nemo enim ipsam</h5>
                      <p>
                        Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
                        qui dolorem ipsum quia dolor.
                      </p>
                      <p className="learn_more"><a variant="primary">Learn more</a></p>
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
                      <h2>Snap photos and share like never before</h2>
                    </Col>
                    <Col xs={12} md={12}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <Row className='super_col_1'>
                    <Col xs={12} md={6} style={{marginTop:"60px"}}>
                      <h5>Sed ut perspiciatis</h5>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                        sed quia consequuntur.
                      </p>
                      <h5>Lorem ipsum dolor</h5>
                      <p>
                        Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua.
                      </p>
                      <h5>Nemo enim ipsam</h5>
                      <p>
                        Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                        Neque porro quisquam est, qui dolorem.
                      </p>
                    </Col>
                    <Col xs={12} md={6}>
                      <div>
                        <img src={require("./assets/images/Rectangle.png")} alt="logo" height="600" width="530" style={{marginBottom:"30px"}}/>
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
                      <h2>Snap photos and share like never before</h2>
                    </Col>
                    <Col xs={12} md={6}>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <Row className='snap_photo'>
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
                  <Row className='super_col_1'>
                    <Col xs={12} md={6}>
                      <div>
                        <img src={require("./assets/images/Rectangle.png")} alt="logo" height="300" width="430"/>
                      </div>
                    </Col>
                    <Col xs={12} md={6}>
                      <div>
                        <img src={require("./assets/images/Rectangle.png")} alt="logo" height="300" width="430"/>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} md={12}>
                  <Row className='super_col_bor'>
                    <Col xs={12} md={6}>
                      <div className="border_solid">
                        <h5>Sed ut perspiciatis</h5>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                          sed quia consequuntur.
                        </p>
                      </div>
                    </Col>
                      <Col xs={12} md={6}>
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
        </section>
        
        <section className="wrapper">
          <Row className="wrapper_bg">
            <Col md={1}></Col>
            <Col xs={12} md={11}>
              
              <Row>
                <Col xs={12} md={12}>
                  <Row className='snap_photo'>
                    <Col xs={12} md={6}>
                      <h2>Snap photos and share like never before</h2>
                    </Col>
                    <Col xs={12} md={6}>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <Row className='snap_photo'>
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
                  <Row className='super_col_1'>
                    <Col xs={12} md={4}>
                      <div>
                        <img src={require("./assets/images/Rectangle.png")} alt="logo" height="200" width="278"/>
                      </div>
                    </Col>
                    <Col xs={12} md={4}>
                      <div>
                        <img src={require("./assets/images/Rectangle.png")} alt="logo" height="200" width="278"/>
                      </div>
                    </Col>
                    <Col xs={12} md={4}>
                      <div>
                        <img src={require("./assets/images/Rectangle.png")} alt="logo" height="200" width="278"/>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} md={12}>
                  <Row className='super_col_bor'>
                    <Col xs={12} md={4}>
                      <div className="border_solid">
                        <h5>Sed ut perspiciatis</h5>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
                          aut fugit, sed quia.
                        </p>
                      </div>
                    </Col>
                    <Col xs={12} md={4}>
                      <div className="border_solid">
                        <h5>Lorem ipsum dolor</h5>
                        <p>
                          Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                          ut labore et dolore.
                        </p>
                      </div>
                    </Col>
                    <Col xs={12} md={4}>
                      <div className="border_solid">
                        <h5>Nemo enim ipsam</h5>
                        <p>
                          Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>
                      </div>
                    </Col>
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

export default  App;
