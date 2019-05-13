import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

class MyNavbar extends React.Component {

    render() {
        return (
            <Navbar bg="light" fixed="top">
                <Container>
                    <Navbar.Brand href="/">Brand</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">HOME</Nav.Link>
                            <Nav.Link href="#pricing">PRICING</Nav.Link>
                            <NavDropdown title="PRODUCT" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#product/1">PRODUCT 1</NavDropdown.Item>
                                <NavDropdown.Item href="#product/2">PRODUCT 2</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#product/3">PRODUCT 3</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#signup">SIGN UP</Nav.Link>
                            <Nav.Link href="#login">LOG IN</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }

}

export default MyNavbar;
