import React, { useState } from 'react'
import onAdd from 'react'

const ItemCount = ({ max, inicial }) => {



    const [value, setValue] = useState (inicial)

    const handleSuma = (valor) => {
        value + valor < max ? setValue (prev => prev + valor) : alert ('No contamos con una cantidad mayor de stock')
        
    }

    const handleResta = (valor) => {
        value > inicial ? setValue(prev => prev - valor) : alert ('Debes comprar al menos un objeto')
        
    }

    return (
        <div className="container">
            <h1>{value}</h1>
            <button onClick={() => handleResta(1)}>-</button>
            <button onClick={() => handleSuma(1)}>+</button>
            <button disabled={value === 0} onClick={() => onAdd (value)}>Agregar al carrito</button>
        </div>
    )

}

export default ItemCount