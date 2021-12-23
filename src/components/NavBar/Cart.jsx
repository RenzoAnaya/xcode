//import { useContext } from 'react'
//import { CartContext } from '../CartContext';

import { useCartContext } from "../CartContext";



function Cart () {

    const { cartList, borrarCarrito } = useCartContext ()

    return(
        <div className="container">
            { cartList.map(prod => <li>{prod.nombre} {prod.cantidad} </li>) }
            <button onClick ={borrarCarrito} >Vaciar Carrito</button>
        </div>
    )
};

export default Cart;