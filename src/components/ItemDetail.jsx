import React from 'react'
import { useState } from 'react';
import { Card } from 'react-bootstrap'
import { useCartContext } from './CartContext';
import ItemCount from "./ItemCount";




function ItemDetail ({ prod }) {
  const [count, setCount] = useState (0)

  const {cartList ,agregarAlCarrito}= useCartContext()

  const onAdd = (cantidad) => {
    console.log(cantidad)
    agregarAlCarrito( {...prod, cantidad:cantidad});
  };


  console.log(cartList)
  console.log(count)
  console.log(setCount)


    return (
      <div
                                            key={prod.id}
                                            className= 'col-md-4'
          >

            <Card className="productos">
            <Card.Img variant="top" src={prod.foto} />
              <Card.Body>
                <Card.Title>{`${prod.nombre}`}</Card.Title>
                <Card.Text>
                {prod.price}
                </Card.Text>
                {!agregarAlCarrito ? (
                <ItemCount max={8} inicial={1} onAdd={onAdd} />
                ) : (
                <button>Ir al carrito</button>
                )}
                
              </Card.Body>
            </Card>
      </div>
    )
}

  export default ItemDetail;

