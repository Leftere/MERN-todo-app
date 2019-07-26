import React, { Component } from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,

    Nav,
    NavItem,
 
    Button,
 } from 'reactstrap';
  
export default class Navigation extends Component {
    render() {
        return (
            <div>
                 <Navbar color="light" alt="logo" light expand="md">
    
    <div className="container" >
    <Link to="/">
    <img  src={logo} alt="logo"  width="100"/>
    </Link>
      
          <NavbarToggler  />
          <Collapse  navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                
                  <Link to="/"> <Button color="light">Todos</Button></Link>
                
              </NavItem>
              <NavItem>
                <Link to="/create"> <Button color="light">Create Todo</Button></Link>
              </NavItem>
            
            </Nav>
          </Collapse>
          </div>
        </Navbar>
            </div>
        )
    }
}
