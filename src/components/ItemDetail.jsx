import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const ItemDetail = ({ item }) => {
 


    return (
      <Card className="productos" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.foto} />
  <Card.Body>
  <Card.Title>{`${item.nombre}`}</Card.Title>
  <Card.Text>
  {item.price}
  </Card.Text>
  <Link to="/carrito">
      <Button className="botonClickeable" variant="primary">Agregar al carrito</Button>
  </Link>
  </Card.Body>
  </Card>
    );
  };
  export default ItemDetail;
  
  

  