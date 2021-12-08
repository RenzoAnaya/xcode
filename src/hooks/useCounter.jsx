import { useState } from 'react'

export const useCounter = ({max, initialState}) => {


    const [counter, setCounter] = useState(initialState)

    const reset = () => {
        setCounter(initialState)
    }

    const increment = (param) => {
        counter < max ? 
        setCounter(prev => prev + param) : alert ('No contamos con una cantidad mayor de stock')
    }

    const decrement = (param) => {
        counter > initialState ?  
        setCounter(prev => prev - param) : alert ('Debes comprar al menos un objeto')
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}
