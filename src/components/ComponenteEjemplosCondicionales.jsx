import { useState, useEffect } from "react";

export const ControlledInput = () => {
    const [input, setInput] = useState ( {texto: ''} );

    useEffect(() => {
        console.log('subscription')

        return() => {
            console.log ('dessubscription')        
        }
    }, [input])


    const handleOnChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }


    console.log('input');
    console.log(input);
    return(
        <input
        type="text"
        name='texto'
        value={input.texto}
        onChange={handleOnChange}
        />
    );

};




export function LoadingComponent() {
    const[ loading, setLoading ] = useState(true);

    useEffect(() => {

        setTimeout(() =>{
            setLoading(false);
        }, 5000);

        return()=>{
            console.log('Limpiando componente');
        }
    },[]);
    
    return <>
            {loading ? <h2>Loading...</h2> : <h3> Productos cargados!</h3>}
            </>;
}






export function TextComponent ({ condition = true}) {

    if(!condition) {
        return <h2>Usted no esta loggeado</h2>;
    }

    return (
        <>
        <h2>Ya puede ver la pagina</h2>
        </>
    )
}



export function TextComponent2 ({ condition = false }) {

    return(
        <>
        {condition && <h2>Usted puede ver la pagina</h2>}

        {!condition && <h2>No esta loggeado, no puede ver esta seccion</h2>}
        </>
    );
}


export function TextComponent3 ({ condition = false }) {

    return(
        <>
        <h2> {condition ? 'Ud esta loggeado puede ver la pagina' : 'Usted esta loggeado puede ver la pagina'}</h2>
        </>
    )
}



// ver clase 9


// tecnica para cambiar estilos

export function TextComponent4({ condition = false }) {

    return(
        <>
        <h2 style = { { color: condition ? "green" : "red" } }> 
        Usted esta loggeado, puede ver la pagina
        </h2>
        </>
    );
}




export function TextComponent5 ({ condition = false }) {
    return(
        <>
        <h2 className={ (condition === true) ? "btn btn-success" : "btn btn-danger" }>
            Stock
        </h2>
        </>
    );
}


export function TextComponent6 ({ condition = true, otro = "mt-5" } ) {
    
    return(
        <>
        <h2
        className={ `${condition === true ? "btn btn-success" : "btn btn-danger"} ${otro || ""} `}
        >
            Usted esta loggeado, puede ver la pagina    
        </h2>
        </>
    );
}


export function TextComponent7 ({ condition = true, otro = "mt-5" }) {

    const config = condition

    ?

        {
            className: `btn btn-success ${otro || ""}`,
            style: {color: 'red'},
            title: "Este es el titulo si la condicion es verdadera",
            nombre: 'Fede'
        }

    :

        {
            className: `btn btn-warning' ${otro || ""}`,
            style: {color: 'green'},
        }

    return(
        <>
        <h2 {...config}>Usted esta loggeado puede ver la pagina</h2>
        </>
    )
}






