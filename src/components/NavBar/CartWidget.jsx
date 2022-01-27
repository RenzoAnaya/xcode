import React from 'react'
import  { Navbar } from 'react-bootstrap'
import carrito from '../../img/carrito.png'
import { useEffect, useContext } from 'react';
import Badge from "@material-ui/core/Badge"
import CartContext from '../../contexts/cartContext';


const CartWidget = () => {
  const { cart, qnt, setQnt } = useContext(CartContext);

  useEffect(() => {
    if (cart.length === 0) {
      setQnt(0);
    }
  }, [cart, setQnt]);

    return(
        <Navbar.Brand>
        <Badge badgeContent={qnt} color="secondary">
        <img
            src={ carrito }
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Carrito de compras"
        />
        </Badge>

        </Navbar.Brand>
    )
}

export default CartWidget