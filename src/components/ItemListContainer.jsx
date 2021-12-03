import React from 'react'

function ItemListContainer( props ) {
    console.log(props.greeting)
    return(
        <div className="container">
         <h1 className="titulo"> { props.greeting} </h1>
        </div>
    )
}

export default ItemListContainer