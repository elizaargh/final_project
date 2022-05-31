import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext"
import UserIsIn from "./UserIsIn";

export default function CommunityNavbar() {
   const {currentUser, logout} = useAuth()

   async function handleLogout(){
      await logout()
}
  
    return(
        <>
       
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
          <Navbar.Brand href="/home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown title="Classes" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/yoga">Yoga</NavDropdown.Item>
                <NavDropdown.Item href="/painting">Painting</NavDropdown.Item>
                <NavDropdown.Item href="funky-dancing">Funky Dancing</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/update-profile">Book Now!</NavDropdown.Item>
                <NavDropdown.Item href="/myTimetable">My Timetable</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Events" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Monthly</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Community Talks</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Fundraising</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Join us!</NavDropdown.Item>
              </NavDropdown>
      </Nav>
    <Nav>

      
    {currentUser && <Nav.Link href="/">My Profile</Nav.Link>}
    {currentUser && <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>}
    {!currentUser && <Nav.Link eventKey={2} href="/login">
        Log In
      </Nav.Link> }
      
      {!currentUser &&<Nav.Link eventKey={2} href="/signup">
        Sign Up
      </Nav.Link>}
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
         
        </>
    )
}