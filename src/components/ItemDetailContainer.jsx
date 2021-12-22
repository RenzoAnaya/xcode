import {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom'
import { getFetch } from "../helpers/getFetch";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    
    const {idUno} = useParams()

    useEffect(() => {
    getFetch
    .then((res) => setItem(res.find((i) => i.id === idUno)))
    .catch((err) => console.log(err))
    },[idUno]);


    

    return(  
    <div>
        <h1>Aca va el Item Detail Container</h1>
        <ItemDetail item={item} />
    </div>
    );
};

export default ItemDetailContainer

