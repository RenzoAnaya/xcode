import {useState, useEffect} from "react";
import getOneProduct from "../helpers/getOneProduct";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom'
import { getFetch } from "../helpers/getFetch";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    console.log("item", item);
    
    const {id} = useParams()

    useEffect(() => {
        getFetch
        .then((res) => setItem(res.filter(prod => prod.id === id)))
        .catch((err) => console.log(err))
    },[id]);


    

    return(  
    <div>
        <h1>Aca va el Item Detail Container</h1>
        <ItemDetail item={item} />
    </div>
    );
};

export default ItemDetailContainer

