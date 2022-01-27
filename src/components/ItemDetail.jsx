import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../contexts/cartContext";
import ItemCount from "./ItemCount";
import Item from "./Item";




function ItemDetail ({ product }) {

  const { setCart, setQnt } = useContext(CartContext)

  const [article, setArticle] = useState();

  useEffect(() => {
    setArticle(product);
  }, [product]);


    const [quantity, setQuantity] = useState(1);

    const handleClick = () => {
      setQnt((value) => value + quantity);
      article.quantity = quantity;
  
      const prod = {
        id: article.id,
        name: article.name,
        description: article.description,
        stock: article.stock,
        price: article.price,
        quantity: article.quantity,
        image: article.image,
        brand: article.brand
      };
  
      setCart((value) => [...value, prod]);
    };


    return (
      <div
                                            className= 'col-md-4 '
            >
            
            <Item product = {product} />
            <ItemCount
            initial={1}
            min={0}
            max={product.stock}
            setQuantity={setQuantity}
            />
              <Button
                variant="contained"
                color="primary"
                onClick={handleClick}
                className="item-detail__btn"
              >
                Agregar al carrito {quantity}
              </Button>
            
      </div>
    );
};

  export default ItemDetail;

