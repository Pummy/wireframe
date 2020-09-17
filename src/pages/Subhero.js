import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Navbar from 'react-bootstrap/Navbar'
import  { Nav,Button,Navbar,Form,Col,Container,Row,Image } from 'react-bootstrap';
import AppRoutes from './AppRoutes';
import { withRouter } from 'react-router-dom';
import '../assets/style.css';
function Subhero() {
  return (

<Container className="full_page_bck">

<Row>
<Col md={1}></Col>
  <Col xs={12} md={5} className='super_col_1'><h5>Learn about all the features of the Photo app</h5></Col>
  <Col xs={12} md={6}><Image src={require("./assets/images/Sub-page Hero A.png")}  rounded  className="super_img1"/></Col>
</Row>
<Row>
  <Col md={1}></Col>
  <Col md={6} className='super_col_1 left_margin'><h5>Learn about all the features of the Photo app</h5></Col>
  <Col md={5}></Col>
</Row>
<Row>
<Col md={1}></Col>
  <Col md={10} className='super_col_1'><Image src={require("./assets/images/Sub-page Hero A.png")}  rounded  className="super_img2"/></Col>
  <Col md={1}></Col>
</Row>

<Row>
<Col xs={12} md={6} className='super_col_1'><Image src={require("./assets/images/Sub-page Hero A.png")}  rounded  className="super_img1"/></Col>
  <Col xs={12} md={5} className='super_col_2'><h5>Learn about all the features of the Photo app</h5></Col> 
  <Col md={1}></Col>
</Row>

<Row>
<Col md={1}></Col>
  <Col xs={12} md={5} className='super_col_1'><h5>Learn about all the features of the Photo app</h5></Col>
  <Col xs={12} md={6}><Image src={require("./assets/images/Sub-page Hero A.png")}  rounded  className="super_img1"/></Col>
</Row>

<Row>
<Col md={1}></Col>
  <Col md={10} className='super_col_1'><Image src={require("./assets/images/Sub-page Hero A.png")}  rounded  className="super_img2"/></Col>
  <Col md={1}></Col>
</Row>
</Container>

    );
  }
  
  export default  Subhero;
