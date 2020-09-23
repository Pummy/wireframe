import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import Navbar from 'react-bootstrap/Navbar'
import  { Nav,Button,Navbar,Form,Col,Container,Row,Image } from 'react-bootstrap';
import AppRoutes from './AppRoutes';
import { withRouter } from 'react-router-dom';
import Hero from './pages/Hero';
import Subhero from './pages/Subhero';
import Signup from './pages/Signup';
import BodyLayout from './pages/bodylayout';
import Testinomial from './pages/testinomial';
import './assets/style.css';
class App extends React.Component {
// function App() {
  render() {
    // if(this.props.history.location.pathname==='/signup'){
    //   return null;
    // } 
  return (
    <div className="App">
  
<Router>
     <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Photo</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href={'/signup'}>Features</Nav.Link>
      <Nav.Link href={'/hero'}>Pricing</Nav.Link>
      <Nav.Link href={'/bodylayout'}>Community</Nav.Link>
      <Nav.Link href={'/subhero'}>Support</Nav.Link>
    </Nav>
   
    <Nav>
    <Button variant="outline-primary">Login</Button>
    <Button variant="primary">Register</Button>
    </Nav>
    </Navbar.Collapse>
  </Navbar>

<Switch>
<Route exact path='/' component={Signup} />
      <Route  path='/signup' component={Signup} />
      <Route path='/hero' component={Hero} />
      <Route path='/subhero' component={Subhero} />
      <Route path='/bodylayout' component={BodyLayout}/>
      <Route path='/testinomial' component={Testinomial}/>
</Switch>
</Router>

    </div>

  );
  }
}

export default  App;