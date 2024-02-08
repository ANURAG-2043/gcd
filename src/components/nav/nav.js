
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import logo from '../../images/logo.png';
import Button from "react-bootstrap/Button";
import Login from "../login";


function Navb() {
    const [showLogin, setShowLogin] = useState(false);

    const toggleLogin = () =>{
        setShowLogin(!showLogin);
    };

  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-custom">
        <div className='logo1'>
        <div style={{  display: 'flex', justifyContent: 'center' }}>
            <a href='#'>
            <img src={logo} alt="Logo" style={{ width: '140px', height: '100px' }} />
            </a>
        </div>
        <div>
            <a href='#' style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>
            GeoCityDatabase
            </a>
        </div>
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggler-icon-custom" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto" style={{ alignSelf: 'center', marginLeft: 'auto', marginRight: 'auto', gap: '25px' }}>
        <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
        <NavDropdown title="Products" id="collapsible-nav-dropdown" className="dropdown-custom">
            <NavDropdown.Item href="#free" className="dropdown-item-custom">Free Version</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#paid" className="dropdown-item-custom">Paid Version</NavDropdown.Item>
        </NavDropdown>
        </Nav>
          <Nav>
          <Button onClick={toggleLogin}>Login</Button> 
            <Nav.Link eventKey={2} href="#memes" className="nav-link-custom">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     {/* Render the Login component if showLogin state is true */}
     {showLogin && <Login />}
    </>
  );
}

export default Navb;
