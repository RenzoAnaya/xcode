import React from 'react'
import Item from './Item'
import { Row } from 'react-bootstrap'

function ItemList({ productos }) {
    return (
        <>
        <Row xs={1} md={2} className="g-4">
            {productos.map((prod) => <Item className="displayProductos" prod = { prod }  /> ) }
    </Row>
        </>

    )
}

export default ItemList