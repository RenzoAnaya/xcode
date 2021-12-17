import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Item({ prod }) {
    return (
        <div
                                            key={prod.id}
                                            className= 'col-md-4'
                                        >
                                            
                                            <Card className="productos" style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={prod.foto} />
                                            <Card.Body>
                                            <Card.Title>{`${prod.categoria} - ${prod.nombre}`}</Card.Title>
                                            <Card.Text>
                                            {prod.price}
                                            </Card.Text>
                                            <Link to={`/detalle/${prod.id}`}>
                                                <Button className="botonClickeable" variant="primary">Detalle de producto</Button>
                                            </Link>
                                            </Card.Body>
                                            </Card>
        </div>

    )
}



export default Item

