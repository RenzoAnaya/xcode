import React from 'react'
import { useState } from 'react';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ItemCount from "./ItemCount";

function ItemDetail ({ itemd }) {

  const onAdd = (cantidad) =>{
    console.log(cantidad);
    setGoCart(true);
  };
 
    return (
      <div
                                            key={itemd.id}
                                            className= 'col-md-4'
          >

            <Card className="productos">
            <Card.Img variant="top" src={itemd.foto} />
              <Card.Body>
                <Card.Title>{`${itemd.nombre}`}</Card.Title>
                <Card.Text>
                {itemd.price}
                </Card.Text>
                {!goCart ? (
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