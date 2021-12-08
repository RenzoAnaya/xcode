import React from 'react'
import { useCounter } from '../hooks/useCounter'



const ItemCountPrueba = ({ inicial }) => {

    const { counter, increment, decrement, reset } = useCounter(inicial)


    return(

        <div className="container">

            <h1>{counter}</h1>

            <button Onclick={() => decrement(2)}>-</button>
            <button Onclick={() => increment(2)}>+</button>          
            <button Onclick={reset}>Reset</button>

        </div>
    )

}

export default ItemCountPrueba