import React from "react";
import { useCart } from "../components/context/CartContext";

const Product = ({ id, name, price }) => {
  const { addToCart } = useCart();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "200px",
      }}
    >
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => addToCart({ id, name, price })}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
