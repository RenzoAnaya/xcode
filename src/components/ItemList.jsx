import React, { useState, useEffect } from "react";
import ItemDetailContainer from './ItemDetailContainer'
import Loading from './Loading'
import { getFirestore } from "../config/getFirestoreApp";
import { Container } from "react-bootstrap";



const ItemList = ({ onAdd }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      const db = getFirestore();
      const itemCollection = db.collection("items");
  
      itemCollection
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            console.log("No hay resultados");
          }
          setProducts(
            querySnapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        })
        .catch((error) => {
          console.log("Lo sentimos no pudimos encontrar lo que buscabas", error);
        })
        .finally(() => {
          setLoading(false);
        });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <div className="list-container" id="list-container">
        {loading ? (
          <Loading className="loadingProd" text="Cargando productos..." />
        ) : (
          <div className="list-container__details ">
            <div className="list-container__details-title barra">
              <h3>Productos</h3>
            </div>
            <Container>
            <div className="list-container__list g-4 row row-cols-md-2 row-cols-1">
              {products.map((product) => {
                return (
                  <ItemDetailContainer
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                  />
                );
              })}
            </div>
            </Container>
          </div>
        )}
      </div>
    );
  };
  
  export default ItemList;