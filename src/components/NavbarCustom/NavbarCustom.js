import React from 'react';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavbarCustom = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar ">
                <Navbar.Brand  >
                    <Link to="/">

                        <h3 className="logo" style={{ fontFamily: "Shrikhand, cursive", color: "white", textDecoration: "none" }}>Nahid Hasan</h3>
                    </Link>

                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav className="m-auto">
                        <Nav.Link href=""><Link className="navLink" style={{ color: "white" }} to="/">Home</Link></Nav.Link>
                        <Nav.Link href=""><Link className="navLink" style={{ color: "white" }} to="/resume">Resume</Link></Nav.Link>
                        <Nav.Link href=""><Link className="navLink" style={{ color: "white" }} to="/protfollio">Protfolio</Link></Nav.Link>
                        <Nav.Link href=""><Link className="navLink" style={{ color: "white" }} to="/contact">Contact</Link></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarCustom;