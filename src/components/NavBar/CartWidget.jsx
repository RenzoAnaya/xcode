import React from 'react'
import { Badge, Navbar } from 'react-bootstrap'
import carrito from '../../img/carrito.png'
import { useEffect } from 'react';
import useCartContext from '../CartContext';


function CartWidget() {

    const { cart, qnt, setQnt } = useCartContext();
  
    useEffect(() => {
      if (cart.length === 0) {
        setQnt(0);
      }
    }, [cart, setQnt]);

    return(
        <Navbar.Brand href="#home">
        <img
            src={ carrito }
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Carrito de compras"
        />
        <Badge>{qnt}</Badge>

        </Navbar.Brand>
    )
}

export default CartWidget