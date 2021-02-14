import React from "react";
import {Nav, Navbar} from 'react-bootstrap';
  
function Header() {
    return(
        <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Mememania</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link style = {{marginLeft: 40, marginRight: 40}} href="/">Home</Nav.Link>
            <Nav.Link href="/DisplayMemes">View Memes</Nav.Link>
          </Nav>
        </Navbar>       
      </>
    )
}

export default Header;