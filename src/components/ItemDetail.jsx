import React from 'react'

const ItemDetail = ({ item }) => {
    console.log("item", item);
    return (
      <div className="flex bg-danger">
        <h3>ItemDetail</h3>
        <h3>{item.nombre}</h3>
        <p>{item.categoria}</p>
        <img src={item.foto} alt={`${item.foto}`}></img>
      </div>
    );
  };
  export default ItemDetail;
  
 