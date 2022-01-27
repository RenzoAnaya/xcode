import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    const { name, description, price, image } = product;
    return (
        <div
                                            className= 'col-md-4'
                                        >
                                            <Link to={`/item/${product.id}`}>
                                            <Card className="productos" style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={image} />
                                            <Card.Body>
                                            <Card.Title>{`${description} - ${name}`}</Card.Title>
                                            <Card.Text>
                                            S/{price}
                                            </Card.Text>
                                            </Card.Body>
                                            </Card>
                                            </Link>
        </div>

    )
}



export default Item

