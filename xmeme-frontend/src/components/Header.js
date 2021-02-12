import React from "react";
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
  
function Header() {
    return(
        <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Mememania</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/Home">Home</Link>
            <Link to="/DisplayMemes">View Memes</Link>
          </Nav>
        </Navbar>       
      </>
    )
}

export default Header;