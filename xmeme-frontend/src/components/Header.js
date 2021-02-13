import React from "react";
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
  
function Header() {
    return(
        <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/Home">Mememania</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link style = {{marginLeft: 40, marginRight: 40}} href="/Home">Home</Nav.Link>
            <Nav.Link href="/DisplayMemes">View Memes</Nav.Link>
          </Nav>
        </Navbar>       
      </>
    )
}

export default Header;