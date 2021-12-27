import React from 'react'
import { memo } from 'react'
import Item from './Item'
import { Row } from 'react-bootstrap'



const ItemList = memo(

({ productos }) => {
    return (
        <>
        <Row xs={1} md={2} className="g-4">
            {productos.map((prod) => <Item className="displayProductos" prod = { prod }  /> ) }
        </Row>
        </>

    )
}
, (oldProps, newProps)=> oldProps.productos.length === newProps.productos.length)

export default ItemList