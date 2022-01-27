import {useState, useEffect} from 'react'
import  useParams  from 'react-router-dom'
import  getFetch  from "../../helpers/getFetch"
import ItemList from '../ItemList'

function ItemListContainer({greeting}) {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const [bool, setbool] = useState(true)
    //const [items, setItems] = useState([])

    const { idCate } = useParams()

    useEffect(() => {

        if (idCate) {

        getFetch
        .then(resp => setProductos(resp.filter(prod => prod.categoria === `${idCate}`)))
        .catch(err => console.log(err))
        .finally(() => setLoading (false))
        
            
        } else {

        }
        
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading (false))
    }, [idCate]);


    const handleClick=(e)=>{
        e.preventDefault()
        setbool(!bool)
    }

    const handleAgregar=()=>{
        setProductos([
            ...productos,
            {id: 8, foto: "https://plazavea.vteximg.com.br/arquivos/ids/1475241-450-450/1607629676984.jpg", price: 35,nombre:"Ulises", categoria:"cafes"}
        ])
    }
    

    console.log ('itemListContainer')

    return(
        <div className="container">
            { greeting }

            <button onClick={handleClick}>Cambiar estado </button>
            <button onClick={handleAgregar}>Agregar Item </button>
            { loading ?
                <h2>Cargando...</h2>
                :
                

                <ItemList productos={productos} />
                
            }
                

        </div>
        )
            
}
      

export default ItemListContainer