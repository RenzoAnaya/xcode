//import { useContext } from 'react'
//import { CartContext } from '../CartContext';

import { useCartContext } from "../CartContext";
import { Link } from "react-router-dom";



function Cart () {

    const { cartList, borrarCarrito } = useCartContext ()

    return(
        <div className="container">
            {cartList.length === 0 ? (
        <div className="card-body">
        <h5 className="card-title">¡Tu carrito está vacío!</h5>
        <p className="card-text">
          ¿No sabés qué comprar? ¡Miles de productos te esperan!
        </p>
        <Link to="/" className="btn btn-primary">
          Ir a comprar
        </Link>
      </div>
      ) : (
        <div>
          { cartList.map(prod => <li> {prod.foto} {prod.nombre} {prod.cantidad} </li>) }
            <button onClick ={borrarCarrito} >Vaciar Carrito</button>
        </div>
      )}
            
        </div>
    )
};

export default Cart;

