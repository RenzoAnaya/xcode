import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import CartWidget from './CartWidget'

const NavBar = () => {
    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to="/">Alchemia Caffe</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav justify-center">
                    <Nav className="me-auto">
                    <NavLink to="/nosotros" >Nosotros</NavLink>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavLink ClassName="dropdownItem" to="/categoria/cafes">Café de especialidad</NavLink>
                    <NavLink ClassName="dropdownItem" to="/categoria/cafeteras">Métodos de café</NavLink>
                    </NavDropdown>
                    </Nav>
                    <Link to="/cart">
                    <CartWidget/>
                    </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
