import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


function NavBar(){
return(
  <div className="App">
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Clothes Store</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      <NavDropdown title="Menu" id="collasible-nav-dropdown">
      <ul>
                <li>
        <NavDropdown.Item href="Home" Link to="/">Home</NavDropdown.Item> 
        </li>
              </ul>

              <ul>
                <li>
        <NavDropdown.Item href="Men" Link to="/Men">Men</NavDropdown.Item>
 </li>
              </ul>

        <ul>
                <li>
        <NavDropdown.Item href="Women" Link to="/Women">Women</NavDropdown.Item>
 </li>
              </ul>

        
        <NavDropdown.Divider />
        <ul>
                <li>
        <NavDropdown.Item href="Contact" Link to="/Contact">Contact</NavDropdown.Item>
        </li>
              </ul>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
</div>
);
};
export default NavBar;
