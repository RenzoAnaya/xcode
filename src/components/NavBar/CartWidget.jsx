import React from 'react'
import { Navbar } from 'react-bootstrap'
import carrito from '../../img/carrito.png'

function CartWidget() {
    return(
        <Navbar.Brand href="#home">
        <img
            src={ carrito }
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Carrito de compras"
        />
        </Navbar.Brand>
    )
}

export default CartWidget