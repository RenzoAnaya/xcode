import { useState } from "react"

function ComponenteUseEffect() {
    const [contador, setContador] = useState(0)
    const [fecha, setFecha] = useState(Date) 
    
    
    const titulo = "este estado morira"
    
    const handlerClick=()=>{
        setContador (contador +1)
        setFecha (Date)
    }
    
    console.log(contador)
    console.log(fecha)
    
    return(
        <div>
            <p>{contador}</p>
            <p>{fecha}</p>
    
            <button onClick={handlerClick}>Click +</button>
        </div>
    )
}

export default ComponenteUseEffect