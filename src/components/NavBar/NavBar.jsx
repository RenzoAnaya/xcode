import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import CartWidget from './CartWidget'

const NavBar = () => {
    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Alchemia Caffe</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Nosotros</Nav.Link>
                    <Nav.Link href="#link">Experiencia</Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Café de especialidad</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Métodos de café</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Guías de café</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <CartWidget/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
